/*--------------buttom action-----------------------------*/
const quitBtn = document.getElementById("quit-btn");
quitBtn.addEventListener('click', ForceQuit);
const quitBtn1 = document.getElementById("quit-btn1");
quitBtn1.addEventListener('click', ForceQuit);
function ForceQuit() {
  savedata();
  ipcRenderer.send('forcequit');
}

const getcurrentbtn = document.getElementById("getcurrentbtn");
getcurrentbtn.addEventListener("click",function() {
  console.log("gettask");
  if (task_line.length > 0) {
    localStorage.removeItem("current_task");
    localStorage.setItem("current_task", JSON.stringify(task_line));
    ipcRenderer.send("gettask");
  } else {
    ipcRenderer.send("addtask");
  }

});

const shop_addBtn = document.getElementById("addshoplist");
shop_addBtn.addEventListener("click", function () {
  ipcRenderer.send("additem");
});

const task_addbtn = document.getElementById("addtask");
task_addbtn.addEventListener('click', function () {
  ipcRenderer.send("addtask");
});

const group_addbtn = document.getElementById("addgroup");
group_addbtn.addEventListener('click', function () {
  ipcRenderer.send("addgroup");
});

const finish_all_current=document.getElementById("finish-all");
finish_all_current.addEventListener("change",function(){
  if(finish_all_current.checked==true){
    for(var i=0;i<current_task_line.length;i++){
      Add_Point(parseInt(current_task_line[i].point));
    }
    current_task_line=[];
    refreshCurrent();
    refreshPoint();
    finish_all_current.checked=false;
  }
  
});
/*---------------------------------------------------------------*/
// const testbtn = document.getElementById("developfunct");
// testbtn.addEventListener('click', function () {
//   ipcRenderer.send('testwin');
// });

/*--------------------get message---------------------------*/

ipcRenderer.on("add_item", function () {
  var newItem = JSON.parse(localStorage.getItem('temp_item'));
  console.log(newItem);
  item_line.push(newItem);
  AddItem(newItem.name, newItem.icon, newItem.point, newItem.description);
});

ipcRenderer.on("add_quest", function () {
  var newTask = JSON.parse(localStorage.getItem("temp-quest"));
  console.log(newTask);
  task_line.push(newTask);
  AddTask(newTask.title, newTask.icon, newTask.point, newTask.description, newTask.time);
});

ipcRenderer.on("add_group", function () {
  var newGroup = JSON.parse(localStorage.getItem("temp-group"));
  console.log(newGroup);
  AddGroup(newGroup.title, newGroup.icon, newGroup.point, newGroup.description, newGroup.time, newGroup.tasks)
})

ipcRenderer.on("add_current",function(){
  if(localStorage.getItem("temp-current-task")!=""){
    var temp_current=JSON.parse(localStorage.getItem("temp-current-task"));
    console.log(temp_current)
    for(var i=0;i<temp_current.length;i++){
    current_task_line.push(temp_current[i]);
    }
    console.log(current_task_line);
    refreshCurrent();
  }
});

ipcRenderer.on("re-add_quest",function(){
  var newTask = JSON.parse(localStorage.getItem("re-temp-quest"));
  console.log(newTask);
  var i=edit_i;
  task_line[i]=newTask;
  RefreshTask();
});

function initAll(){
  dataInit();
  RefreshAll();
}

//---------------------------------
const switchmini=document.getElementById("mini-switch");
switchmini.addEventListener('click',function(){
  savedata();
  ipcRenderer.send("switch-mini");
})

const commonview=document.getElementById("defaultview");
commonview.onchange=changeview();

function Config(){
  this.firstview="1";
}

function changeview(){
  var config=new Config();

  if(commonview.value=="1"){
    config.firstview="1";
  }else if(commonview.value=="2"){
    config.firstview="2";
  }

  jsonstr=JSON.stringify(config);

  fs.writeFile("./app/userdata/config.json", jsonstr,function(err){
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
})
}

const viewcode=document.getElementById("github");
viewcode.addEventListener("click",function(){
  window.open("https://github.com/CZzn542461670/Life-Quest",'_blank');
});
//---------------------------------

ipcRenderer.on("_show",function(){
  console.log("changed");
  initAll();
});

document.ready=initAll();
