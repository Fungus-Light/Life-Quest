M.AutoInit();

const electron =require('electron');
const {ipcRenderer}=electron;

const elseleave=document.getElementById("elseleave");
elseleave.addEventListener("click",elseLeave);
function elseLeave(){
  ipcRenderer.send("elseleave");
}