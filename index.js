
for (var i = 0; i < 7; i++) {
   document.querySelectorAll("button")[i].addEventListener("click", clickHandle);
}
function clickHandle() {
   var a=this.innerHTML;
   keyAudio(a);
      // var audio=new Audio('sounds/tom-1.mp3');
      // audio.play();
      // this.style.color="white";
addAnimation(a);

   }

   document.addEventListener("keydown",function(event){
     // console.log(event.key);//just for understanding of the name of keyboard buttons 
      keyAudio(event.key);
addAnimation(event.key);

});
   

function keyAudio(a){
// setInterval(function(){   -------DANGER----
//    loop();
// },1000);
  

   console.log(a);
   switch (a) {
      case "w":
         var tom1 = new Audio("sounds/crash.mp3");
         tom1.play();
        // document.querySelector(".w").classList.toggle("drumP");

         break;
      case "a":
         var tom2 = new Audio("sounds/kick-bass.mp3");
         tom2.play();
         //document.querySelector(".a").classList.toggle("drumP");
        
         break;
      case "s":
         var tom3 = new Audio("sounds/snare.mp3");
         tom3.play();
         //document.querySelector(".s").classList.toggle("drumP");
         break;
      case "d":
         var tom4 = new Audio("sounds/tom-1.mp3");
         tom4.play();
        // document.querySelector(".d").classList.toggle("drumP");
         break;
      case "j":
         var snare = new Audio("sounds/tom-2.mp3");
         snare.play();
       //  document.querySelector(".j").classList.toggle("drumP");
         break;
      case "k":
         var crash = new Audio("sounds/tom-3.mp3");
         crash.play();
        // document.querySelector(".k").classList.toggle("drumP");
         break;
      case "l":
         var kickBase = new Audio("sounds/tom-4.mp3");
         kickBase.play();
        // document.querySelector(".l").classList.toggle("drumP");
         break;
      default:
         console.log(this.innerHTML);
   }


}

//    }
// // }
function addAnimation(trigger){
document.querySelector("." + trigger).classList.add("drumP");
document.querySelector("body").classList.add("bodyP");
setTimeout(function(){
   document.querySelector("." + trigger).classList.remove("drumP");
   document.querySelector("body").classList.remove("bodyP");
},100);

}

// function loop(){  DANGER2

//   var aud= new Audio("sounds/crash.mp3");
//   aud.play();
//    }
