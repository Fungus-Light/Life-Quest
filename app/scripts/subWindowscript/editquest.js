M.AutoInit();

const electron =require('electron');
const {ipcRenderer}=electron;


function Quest(_title,_point,_descrip,_ddl,_tag,_freqnum,_freq,_icon){
  this.title=_title;
  this.point=_point;
  this.description=_descrip;
  this.ddl=_ddl;
  this.tag=_tag;
  this.freqnum=_freqnum;
  this.freq=_freq;
  this.icon=_icon;
}

function init(){
  var temp=JSON.parse(localStorage.getItem("task-to-edit"));

  document.getElementById("quest-name").value=temp.title;
  document.getElementById("quest-point").value=temp.point;
  document.getElementById("quest-des").value=temp.description;
  document.getElementById("quest-ddl").value=temp.time;
  document.getElementById("quest-tag").value=temp.tag;
  document.getElementById("quest-freqcnum").value=temp.freqnum;
  document.getElementById("frequence").value=temp.freq;
}

function createQuest(){
  var temp=new Quest();
  temp.title=document.getElementById("quest-name").value;
  temp.point=document.getElementById("quest-point").value;
  temp.description=document.getElementById("quest-des").value;
  temp.time=document.getElementById("quest-ddl").value;
  temp.tag=document.getElementById("quest-tag").value;
  temp.freqnum=document.getElementById("quest-freqcnum").value;
  temp.freq=document.getElementById("frequence").value;
  switch(temp.tag){
    case "1":
      temp.icon="local_library";
      break;
    case "2":
      temp.icon="spa";
      break;
    case "3":
      temp.icon="directions_run";
      break;
    case "4":
      temp.icon="extension";
      break;
    default:
      temp.icon="extension";
      break;
  }
  return temp;
}

const leavebtn=document.getElementById("leave");
leavebtn.addEventListener("click",function(){
  ipcRenderer.send("quit_edit");
});

const submmit=document.getElementById("submmit");
submmit.addEventListener("click",function(){
  var temp=createQuest();
  var tempstr=JSON.stringify(temp);
  localStorage.removeItem("re-temp-quest")
  localStorage.setItem("re-temp-quest",tempstr);
  ipcRenderer.send("re-add_quest");
});

document.ready=init();