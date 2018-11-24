M.AutoInit();
var Itenid=0;

const shop_Renderer=document.getElementById("shop_Renderer");
const shop_addBtn=document.getElementById("addshoplist");
shop_addBtn.addEventListener("click",AddItem);

function MakeUpElement(_tag,_classname,_innerText){
  var temp=document.createElement(_tag);
  temp.className=_classname;
  temp.innerText=_innerText;
  return temp;
}

/*code to render the itemshop*/

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
function AddItem(){
  Itenid++;
  var temp=MakeUpItem("Item","play_arrow",180,"this is description");
  temp.setAttribute("id","item"+Itenid);
  shop_Renderer.appendChild(temp);
}

function MakeUpItem(_title,_icon,_point,_description){
  var temp=MakeUpElement("li","collection-item avatar","");

  var icon=MakeUpElement("i","material-icons circle red",_icon);
  var title=MakeUpElement("span","title",_title);
  var description=MakeUpElement("p","","point"+_point+"<br>"+_description);
  
  var buttom=MakeUpElement("a","secondary-content","");
  buttom.setAttribute("href","#!");
  var btnicon=MakeUpElement("i","material-icons","insert_emoticon");
  buttom.appendChild(btnicon);

  temp.appendChild(icon);
  temp.appendChild(title);
  temp.appendChild(description);
  temp.appendChild(buttom);

  return temp;
}

function ClearAll(RenderId){
  document.getElementById(RenderId).innerHTML="";
}
