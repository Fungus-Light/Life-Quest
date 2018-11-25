//单任务封装的类
function singleTask(_name,_rewardCount,_remark,_label,_frequence,_ddl)
{
    var name=_name;
    //任务名称
    var rewardCount=_rewardCount;
    //奖励点数
    var remark=_remark;
    //备注
    var label=_label;
    //标签
    var frequence=f_requence;
    //频率
    var ddl=_ddl;
    //截止时间
 
    getRemark=function()   //返回点数用于加总
    {
        return remark;
    }
    showSingleTask=function()//打印任务内容
    {
        document.write("任务名称："+name+"\n"+"奖励点数:"+rewardCount+"\n");
        document.write("备注:"+remark+"\n"+"标签："+label+"\n");
        document.write("频率："+frequence+"\n"+"截至时间："+ddl);
    }
   
}
////单任务的封装的类
function AllSingleTask()
{
    this.size=0;
    this.arraySingleTask=new Array();
    //添加单任务
    addSingleTask=function()
    {
        var order=prompt("确认要添加的位置",size+1);//第一个位置是1；
        arraySingleTask[--order]=arraySingleTask;
        size++;
    }
    //删除单任务
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
                arraySingleTask[j]=arraySingleTask[j+1];
            }
            size--;
        }
    }
}