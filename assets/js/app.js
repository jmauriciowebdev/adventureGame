let nextChoice = document.getElementById('nextChoice');
let dayCounter = document.querySelector('.dayCounter');
let optText = document.getElementById('optText');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let dayNum = document.getElementById('dayNum');
let restartBtn = document.getElementById('restart');

let plove = false;
let phate = false;
let nlove = false;
let nhate = false;
let alove = false;
let ahate = false;
let glove = false;
let ghate = false;
let oldage = false;

let day = 1;

let randOption = 50;
let tempRand = 50;


let modal = document.getElementById("myModal");
nextChoice.onclick = function() {
    dayCounter.style.display = "none";
    tempRand = randOption;
    while (tempRand == randOption) {
        getRandValue();
    }
    optText.innerHTML = options[randOption].message;
    opt1.innerHTML = options[randOption].option1;
    opt2.innerHTML = options[randOption].option2;
    modal.style.display = "block";
}


//progress bar variables
let bpeasants = document.querySelector('.peasants');
let bnobility = document.querySelector('.nobility');
let barmy = document.querySelector('.army');
let bgold = document.querySelector('.gold');


//progress bar values
let ppeasants = 50;
let pnobility = 50;
let parmy = 50;
let pgold = 50;

changeValues(0, 0, 0, 0);

function getRandValue() {
    randOption = Math.floor(Math.random() * options.length);
};


function gameOver() {
    document.querySelector('.main').style.display = 'none';
    document.getElementById('cenas').innerHTML = day;
    document.getElementById('newGame').style.display = 'block';
    restartBtn.addEventListener('click', () => { restartGame(); });
    let contextMessage = '';
    if (phate) {
        contextMessage = 'The peasants have had enough of your savagery, and have caught you in one of your strolls around the market and beheaded by your people!.';
    }

    if (nhate) {
        contextMessage = 'You seem to have forgotten that one hand helps clean the other, and the noblemen had you assassinated by poisoning.';
    }

    if (ahate) {
        contextMessage = 'They army sees weakness in you, and as such they storm the throne room, and decapitate you in the middle of the town square, as everyone cheers.';
    }

    if (ghate) {
        contextMessage = "The kingdom has fallen in disgrace by your hands, the vaults are completely empty, and the banks just won't take it anymore, you are cast away in a tower to die of starvation.";
    }

    if (oldage) {
        contextMessage = "You died peacefully of old age, you were revered as the most benevolent ruler in memory, and a statue will be built in your name, congratulations.";
    }
    document.getElementById('whatHappened').innerHTML = contextMessage;
};

const restartGame = () => {
    days = 1;
    dayNum.innerHTML = days;
    ppeasants = 50;
    pnobility = 50;
    parmy = 50;
    pgold = 50;
    checkArrows(0, 0, 0, 0);
    changeValues(0, 0, 0, 0);
    document.getElementById('newGame').style.display = 'none';
    document.querySelector('.main').style.display = 'block';

};

function checkArrows(m1, m2, m3, m4) {
    document.getElementById('pup').style.display = 'none';
    document.getElementById('pdown').style.display = 'none';
    document.getElementById('nup').style.display = 'none';
    document.getElementById('ndown').style.display = 'none';
    document.getElementById('aup').style.display = 'none';
    document.getElementById('adown').style.display = 'none';
    document.getElementById('gup').style.display = 'none';
    document.getElementById('gdown').style.display = 'none';

    if (m1 > 0) {
        document.getElementById('pup').style.display = 'inline-block';
    }
    if (m1 < 0) {
        document.getElementById('pdown').style.display = 'inline-block';
    }
    if (m2 > 0) {
        document.getElementById('nup').style.display = 'inline-block';
    }
    if (m2 < 0) {
        document.getElementById('ndown').style.display = 'inline-block';
    }
    if (m3 > 0) {
        document.getElementById('aup').style.display = 'inline-block';
    }
    if (m3 < 0) {
        document.getElementById('adown').style.display = 'inline-block';
    }
    if (m4 > 0) {
        document.getElementById('gup').style.display = 'inline-block';
    }
    if (m4 < 0) {
        document.getElementById('gdown').style.display = 'inline-block';
    }
};


function changeValues(m1, m2, m3, m4) {
    ppeasants = ppeasants + m1;
    pnobility = pnobility + m2;
    parmy = parmy + m3;
    pgold = pgold + m4;

    if (ppeasants > 0 && ppeasants < 100) {
        bpeasants.style.width = ppeasants + "%";
    } else if (ppeasants <= 0) {
        phate = true;
        gameOver();
    } else {
        plove = true;
        gameOver();
    }

    if (pnobility > 0 && pnobility < 100) {
        bnobility.style.width = pnobility + "%";
    } else if (pnobility <= 0) {
        nhate = true;
        gameOver();
    } else {
        nlove = true;
        gameOver();
    }

    if (parmy > 0 && parmy < 100) {
        barmy.style.width = parmy + "%";
    } else if (parmy <= 0) {
        ahate = true;
        gameOver();
    } else {
        alove = true;
        gameOver();
    }

    if (pgold > 0 && pgold < 100) {
        bgold.style.width = pgold + "%";
    } else if (pgold <= 0) {
        ghate = true;
        gameOver();
    } else {
        glove = true;
        gameOver();
    }
};


function looper() {
    modal.style.display = "none";
    dayCounter.style.display = "block";
    day += 1;
    changePortrait();
    dayNum.innerHTML = day;
};

function changePortrait() {
    if (day > 40) {
        oldage = true;
        gameOver();
    }
    if (day > 30) {
        document.getElementById('player').src = './assets/images/People3-1.png';
    } else if (day > 15) {
        document.getElementById('player').src = './assets/images/Actor1-7.png';
    }
};


opt1.addEventListener('click', () => {
    changeValues(options[randOption].mod1[0], options[randOption].mod1[1], options[randOption].mod1[2], options[randOption].mod1[3]);
    checkArrows(options[randOption].mod1[0], options[randOption].mod1[1], options[randOption].mod1[2], options[randOption].mod1[3]);
    document.getElementById('story').innerHTML = options[randOption].option1r;
    looper();
});

opt2.addEventListener('click', () => {
    changeValues(options[randOption].mod2[0], options[randOption].mod2[1], options[randOption].mod2[2], options[randOption].mod2[3]);
    checkArrows(options[randOption].mod2[0], options[randOption].mod2[1], options[randOption].mod2[2], options[randOption].mod2[3]);
    document.getElementById('story').innerHTML = options[randOption].option2r;
    looper();
});



// OPTIONS
let options = [{
        message: "Our spies say that our financial oponents are amassing large amounts of coin, they might be plotting something! What do you do?",
        option1: `"Tax everyone!"`,
        option1r: `Everyone disliked that.`,
        option2: `"Tax the rich!"`,
        option2r: `"But my caviar!"`,
        mod1: [-10, -10, -5, +10],
        mod2: [0, -10, +5, +5]
    }, {
        message: 'We received a threat from another kingdom! What do you do?',
        option1: `"It 's probably nothing..."`,
        option1r: `Rumours about you not being fit as a ruler start to take off...`,
        option2: `"Reinforce the border!"`,
        option2r: `You send your forces to the border.`,
        mod1: [-5, -5, -5, 0],
        mod2: [0, 0, +10, -5]
    }, {
        message: 'A massive fire ravaged some farms, what will you do?',
        option1: `"These things happen..."`,
        option1r: `Your indiference deeply offends the people.`,
        option2: `"Help them!"`,
        option2r: `Your subjects are moved by your generosity.`,
        mod1: [-10, 0, 0, +5],
        mod2: [+5, +5, 0, -10]
    }, {
        message: 'A peasant was caught stealing from a lords food stall! What should we do with him? \n "Please sir, I was just trying to feed my family!"',
        option1: `"Off with his head!"`,
        option1r: `The people are outraged, but who cares?`,
        option2: `"Release this man!"`,
        option2r: `The people are pleased by your act of mercy.`,
        mod1: [-10, 0, +5, 0],
        mod2: [+10, -10, 0, 0]
    }, {
        message: 'An high-ranking officer approaches you with a upset look on his face.\n"Do you know how bad these old armors smell? This is unnaceptable! We need new ones IMMEDIATELY!"',
        option1: `"You won't speak to me in that tone!"`,
        option1r: `Your relationship with the army has gotten worse.`,
        option2: `"Of course, we will order the blacksmiths to work overtime!"`,
        option2r: `At great cost to the kingdom the army is wearing brand new armour.`,
        mod1: [0, 0, -10, +5],
        mod2: [0, 0, +15, -10]
    }, {
        message: 'A shady looking man approaches you, he says that he knows of a way to get rich by selling beauty products, you just have to get a few friends to sell to, what do you say to the man?',
        option1: `"Ugh..."`,
        option1r: `Who knows what you might have missed?`,
        option2: `"Really? I'm in!"`,
        option2r: `The whole kingdom is avoiding you for trying to sell your massive stock of moisturizer cream to them.`,
        mod1: [0, 0, 0, +5],
        mod2: [-5, -5, -5, -15]
    }

];