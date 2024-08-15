const appendTens = document.getElementById('tens');
const appendSeconds = document.getElementById('seconds');
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');

let seconds = 0;
let tens = 0;
let interval;

buttonStart.onclick = function(){
    interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function(){
    clearInterval(interval);
}

buttonReset.onclick = function(){
    clearInterval(interval);
    tens = 0;
    appendTens.innerText = 0;
    seconds = 0;
    appendSeconds.innerText = 0;
}

function startTimer() {
    tens++;

    if(tens > 99){
        seconds++;
        appendSeconds.innerText = seconds;
        tens = 0;
        appendTens.innerText = 0;
    } else {
        appendTens.innerText = tens;
    }
}