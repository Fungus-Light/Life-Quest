var Renderer=document.getElementById("Renderer");
var Itenid=1;

const testaddItem=document.getElementById("additem");
testaddItem.addEventListener('click',AddItem);

const testClearbtn=document.getElementById("clearall");
testClearbtn.addEventListener("click",ClearAll);

function MakeUpElement(_tag,_classname,_innerText){
    var temp=document.createElement(_tag);
    temp.className=_classname;
    temp.innerText=_innerText;
    return temp;
}

function AddItem(){
    Itenid++;
    var temp=MakeUpItem("Item");
    temp.setAttribute("id","item"+Itenid);
    Renderer.appendChild(temp);
}

/*
<li class="collection-item avatar">
    <i class="material-icons circle red">play_arrow</i>
    <span class="title">Title</span>
    <p>
        First Line <br>
        Second Line
    </p>
    <a href="#!" class="secondary-content"><i class="material-icons">stars</i></a>
</li>
*/

function MakeUpItem(_title){
    var temp=MakeUpElement("li","collection-item avatar","");

    var icon=MakeUpElement("i","material-icons circle red","play_arrow");
    var title=MakeUpElement("span","title",_title);
    var description=MakeUpElement("p","","First Line<br>Second Line");
    
    var buttom=MakeUpElement("a","secondary-content","");
    buttom.setAttribute("href","#!");
    var btnicon=MakeUpElement("i","material-icons","stars");
    buttom.appendChild(btnicon);

    temp.appendChild(icon);
    temp.appendChild(title);
    temp.appendChild(description);
    temp.appendChild(buttom);

    return temp;
}

function ClearAll(){
    Renderer.innerHTML="";
}