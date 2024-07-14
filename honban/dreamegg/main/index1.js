var s=0,m=0,h=0,d=0,dhms=0,exp=0,darkexp=0,graw=4,darkgraw=10,wid=250,hei=200,widup=10,heiup=10, pict;

//imgのサイズ変更
export function image(){
    pict = document.querySelector("#image");
    pict.src = "img/new-Denmaru.png"
    pict.width = wid;
    pict.height = hei;
    if(darkexp >= darkgraw){
        pict.src = "img/new-Denwaru.png"
    }
}



//時間による成長
export function  time(){
    s++;                //秒を進める
    if(s==10){          //1分
        m++;
        s=0;
        wid += widup;
        hei += heiup;
        image();
        if(m==60){      //1時間
            h++;
            m=0;
            if(h==24){  //1日
                d++;
                h=0;
            }
        }
    }
    dhms = d+"d "+h+"h "+m+"m "+s+"s";
    document.getElementById("time").innerHTML=dhms;     //経過時間表示
}
            
//経験値の処理
export function experience(){
    exp++;
    //成長値がたまった処理
    if(exp >= graw){
        graw = graw * 1.5;
        wid += widup;
        hei += heiup;
    }
    document.getElementById("exp").innerHTML = exp;                   //経験値表示
    document.getElementById("graw").innerHTML = Math.ceil(graw);      //成長値表示
    image();
}

export function darkexperience(){
    darkexp++;
    //成長値がたまった処理
   
    document.getElementById("exp").innerHTML = exp;                   //経験値表示
    document.getElementById("graw").innerHTML = Math.ceil(graw);      //成長値表示
    image();

}