
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// спочатку отримуємо посилання посилання до кнопок через DOM

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let interval;

startBtn.addEventListener("click", ()=>{
    
    if(!interval){
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
    interval = setInterval(()=>{
document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

stopBtn.addEventListener("click", ()=>{
    if(interval){
        clearInterval(interval)
        interval = null
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
})