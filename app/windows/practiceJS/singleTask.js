
function singleTask(_name,_rewardCount,_remark,_label,_frequence,_ddl)
{
    this.name=_name;
    //任务名称
    this. rewardCount=_rewardCount;
    //奖励点数
    this. remark=_remark;
    //备注
    this. label=_label;
    //标签
    this. frequence=f_requence;
    //频率
    this. ddl=_ddl;
    //截止时间
    showSingleTask=function()//打印任务内容
    {
        document.write("任务名称："+name+"\n"+"奖励点数:"+rewardCount+"\n");
        document.write("备注:"+remark+"\n"+"标签："+label+"\n");
        document.write("频率："+frequence+"\n"+"截至时间："+ddl);
    }
}