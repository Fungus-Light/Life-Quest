M.AutoInit();

const electron =require('electron');
const {ipcRenderer}=electron;

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
  });

const addquestleavebtn=document.getElementById("addquestleave");
addquestleavebtn.addEventListener("click",function(){
  ipcRenderer.send("addquestleave");
});

const submmitquest=document.getElementById("submmitquest");
submmitquest.addEventListener("click",function(){
  var temp=createQuest();
  var tempstr=JSON.stringify(temp);
  localStorage.setItem("temp-quest",tempstr);
  ipcRenderer.send("submmitquest");
});

function Quest(_title,_point,_descrip,_time,_tag){
  this.title=_title;
  this.point=_point;
  this.description=_descrip;
  this.time=_time;
  this.tag=_tag
}

function createQuest(){
  var temp=new Quest();
  temp.title=document.getElementById("quest-name").value;
  temp.point=document.getElementById("pointrange").value;
  temp.description=document.getElementById("quest-des").value;
  temp.time=document.getElementById("ddl").value;
  var obj=document.getElementById("tagselect");
  temp.tag=document.getElementById("tagselect").options[obj.selectedIndex].text;
  return temp;
}