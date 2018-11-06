const electron =require('electron');
const url =require('url');
const path=require('path');

//needed libraries
const{app,BrowserWindow,ipcMain}=electron;//app means the main process
//Menu means the tool bar,BrowserWindow means 

process.env.NODE_ENV='develop'//mark the running edition

let mainWindow,connectWindow=null,questlibWindow;//the main window object

/*------------Some Functions--------------*/
function FormatPathToURL(_path)//this format the path of mainWindow.html into URL address,and 
{
    return url.format({
        pathname: path.join(__dirname,_path),
        protocol: 'file:',
        slashes: true
    })
}

function CreatSizedWindow(w,h,hasFrame,_resizable,isShow,_parent){
    return new BrowserWindow({width:w,height:h,frame: hasFrame,resizable: _resizable,show: isShow,parent:_parent})
}

//main logic area
app.on('ready',function(){
    mainWindow=CreatSizedWindow(1280,720,false,true,true,null)
    mainWindow.loadURL(FormatPathToURL("./mainWindow.html"));//this load the mainWindow page
    //if mainWindow is closed,end the application.
    mainWindow.on('closed',function(){
        app.quit();
    })

});


/*-----------------Message Reciever----System Level------------------------*/
ipcMain.on('forcequit',function(){
    console.log('quit');
    mainWindow.close();
});

ipcMain.on('connectus',function(){
    if(connectWindow==null){
        connectWindow=CreatSizedWindow(300,300,false,true,true,mainWindow);
        connectWindow.loadURL(FormatPathToURL("./windows/connectUs.html"));
        connectWindow.on('closed',function(){
        connectWindow=null;
        });
    }
});

ipcMain.on("questlib",function(){
    if(questlibWindow==null){
        questlibWindow=CreatSizedWindow(960,540,false,false,true,mainWindow);
        questlibWindow.loadURL(FormatPathToURL("./windows/QuestLibrary.html"));
        questlibWindow.on('closed',function(){
        questlibWindow=null;
        });
    }
    
})

ipcMain.on("CloseContact",function(){
    connectWindow.close();
});