const electron =require('electron');
const {ipcRenderer}=electron;


const quitBtn=document.getElementById("quit-btn");
quitBtn.addEventListener('click',ForceQuit);
function ForceQuit(){
    ipcRenderer.send('forcequit');
}

const connectBtn=document.getElementById("connect-btn");
connectBtn.addEventListener('click',ConnectUs);
function ConnectUs(){
    ipcRenderer.send('connectus');
}