M.AutoInit();

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