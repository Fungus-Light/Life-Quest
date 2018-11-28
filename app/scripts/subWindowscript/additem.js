const electron = require('electron');
const { ipcRenderer } = electron;

M.AutoInit();

function Item(_name,_point,_description,_tag,_icon){
    this.name=_name;
    this.point=_point;
    this.description=_description;
    this.tag=_tag;
    this.icon=_icon;
}

function CreatStore(){
    var item_name= document.getElementById("item-name").value;
    var item_point= document.getElementById("item-point").value;
    var item_des= document.getElementById("item-des").value;
    var item_tag= document.getElementById("item-tag").value;
    var item_icon='local_pizza';
    switch(item_tag){
        case "1": 
            item_icon='local_pizza';
            break;
        case "2":
            item_icon='shopping_basket';
            break;
        case "3":
            item_icon='toys' ;
            break;
        case "4":
            item_icon='insert_emoticon';
            break;
        default:
            item_icon='local_pizza';
            break;

    }

    var temp=new Item(item_name,item_point,item_des,item_tag,item_icon);
    console.log(temp);
    localStorage.removeItem('temp_item');
    localStorage.setItem('temp_item',JSON.stringify(temp));
    ipcRenderer.send('add_item');
    ipcRenderer.send('quit_item');
    
}

const submmitbtn=document.getElementById("submmit");
submmitbtn.addEventListener('click',CreatStore);

const leavebtn=document.getElementById("leave");
leavebtn.addEventListener('click',function(){
    ipcRenderer.send('quit_item');
});