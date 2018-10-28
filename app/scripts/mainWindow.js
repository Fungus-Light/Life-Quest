const electron =require('electron');
const {ipcRenderer}=electron;

function ForceQuit(e){
    ipcRenderer.send('forcequit');
}