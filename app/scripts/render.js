M.AutoInit();

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});

const RenderId_shop = "shop_Renderer";
const RenderId_task = "task_Renderer";
const RenderId_group = "group_Renderer"
const RenderId_current_task = "current_task_Renderer";
const RenderId_current_group = "current_group_Renderer";

const shop_Renderer = document.getElementById(RenderId_shop);
const task_Renderer = document.getElementById(RenderId_task);
const group_Renderer = document.getElementById(RenderId_group);
const current_task_Renderer = document.getElementById(RenderId_current_task);
const current_group_Renderer = document.getElementById(RenderId_current_group);

const point_stat=document.getElementById("point_stat");

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
function AddItem(_title, _icon, _point, _description) {
  item_num++;
  var temp = MakeUpItem(_title, _icon, _point, _description);
  temp.setAttribute("id","i"+item_num);
  shop_Renderer.appendChild(temp);
}

function MakeUpItem(_title, _icon, _point, _description) {
  var temp = MakeUpElement("li", "collection-item avatar", "");

  var icon = MakeUpElement("i", "material-icons circle blue", _icon);
  var title = MakeUpElement("span", "title", _title);
  var des1 = MakeUpElement("p", "", "point:" + _point);
  var des2 = MakeUpElement("p", "", "description:" + _description);

  var buttom = MakeUpElement("div", "secondary-content", "");
  var buttom1 = MakeUpElement("a", "waves-effect waves-green btn-flat", "");
  buttom1.setAttribute("href", "#!");
  var btnicon1 = MakeUpElement("i", "material-icons", "check");
  buttom1.appendChild(btnicon1);
  buttom1.addEventListener("click",function(){
    var _id = this.parentNode.parentNode.getAttribute("id");
    console.log(_id);
    var line = new Array();
    var _line = shop_Renderer.childNodes;
    for (var i = 0; i < _line.length; i++) {
      if (_line[i].nodeType === 1) {
        line.push(_line[i]);
      }
    }
    for (var i = 0; i < line.length; i++) {
      console.log();
      if (line[i].getAttribute("id") == _id) {
        console.log(parseInt(item_line[i].point));
        
        Minus_point(parseInt(item_line[i].point));
        
      }
    }
    
  });
  var buttom2 = MakeUpElement("a", "waves-effect waves-red btn-flat", "");
  buttom2.setAttribute("href", "#!");
  var btnicon2 = MakeUpElement("i", "material-icons", "close");
  buttom2.appendChild(btnicon2);
  buttom2.addEventListener('click', function () {
    var _id = this.parentNode.parentNode.getAttribute("id");
    console.log(_id);
    var line = new Array();
    var _line = shop_Renderer.childNodes;
    for (var i = 0; i < _line.length; i++) {
      if (_line[i].nodeType === 1) {
        line.push(_line[i]);
      }
    }
    for (var i = 0; i < line.length; i++) {
      console.log();
      if (line[i].getAttribute("id") == _id) {
        shop_Renderer.removeChild(shop_Renderer.children[i]);
        console.log(item_line.splice(i, 1));
      }
    }
  });
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

function AddTask(_title, _icon, _point, _description, _time) {
  task_num++;
  var temp = MakeUpTask(_title, _icon, _point, _description, _time);
  temp.setAttribute("id",task_num.toString());
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

  var buttom1 = MakeUpElement("div", "waves-effect waves-green btn-flat", "");
  buttom1.setAttribute("href", "#!");
  var btnicon1 = MakeUpElement("i", "material-icons", "edit");
  buttom1.appendChild(btnicon1);
  var buttom2 = MakeUpElement("div", "waves-effect waves-red btn-flat", "");
  buttom2.setAttribute("href", "#!");
  var btnicon2 = MakeUpElement("i", "material-icons", "close");
  buttom2.appendChild(btnicon2);
  buttom2.addEventListener('click',function(){
    var _id = this.parentNode.parentNode.getAttribute("id");
    console.log(_id);
    var line = new Array();
    var _line = task_Renderer.childNodes;
    for (var i = 0; i < _line.length; i++) {
      if (_line[i].nodeType === 1) {
        line.push(_line[i]);
      }
    }
    for (var i = 0; i < line.length; i++) {
      console.log();
      if (line[i].getAttribute("id") == _id) {
        task_Renderer.removeChild(task_Renderer.children[i]);
        console.log(task_line.splice(i, 1));
      }
    }
  })
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

function AddCurrent(_name, _point, _tag) {
  current_task_num++;
  var temp = MakeUpCurrent(_name, _point, _tag);
  temp.setAttribute("id","c"+current_task_num);
  current_task_Renderer.appendChild(temp);
}

function MakeUpCurrent(_name, _point, _tag) {
  var temp = MakeUpElement("tr", "", "");

  var checkbox = MakeUpElement("td", "", "");
  var boxlabel = MakeUpElement("label", "", "");
  var ckb = MakeUpElement("input", "", "");
  ckb.setAttribute("type", "checkbox");
  ckb.addEventListener("change",function(){
    if(ckb.checked==true){
    var _id = this.parentNode.parentNode.parentNode.getAttribute("id");
    console.log(_id);
    var line = new Array();
    var _line = current_task_Renderer.childNodes;

    for (var i = 0; i < _line.length; i++) {
      if (_line[i].nodeType === 1) {
        line.push(_line[i]);
      }
    }

    for (var i = 0; i < line.length; i++) {
      console.log();
      if (line[i].getAttribute("id") == _id) {
        current_task_Renderer.removeChild(current_task_Renderer.children[i]);
        Add_Point(parseInt(current_task_line[i].point))
        console.log(current_task_line.splice(i, 1));
      }
    }

  }
});
  var slider = MakeUpElement("span", "", "");
  boxlabel.appendChild(ckb);
  boxlabel.appendChild(slider);
  checkbox.appendChild(boxlabel);

  var name = MakeUpElement("td", "", _name);

  var point = MakeUpElement("td", "", _point);

  var tag = MakeUpElement("td", "", _tag);

  var delbtn = MakeUpElement("td", "", "");
  var btn = MakeUpElement("a", "waves-effect waves-red btn-small-flat", "");
  var icon = MakeUpElement("a", "material-icons", "close");
  btn.appendChild(icon);
  btn.addEventListener("click",function(){
    var _id = this.parentNode.parentNode.getAttribute("id");
    console.log(_id);
    var line = new Array();
    var _line = current_task_Renderer.childNodes;
    for (var i = 0; i < _line.length; i++) {
      if (_line[i].nodeType === 1) {
        line.push(_line[i]);
      }
    }
    for (var i = 0; i < line.length; i++) {
      console.log();
      if (line[i].getAttribute("id") == _id) {
        current_task_Renderer.removeChild(current_task_Renderer.children[i]);
        console.log(current_task_line.splice(i, 1));
      }
    }
  });
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

function AddCurrentGroup(_name, _ddl, _progress) {
  var temp = MakeUpCurrentGroup("_name", "_ddl", "50%");
  current_group_Renderer.appendChild(temp);
}

function MakeUpCurrentGroup(_name, _ddl, _progress) {
  var temp = MakeUpElement("tr", "", "");

  var name = MakeUpElement("td", "", _name);
  var ddl = MakeUpElement("td", "", _ddl);

  var progressbar = MakeUpElement("td", "", "");
  var progs = MakeUpElement("div", "progress", "");
  var bar = MakeUpElement("div", "determinate", "");
  bar.style.width = _progress;

  progs.appendChild(bar);
  progressbar.appendChild(progs);

  temp.appendChild(name);
  temp.appendChild(ddl);
  temp.appendChild(progressbar);

  return temp;
}

/*
  <li>
    <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span>
    
      <ul class="collapsible">
    <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul>
    </div>
    
  </li>
*/
function AddGroup(_title, _icon, _point, _description, _time, _tasks) {
  var temp = MakeUpGroup(_title, _icon, _point, _description, _time, _tasks);
  group_Renderer.appendChild(temp);
}

function MakeUpGroup(_title, _icon, _point, _description, _time, _tasks) {
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
  if (_tasks.length > 0) {
    var sub_Reander = MakeUpElement("ul", "collapsible", "");
    for (var i = 0; i < _tasks.length; i++) {
      var subtemp = _tasks[i];
      var node = MakeUpTask(subtemp.title, subtemp.icon, subtemp.point, subtemp.description, subtemp.ddl);
      sub_Reander.appendChild(node);
    }
    M.Collapsible.init(sub_Reander);
    description.appendChild(sub_Reander);
  }

  var buttom1 = MakeUpElement("div", "waves-effect waves-green btn-flat", "");
  buttom1.setAttribute("href", "#!");
  var btnicon1 = MakeUpElement("i", "material-icons", "edit");
  buttom1.appendChild(btnicon1);
  var buttom2 = MakeUpElement("div", "waves-effect waves-red btn-flat", "");
  buttom2.setAttribute("href", "#!");
  var btnicon2 = MakeUpElement("i", "material-icons", "close");
  buttom2.appendChild(btnicon2);
  description.appendChild(buttom1);
  description.appendChild(buttom2);

  temp.appendChild(title);
  temp.appendChild(description);


  return temp;
}


/*========================================== */
function refreshCurrent(){
  current_task_Renderer.innerHTML="";
  for(var i=0;i<current_task_line.length;i++){
    var temp=current_task_line[i];
    AddCurrent(temp.title,temp.point,temp.tag);
  }
}

function refreshPoint(){
  point_stat.innerText="total point :"+total_point;
}