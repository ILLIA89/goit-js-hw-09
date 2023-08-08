
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// спочатку отримуємо посилання посилання до кнопок через DOM

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let interval;
// додаємо слухача подій на кнопку startBtn
startBtn.addEventListener("click", ()=>{
    //  додаємо умову, яка зробить кнопку не активною підчас зміни колоьору
    if(!interval){
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
    //  за допомогою setInterval і функції getRandomHexColor змінюємо backgroundColor 
    // кожну секунду
    interval = setInterval(()=>{
document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

// додаємо слухача подій на кнопку stopBtn яка зупиняє перемикання backgroundColor
// на сторінці

stopBtn.addEventListener("click", ()=>{
    if (interval) {
        // анулюємо дію setInterval
        clearInterval(interval)
        interval = null
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
})