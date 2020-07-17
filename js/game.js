const gameHeader = document.getElementById('gameHeader');
const botSection = document.getElementById('botSection');
const playerSection = document.getElementById('playerSection');

let actualRound = document.getElementById('actualRound');
let totalRound = document.getElementById('totalRound');
const menuLink = document.getElementById('menuLink');

const botRock = document.getElementById('botRock');
const botPaper = document.getElementById('botPaper');
const botScissors = document.getElementById('botScissors');
const botIcons = document.querySelectorAll('.bot-icon');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerIcons = document.querySelectorAll('.player-icon');

const clouds = document.querySelectorAll('.fa-cloud');
const winText = document.getElementById('winText');

const scoreTexts = document.querySelectorAll('.score');
let playerScore = document.getElementById('playerScore');
let botScore = document.getElementById('botScore');

const blurElements = [botSection, playerSection, botScore, playerScore];

const openMenu = () => {
    menuTopSection.style.top = '0';
    menuBottomSection.style.top = '50%';
};

const closeMenu = () => {
    menuTopSection.style.top = '-50%';
    menuBottomSection.style.top = '100%';
};

const winTextAnimation = () => {
    if(Number(actualRound.innerHTML) < Number(totalRound.innerHTML)){
        setTimeout(() => {
            winText.style.left = '50%';
        },2900);
        
        setTimeout(() => {
            winText.style.left = '-150%';
        },4500);
    }
    else{
        winText.classList.add('finalWin-text');
        setTimeout(() => {
            winText.style.left = '28%';
            winText.style.top = '45%';
            blurElements.forEach(element => {
                element.style.filter = 'blur(2px)';
            });
            scoreTexts.forEach(element => {
                element.style.filter = 'blur(2px)';
            });
        },2900);
    }
}

const cloudAnimation = () => {
    clouds.forEach(element => {
        element.style.animationName = 'cloudMoving';
        element.style.transform = "scale(1)";
        setTimeout(() => {
            element.style.transform = 'scale(0)';
            element.style.animationName = 'none';
        },3000);
    });
}

let finalWin = () =>{
    
    if(actualRound.innerHTML == totalRound.innerHTML){
        if(Number(playerScore.innerHTML) > Number(botScore.innerHTML)){
            winText.style.fontSize = '200%';
            winText.innerHTML ="!!YOU WIN!!";
        } 
        else if(Number(playerScore.innerHTML) < Number(botScore.innerHTML)){
            winText.style.fontSize = '200%';
            winText.innerHTML ="!!YOU LOST!!";
        }
        else{
            winText.style.fontSize = '200%';
            winText.innerHTML ="!!DRAW!!";
        }	
    }
}

const addMenuExit = () => {
    menuExit.style.display = 'flex';
    menuX1.style.animationName = 'menuXanimation';
    setTimeout(() => {
        menuX1.style.animationName = 'none';
    },4000);
};

menuLink.addEventListener('click', () => {
    openMenu();
    addMenuExit();
});

playerRock.addEventListener('click', () => {
    playerRock.style.top = '-100px';
    playerRock.style.left = '80px';
});

playerPaper.addEventListener('click', () => {
    playerPaper.style.top = '-100px';
});

playerScissors.addEventListener('click', () => {
    playerScissors.style.top = '-100px';
    playerScissors.style.left = '-80px';
});

playerIcons.forEach(element => {
    element.addEventListener('click', () => {
        let rNum = Math.floor(Math.random() * 3);
        
        if(
            (element.id == "playerRock" && rNum == 2)
            || (element.id == "playerPaper" && rNum == 1)
            || (element.id == "playerScissors" && rNum == 0)
        ){
            winText.innerHTML = 'draw';
        }
        
        else if(
            (element.id == "playerRock" && rNum == 1)
            || (element.id == "playerPaper" && rNum == 0)
            || (element.id == "playerScissors" && rNum == 2)
        ){
            winText.innerHTML = 'lose';
            botScore.innerHTML++;
        }
        else{
            winText.innerHTML = 'win';
            playerScore.innerHTML++;
        }
        
        setTimeout(() =>{
            element.style.left = '0';
            element.style.top = '0';
        }, 3000);
        
        
        botIcons.forEach(element => {
            setTimeout(() => {
            element.style.left = '0';
            element.style.top = '0';
            },3000);
        });
        
        if(rNum == 0){
            botRock.style.top = '100px';
            botRock.style.left = '80px';
        }
        else if(rNum == 1){
            botPaper.style.top = '100px';
        }
        else{
            botScissors.style.top = '100px';
            botScissors.style.left = '-80px';
        }
        
        actualRound.innerHTML = Number(actualRound.innerHTML) + 1;
        
        winTextAnimation();
        
        cloudAnimation();
        
        finalWin();
    });
});

winText.addEventListener('click', () => {
    winText.style.left = '-150%';
    winText.style.top = '55%';
    openMenu();
    setTimeout(() => {
        winText.classList.remove('finalWin-text');
    },300);
});

