let choice = 2, keeper = 1, ball_x, ball_y, keeper_x, keeper_y, arowpict;
let start = document.getElementById("start");
let keeper_del = document.getElementById("keeper");



start.addEventListener('click', () => {
    moveBall();
});


function moveKeeper(keeper_y,keeper_x){
    document.querySelector(`#keeper`).animate(
        [
            // { transform: 'rotate(0deg)' }, // 開始時の状態（360度）
            { top: '16%', left: '45%' },
            // { transform: 'rotate(-90deg)' }, // 終了時の状態（0度）
            { top: String(keeper_y) + '%', left: String(keeper_x) + '%' },
        ],
        {
            duration: 900,  
        }
    );
}

//キーパーの動き
start.addEventListener('click', () => {
    keeper = random();

    switch (keeper) { 
        case 1:
            keeper_y = 16;
            keeper_x = 45;
            moveKeeper(16,45);
            break;
                    
        case 2:
            keeper_y = 16;
            keeper_x = 33;
            moveKeeper(16,33);
            break;

        case 3:
            keeper_y = 16;
            keeper_x = 58;
            moveKeeper(16,58);
            break;

        case 4:
            keeper_y = 10;
            keeper_x = 30;
            moveKeeper(10,30);
            break;

        case 5:
            keeper_y = 10;
            keeper_x = 70;
            moveKeeper(10,70);
            break;
    }
});

  // シュート後のキーパー表示
const image2 = document.createElement('img');
start.addEventListener('click', () => {
    let alertmsg = function(){
        //属性の追加
        image2.src = "img/keeper-center.png";
        image2.alt = "アイコン"
        // キーパーの大きさ
        image2.width = "150";
        image2.height = "150";
        image2.style.position = "fixed";
        // キーパーの位置指定
        image2.style.left = String(keeper_x)+ "%";
        image2.style.top = String(keeper_y) + "%";
        
        //タグを表示
        document.body.appendChild(image2);
    }
    setTimeout(alertmsg,500);
  });

start.addEventListener('click', () => {
    let alertmsg = function(){
        ball.style.display="none";
    }
    setTimeout(alertmsg,500);
});
  
  
// シュート後のボールを表示
const image = document.createElement('img');
start.addEventListener('click', () => {
    let alertmsg = function(){
        //属性の追加
        image.src = "img/ball.png";
        image.alt = "アイコン"
        // ボールの大きさ
        image.width = "70";
        image.height = "70";
        image.style.position = "fixed";
        // ボールの位置指定
        image.style.left = String(ball_x) + "%";
        image.style.top = String(ball_y) + "%";
        console.log(ball_x);
        console.log(ball_y);
        
        
        document.body.appendChild(image);
    }
    setTimeout(alertmsg,500);
});
  
  
// キーパーを消す
start.addEventListener('click', () => {
    let alertmsg = function(){
      keeper_del.style.display="none";      
    }
    setTimeout(alertmsg,500);
});

//プレイヤーの動き
function aimBall(aim){
    let arowpict1 = document.getElementById("arrowcenter");
    let arowpict2 = document.getElementById("arrowleft");
    let arowpict3 = document.getElementById("arrowright");
    let arowpict4 = document.getElementById("arrowtopleft");
    let arowpict5 = document.getElementById("arrowtopright");

    if(aim == "arrowcenter"){
        choice = 1;
        arowpict1.src = "img/center.png";
        arowpict2.src = "img/def-left.png";
        arowpict3.src = "img/def-right.png";
        arowpict4.src = "img/def-topleft.png";
        arowpict5.src = "img/def-topright.png";
    }
    else if(aim == "arrowleft"){
        choice = 2;
        arowpict2.src = "img/left.png";
        arowpict1.src = "img/def-center.png";
        arowpict3.src = "img/def-right.png";
        arowpict4.src = "img/def-topleft.png";
        arowpict5.src = "img/def-topright.png";
    }
    else if(aim == "arrowright"){
        choice = 3;
        arowpict1.src = "img/def-center.png";
        arowpict2.src = "img/def-left.png";
        arowpict3.src = "img/right.png";
        arowpict4.src = "img/def-topleft.png";
        arowpict5.src = "img/def-topright.png";
        
    }
    else if(aim == "arrowtopleft"){
        choice = 4;
        arowpict1.src = "img/def-center.png";
        arowpict2.src = "img/def-left.png";
        arowpict3.src = "img/def-right.png";
        arowpict4.src = "img/topleft.png";
        arowpict5.src = "img/def-topright.png";
        
    }
    else if(aim == "arrowtopright"){
        choice = 5;
        arowpict1.src = "img/def-center.png";
        arowpict2.src = "img/def-left.png";
        arowpict3.src = "img/def-right.png";
        arowpict4.src = "img/def-topleft.png";
        arowpict5.src = "img/topright.png";
        
    }
}


//乱数
function random(){
    var random = Math.floor(Math.random()*5 + 1);
    return random;
}

function ballPosition(ball_y,ball_x){
    document.querySelector(`#ball`).animate(
        [
            { top: '50%', left: '47%' },
            { top: String(ball_y) + '%', left: String(ball_x) + '%' }                
        ],
        {
        duration: 1000,
        fill: 'backwards' ,
        direction: 'alternate'
        }
    );
}

function moveBall(){
    if(choice == 1){
        ball_y = 25;
        ball_x = 47;
        ballPosition(25,47);
    }else if(choice == 2){
        ball_y = 25;
        ball_x = 35;
        ballPosition(25,35);
    }else if(choice == 3){
        ball_y = 25;
        ball_x = 60;
        ballPosition(25,65);
    }
    let direct = function(){
        if(keeper == choice){
            alert("残念、止められてしまった！");
        }else{
            alert("ゴーール！\nおめでとう！！");
        }
    }
    setTimeout(direct,1000);
}

