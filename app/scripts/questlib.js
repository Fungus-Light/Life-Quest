
const electron =require('electron');
const {ipcRenderer}=electron;

const questleave=document.getElementById("questlib-leave");
questleave.addEventListener("click",QuestLeave);
function QuestLeave(){
  ipcRenderer.send("quest-leave");
}