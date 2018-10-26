const electron =require('electron');
const url =require('url');
const path=require('path');
//needed libraries
const{app,BrowserWindow,Menu,ipcMain}=electron;//app means the main process
//Menu means the tool bar,BrowserWindow means 

process.env.NODE_ENV='develop'//mark the running edition

let mainWindow;//the main window object

/*------------Some Functions--------------*/
function FormatPathToURL(_path)//this format the path of mainWindow.html into URL address,and 
{
    return url.format({
        pathname: path.join(__dirname,_path),
        protocol: 'file:',
        slashes: true
    })
}

function CreatSizedWindow(w,h,isFrameLess,_resizable){
    return new BrowserWindow({width:w,height:h,frame: isFrameLess,resizable: _resizable})
}

/*----------------------------------------*/

//main logic area
app.on('ready',function(){
    mainWindow=CreatSizedWindow(800,600,false,false)
    mainWindow.loadURL(FormatPathToURL("mainWindow.html"));//this load the mainWindow page
    mainWindow.on('closed',function(){
        app.quit();
    });//if mainWindow is closed,end the application.

    //const mainMenu=Menu.buildFromTemplate(mainMenuTemplate);
    //Menu.setApplicationMenu(mainMenu);//set the mainWindow tool bar style
});

ipcMain.on("app-quit",function(){
    console.log("app-quit");
    mainWindow=null;
    app.quit();
});

/*--------Menu Style Define Area---------*/

const NullMenuTemplate=[{
}];//the style of window which has no tool bar

const mainMenuTemplate =//default mainWindow tool bar style
[
{
    label: 'File',
    submenu:[
        {
            label: 'Add New Quest',
            accelerator: process.platform=='darwin'?'Command+A':'Ctrl+A',
        },
        {
            label: 'Quit',//the menu buttom to quit the app
            accelerator: process.platform=='darwin'?'Command+Q':'Ctrl+Q',
            click(){
                app.quit();
            }
        }
    ]
}
];

if(process.platform=='darwin'){
    mainMenuTemplate.shift({});
}//the function to ensure the style shown normally on MacOs

if(process.env.NODE_ENV != 'production')//open Developer Tools when not in production mode
{
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu:[{
            accelerator: process.platform=='darwin'?'Command+I':'Ctrl+I',//accelerator keys
            label: 'Toggle DevTools',
            click(item,focusedWindow){
                focusedWindow.toggleDevTools();
            }
        },
    {
        role: 'reload'
    }]
    });
}
/*---------------------------------------*/