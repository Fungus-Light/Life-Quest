const electron =require('electron');
var fs=require("fs");

var input=document.getElementById("input");
const loadbtn=document.getElementById("loadbtn");
const savebtn=document.getElementById("savebtn");

loadbtn.addEventListener("click",loadfile);
savebtn.addEventListener("click",savefile);

function loadfile(e){
    var _data=fs.readFileSync("./app/userdata/test.json");
    console.log("xx"+_data);
    var _object=JSON.parse(_data);
    console.log(_object[0].title);
}

function Quest(_id,_title,_descrip,_time){
    this.id=_id;
    this.title=_title;
    this.description=_descrip;
    this.time=_time;
}

let questline;

function initline(){
    questline=new Array();
    for(var i=0;i<=10;i++){
        var temp=new Quest("id"+i,"title"+i,"desc"+i,"time"+i);
        questline.push(temp);
    }
}

function savefile(e){
    initline();
    var jsonstr=JSON.stringify(questline);
    console.log(jsonstr);
    fs.writeFile("./app/userdata/test.json", jsonstr,function(err){
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
    })
}
