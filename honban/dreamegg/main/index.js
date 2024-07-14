import { saveData, loadData } from './DataSave.js';
import {image, time, experience, darkexperience} from './index1.js'

image();
start();

//タイマーの開始
function start(){
    document.getElementById("btn1").disabled = true; // 開始ボタンの無効化
    setInterval(time(),1000);
}

//経験値取得
let food = document.getElementById("food");
food.addEventListener('click' , () =>{
    experience();
});

let play = document.getElementById("play");
play.addEventListener('click' , () =>{
    experience();
});


//悪経験値取得
let darkexper = document.getElementById("tabako");
darkexper.addEventListener('click' , () =>{
    darkexperience();
});

//セーブ
let save = document.getElementById("save");
save.addEventListener('click' , () =>{
    saveData(exp, darkexp, graw, darkgraw, wid, hei,dhms);
});

//ロード
let load = document.getElementById("load");
load.addEventListener('click' , () =>{
    date = loadData();
    if(date["exp"].length > 0 ){
        exp = date["exp"];
        darkexp = date["darkexp"];
        graw = date["graw"];
        darkgraw = date["darkgraw"];
        wid = date["wid"];
        hei = date["hei"];
        dhms = date["dhms"];
    }
});