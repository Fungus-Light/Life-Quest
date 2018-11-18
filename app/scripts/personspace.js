M.AutoInit();

const electron =require('electron');
const {ipcRenderer}=electron;

const personleave=document.getElementById("personleave");
personleave.addEventListener("click",PersonLeave);
function PersonLeave(){
  ipcRenderer.send("personleave");
}