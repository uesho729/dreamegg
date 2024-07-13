//真ん中止める
start.addEventListener('click', () => {
  document.querySelector(`#ball`).animate(
    [
      { top: '460px', left: '730px' },
      { top: '100px', left: '730px' }
    ],
    {
      duration: 1000,
      
     
    }
    
  );

});

// 真ん中のときの動き
start.addEventListener('click', () => {
  document.querySelector(`#kipper`).animate(
    [
      // { transform: 'rotate(0deg)' }, // 開始時の状態（360度）
      { top: '100px', left: '670px' },
      // { transform: 'rotate(-90deg)' }, // 終了時の状態（0度）
      { top: '150px', left: '670px' },


    ],
    {
      duration: 900,
   
     
    }
  );
});  


// シュート後のキーパー表示
const image2 = document.createElement('img');
start.addEventListener('click', () => {
  let alertmsg = function(){
  //属性の追加
image2.src = "syomen.png";
image2.alt = "アイコン"
// キーパーの大きさ
image2.width = "150";
image2.height = "150";
image2.style.position = "absolute";
// キーパーの位置指定
image2.style.left = "670px"
image2.style.top = "160px"

//タグを表示
document.body.appendChild(image2);
  }
  setTimeout(alertmsg,500);
});
// 
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
image.src = "ball2.png";
image.alt = "アイコン"
// ボールの大きさ
image.width = "70";
image.height = "70";
image.style.position = "absolute";
// ボールの位置指定
image.style.left = "715px"
image.style.top = "230px"


document.body.appendChild(image);
  }
  setTimeout(alertmsg,500);
});


// キーパーを消す
start.addEventListener('click', () => {
  let alertmsg = function(){
    kipper.style.display="none";
    
  }
  setTimeout(alertmsg,500);
  });
