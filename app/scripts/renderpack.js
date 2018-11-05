var CardRenderer=document.getElementById("Renderer");
var i=1;
const testaddbtn=document.getElementById("view-source");
testaddbtn.addEventListener('click',AddCard);

function AddCard(){
    i++;
    var temp=MakeUpCard("任务名");
    temp.setAttribute("id","node"+i);
    componentHandler.upgradeElement(temp);
    componentHandler.upgradeAllRegistered();
    CardRenderer.appendChild(temp);
}

function MakeUpElement(_tag,_classname,_innerText){
    var temp=document.createElement(_tag);
    temp.className=_classname;
    temp.innerText=_innerText;
    return temp;
}


function MakeUpCard(_title){
    var temp=MakeUpElement("div","demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-desktop","");
    
    var title=MakeUpElement("div","mdl-card__title mdl-card--expand mdl-color--teal-300","");
    var titletext=MakeUpElement("h2","mdl-card__title-text",_title);
    title.appendChild(titletext);

    var description=MakeUpElement("div","mdl-card__supporting-text mdl-color-text--grey-600","摘要：这个是测试的任务摘要。");
    var remind=MakeUpElement("div","mdl-card__supporting-text mdl-color-text--grey-600","时间：每天半小时。");

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