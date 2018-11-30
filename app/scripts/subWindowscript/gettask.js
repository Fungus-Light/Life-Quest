M.AutoInit();

const electron =require('electron');
const {ipcRenderer}=electron;

var available_num = 0;
var selected_num = 0;

var available_line = new Array();
var selected_line = new Array();

function init() {
    available_line = JSON.parse(localStorage.getItem("current_task"));
    selected_line = new Array();
    for (var i = 0; i < available_line.length; i++) {
        AddAvailable(available_line[i].title);
    }
}

function refresh() {
    renderselected.innerHTML = "";
    if (selected_line.length > 0) {
        for (var i = 0; i < selected_line.length; i++) {
            AddSelected(selected_line[i].title);
        }
    }
}

const renderavailable = document.getElementById("renderer-available");
const renderselected = document.getElementById("renderer-selected");


function MakeUpElement(_tag, _classname, _innerText) {
    var temp = document.createElement(_tag);
    temp.className = _classname;
    temp.innerText = _innerText;
    return temp;
}

function ClearAll(RenderId) {
    document.getElementById(RenderId).innerHTML = "";
}
/*
<li class="collection-item">
    <div>
        Alvin
        <a href="#!" class="secondary-content">
            <i class="material-icons">send</i>
        </a>
    </div>
</li>
*/

const addbtn = document.getElementById("submmit");
addbtn.addEventListener('click',function(){
    localStorage.removeItem("temp-current-task");
    if(selected_line.length>0){
        localStorage.setItem("temp-current-task",JSON.stringify(selected_line));
    }else{
        localStorage.setItem("temp-current-task","");
    }
    ipcRenderer.send("add_current");
})

const leavebtn = document.getElementById("leave");
leavebtn.addEventListener("click",function(){
    ipcRenderer.send("quit_add_current");
});

function AddAvailable(_name) {
    var temp = MakeUpCollection(_name, false);
    available_num++;
    temp.setAttribute("id", "a" + available_num);
    renderavailable.appendChild(temp);
}

function AddSelected(_name) {
    var temp = MakeUpCollection(_name, true);
    selected_num++;
    temp.setAttribute("id", "s" + selected_num);
    renderselected.appendChild(temp);
}

function MakeUpCollection(_name, isselected) {
    var temp = MakeUpElement("li", "collection-item", "");

    var frameWork = MakeUpElement("div", "", _name);
    var content = MakeUpElement("a", "secondary-content", "");
    content.setAttribute("href", "#!");
    var icon;
    if (isselected == true) {
        icon = MakeUpElement("i", "material-icons", "close");
        icon.addEventListener('click', function () {
            var _id = this.parentNode.parentNode.parentNode.getAttribute("id");
            console.log(_id);
            var line = new Array();
            var _line = renderselected.childNodes;
            for (var i = 0; i < _line.length; i++) {
                if (_line[i].nodeType === 1) {
                    line.push(_line[i]);
                }
            }
            for (var i = 0; i < line.length; i++) {
                console.log();
                if (line[i].getAttribute("id") == _id) {
                    renderselected.removeChild(renderselected.children[i]);
                    console.log(selected_line.splice(i, 1));
                }
            }
        });
    } else {
        icon = MakeUpElement("i", "material-icons", "check");
        icon.addEventListener('click',function(){
            var _id = this.parentNode.parentNode.parentNode.getAttribute("id");
            var line = new Array();
            var _line = renderavailable.childNodes;
            for (var i = 0; i < _line.length; i++) {
                if (_line[i].nodeType === 1) {
                    line.push(_line[i]);
                }
            }
            for (var i = 0; i < line.length; i++) {
                console.log();
                if (line[i].getAttribute("id") == _id) {
                    selected_line.push(available_line[i]);
                    console.log(selected_line);
                    refresh();
                }
            }
        });
    }
    content.appendChild(icon);
    frameWork.appendChild(content);
    temp.appendChild(frameWork);
    return temp;
}

document.ready = init();