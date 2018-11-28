M.AutoInit();
const electron = require('electron');
const { ipcRenderer } = electron;

var taskline = new Array();

function Quest(_title, _point, _descrip, _ddl, _tag, _freqnum, _freq, _icon) {
    this.title = _title;
    this.point = _point;
    this.description = _descrip;
    this.ddl = _ddl;
    this.tag = _tag;
    this.freqnum = _freqnum;
    this.freq = _freq;
    this.icon = _icon;
}

function Group(_title, _point, _descrip, _ddl, _tag, _icon, _tasks) {
    this.title = _title;
    this.point = _point;
    this.description = _descrip;
    this.ddl = _ddl;
    this.tag = _tag;
    this.icon = _icon;
    this._tasks = new Array();
    this.tasks = _tasks;
}

const subRenderer = document.getElementById("subRenderer");

const addsubtask = document.getElementById("addsubtask");
addsubtask.addEventListener('click', AddSubTask)
function AddSubTask(task) {
    ipcRenderer.send("addsubtask");
}

const submitbtn=document.getElementById("submmit");
submitbtn.addEventListener('click',function(){
    var name=document.getElementById("group-name").value;
    var point=document.getElementById("group-point").value;
    var description=document.getElementById("group-des").value;
    var time=document.getElementById("ddl").value;
    var tag=document.getElementById("group-tag").value;
    var icon="extension";
    switch(tag){
        case "1":
          icon="local_library";
          break;
        case "2":
          icon="spa";
          break;
        case "3":
          icon="directions_run";
          break;
        case "4":
          icon="extension";
          break;
        default:
          icon="extension";
          break;
      }
    var temp=new Group(name,point,description,time,tag,icon,taskline);
    localStorage.removeItem("temp-group");
    localStorage.setItem("temp-group",JSON.stringify(temp));
    ipcRenderer.send("add_group");
})

const leavebtn=document.getElementById("leave");
leavebtn.addEventListener("click",function(){
    ipcRenderer.send("quit_group");
});

ipcRenderer.on("add_sub", function () {
    var newTask = JSON.parse(localStorage.getItem("temp-quest"));
    taskline.push(newTask);
    console.log(newTask);
    AddTask(newTask.title, newTask.icon, newTask.point, newTask.description, newTask.time)
});







/**---------------------------------------------------- */

function MakeUpElement(_tag, _classname, _innerText) {
    var temp = document.createElement(_tag);
    temp.className = _classname;
    temp.innerText = _innerText;
    return temp;
}

function AddTask(_title, _icon, _point, _description, _time) {
    var temp = MakeUpTask(_title, _icon, _point, _description, _time)
    subRenderer.appendChild(temp);
}

function MakeUpTask(_title, _icon, _point, _description, _time) {
    var temp = MakeUpElement("li", "", "");

    var icon = MakeUpElement("i", "material-icons", _icon);
    var title = MakeUpElement("div", "collapsible-header", "");
    var text = document.createTextNode(_title);
    title.appendChild(icon);
    title.appendChild(text)

    var description = MakeUpElement("div", "collapsible-body", "");
    var des1 = MakeUpElement("div", "", "奖励点数" + _point);
    var des2 = MakeUpElement("div", "", _description);
    var des3 = MakeUpElement("div", "", _time);
    description.appendChild(des1);
    description.appendChild(des2);
    description.appendChild(des3);

    var buttom1 = MakeUpElement("div", "waves-effect waves-green btn-flat", "");
    buttom1.setAttribute("href", "#!");
    var btnicon1 = MakeUpElement("i", "material-icons", "edit");
    buttom1.appendChild(btnicon1);
    var buttom2 = MakeUpElement("div", "waves-effect waves-red btn-flat", "");
    buttom2.setAttribute("href", "#!");
    var btnicon2 = MakeUpElement("i", "material-icons", "close");
    buttom2.appendChild(btnicon2);
    description.appendChild(buttom1);
    description.appendChild(buttom2);

    temp.appendChild(title);
    temp.appendChild(description);


    return temp;
}