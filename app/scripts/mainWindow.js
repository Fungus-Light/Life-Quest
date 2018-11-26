const quitBtn = document.getElementById("quit-btn");
quitBtn.addEventListener('click', ForceQuit);
const quitBtn1 = document.getElementById("quit-btn1");
quitBtn1.addEventListener('click', ForceQuit);

const shop_Renderer = document.getElementById(RenderId_shop);
const task_Renderer = document.getElementById(RenderId_task);
const current_task_Renderer = document.getElementById(RenderId_current_task);
const current_group_Renderer=document.getElementById(RenderId_current_group);

const getcurrentbtn = document.getElementById("getcurrentbtn");
getcurrentbtn.addEventListener("click",AddCurrentGroup);
const shop_addBtn = document.getElementById("addshoplist");
shop_addBtn.addEventListener("click", AddItem);
const task_addbtn = document.getElementById("addtastk");
task_addbtn.addEventListener('click', AddTask);

function ForceQuit() {
  ipcRenderer.send('forcequit');
}

const testbtn=document.getElementById("developfunct");
testbtn.addEventListener('click',function(){
  ipcRenderer.send('testwin');
});