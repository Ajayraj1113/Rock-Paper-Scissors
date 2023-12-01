const score = document.querySelectorAll(".score")
const choices = document.querySelectorAll(".icons")
const rules = document.querySelectorAll(".rules-btn")
// console.log(rules)
const cross = document.querySelector(".cross")
// console.log(score[0].innerText)

// for page traversing
const header = document.querySelectorAll(".header")
const home = document.querySelectorAll(".home")
const win = document.querySelectorAll(".win")
const lost = document.querySelectorAll(".lost")
const tie = document.querySelectorAll(".tie")
const hurray = document.querySelectorAll(".hurray")
// console.log(home[0].innerHTML)

let scoreBoard = {
    player: 0,
    computer : 0
}

window.addEventListener("load", function() {
    loadScore()
    scoreBoard = {
        player: loadScore()?.player || 0,
        computer: loadScore()?.computer || 0
    }
    // console.log("loaded values", loadScore()?.player, loadScore()?.computer);
    updateScoreDisplay();
});

function updateScoreDisplay() {
    score[0].innerHTML = scoreBoard.computer;
    score[1].innerHTML = scoreBoard.player;
}

function gameStart(e,) {
    // console.log(e.target.id)
    let playerChoice = e.target.id;
    let computerChoice = getComputerChoice()
    // console.log(computerChoice)
    let winner = getWinner(playerChoice, computerChoice)
    // console.log("Winner !!!", winner)
    gameResult(winner, computerChoice)
    saveScore(scoreBoard);
}

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 100)
    // console.log(randomNum);
    
    if(randomNum < 33) {
        return "rock"
    }
    else if(randomNum >= 33 && randomNum >=66) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getWinner(p,c) {
    if(p === c) {
        return "draw"
    }
    else if( p === "rock") {
        if(c === "scissors") {
            return "player"
        }else {
            return "computer"
        }
    }
    else if( p === "paper") {
        if(c === "rock") {
            return "player"
        }else {
            return "computer"
        }
    }
    else if( p === "scissors") {
        if(c === "paper") {
            return "player"
        }else {
            return "computer"
        }
    }
}

function gameResult(winner, computerChoice) {
    if(winner === "player") {
        scoreBoard.player++
        score[1].innerHTML = scoreBoard.player
        home[0].style.display = "none"
        win[0].style.display = "block"
    }else if(winner === "computer") {
        scoreBoard.computer++
        score[0].innerHTML = scoreBoard.computer
        home[0].style.display = "none"
        lost[0].style.display = "block"
    }else {
        home[0].style.display = "none"
        tie[0].style.display = "block"
    }
}

function saveScore() {
    const saveScore = JSON.stringify(scoreBoard);
    localStorage.setItem("scoreBoard", saveScore);
    console.log(saveScore)
}
function loadScore() {
    console.log("hiiii")
    const loadSaveScore = localStorage.getItem("scoreBoard");
    const loadedScore = JSON.parse(loadSaveScore);
    console.log(loadedScore)
    return loadedScore;
}

const next = document.querySelectorAll(".rules-btn")
// console.log(next[2].innerHTML)
next[2].addEventListener("click", (e)=> {
    // console.log("hii", e)
    header[0].style.display = "none"
    home[0].style.display = "none"
    win[0].style.display = "none"
    hurray[0].style.display = "block"
})

const playAgain = document.querySelectorAll(".play-btn")
playAgain.forEach(play => {
    play.addEventListener("click", (e)=> {
        // console.log("hiiii", e)
        win[0].style.display = "none"
        lost[0].style.display = "none"
        home[0].style.display = "block"
    })
})

const replay = document.querySelector(".replay")
replay.addEventListener("click", (e)=>{
    // console.log("hiiiiii", e)
    tie[0].style.display = "none"
    home[0].style.display = "block"
})

choices.forEach(choice => {
    choice.addEventListener("click", gameStart)
})

cross.addEventListener("click", (e)=> {
    // console.log(e)
    const rulesBox = cross.nextElementSibling;
    rulesBox.style.display = "none"
    cross.style.display = "none"
    // console.log(rulesBox)
})

rules.forEach(rule => {
    rule.addEventListener("click", (e)=> {
        const rulesBox = cross.nextElementSibling;
        rulesBox.style.display = "block"
        rulesBox.style.display = "flex"
        cross.style.display = "block"
        cross.style.display = "flex"
    })
})

document.getElementById("hurray-play").addEventListener("click" ,(e)=> {
    hurray[0].style.display = "none"
    header[0].style.display = "block"
    header[0].style.display = "flex"
    home[0].style.display = "block"
})