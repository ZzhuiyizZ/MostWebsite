const body = document.querySelector("body")
let a_idx = 0
body.addEventListener("click",(event)=>{
    var a = new Array(
      "๐็งๆ้จ๐",
      "๐็งๆ้จ๐",
      "๐็งๆ้จ๐",
      "๐็งๆ้จ๐",
      "๐ไธ่ฆ็น่ฑซ๐",
      "๐ไธ่ฆ็น่ฑซ๏ผ๐",
      "๐ไธ่ฆ็น่ฑซ๏ผ๏ผ๏ผ๐",
      "๐้ๆฉ็งๆ้จ๐",
      "๐่ฟๅฐๆฏไฝ ๆๆญฃ็กฎ็้ๆฉ๐",
      "๐ๅ ๅฅ่ฟๆฅ๐",
      "๐ๆไธบๆไปฌ็็งๆ้จ็ไธๅ๐",
      "๐็งๆ้จๆฌข่ฟไฝ ๐",
      "๐็งๆ้จๆฌข่ฟไฝ ๐",
      "๐ๅจ็น่ฑซ๏ผ๐",
      "๐ๅจ็น่ฑซไปไน๏ผ๐",
      "๐ๅค็นไธคไธ๐",
      "๐ๅ่ฏๆไฝ ็้ๆฉ๐",
      "๐๐๐",
      "๐๐๐",
      "๐ๆถๅฐ๐",
      "๐ๆถๅฐ๐",
      "๐ๆ้ๆฉ๐",
      "๐ๅ ๅฅ๐",
      "๐ๅ ๅฅ๐",
      "๐ๆ่ฆๅ ๅฅ็งๆ้จ๏ผ๐",
      "๐ๆ่ฆๅ ๅฅ็งๆ้จ๏ผ๐",
      "๐ๆ่ฆๅ ๅฅ็งๆ้จ๏ผ๐",
      "๐ๆ่ฆๅ ๅฅ็งๆ้จ๏ผ๐",
      "๐ๆ่ฆๅ ๅฅ็งๆ้จ๏ผ๐",
      "๐ๆ่ฆๅ ๅฅ็งๆ้จ๏ผ๐",
      "๐ๆ่ฆๅ ๅฅ็งๆ้จ๏ผ๐",
      "๐ๆ่ฆๅ ๅฅ็งๆ้จ๏ผ๐",
      "๐ๆ่ฆๅ ๅฅ็งๆ้จ๏ผ๐",
      "๐ๆ่ฆๅ ๅฅ็งๆ้จ๏ผ๐",
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
    
      var heart = document.createElement("b"); //ๅๅปบbๅ็ด 
      heart.onselectstart = new Function("event.returnValue=false"); //้ฒๆญขๆๅจ
    
      document.body.appendChild(heart).innerHTML = a[a_idx]; //ๅฐbๅ็ด ๆทปๅ ๅฐ้กต้ขไธ
      if (a_idx < 25) a_idx = a_idx + 1;
      else  a_idx=25;
      heart.style.cssText = "position: fixed;left:-100%;z-index:20"; //็ปpๅ็ด ่ฎพ็ฝฎๆ ทๅผ
    
      var f = 16, // ๅญไฝๅคงๅฐ
        x = event.clientX - f / 2, // ๆจชๅๆ 
        y = event.clientY - f, // ็บตๅๆ 
        c = randomColor(), // ้ๆบ้ข่ฒ
        a = 1, // ้ๆๅบฆ
        s = 1.2; // ๆพๅคง็ผฉๅฐ
    
      var timer = setInterval(function () {
        //ๆทปๅ ๅฎๆถๅจ
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
  
