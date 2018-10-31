const electron =require('electron');
const {ipcRenderer}=electron;


const quitBtn=document.getElementById("quit-btn");
quitBtn.addEventListener('click',ForceQuit);
function ForceQuit(e){
    ipcRenderer.send('forcequit');
}