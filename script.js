var s=document.getElementById("button");
s.addEventListener("click",mydice)
function mydice(){       
        var a = Math.floor(Math.random() * 6) + 1
        var b=Math.floor(Math.random() *6) + 1
        document.querySelector(".img1").setAttribute("src","./images/dice"+a+".png")
        document.querySelector(".img2").setAttribute("src","./images/dice"+b+".png")
        if(a>b){
          document.getElementsByTagName("h1")[0].innerHTML="🚩 Player 1 wins!"
        }
        else if(b>a){
          document.getElementsByTagName("h1")[0].innerHTML="Player 2 wins! 🚩"
        }
        else{
          document.getElementsByTagName("h1")[0].innerHTML="Draw 🤭"
        }
      }
        