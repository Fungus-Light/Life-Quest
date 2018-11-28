const electron = require('electron');
const { ipcRenderer } = electron;
const fs=require("fs");

function loadfile(){
    var _data=fs.readFileSync("./app/userdata/questlib.json");
    console.log("xx"+_data);
    questlib=JSON.parse(_data);
}


function savefile(e){
    var jsonstr=JSON.stringify(questlib);
    console.log(jsonstr);
    fs.writeFile("./app/userdata/questlib.json", jsonstr,function(err){
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
    })
}
/*-------------------------------------------------- */
