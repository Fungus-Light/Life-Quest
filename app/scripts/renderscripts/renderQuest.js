var fs=require("fs");

let questlib;

function loadfile(){
    var _data=fs.readFileSync("./app/userdata/questlib.json");
    console.log("xx"+_data);
    questlib=JSON.parse(_data);
}

function initline(){
    questlib=new Array();
}

function savefile(e){
    var jsonstr=JSON.stringify(questlib);
    console.log(jsonstr);
    fs.writeFile("./app/userdata/questlib.json", jsonstr,function(err){
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
    })
}
/*-------------------------------------------------- */

var Renderer=document.getElementById("Renderer");

function MakeUpElement(_tag,_classname,_innerText){
    var temp=document.createElement(_tag);
    temp.className=_classname;
    temp.innerText=_innerText;
    return temp;
}

/*
<li>
    <div class="collapsible-header">
        <i class="material-icons">filter_drama</i>
    任务1</div>
    <div class="collapsible-body">
        <div>这是第一行说明</div>
        <div>这是第二行说明</div>
    </div>
</li>
*/

function AddQuest(_id,_title,_point,_description,_time){
    console.log("add quest");
    var temp=MakeUpQuest(_title,_point,_description,_time)
    temp.setAttribute("id","quest"+_id);
    Renderer.appendChild(temp);
}

function MakeUpQuest(_title,_point,_description,_time){
    var temp=MakeUpElement("li","","");

    var icon=MakeUpElement("i","material-icons","filter_drama");
    var title=MakeUpElement("div","collapsible-header","");
    var text=document.createTextNode(_title);
    title.appendChild(icon);
    title.appendChild(text)

    var description=MakeUpElement("div","collapsible-body","");
    var des1=MakeUpElement("div","",_point);
    var des2=MakeUpElement("div","",_description);
    var des3=MakeUpElement("div","",_time);
    description.appendChild(des1);
    description.appendChild(des2);
    description.appendChild(des3);

    temp.appendChild(title);
    temp.appendChild(description);

    return temp;
}

function ClearAll(){
    Renderer.innerHTML="";
}

ipcRenderer.on("updatepage",function(){
    var tempstr=localStorage.getItem("temp-quest");
    if(tempstr!=null){
        console.log(tempstr);
        temp=JSON.parse(tempstr);
        if(questlib==null){
            initline();
        }
        questlib.push(temp);
        savefile();
        ClearAll();
        rebuild();
    }
    
});

Renderer.ready=freshwhenload();
function freshwhenload(){
    loadfile();
    ClearAll();
    rebuild();
}

function rebuild(){
    for(var i=0;i<questlib.length;i++){
        var obj=questlib[i];
        AddQuest("id"+i,obj.title,obj._point,obj.description,obj.time);
    }
}