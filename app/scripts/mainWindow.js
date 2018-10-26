const electron=require('electron');
const{ipcRenderer}=electron;


function QuitApp(e){
    e.preventDefault();
    ipcRenderer.send("app-quit");
}