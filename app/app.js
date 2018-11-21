const electron = require('electron');
const url = require('url');
const path = require('path');

//needed libraries
const { app, BrowserWindow, ipcMain } = electron;//app means the main process
//BrowserWindow means windowsshoppingWindow

process.env.NODE_ENV = 'develop'//mark the running edition

let mainWindow, testwin = null;

//the window objects

/*------------Some Functions--------------*/
function FormatPathToURL(_path)//this format the path of mainWindow.html into URL address,and 
{
    return url.format({
        pathname: path.join(__dirname, _path),
        protocol: 'file:',
        slashes: true
    })
}

function CreatSizedWindow(w, h, hasFrame, _resizable, isShow, _parent) {
    return new BrowserWindow({ width: w, height: h, frame: hasFrame, resizable: _resizable, show: isShow, parent: _parent })
}

//main logic area
app.on('ready', function () {
    mainWindow = CreatSizedWindow(800, 720, true, true, true, null)
    mainWindow.loadURL(FormatPathToURL("./mainWindow.html"));//this load the mainWindow page
    //if mainWindow is closed,end the application.
    mainWindow.on('closed', function () {
        app.quit();
    })

});


/*-----------------Message Reciever----System Level------------------------*/
ipcMain.on('forcequit', function () {
    console.log('quit');
    mainWindow.close();
});

ipcMain.on("testwin", function () {
    if (testwin == null) {
        testwin = CreatSizedWindow(960, 540, true, true, true, null);
        testwin.loadURL(FormatPathToURL("./windows/testWindows.html"));
        testwin.on('closed', function () {
            testwin = null;
        })
    }
});


