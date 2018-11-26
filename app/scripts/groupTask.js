var singleTask=require("./singleTask")
function groupTask()
{
    this.size=0;
    this.arrayTask=new Array();
     //用于在任务组中添加小任务
    setSingleTsk=function(_name,_rewardCount,_remark,_label,_frequence,_ddl) 
    {
        var order=prompt("确认要添加的位置",size+1);//第一个位置是1；
        var example=singleTask(_name,_rewardCount,_remark,_label,_frequence,_ddl);
        arrayTask[--order]=example;
        size++;
    }
    //输入位置，得到某个小任务的点数
    getPoint=function(i)//第一个位置是1；
    {
        if(i>size||i<=0)
        {
            alert("访问越界！");
            return;
        }
        return arrayTask[--i].getPoint();
    }
    showGroupTask=function()//打印任务组的内容
    {
        for(var i in arrayTask)
        {
            arrayTask[i].showGroupTask();
        }
    }
//删去指定位置的小任务，
    deleteSingleTask=function(i)//第一个位置是1；
    {
        if(i>size||i<=0)
        {
            alert("访问越界！");
        }
        else
        {
            for(var j=i-1;j<size-1;j++)
            {
                arrayTask[j]=arrayTask[j+1];
            }
            size--;
        }
    }
    
}

//打算测试用的

var one=new groupTask();
var reward=document.getElementById("reward").Value;
var remark=document.getElementById("remark").Value;
var label=document.getElementById("label").Value;
var frequence=document.getElementById("frequence").Value;
var ddl=document.getElementById("ddl").Value;
one.setSingleTsk(reward,remark,label,frequence,ddl);
one.showGroupTask();
alert("访问越界！");