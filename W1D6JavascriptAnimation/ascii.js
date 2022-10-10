
window.onload = function () {

    "use strict";
            let resetTimer ;

           const Screen = document.getElementById("text-area");
           const Start = document.getElementById("start");
           const Stop = document.getElementById("stop");
           const Animation = document.getElementById("animation");
           const Font = document.getElementById("fontsize");
           const Turbo = document.getElementById("turbo");
           const Color = document.getElementById("fontcolor");

//        Turbo.onclick = function() {
//            if (Turbo.checked) speed = 50;
//            else speed = 250;
//        }

         Color.onchange = function() {
                    Screen.style.color = Color.value;
              };
         Font.onchange = function() {
                 Screen.style.fontSize = Font.value;
            };

         Animation.onchange = function() {
                Screen.value = ANIMATIONS[Animation.value];
            };

         Start.onclick = function() {
                Start.disabled = true;
                Stop.disabled = false;
                Animation.disabled = false;
                const isTurbo = Turbo.checked;
                  if(isTurbo){
                        const animation = document.getElementById("animation").value;
                        clearInterval(resetTimer);
                        resetTimer = playAnimation(animation, 50);
                    }
                else{
                const animation = document.getElementById("animation").value;
                clearInterval(resetTimer);
                resetTimer = playAnimation(animation, 250);
                }
            };

        const playAnimation = function  (animation, speed) {
            const frames = ANIMATIONS[animation].split("=====");
            let frameNumber = -1;
            return setInterval(function () {
                ++frameNumber;
                if (frameNumber >= frames.length) {
                        frameNumber = 0;
                    }
                document.getElementById("text-area").value = frames[frameNumber];}, speed);
        };

        Turbo.onchange= function () {
                 if (Start.disabled) {
                        const animation = document.getElementById("animation").value;
                        const speed = this.checked ? 50 : 250;
                        clearInterval(resetTimer);
                        resetTimer = playAnimation(animation, speed);
                    }
                };
        Stop.onclick = function () {
                    Stop.disabled = true;
                    Start.disabled = false;
                    Animation.disabled = false;
                    Turbo.checked = false;
                    clearInterval(resetTimer);
                };
    };