var Renderer=document.getElementById("Renderer");
var Questid=1;

const testaddquest=document.getElementById("addquest");
testaddquest.addEventListener('click',AddQuest);

function MakeUpElement(_tag,_classname,_innerText){
    var temp=document.createElement(_tag);
    temp.className=_classname;
    temp.innerText=_innerText;
    return temp;
}

/*
<li>
    <div class="collapsible-header">
        <i class="material-icons">filter_drama</i>
    任务1</div>
    <div class="collapsible-body">
        <div>这是第一行说明</div>
        <div>这是第二行说明</div>
    </div>
</li>
*/

function AddQuest(){
    console.log("add quest");
    
    Questid++;
    var temp=MakeUpQuest("Quest")
    temp.setAttribute("id","quest"+Questid);
    Renderer.appendChild(temp);
    var evt = document.createEvent('Event');
    evt.initEvent('fresh', true, true);
}

function MakeUpQuest(_title){
    var temp=MakeUpElement("li","","");

    var icon=MakeUpElement("i","material-icons","filter_drama");
    var title=MakeUpElement("div","collapsible-header","");
    var text=document.createTextNode(_title);
    title.appendChild(icon);
    title.appendChild(text)

    var description=MakeUpElement("div","collapsible-body","");
    var des1=MakeUpElement("div","","这是第一行说明");
    var des2=MakeUpElement("div","","这是第er行说明");
    description.appendChild(des1);
    description.appendChild(des2);

    temp.appendChild(title);
    temp.appendChild(description);

    return temp;
}