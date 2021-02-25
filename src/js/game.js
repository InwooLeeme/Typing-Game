import { words } from "./words.js";
const gameStartBtn = document.querySelector("button");
const displayQuiz = document.querySelector(".quiz");

// 문제 출제 함수
function askQuiz(){
    const currentIndex = Math.round(Math.random() * words.length);
    const currentWord = words[currentIndex];
    displayQuiz.innerHTML = `${currentWord}`;
}


// 게임 시작함수
function gameStart(){
    askQuiz();
}

// 게임에 관련된 모든 기능들을 관리하는 함수
function init(){
    gameStartBtn.addEventListener("click", gameStart);
}

init();