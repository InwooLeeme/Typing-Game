import { words } from "./words.js";

const gameContainer = document.querySelector(".game__container");
const gameStartBtn = document.querySelector("button");
const displayQuiz = document.querySelector(".quiz");
const answerInput = document.querySelector("input");
const answerForm = document.querySelector("form");
const timer = document.querySelector(".left__time");
const point = document.querySelector(".collect__quiz");
const gameResult = document.querySelector(".game__result__container");

let countTimer;
const GAMETIME = 60;
let count = 0;
let time = GAMETIME;
let isPlaying = false;


// 문제 출제 함수
function askQuiz(){
    const currentIndex = Math.round(Math.random() * words.length);
    const currentWord = words[currentIndex];
    displayQuiz.innerHTML = `${currentWord}`;
}


// 사용자 답 확인 함수
function userAnswer(event){
    event.preventDefault();
    const currentAnswer = answerInput.value;
    const currentQuizText = displayQuiz.textContent;
    checkCorrect(currentQuizText, currentAnswer);
    answerInput.value = "";
}

// 점수 부여 함수
function giveScore(){
    point.innerHTML = `${count + 1}`;
    count = count + 1;
}

// 채점 함수
function checkCorrect(quiz, answer){
    if(quiz === answer){
        askQuiz();
        giveScore();
    }
    else{
        console.log(`Wrong!~`);
    }
}

// 

function redirectHome(){
    const gameResultPage = document.querySelector(".game__result");
    gameContainer.classList.remove("hide");
    gameResult.removeChild(gameResultPage);
    gameResult.style.height = 0;
}

// 게임 종료 함수
function stopGame(){
    isPlaying = false;
    clearTimer();
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const btn = document.createElement("button");
    h1.innerHTML = `Game Result`;
    h2.innerHTML = `점수 : ${count}`;
    btn.innerHTML = "재시작";
    btn.addEventListener("click", redirectHome);
    div.classList.add("game__result");
    gameResult.appendChild(div);
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(btn);
    gameContainer.classList.add("hide");
    gameResult.style.height = "80%";
    gameResult.classList.remove("hide");
    point.innerHTML = `0`;
    displayQuiz.innerHTML = `Quiz`;
    count = 0;
    gameStartBtn.innerHTML = `게임 시작`;
}

// 타이머 종료 함수
function clearTimer(){
    if(time < 0){
        time = GAMETIME;
        clearInterval(countTimer);
        stopGame();
    }
}

// 제한 시간 관리 함수
function countTime(){
    timer.innerHTML = `${time}`;
    time--;
    clearTimer();
}

// 타이머 시작 함수
function startTimer(){
    countTimer = setInterval(countTime, 1000);
}

// 게임 시작함수
function gameStart(){
    if(isPlaying){
        return;
    }
    isPlaying = true;
    askQuiz();
    answerForm.addEventListener("submit", userAnswer);
    startTimer();
    gameStartBtn.innerHTML = `게임중`;
}

// 게임에 관련된 모든 기능들을 관리하는 함수
function init(){
    gameStartBtn.addEventListener("click", gameStart);
}

init();