const btnStart = document.querySelector('.btnStart');
const road = document.querySelector('.road');
const dashBoard = document.querySelector('.dashBoard');
const speedDash = document.querySelector('.speedDash');
const scoreDash = document.querySelector('.scoreDash');
const lifeDash = document.querySelector('.lifeDash');
const container = document.getElementById('container');


btnStart.addEventListener('click', startGame);
document.addEventListener('keydown', pressKeyOn);
document.addEventListener('keyup', pressKeyOff);

// game variables 
let animationGame = requestAnimationFrame(playGame);
let gamePlay = false;
let player;

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false 
};

// game functions
function startGame(){
    console.log(gamePlay);
    btnStart.style.display = 'none'; // takes off the start btn after user clicked for the first time
    var div = document.createElement('div');
    div.setAttribute('class', 'playerCar');
    div.x = 250;
    div.y = 500;
    container.appendChild(div);
    gamePlay = true;
    player = {
        speed: 1,
        lives: 3,
        gameScore: 0,
        carstoPass: 10 
    }
}

function pressKeyOn(){
}
function pressKeyOff(){
}

function updateDash(){
    console.log(player);
    // scoreDash.innerHTML = player.score; 
    // lifeDash.innerHTML = player.lives;
    // speedDash.innerHTML = player.speed;
}

function playGame(){
    if(gamePlay){
        updateDash();
    }
    animationGame = requestAnimationFrame(playGame)
};