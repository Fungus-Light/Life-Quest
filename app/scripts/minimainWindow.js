const switchBtn=document.getElementById("switch");
switchBtn.addEventListener("click",function(){
    savedata();
    ipcRenderer.send("switch-normal");
});

function initMini(){
    dataInit();
    refreshCurrent();
}

ipcRenderer.on("_show",function(){
    console.log("changed");
    
    initMini();
});

document.ready=initMini();