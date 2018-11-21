const electron =require('electron');
const {ipcRenderer}=electron;
M.AutoInit();


document.addEventListener('DOMContentLoaded', function() {
  var rightnav = document.getElementById("setting");
  var instances = M.Sidenav.init(rightnav, {
    edge:'right'
  });
});


const quitBtn=document.getElementById("quit-btn");
quitBtn.addEventListener('click',ForceQuit);
const quitBtn1=document.getElementById("quit-btn1");
quitBtn1.addEventListener('click',ForceQuit);

function ForceQuit(){
    ipcRenderer.send('forcequit');
}




// // const testwin=document.getElementById("testwin");
// // testwin.addEventListener("click",function(){
// //     ipcRenderer.send("testwin");
// // });


// const elsebtn=document.getElementById("else");
// elsebtn.addEventListener("click",function(){
//     ipcRenderer.send("else");
// })
// /*....................................................*/


$( document ).ready(function(){
    $(".dropdown-trigger").dropdown();
});