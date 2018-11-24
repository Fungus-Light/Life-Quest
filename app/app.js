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


