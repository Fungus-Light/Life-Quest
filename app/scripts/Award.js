//单个奖励的结构
function singleAward(name,declare,needCount,label,frequence)
{
    this.name=name;
    this.declare=declare;
    this.needCount=needCount;
    this.label=label;
    frequence.label=label;
}
//奖励的封装的类
function allAward()
{

    this.arrayAllAward=new Array();
    this.size=0;
    addAward=function(singleAward)
    {
        var order=prompt("确认要添加的位置",size+1);//第一个位置是1；
        arrayAllAward[--order]=singleAward;
        size++;
    }
    deleteAward=function(i)//第一个位置是1；
    {
        if(i>size||i<=0)
        {
            alert("访问越界！");
        }
        else
        {
            for(var j=i-1;j<size-1;j++)
            {
                arrayAllAward[j]=arrayAllAward[j+1];
            }
            size--;
        }
    }
}