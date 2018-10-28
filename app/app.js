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

function CreatSizedWindow(w,h,hasFrame,_resizable,isShow){
    return new BrowserWindow({width:w,height:h,frame: hasFrame,resizable: _resizable,show: isShow})
}

// const electronScreen=require('electron').screen;
// const size=electronScreen.getPrimaryDisplay();
// var referWidth=1280;
// var referHeight=720;
// function getReferredWindowSize(type){
//     if(type==1){
//         return 800*(size.width/referWidth);
//     }else if(type==2){
//         return 600*(size.height/referHeight)
//     }else{
//         return 800*(size.width/referWidth);
//     }
// }
/*----------------------------------------*/

//main logic area
app.on('ready',function(){
    mainWindow=CreatSizedWindow(800,600,false,true,true)
    mainWindow.loadURL(FormatPathToURL("mainWindow.html"));//this load the mainWindow page
    //if mainWindow is closed,end the application.
    mainWindow.on('closed',function(){
        app.quit();
    })
    //const mainMenu=Menu.buildFromTemplate(mainMenuTemplate);
    //Menu.setApplicationMenu(mainMenu);//set the mainWindow tool bar style
});


// mainWindow.once('ready-to-show',function(){
//     mainWindow.setSize(getReferredWindowSize(1),getReferredWindowSize(2));
//     mainWindow.show();
// });


ipcMain.on('forcequit',function(){
    console.log('forcequit');
    //mainWindow=null;
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