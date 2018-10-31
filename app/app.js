const electron =require('electron');
const url =require('url');
const path=require('path');

//needed libraries
const{app,BrowserWindow,ipcMain}=electron;//app means the main process
//Menu means the tool bar,BrowserWindow means 

process.env.NODE_ENV='develop'//mark the running edition

let mainWindow,connectWindow;//the main window object

/*------------Some Functions--------------*/
function FormatPathToURL(_path)//this format the path of mainWindow.html into URL address,and 
{
    return url.format({
        pathname: path.join(__dirname,_path),
        protocol: 'file:',
        slashes: true
    })
}

function CreatSizedWindow(w,h,hasFrame,_resizable,isShow){
    return new BrowserWindow({width:w,height:h,frame: hasFrame,resizable: _resizable,show: isShow})
}

//main logic area
app.on('ready',function(){
    mainWindow=CreatSizedWindow(1280,720,false,true,true)
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
    connectWindow=CreatSizedWindow(400,300,false,true,true);
    connectWindow.loadURL(FormatPathToURL("./windows/connectUs.html"));
})
