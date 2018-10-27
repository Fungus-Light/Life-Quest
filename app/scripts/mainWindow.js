const electron=require('electron');
const{ipcRenderer}=electron;

const _btn=document.getElementById("q-btn");
_btn.addEventListener('click',QuitApp);
function QuitApp(e){
    console.log();
                
    e.preventDefault();
    ipcRenderer.send('forcequit');
}