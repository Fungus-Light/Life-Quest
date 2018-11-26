M.AutoInit();
var Itenid=0;

const RenderId_shop="shop_Renderer";
const RenderId_task="task_Renderer";

const shop_Renderer=document.getElementById(RenderId_shop);
const task_Renderer=document.getElementById(RenderId_task);

const shop_addBtn=document.getElementById("addshoplist");
shop_addBtn.addEventListener("click",AddItem);
const task_addbtn=document.getElementById("addtastk");
task_addbtn.addEventListener('click',AddTask);

function MakeUpElement(_tag,_classname,_innerText){
  var temp=document.createElement(_tag);
  temp.className=_classname;
  temp.innerText=_innerText;
  return temp;
}

function ClearAll(RenderId){
  document.getElementById(RenderId).innerHTML="";
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
    <div class="secondary-content">
      <a href="#!" class="waves-effect waves-red btn-flat"><i class="material-icons">stars</i></a>
      <a href="#!" class="waves-effect waves-red btn-flat"><i class="material-icons">stars</i></a>
    </div>
    </li>
*/
function AddItem(){
  Itenid++;
  var temp=MakeUpItem("Item","play_arrow",180,"is description");
  temp.setAttribute("id","item"+Itenid);
  shop_Renderer.appendChild(temp);
}

function MakeUpItem(_title,_icon,_point,_description)
{
  var temp=MakeUpElement("li","collection-item avatar","");

  var icon=MakeUpElement("i","material-icons circle red",_icon);
  var title=MakeUpElement("span","title",_title);
  var des1=MakeUpElement("p","","point"+_point);
  var des2=MakeUpElement("p","","description"+_description);

  var buttom=MakeUpElement("div","secondary-content","");
  var buttom1=MakeUpElement("a","waves-effect waves-red btn-flat","");
  buttom1.setAttribute("href","#!");
  var btnicon1=MakeUpElement("i","material-icons","insert_emoticon");
  buttom1.appendChild(btnicon1);
  var buttom2=MakeUpElement("a","waves-effect waves-red btn-flat","");
  buttom2.setAttribute("href","#!");
  var btnicon2=MakeUpElement("i","material-icons","insert_emoticon");
  buttom2.appendChild(btnicon2);
  buttom.appendChild(buttom1);
  buttom.appendChild(buttom2);

  temp.appendChild(icon);
  temp.appendChild(title);
  temp.appendChild(des1);
  temp.appendChild(des2);
  temp.appendChild(buttom);

  return temp;
}

/*
make up quest
<li>
          <div class="collapsible-header">
            <i class="material-icons">filter_drama</i>
            任务1</div>
          <div class="collapsible-body">
            <a></a>
            <div>这是第一行说明</div>
            <div>这是第二行说明</div>
            <div href="#!" class="waves-effect waves-red btn-flat"><i class="material-icons">stars</i></div>
            <div href="#!" class="waves-effect waves-red btn-flat"><i class="material-icons">stars</i></div>
          </div>
</li>
*/

function AddTask(_id,_title,_point,_description,_time){
  var temp=MakeUpTask(_title,"filter_drama",_point,_description,_time)
  temp.setAttribute("id","quest"+_id);
  task_Renderer.appendChild(temp);
}

function MakeUpTask(_title,_icon,_point,_description,_time){
  var temp=MakeUpElement("li","","");

  var icon=MakeUpElement("i","material-icons",_icon);
  var title=MakeUpElement("div","collapsible-header","");
  var text=document.createTextNode(_title);
  title.appendChild(icon);
  title.appendChild(text)

  var description=MakeUpElement("div","collapsible-body","");
  var des1=MakeUpElement("div","","奖励点数"+_point);
  var des2=MakeUpElement("div","",_description);
  var des3=MakeUpElement("div","",_time);
  description.appendChild(des1);
  description.appendChild(des2);
  description.appendChild(des3);

  var buttom1=MakeUpElement("div","waves-effect waves-red btn-flat","");
  buttom1.setAttribute("href","#!");
  var btnicon1=MakeUpElement("i","material-icons","insert_emoticon");
  buttom1.appendChild(btnicon1);
  var buttom2=MakeUpElement("div","waves-effect waves-red btn-flat","");
  buttom2.setAttribute("href","#!");
  var btnicon2=MakeUpElement("i","material-icons","insert_emoticon");
  buttom2.appendChild(btnicon2);
  description.appendChild(buttom1);
  description.appendChild(buttom2);

  temp.appendChild(title);
  temp.appendChild(description);
  

  return temp;
}

