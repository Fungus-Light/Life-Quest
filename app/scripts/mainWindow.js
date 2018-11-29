/*--------------buttom action-----------------------------*/
const quitBtn = document.getElementById("quit-btn");
quitBtn.addEventListener('click', ForceQuit);
const quitBtn1 = document.getElementById("quit-btn1");
quitBtn1.addEventListener('click', ForceQuit);
function ForceQuit() {
  ipcRenderer.send('forcequit');
}

const getcurrentbtn = document.getElementById("getcurrentbtn");
getcurrentbtn.addEventListener("click", function () {
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






/*---------------------------------------------------------------*/
const testbtn = document.getElementById("developfunct");
testbtn.addEventListener('click', function () {
  ipcRenderer.send('testwin');
});

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
  var temp_current=JSON.parse(localStorage.getItem("temp-current-task"));
  for(var i=0;i<temp_current.length;i++){
    current_task_line.push(temp_current[i]);
  }
  
});