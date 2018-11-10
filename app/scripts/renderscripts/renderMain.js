var fs=require("fs");



let questline;

function loadfile(){
    var _data=fs.readFileSync("./app/userdata/test.json");
    console.log("xx"+_data);
    questline=JSON.parse(_data);
}

function initline(){
    questline=new Array();
    loadfile();
}

function Quest(_id,_title,_descrip,_time,_bg){
    this.id=_id;
    this.title=_title;
    this.description=_descrip;
    this.time=_time;
    this.bg=_bg
}

function savefile(e){
    var jsonstr=JSON.stringify(questline);
    console.log(jsonstr);
    fs.writeFile("./app/userdata/test.json", jsonstr,function(err){
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
    })
}
/*------------------------------------------------------------------*/
var Renderer=document.getElementById("Renderer");

const testaddbtn=document.getElementById("view-source");
testaddbtn.addEventListener('click',Refresh);

const testClearbtn=document.getElementById("clearall");
testClearbtn.addEventListener("click",ClearAll);

Renderer.ready=Refresh();

function updateline(){
    savefile();
}

function Refresh(){
    ClearAll();
    initline();
    if(questline.length>0){
        for(var i=0;i<questline.length;i++){
            var temp=questline[i];
            AddCard(temp.id,temp.title,temp.description,temp.time,'../images/dog.png');
        }
    }
}

function AddCard(_id,_title,_description,_time,_bg){
    var temp=MakeUpCard(_title,_description,_time,_bg);
    temp.setAttribute("id",_id);
    componentHandler.upgradeElement(temp);
    componentHandler.upgradeAllRegistered();
    Renderer.appendChild(temp);
}

function MakeUpElement(_tag,_classname,_innerText){
    var temp=document.createElement(_tag);
    temp.className=_classname;
    temp.innerText=_innerText;
    return temp;
}

function MakeUpCard(_title,_description,_time,_bg){
    var temp=MakeUpElement("div","demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-desktop","");
    
    var title=MakeUpElement("div","mdl-card__title mdl-card--expand mdl-color--teal-300","");
    title.setAttribute("background-image",_bg)
    var titletext=MakeUpElement("h2","mdl-card__title-text",_title);
    title.appendChild(titletext);

    var description=MakeUpElement("div","mdl-card__supporting-text mdl-color-text--grey-600",_description);
    var remind=MakeUpElement("div","mdl-card__supporting-text mdl-color-text--grey-600",_time);

    var buttoms=MakeUpElement("div","mdl-card__actions mdl-card--border","");
    var more=MakeUpElement("button","mdl-button mdl-js-button mdl-button--raised","Know More");
    componentHandler.upgradeElement(more);
    var finish=MakeUpElement("button","mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-cell--middle","任务完成");
    componentHandler.upgradeElement(finish);
    buttoms.appendChild(more);
    buttoms.appendChild(finish);
    
    temp.appendChild(title);
    temp.appendChild(description);
    temp.appendChild(remind);
    temp.appendChild(buttoms);

    return temp;
}

function ClearAll(){
    Renderer.innerHTML="";
}





