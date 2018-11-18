M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems,{
      direction: 'left'
    });
  });


const electron =require('electron');
const {ipcRenderer}=electron;

const questleave=document.getElementById("questlib-leave");
questleave.addEventListener("click",QuestLeave);
function QuestLeave(){
  ipcRenderer.send("quest-leave");
}

const addquest=document.getElementById("addquest");
addquest.addEventListener('click',function(){
    ipcRenderer.send("addquest");
});

const addgroup=document.getElementById("addgroup");
addgroup.addEventListener('click',function(){
    ipcRenderer.send("addgroup");
});