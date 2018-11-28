const electron = require('electron');
//electron的类
const url = require('url');
//url相关功能的类
const path = require('path');
//路径相关的类
//needed libraries
//上面是引入的类
const { app, BrowserWindow, ipcMain } = electron;//app means the main process
//BrowserWindow means windowsshoppingWindow
//三个静态变量，app代表主进程，BrowserWindow代表窗口类，ipcMain是进程通信代表主进程的

process.env.NODE_ENV = 'develop'//mark the running edition
//运行状态标志

let mainWindow, testwin = null;
let getTaskWin=null,addTaskWin=null,addItemWin=null,addGroupWin=null;
let subAddTask=null;
let hasSubWindows=false;
let issubtask=false;
//主窗口、测试窗口的变量

//the window objects

/*------------Some Functions--------------*/
function FormatPathToURL(_path)//this format the path of mainWindow.html into URL address,and 
{
    return url.format({
        pathname: path.join(__dirname, _path),
        protocol: 'file:',
        slashes: true
    })
}//把相对路径转化成url的方法，更不容易出错

function CreatSizedWindow(w, h, hasFrame, _resizable, isShow, _parent) {
    return new BrowserWindow({ width: w, height: h, frame: hasFrame, resizable: _resizable, show: isShow, parent: _parent })
}//创建指定大小和样式的窗口，参数分别为宽度，高，是否边框，是否可调整大小，是否显示，父级

//main logic area
app.on('ready', function () {
    hasSubWindows=false;
    mainWindow = CreatSizedWindow(800, 720, true, true, true, null)
    mainWindow.loadURL(FormatPathToURL("./mainWindow.html"));//this load the mainWindow page
    //if mainWindow is closed,end the application.
    mainWindow.on('closed', function () {
        app.quit();
    })
//主进程加载完毕，加载主窗口
});


/*-----------------Message Reciever----System Level------------------------*/
ipcMain.on('forcequit', function () {
    console.log('quit');
    mainWindow.close();
});
//主进程接收到'forcequit'消息，结束进程

ipcMain.on("testwin", function () {
    if (testwin == null) {
        testwin = CreatSizedWindow(960, 540, true, true, true, null);
        testwin.loadURL(FormatPathToURL("./windows/testWindows.html"));
        testwin.on('closed', function () {
            testwin = null;
        })
    }
});//接到'testwin'消息，开启测试窗口

ipcMain.on("gettask",function(){
    console.log("gettask");
    
    if (getTaskWin == null&&hasSubWindows==false) {
        getTaskWin = CreatSizedWindow(400, 720, true, true, true, mainWindow);
        getTaskWin.loadURL(FormatPathToURL("./windows/subwindows/getaquest.html"));
        hasSubWindows=true;
        getTaskWin.on('closed', function () {
            getTaskWin = null;
            hasSubWindows=false;
        })
    }
});
//---------------------------------------------------
ipcMain.on("additem",function(){
    console.log("addItem");
    
    if (addItemWin == null&&hasSubWindows==false) {
        addItemWin = CreatSizedWindow(400, 720, true, true, true, mainWindow);
        addItemWin.loadURL(FormatPathToURL("./windows/subwindows/additem.html"));
        hasSubWindows=true;
        addItemWin.on('closed', function () {
            addItemWin = null;
            hasSubWindows=false;
        })
    }
});

ipcMain.on("quit_item",function(){
    addItemWin.close();
});

ipcMain.on("add_item",function(){
    mainWindow.webContents.send('add_item');
});

//above is ---------------------------add_item functions 

ipcMain.on("addtask",function(){
    if(addTaskWin==null&&hasSubWindows==false){
        addTaskWin = CreatSizedWindow(400, 720, true, true, true, mainWindow);
        addTaskWin.loadURL(FormatPathToURL("./windows/subwindows/addquest.html"));
        hasSubWindows=true;
        addTaskWin.on('closed', function () {
            addTaskWin = null;
            hasSubWindows=false;
        })
    }
});

ipcMain.on("quit_quest",function(){
    
    if(issubtask==true){
        subAddTask.close();
        issubtask=false;
    }else{
        addTaskWin.close();
    }
    
});

ipcMain.on("add_quest",function(){
    if(issubtask==true){
        addGroupWin.webContents.send("add_sub");
        subAddTask.close();
        issubtask=false;
    }else{
        mainWindow.webContents.send("add_quest");
        addTaskWin.close();
    }
    
});

/*------------------------------------------------------------*/

ipcMain.on("addgroup",function(){
    if(addGroupWin==null&&hasSubWindows==false){
        addGroupWin = CreatSizedWindow(400, 720, true, true, true, mainWindow);
        addGroupWin.loadURL(FormatPathToURL("./windows/subwindows/addgroup.html"));
        hasSubWindows=true;
        addGroupWin.on('closed', function () {
            addGroupWin = null;
            hasSubWindows=false;
        })
    }
});

ipcMain.on("addsubtask",function(){
    issubtask=true;
    subAddTask=CreatSizedWindow(400, 720, true, true, true, addGroupWin);
    subAddTask.loadURL(FormatPathToURL("./windows/subwindows/addquest.html"));
    subAddTask.on('closed', function () {
        subAddTask = null;
    })
});

ipcMain.on("quit_group",function(){
    addGroupWin.close();
});

ipcMain.on("add_group",function(){
    mainWindow.webContents.send("add_group");
    addGroupWin.close();
});