var choice = 2;

//ゲームスタート
function start(){
    direction = moveKeeper();
    moveBall();
}


//プレイヤーの動き
function aimBall(aim){
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
}


//乱数
function random(){
    var random = Math.floor(Math.random()*5 + 1);
    return random;
}

//キーパーの動き
function moveKeeper(){
    var keeperclass = document.getElementById("keeper");
    var keeper = 2;
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

    return keeper;
}

function moveBall(){
    if(choice == 1){
        document.querySelector(`#ball`).animate(
            [
              { top: '460px', left: '730px' },
              { top: '100px', left: '730px' }
            ],
            {
              duration: 1000,
              fill: 'backwards' ,
              direction: 'alternate'
            }
          );
    }else if(choice == 2){
        document.querySelector(`#ball`).animate(
            [
                { top: '460px', left: '730px' },
                { top: '230px', left: '500px' }
                
            ],
            {
              duration: 1000,
              fill: 'backwards' ,
              direction: 'alternate'
            }
          );
    }else if(choice == 3){
        document.querySelector(`#ball`).animate(
            [
                { top: '460px', left: '730px' },
                { top: '230px', left: '950px' }
            ],
            {
              duration: 1000,
              fill: 'backwards' ,
              direction: 'alternate'
            }
          );
    }
    setTimeout("decision()",1000);
    
}

function decision(){
    if(choice == direction){
        alert("残念...");
    }else{
        alert("ゴーール！！\nおめでとう！");
    }
    choice = 0;
}
