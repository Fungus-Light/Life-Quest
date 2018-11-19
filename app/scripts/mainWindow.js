// const electron =require('electron');
// const {ipcRenderer}=electron;
M.AutoInit();



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instance = M.Carousel.init(elems,{
        
      });
  });

// const quitBtn=document.getElementById("quit-btn");
// quitBtn.addEventListener('click',ForceQuit);
// function ForceQuit(){
//     ipcRenderer.send('forcequit');
// }

// const connectBtn=document.getElementById("connect-btn");
// connectBtn.addEventListener('click',ConnectUs);
// function ConnectUs(){
//     ipcRenderer.send('connectus');
// }

// const questlibbtn=document.getElementById("quest-library");
// questlibbtn.addEventListener('click',QuestLib);
// function QuestLib(){
//     ipcRenderer.send("questlib");
// }

// const shoppingbtn=document.getElementById("shopping");
// shoppingbtn.addEventListener("click",function(){
//     ipcRenderer.send("shopping");
// })

// // const testwin=document.getElementById("testwin");
// // testwin.addEventListener("click",function(){
// //     ipcRenderer.send("testwin");
// // });

// const personbtn=document.getElementById("personspace");
// personbtn.addEventListener("click",function(){
//     ipcRenderer.send("personspace");
// });

// const elsebtn=document.getElementById("else");
// elsebtn.addEventListener("click",function(){
//     ipcRenderer.send("else");
// })
// /*....................................................*/


$( document ).ready(function(){
    $(".dropdown-trigger").dropdown();
});