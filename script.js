
let tens = 0;

let theten = document.getElementById("ten");
let start = document.getElementById("start");
let stop  = document.getElementById("stop");
let reset = document.getElementById("reset");

let interval;
const bgs = ["pink", "green","black","darksalmon"];


function timer() {
    tens++;
    if (tens < 10) {
        theten.innerHTML = "0" + tens; 
    } else {
        theten.innerHTML = tens;        
    }

    if (tens == 20) {
        clearInterval(interval); 
    }
    if (tens % 2 == 0){
        const randomIndex = Math.floor(Math.random() * bgs.length);
        document.body.style.background = bgs[randomIndex];
        /*math.floor by3ml rounding */
        /*math.random(), choose a random decimal btween 0 and bgs.lenth */
    }
}

start.addEventListener('click', function() {
    clearInterval(interval); 
    interval = setInterval(timer, 1000);
});

stop.addEventListener('click', function () {
    clearInterval(interval);
});

reset.addEventListener('click', function () {
    clearInterval(interval);
    tens = 0;
    theten.innerHTML = "00";
});