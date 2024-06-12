//ゲームスタート
function start(){
    keeper();
}


//プレイヤーの動き
function player(aim){
    var choice=0;
    
    if(aim == "center"){
        choice = 1;
    }
    else if(aim == "arrowleft"){
        choice = 2;
    }
    else if(aim == "arrowright"){
        choice = 3;
    }
    else if(aim == "arrowtopleft"){
        choice = 4;
    }
    else if(aim == "arrowtopright"){
        choice = 5;
    }
    
    alert(choice);
}


//乱数
function random(){
    var random = Math.floor(Math.random()*5 + 1);
    return random;
}

//キーパーの動き
function keeper(){
    var keeperclass = document.getElementById("keeper");
    var keeper = random();
    switch (keeper) { 
        case 1:
            keeperclass.className = "center";
            break;
                    
        case 2:
            keeperclass.className = "left";
            break;

        case 3:
            keeperclass.className = "right";
            break;

        case 4:
            keeperclass.className = "topleft";
            break;

        case 5:
            keeperclass.className = "topright";
            break;
    }

    alert(keeper);
}