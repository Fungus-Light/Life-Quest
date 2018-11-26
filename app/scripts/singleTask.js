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