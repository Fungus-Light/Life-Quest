M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems,{
        direction: 'left'
      });
    instances.open();
  });

const electron =require('electron');
const {ipcRenderer}=electron;

const shopleavebtn=document.getElementById("shopleave");
shopleavebtn.addEventListener("click",shopleave);
function shopleave(){
    ipcRenderer.send("shopleave");
}