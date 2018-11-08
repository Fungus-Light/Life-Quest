const electron =require('electron');
const {ipcRenderer}=electron;

const shopleavebtn=document.getElementById("shopleave");
shopleavebtn.addEventListener("click",shopleave);
function shopleave(){
    ipcRenderer.send("shopleave");
}