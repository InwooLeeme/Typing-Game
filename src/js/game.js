import { words } from "./words.js";
const gameStartBtn = document.querySelector("button");
const displayQuiz = document.querySelector(".quiz");
const answerInput = document.querySelector("input");
const answerForm = document.querySelector("form");
const timer = document.querySelector(".left__time");

let countTimer;
let count = 0;
let time = 60;


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
    const point = document.querySelector(".collect__quiz");
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

// 타이머 종료 함수
function clearTimer(){
    if(time < 0){
        time = 60;
        clearInterval(countTimer);
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
    askQuiz();
    answerForm.addEventListener("submit", userAnswer);
    startTimer();
}

// 게임에 관련된 모든 기능들을 관리하는 함수
function init(){
    gameStartBtn.addEventListener("click", gameStart);
}

init();