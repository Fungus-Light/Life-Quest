M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
    instances.open();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems,{
      direction: 'left'
    });
    instances.open();
  });


const electron =require('electron');
const {ipcRenderer}=electron;

const questleave=document.getElementById("questlib-leave");
questleave.addEventListener("click",QuestLeave);
function QuestLeave(){
  ipcRenderer.send("quest-leave");
}