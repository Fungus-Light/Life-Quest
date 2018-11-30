M.AutoInit();

const RenderId_current_task = "current_task_Renderer";
const current_task_Renderer = document.getElementById(RenderId_current_task);

function MakeUpElement(_tag, _classname, _innerText) {
    var temp = document.createElement(_tag);
    temp.className = _classname;
    temp.innerText = _innerText;
    return temp;
  }

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

  function refreshCurrent(){
    current_task_Renderer.innerHTML="";
    for(var i=0;i<current_task_line.length;i++){
      var temp=current_task_line[i];
      AddCurrent(temp.title,temp.point,temp.tag);
    }
  }