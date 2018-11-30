function Item(_name,_point,_description,_tag,_icon){
    this.name=_name;
    this.point=_point;
    this.description=_description;
    this.tag=_tag;
    this.icon=_icon;
}

function Quest(_title,_point,_descrip,_ddl,_tag,_freqnum,_freq,_icon){
    this.title=_title;
    this.point=_point;
    this.description=_descrip;
    this.ddl=_ddl;
    this.tag=_tag;
    this.freqnum=_freqnum;
    this.freq=_freq;
    this.icon=_icon;
  }

function Group(_title,_point,_descrip,_ddl,_tag,_icon,_tasks){
    this.title=_title;
    this.point=_point;
    this.description=_descrip;
    this.ddl=_ddl;
    this.tag=_tag;
    this.icon=_icon;
    this.tasks=_tasks;
}

let database=null;

function loaddata(){
    var _data=fs.readFileSync("./app/userdata/data.json");
    if(_data!=""){
        console.log("xx"+_data);
        database=JSON.parse(_data);
    }else{
        database=new databaseCreate();
    }
}


function savedata(e){
    database=new databaseCreate();
    if(database!=null){
        var jsonstr=JSON.stringify(database);
    }else{
        jsonstr="";
    }
    
    console.log(jsonstr);
    fs.writeFile("./app/userdata/data.json", jsonstr,function(err){
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
    })
}

function dataInit(){
    loaddata();
    task_line=database.task_line;
    item_line=database.item_line;
    current_task_line=database.current_task_line;
    total_point=database.total_point;
    notePad=database.notePad;
}

function databaseCreate(){
    this.task_line=task_line;
    this.item_line=item_line;
    this.current_task_line=current_task_line;
    this.total_point=total_point;
    this.notePad=notePad;
}

var edit_i;
var task_line=new Array();
var task_num=0;

var notePad="";

var item_line=new Array();
var item_num=0;

var current_task_line=new Array();
var current_task_num=0;

var total_point=0;

function Add_Point(num){
    total_point+=num;
    refreshPoint();
}
function Minus_point(num){
    total_point-=num;
    refreshPoint();
}
