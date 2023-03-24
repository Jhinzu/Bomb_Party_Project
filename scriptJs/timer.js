let startButton = document.getElementById("start");
startButton.addEventListener("click", timer);
let end = document.getElementById("end");
function timer(){
    console.log("ok");
    var sec = 180;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            end.classList.add("hide");
        }
    }, 1000);
}