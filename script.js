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

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false 
};

// game functions
function startGame(){
    console.log(gamePlay);
    var div = document.createElement('div');
    div.setAttribute('class', 'playerCar');
    div.x = 250;
    div.y = 500;
    container.appendChild(div);
    gamePlay = true;
}

function pressKeyOn(){
}
function pressKeyOff(){
}

function playGame(){
    if(gamePlay){
        console.log('Game in play');
    }
    animationGame = requestAnimationFrame(playGame)
};