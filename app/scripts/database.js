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

var task_line=new Array();
var task_num=0;

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