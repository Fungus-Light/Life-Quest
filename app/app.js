const electron =require('electron');
const url =require('url');
const path=require('path');

//needed libraries
const{app,BrowserWindow,ipcMain}=electron;//app means the main process
//BrowserWindow means windowsshoppingWindow

process.env.NODE_ENV='develop'//mark the running edition

let mainWindow,connectWindow=null,questlibWindow=null,shoppingWindow=null,testwin=null;
let personspace=null,elsewin=null;
//subwindows
let addquestwin=null,addgroupwin=null;
//the window objects

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

ipcMain.on("shopping",function(){
    if(shoppingWindow==null){
        shoppingWindow=CreatSizedWindow(960,540,false,false,true,mainWindow);
        shoppingWindow.loadURL(FormatPathToURL("./windows/shop.html"));
        shoppingWindow.on('closed',function(){
        shoppingWindow=null;
        });
    }
})

ipcMain.on("testwin",function(){
    if(testwin==null){
        testwin=CreatSizedWindow(960,540,false,true,true,mainWindow);
        testwin.loadURL(FormatPathToURL("./windows/testWindows.html"));
        testwin.on('closed',function(){
        testwin=null;
    })
    }
});

ipcMain.on("personspace",function(){
    if(personspace==null){
        personspace=CreatSizedWindow(960,540,false,true,true,mainWindow);
        personspace.loadURL(FormatPathToURL("./windows/personspace.html"));
        personspace.on('closed',function(){
        personspace=null;
    })
    }
});

ipcMain.on("else",function(){
    if(elsewin==null){
        elsewin=CreatSizedWindow(960,540,false,true,true,mainWindow);
        elsewin.loadURL(FormatPathToURL("./windows/else.html"));
        elsewin.on('closed',function(){
        elsewin=null;
    })
    }
});

ipcMain.on("elseleave",function(){
    elsewin.close();
});

ipcMain.on("personleave",function(){
    personspace.close();
});

ipcMain.on("quest-leave",function(){
    questlibWindow.close();
});

ipcMain.on("CloseContact",function(){
    connectWindow.close();
});

ipcMain.on("shopleave",function(){
    shoppingWindow.close();
});
/*subwin action----------------------------------*/
ipcMain.on("addquest",function(){
    if(addquestwin==null){
        addquestwin=CreatSizedWindow(350,600,false,true,true,questlibWindow);
        addquestwin.loadURL(FormatPathToURL("./windows/subwindows/addquest.html"));
        addquestwin.on("closed",function(){
        addquestwin=null;
    });
    }
});

ipcMain.on("addquestleave",function(){
    addquestwin.close();
});

ipcMain.on("submmitquest",function(temp){
    addquestwin.close();
    questlibWindow.webContents.send("updatepage");
});

