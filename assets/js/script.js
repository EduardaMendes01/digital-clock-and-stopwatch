const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

var btn = document.querySelector("#stopButton");
var stopwatch = document.querySelector(".hidden")

const timeEl = document.getElementById("timer")
let intervalid = 0;
let timer= 0;

const clock = setInterval(function time() {
    let dateToday = new Date();

    let hrs = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hrs < 10) hrs = '0' + hrs

    if(min < 10) min = '0' + min

    if(sec < 10) sec = '0' + sec

    hours.textContent = hrs;
    minutes.textContent = min;
    seconds.textContent = sec;
}, 1000)

btn.addEventListener('click', function() {
    if(stopwatch.style.display === 'block'){
        stopwatch.style.display = 'none';
    } else{
        stopwatch.style.display = 'block';
    }
})

const formatTime = (time) => {
    const hoursSt = Math.floor(time / 360000);
    const minutSt = Math.floor((time % 360000) / 6000);
    const secSt = Math.floor((time % 6000) / 100);
    const hundredthsSt = time % 100;

    return `${hoursSt.toString().padStart(2, '0')}:${minutSt.toString().padStart(2, '0')}:${secSt.toString().padStart(2, '0')}:${hundredthsSt.toString().padStart(2, '0')}`;
}

const toggleTimer = () => {
    const button = document.getElementById("power");
    const action = button.getAttribute("action");

    clearInterval(intervalid);

    if(action == 'start' || action == 'continue') {
        intervalid = setInterval(() => {
            timer += 1;
            setTimer(timer)
        }, 10);
        button.setAttribute('action', 'pause');
        button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }else if (action == 'pause'){
        button.setAttribute('action', 'continue');
        button.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

const resetTimer = () => {
    clearInterval(intervalid);
    timer = 0;
    setTimer(timer);
    const button = document.getElementById("power");
    button.getAttribute("action", "start");
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
}

const setTimer = (time) => {
    timeEl.innerText = formatTime(time);
}

document.getElementById("power").addEventListener('click', toggleTimer);
document.getElementById("reset").addEventListener('click', resetTimer);