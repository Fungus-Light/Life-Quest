M.AutoInit();

const electron =require('electron');
const {ipcRenderer}=electron;

const addquestleavebtn=document.getElementById("additemleave");
addquestleavebtn.addEventListener("click",function(){
  ipcRenderer.send("additemleave");
});

const submmitquest=document.getElementById("submmititem");
submmitquest.addEventListener("click",function(){
  var temp=createQuest();
  var tempstr=JSON.stringify(temp);
  localStorage.setItem("temp-item",tempstr);
  ipcRenderer.send("submmititem");
});

function Item(_title,_point,_descrip,_tag){
  this.title=_title;
  this.point=_point;
  this.description=_descrip;
  this.time=_time;
  this.tag=_tag
}

function createQuest(){
  var temp=new Item();
  temp.title=document.getElementById("quest-name").value;
  temp.point=document.getElementById("pointrange").value;
  temp.description=document.getElementById("quest-des").value;
  temp.time=document.getElementById("ddl").value;
  var obj=document.getElementById("tagselect");
  temp.tag=document.getElementById("tagselect").options[obj.selectedIndex].text;
  return temp;
}