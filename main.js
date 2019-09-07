"use strict";
let a = document.getElementById("A");
document.onkeypress = (ev) => {
   let keyboardKey = String.fromCharCode(ev.keyCode);
   keyboardKey = keyboardKey.toLowerCase();
   let buttonClicked = document.getElementById(keyboardKey);
   buttonClicked.classList.add('selectedButton');

   setTimeout(() => {
       buttonClicked.classList.remove('selectedButton')
   }, 200);
   switch(keyboardKey) {
       
       case 'a': {
            var playA = new Audio("http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav");
            playA.play();
            break;
       }

       case 's': {
           var playS = new Audio("http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav");
           playS.play();
           break;
       }

       case 'd': {
           var playD = new Audio("http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav");
           playD.play();
           break;
       }

       case 'f': {
           var playF = new Audio("http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav");
           playF.play();
           break;
       }

       case 'g': {
           var playG = new Audio("http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav");
           playG.play();
           break;
       }
   }
}

document.onkeyup = (ev) => {
    let keyboardKey = String.fromCharCode(ev.keyCode);
    let buttonClicked = document.getElementById(keyboardKey);

    buttonClicked.classList.remove('selectedButton');
}

