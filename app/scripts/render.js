M.AutoInit();
var Itenid = 0;

const RenderId_shop = "shop_Renderer";
const RenderId_task = "task_Renderer";
const RenderId_current_task = "current_task_Renderer";
const RenderId_current_group="current_group_Renderer";

function MakeUpElement(_tag, _classname, _innerText) {
  var temp = document.createElement(_tag);
  temp.className = _classname;
  temp.innerText = _innerText;
  return temp;
}

function ClearAll(RenderId) {
  document.getElementById(RenderId).innerHTML = "";
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
function AddItem() {
  Itenid++;
  var temp = MakeUpItem("Item", "play_arrow", 180, "is description");
  temp.setAttribute("id", "item" + Itenid);
  shop_Renderer.appendChild(temp);
}

function MakeUpItem(_title, _icon, _point, _description) {
  var temp = MakeUpElement("li", "collection-item avatar", "");

  var icon = MakeUpElement("i", "material-icons circle red", _icon);
  var title = MakeUpElement("span", "title", _title);
  var des1 = MakeUpElement("p", "", "point" + _point);
  var des2 = MakeUpElement("p", "", "description" + _description);

  var buttom = MakeUpElement("div", "secondary-content", "");
  var buttom1 = MakeUpElement("a", "waves-effect waves-red btn-flat", "");
  buttom1.setAttribute("href", "#!");
  var btnicon1 = MakeUpElement("i", "material-icons", "insert_emoticon");
  buttom1.appendChild(btnicon1);
  var buttom2 = MakeUpElement("a", "waves-effect waves-red btn-flat", "");
  buttom2.setAttribute("href", "#!");
  var btnicon2 = MakeUpElement("i", "material-icons", "insert_emoticon");
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

function AddTask(_id, _title, _point, _description, _time) {
  var temp = MakeUpTask(_title, "filter_drama", _point, _description, _time)
  task_Renderer.appendChild(temp);
}

function MakeUpTask(_title, _icon, _point, _description, _time) {
  var temp = MakeUpElement("li", "", "");

  var icon = MakeUpElement("i", "material-icons", _icon);
  var title = MakeUpElement("div", "collapsible-header", "");
  var text = document.createTextNode(_title);
  title.appendChild(icon);
  title.appendChild(text)

  var description = MakeUpElement("div", "collapsible-body", "");
  var des1 = MakeUpElement("div", "", "奖励点数" + _point);
  var des2 = MakeUpElement("div", "", _description);
  var des3 = MakeUpElement("div", "", _time);
  description.appendChild(des1);
  description.appendChild(des2);
  description.appendChild(des3);

  var buttom1 = MakeUpElement("div", "waves-effect waves-red btn-flat", "");
  buttom1.setAttribute("href", "#!");
  var btnicon1 = MakeUpElement("i", "material-icons", "insert_emoticon");
  buttom1.appendChild(btnicon1);
  var buttom2 = MakeUpElement("div", "waves-effect waves-red btn-flat", "");
  buttom2.setAttribute("href", "#!");
  var btnicon2 = MakeUpElement("i", "material-icons", "insert_emoticon");
  buttom2.appendChild(btnicon2);
  description.appendChild(buttom1);
  description.appendChild(buttom2);

  temp.appendChild(title);
  temp.appendChild(description);


  return temp;
}

/*
<tr>

  <td>
    <label>
      <input type="checkbox" />
      <span></span>
    </label>
  </td>

  <td>draw</td>

  <td>100</td>

  <td>study</td>

  <td>

    <a class="waves-effect waves-red btn-small-flat">
      <i class="material-icons">close</i>
    </a>

  </td>

</tr>
*/

function AddCurrent(_name,_point,_tag){
  var temp=MakeUpCurrent("draw","100","study");
  current_task_Renderer.appendChild(temp);
}

function MakeUpCurrent(_name,_point,_tag){
  var temp=MakeUpElement("tr","","");

  var checkbox=MakeUpElement("td","","");
  var boxlabel=MakeUpElement("label","","");
  var ckb=MakeUpElement("input","","");
  ckb.setAttribute("type","checkbox");
  var slider=MakeUpElement("span","","");
  boxlabel.appendChild(ckb);
  boxlabel.appendChild(slider);
  checkbox.appendChild(boxlabel);

  var name=MakeUpElement("td","",_name);

  var point=MakeUpElement("td","",_point);

  var tag=MakeUpElement("td","",_tag);

  var delbtn=MakeUpElement("td","","");
  var btn=MakeUpElement("a","waves-effect waves-red btn-small-flat","");
  var icon=MakeUpElement("a","material-icons","close");
  btn.appendChild(icon);
  delbtn.appendChild(btn);

  temp.appendChild(checkbox);
  temp.appendChild(name);
  temp.appendChild(point);
  temp.appendChild(tag);
  temp.appendChild(delbtn);
  return temp;
}

/*
<tr>

  <td>draw</td>
  <td>100</td>
  <td>
    <div class="progress">
      <div class="determinate" style="width: 10%"></div>
    </div>
  </td>
</tr>
*/

function AddCurrentGroup(_name,_ddl,_progress){
  var temp=MakeUpCurrentGroup("_name","_ddl","50%");
  current_group_Renderer.appendChild(temp);
}

function MakeUpCurrentGroup(_name,_ddl,_progress){
  var temp=MakeUpElement("tr","","");

  var name=MakeUpElement("td","",_name);
  var ddl=MakeUpElement("td","",_ddl);

  var progressbar=MakeUpElement("td","","");
  var progs=MakeUpElement("div","progress","");
  var bar=MakeUpElement("div","determinate","");
  bar.style.width=_progress;

  progs.appendChild(bar);
  progressbar.appendChild(progs);

  temp.appendChild(name);
  temp.appendChild(ddl);
  temp.appendChild(progressbar);

  return temp;
}

