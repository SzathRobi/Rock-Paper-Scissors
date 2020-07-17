const menuExit = document.getElementById('menuExit');
const menuX1 = document.getElementById('menuX1');

const newGameBtn = document.getElementById('newGameBtn');
const menuTopSection = document.getElementById('menuTopSection');
const menuBottomSection = document.getElementById('menuBottomSection');
const menuSection = [menuTopSection,menuBottomSection];	
    
const roundTop = document.getElementById('roundTop');
const roundBottom = document.getElementById('roundBottom');

const roundsBtn = document.querySelectorAll('.roundsBtn');
const roundsSecondary = document.getElementById('roundsSecondary'); 
const roundArrowLeft = document.getElementById('roundArrowLeft');
const roundArrowRight = document.getElementById('roundArrowRight');
const roundArrows = document.querySelectorAll('.fa-caret-left, .fa-caret-right');
const roundNum = document.getElementById('roundNum');

const characters = document.getElementById('characters');
const choosableCharacters = document.querySelectorAll('.choosableCharacters');
let characterIcon = document.querySelector('.fa-user');


const toOrigiMenuPos = () => {
    newGameBtn.style.top = '0';
    roundTop.style.bottom = '0';
    roundBottom.style.top = '0';
    characters.style.top = '0';
};

const openRoundsMenu = () => {
    newGameBtn.style.top = '-20%';
    roundTop.style.bottom = '25%'; 
    roundBottom.style.top = '-25%'; 
    characters.style.top = '10%';
    roundsSecondary.style.height = '90px';
    roundsSecondary.style.opacity = '1';
};

const hideRoundsSecondary = () => {
    roundsSecondary.style.top = '-1%';
    roundsSecondary.style.opacity = '0';
};

const openCharactersMenu = () => {
    newGameBtn.style.top = '-25%';
    roundTop.style.bottom = '30%'; 
    roundBottom.style.top = '-30%'; 
    characters.style.top = '-35%';
    setTimeout(() => {
        charactersSecondary.style.bottom = '15%';
        charactersSecondary.style.height = '140px';
        charactersSecondary.style.width = '60%';
        choosableCharacters.forEach(character => {
            character.style.fontSize = '50px';
        })
    },200);		
};

const hideCharactersSecondary = () => {
    charactersSecondary.style.height = '40px';
    charactersSecondary.style.width = '10%';
    charactersSecondary.style.bottom = '40%';
    choosableCharacters.forEach(character => {
        character.style.fontSize = '5px';
    });	 
}

const setPlayerIcon = element => {
    characterIcon.className = element.className;
    characterIcon.classList.remove('hoveredCharacters');
    characterIcon.style.fontSize = "60px";
};

const blurOff = () => {
    blurElements.forEach(element => {
        element.style.filter = 'none';
    });
    scoreTexts.forEach(element => {
        element.style.filter = 'none';
    });
};

menuExit.addEventListener('click', () =>{
    if(roundsIsClicked == true){
        hideRoundsSecondary();
        toOrigiMenuPos();
        setTimeout(() => {
            closeMenu();
        },700);
    }
    else if(charactersIsClicked == true){
        hideCharactersSecondary();
        toOrigiMenuPos();
        setTimeout(() => {
            closeMenu();
        },700);
    }
    else{
        closeMenu();
    }
});

newGameBtn.addEventListener('click', () => {
    totalRound.innerHTML = roundNum.innerHTML;
    actualRound.innerHTML = 0;
    playerScore.innerHTML = 0;
    botScore.innerHTML = 0;

    if(roundsIsClicked == true){
    toOrigiMenuPos();
    hideRoundsSecondary();
    setTimeout(() => {
        closeMenu();
    },700);
    }
    else if(charactersIsClicked == true){
        toOrigiMenuPos();
        hideCharactersSecondary();
        setTimeout(() => {
            closeMenu();
        },700);
    }
    else{
        closeMenu();
    }
    
   blurOff();
});


let roundsIsClicked = false;
roundsBtn.forEach(element => {
    

    element.addEventListener('click', () => {
        if(roundsIsClicked == false){	
            roundsIsClicked = true;
            charactersIsClicked = false;
            openRoundsMenu();
            hideCharactersSecondary();
        }
        else{
            roundsIsClicked = false;
            hideRoundsSecondary();
            hideCharactersSecondary();
            toOrigiMenuPos();
        }
    });
});

roundArrowRight.addEventListener('click', () => {
    roundNum.innerHTML = Number(roundNum.innerHTML) +2;
    if(roundNum.innerHTML > 5){
        roundNum.innerHTML = 1;
    }
});

roundArrowLeft.addEventListener('click', () => {
    roundNum.innerHTML = Number(roundNum.innerHTML) -2;
    if(roundNum.innerHTML < 1){
        roundNum.innerHTML = 5;
    }
});

let charactersIsClicked = false; 
characters.addEventListener('click', () => {
    
    if(charactersIsClicked == false){
        
        charactersIsClicked = true;
        roundsIsClicked = false;
        openCharactersMenu();
        roundsSecondary.style.opacity = '0';
        roundsSecondary.style.top = '-30%';
        setTimeout(() => {
            roundsSecondary.style.top = '0';
        },700);	
    }
    else {
        charactersIsClicked = false;
            hideCharactersSecondary();
            setTimeout(() => {
            toOrigiMenuPos();
        },200);	
    }
});

choosableCharacters.forEach(element => {
    element.addEventListener('click', () => {
        setPlayerIcon(element);
        hideCharactersSecondary();
        toOrigiMenuPos();
    });
});

