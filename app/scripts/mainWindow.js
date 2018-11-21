const quitBtn = document.getElementById("quit-btn");
quitBtn.addEventListener('click', ForceQuit);
const quitBtn1 = document.getElementById("quit-btn1");
quitBtn1.addEventListener('click', ForceQuit);

function ForceQuit() {
  ipcRenderer.send('forcequit');
}

const testbtn=document.getElementById("developfunct");
testbtn.addEventListener('click',function(){
  ipcRenderer.send('testwin');
});