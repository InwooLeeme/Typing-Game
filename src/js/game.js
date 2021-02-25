import { words } from "./words.js";
const gameStartBtn = document.querySelector("button");
const displayQuiz = document.querySelector(".quiz");
const answerInput = document.querySelector("input");
const answerForm = document.querySelector("form");

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

// 채점 함수
function checkCorrect(quiz, answer){
    if(quiz === answer){
        console.log('Correct');
        askQuiz();
    }
    else{
        console.log('Wrong!');
    }
}

// 게임 시작함수
function gameStart(){
    askQuiz();
    answerForm.addEventListener("submit", userAnswer);
}

// 게임에 관련된 모든 기능들을 관리하는 함수
function init(){
    gameStartBtn.addEventListener("click", gameStart);
}

init();