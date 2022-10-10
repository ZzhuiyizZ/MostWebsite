const ending = document.querySelector(".ending")
const endingClick = document.querySelector('.changeDisplay')

endingClick.addEventListener('click',()=>{

    ending.style.display='block'

})

const imgClick = document.querySelector("img")
const body = document.querySelector("body")
let a_idx = 0
body.addEventListener("click",(event)=>{
    var a = new Array(
      "🎈科技部🎈",
      "🎈科技部🎈",
      "🎈科技部🎈",
      "🎈科技部🎈",
      "🎈科技部🎈",
      "🎈科技部🎈",
      "🎈科技部🎈",
      "🎈科技部🎈",
      "🎈不要犹豫🎈",
      "🎈不要犹豫！🎈",
      "🎈不要犹豫！！！🎈",
      "🎈选择科技部🎈",
      "🎈这将是你最正确的选择🎈",
      "🎈加入进来🎈",
      "🎈成为我们的科技部的一员🎈",
      "🎈科技部欢迎你🎈",
      "🎈科技部欢迎你🎈",
      "🎈在犹豫？🎈",
      "🎈在犹豫什么？🎈",
      "🎈多点两下🎈",
      "🎈告诉我你的选择🎈",
      "🎈🎈🎈",
      "🎈🎈🎈",
      "🎈收到🎈",
      "🎈收到🎈",
      "🎈我选择🎈",
      "🎈加入🎈",
      "🎈加入🎈",
      "🎈我要加入科技部！🎈",
      "🎈我要加入科技部！🎈",
      "🎈我要加入科技部！🎈",
      "🎈我要加入科技部！🎈",
      "🎈我要加入科技部！🎈",
      "🎈我要加入科技部！🎈",
    );
      function randomColor() {
        return (
          "rgb(" + 
          ~~(Math.random() * 255) +
          "," +
          ~~(Math.random() * 255) +
          "," +
          ~~(Math.random() * 255) +
          ")"
        );}
    
      var heart = document.createElement("b"); //创建b元素
      heart.onselectstart = new Function("event.returnValue=false"); //防止拖动
    
      document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
      if (a_idx < 30) a_idx = a_idx + 1;
      else  a_idx=30;
      heart.style.cssText = "position: fixed;left:-100%;z-index:20"; //给p元素设置样式
    
      var f = 16, // 字体大小
        x = event.clientX - f / 2, // 横坐标
        y = event.clientY - f, // 纵坐标
        c = randomColor(), // 随机颜色
        a = 1, // 透明度
        s = 1.2; // 放大缩小
    
      var timer = setInterval(function () {
        //添加定时器
        if (a <= 0) {
          document.body.removeChild(heart);
          clearInterval(timer);
        } else {
          heart.style.cssText =
            "font-size:16px;cursor: default;position: fixed;color:" +
            c +
            ";left:" +
            x +
            "px;top:" +
            y +
            "px;opacity:" +
            a +
            ";transform:scale(" +
            s +
            ");";
    
          y--;
          a -= 0.010;
          s += 0.002;
        }
      }, 20);
    })
  
