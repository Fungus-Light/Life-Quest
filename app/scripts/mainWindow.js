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
  
  ipcRenderer.send("gettask");
});

const shop_addBtn = document.getElementById("addshoplist");
shop_addBtn.addEventListener("click", function () {
  ipcRenderer.send("additem");
});

const task_addbtn = document.getElementById("addtask");
task_addbtn.addEventListener('click', function () {
  ipcRenderer.send("addtask");
});

const group_addbtn=document.getElementById("addgroup");
group_addbtn.addEventListener('click',function(){
  ipcRenderer.send("addgroup");
});






/*---------------------------------------------------------------*/
const testbtn = document.getElementById("developfunct");
testbtn.addEventListener('click', function () {
  ipcRenderer.send('testwin');
});

/*--------------------get message---------------------------*/

ipcRenderer.on("add_item",function(){
  var newItem=JSON.parse(localStorage.getItem('temp_item'));
  console.log(newItem);
  AddItem(newItem.name,newItem.icon,newItem.point,newItem.description);
});

ipcRenderer.on("add_quest",function(){
  var newTask=JSON.parse(localStorage.getItem("temp-quest"));
  console.log(newTask);
  AddTask(newTask.title,newTask.icon, newTask.point, newTask.description,newTask.time)
});