const electron = require('electron');
const { ipcRenderer } = electron;

function singleTask(_name,_rewardCount,_remark,_label,_frequence,_ddl)
{
    this.name=_name;
    //任务名称
    this.rewardCount=_rewardCount;
    //奖励点数
    this.remark=_remark;
    //备注
    this.label=_label;
    //标签
    this.frequence=_frequence;
    //频率
    this.ddl=_ddl;
    //截止时间
 
    this.getRemark()   //返回点数用于加总
    {
        return remark;
    }

    this.showSingleTask()//打印任务内容
    {
        console.log(this);
    }
   
}

function groupTask()
{
    this.size=0;
    this.arrayTask=new Array();
     //用于在任务组中添加小任务
    this.setSingleTsk(_name,_rewardCount,_remark,_label,_frequence,_ddl) 
    {
        var example=singleTask(_name,_rewardCount,_remark,_label,_frequence,_ddl);
        arrayTask[size]=example;
        size++;
    }
    //输入位置，得到某个小任务的点数
    this.getPoint(i)//第一个位置是1；
    {
        if(i>size||i<=0)
        {
            alert("访问越界！");
            return;
        }
        return arrayTask[--i].getPoint();
    }

    this.showGroupTask()//打印任务组的内容
    {
        for(var i in arrayTask)
        {
            arrayTask[i].showSingleTask();
        }
    }

//删去指定位置的小任务，
    this.deleteSingleTask(i)//第一个位置是1；
    {
        if(i>size||i<=0)
        {
            alert("访问越界！");
        }
        else
        {
            arrayTask.splice(i-1);
            size--;
        }
    }
    
}