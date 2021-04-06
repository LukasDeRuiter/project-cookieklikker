const menu  = document.querySelector('#navbarMobiel');
const menuLinks = document.querySelector('.navMenu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});



let Koekje1 = document.getElementById('idKoekje1');
let Koekje2 = document.getElementById('idKoekje2');
let Koekje3 = document.getElementById('idKoekje3');
let Score = document.getElementById('score');
let integer = 0;
let totalScore = 0;

Koekje1.addEventListener('click', function(){
    totalScore += 1;
    Score.innerHTML = totalScore;
})

let koekje2Active = false;

Koekje2.addEventListener('click', function(){
    if(koekje2Active === true){
    totalScore += 2;
    Score.innerHTML = totalScore;
}})

let koekje3Active = false;

Koekje3.addEventListener('click', function(){
    if(koekje3Active === true){
    totalScore += 3;
    Score.innerHTML = totalScore;
}})


if (document.body.animate) {
    document.querySelector('#idKoekje1').addEventListener('click', pop);
  }
  function pop (e) {
    if (e.clientX === 0 && e.clientY === 0) {
      const bbox = document.querySelector('#idKoekje1').getBoundingClientRect();
      const x = bbox.left + bbox.width / 2;
      const y = bbox.top + bbox.height / 2;
      for (let i = 0; i < 30; i++) {
        createParticle(x, y);
      }
    } else {
      for (let i = 0; i < 30; i++) {
        createParticle(e.clientX, e.clientY);
      }
    }
  }

  if (document.body.animate) {
    document.querySelector('#idKoekje2').addEventListener('click', pop);
  }
  function pop (e) {
    if (e.clientX === 0 && e.clientY === 0) {
      const bbox = document.querySelector('#idKoekje2').getBoundingClientRect();
      const x = bbox.left + bbox.width / 2;
      const y = bbox.top + bbox.height / 2;
      for (let i = 0; i < 30; i++) {
        createParticle(x, y);
      }
    } else {
      for (let i = 0; i < 30; i++) {
        createParticle(e.clientX, e.clientY);
      }
    }
  }

  if (document.body.animate) {
    document.querySelector('#idKoekje3').addEventListener('click', pop);
  }
  function pop (e) {
    if (e.clientX === 0 && e.clientY === 0) {
      const bbox = document.querySelector('#idKoekje3').getBoundingClientRect();
      const x = bbox.left + bbox.width / 2;
      const y = bbox.top + bbox.height / 2;
      for (let i = 0; i < 30; i++) {
        createParticle(x, y);
      }
    } else {
      for (let i = 0; i < 30; i++) {
        createParticle(e.clientX, e.clientY);
      }
    }
  }

  

  function createParticle (x, y) {
    const particle = document.createElement('particle');
    document.body.appendChild(particle);
    const size = Math.floor(Math.random() * 20 + 5);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
    const destinationX = x + (Math.random() - 0.5) * 2 * 75;
    const destinationY = y + (Math.random() - 0.5) * 2 * 75;
    const animation = particle.animate([
      {
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        opacity: 1
      },
      {
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0
      }
    ], {

      duration: Math.random() * 1000 + 500,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      delay: Math.random() * 200
    });
    animation.onfinish = () => {
      particle.remove();
    };
  }
  
  
    

/* wasbeer vars voor de score */
let raccoonCounter1 = document.getElementById('raccoonBtn1');
let raccoonCounter2 = document.getElementById('raccoonBtn2');
let raccoonCounter3 = document.getElementById('raccoonBtn3');
let raccoonCounter4 = document.getElementById('raccoonBtn4');
let amountofRaccoons = document.getElementById('amountRaccoons');
let raccoonCountvoorTekst = 0;
let raccoonCountCookies = 0;
let raccoonCost = 50;
let raccoonMultiplyer = 2;

let raccoonSound1 = new Audio();
raccoonSound1.src = 'audio/raccoonSoundBtn1.mp3';
let raccoonSound2 = new Audio();
raccoonSound2.src = 'audio/raccoonSoundBtn2.mp3';
let raccoonSound3 = new Audio();
raccoonSound3.src = 'audio/raccoonSoundBtn3.mp3';
let raccoonSound4 = new Audio();
raccoonSound4.src = 'audio/raccoonSoundBtn4.mp3';

/* Hier worden de kosten/score/aantal wasberen berekend, daarna gebruikt in de knoppen */
let addCalcRaccoon = () => {
raccoonCountCookies = parseInt(raccoonCountvoorTekst * raccoonMultiplyer);
document.getElementById('raccoonCookies').innerHTML = "Cookies: " + raccoonCountCookies;
return raccoonCountCookies;
}
let addCalcRaccoonCosts = (raccoonButton) => {
    raccoonCost = parseInt(raccoonCost * raccoonButton);
    document.getElementById('raccoonCosts').innerHTML = "Cost per Raccoon: " + raccoonCost;
    return raccoonCost;
}
let removeCostsfromTotalScoreRaccoon = (hoeveelheid1) => {
    parseInt(totalScore -= raccoonCost * hoeveelheid1);
    Score.innerHTML = totalScore;
    return totalScore;
}
function raccoonCalc1 (){
    if(raccoonCountvoorTekst >= 1){
            parseInt(totalScore += raccoonCountCookies);
            Score.innerHTML = totalScore;
            scoreAdder1(raccoonCountCookies); 
        }};
setInterval(raccoonCalc1, 9000);

function scoreAdder1(addition){
    let raccoonAdd = document.getElementById('raccoonAdd');
    raccoonAdd.innerHTML = "+ " + parseInt(addition) + " Cookies!";
    raccoonAdd.style.animation = "inAndOut 5s 1";
    raccoonAdd.onanimationend = function stopAnimation(){
        raccoonAdd.style.animation = "noinAndOut 1s infinite";
    }
}


/* knoppen voor de wasbeer */
raccoonCounter1.addEventListener('click', function(){
    if(totalScore >= raccoonCost){
        raccoonCountvoorTekst  += 1;
        amountofRaccoons.innerHTML = "Raccoons: " + raccoonCountvoorTekst;
        addCalcRaccoon();
        removeCostsfromTotalScoreRaccoon(1);
        addCalcRaccoonCosts(1.1);
        raccoonSound1.play();
        nextHelper2(raccoonCountvoorTekst);
    }});

raccoonCounter2.addEventListener('click', function(){
    if(totalScore >= raccoonCost*2){
        raccoonCountvoorTekst  += 2;
        amountofRaccoons.innerHTML = "Raccoons: " + raccoonCountvoorTekst;
        addCalcRaccoon();
        removeCostsfromTotalScoreRaccoon(2);
        addCalcRaccoonCosts(1.2);
        raccoonSound2.play();
        nextHelper2(raccoonCountvoorTekst);
    }});

raccoonCounter3.addEventListener('click', function(){
    if(totalScore >= raccoonCost*3){
    raccoonCountvoorTekst  += 3;
    amountofRaccoons.innerHTML = "Raccoons: " + raccoonCountvoorTekst;
    addCalcRaccoon();
    removeCostsfromTotalScoreRaccoon(3);
    addCalcRaccoonCosts(1.3);
    raccoonSound3.play();
    nextHelper2(raccoonCountvoorTekst);
}});

raccoonCounter4.addEventListener('click', function(){
    if(totalScore >= raccoonCost*4){
    raccoonCountvoorTekst  += 4;
    amountofRaccoons.innerHTML = "Raccoons: " + raccoonCountvoorTekst;
    addCalcRaccoon();
    removeCostsfromTotalScoreRaccoon(4);
    addCalcRaccoonCosts(1.4);
    raccoonSound4.play();
    nextHelper2(raccoonCountvoorTekst);
}});


function nextHelper2(amountOfPreviousHelpers){
if(amountOfPreviousHelpers >= 5){
    document.getElementById('helper2').style.opacity = "1.0";
}};

function nextHelper3(amountOfPreviousHelpers){
    if(amountOfPreviousHelpers >= 5){
        document.getElementById('helper3').style.opacity = "1.0";
    }};

function nextHelper4(amountOfPreviousHelpers){
    if(amountOfPreviousHelpers >= 5){
        document.getElementById('helper4').style.opacity = "1.0";
    }};

    function nextHelper5(amountOfPreviousHelpers){
    if(amountOfPreviousHelpers >= 5){
        document.getElementById('helper5').style.opacity = "1.0";
     }};

    function nextHelper6(amountOfPreviousHelpers){
    if(amountOfPreviousHelpers >= 5){
        document.getElementById('helper6').style.opacity = "1.0";
     }};

    function nextHelper7(amountOfPreviousHelpers){
    if(amountOfPreviousHelpers >= 5){
        document.getElementById('helper7').style.opacity = "1.0";
     }};

    function nextHelper8(amountOfPreviousHelpers){
    if(amountOfPreviousHelpers >= 5){
        document.getElementById('helper8').style.opacity = "1.0";
    }};

    function nextHelper9(amountOfPreviousHelpers){
    if(amountOfPreviousHelpers >= 5){
        document.getElementById('helper9').style.opacity = "1.0";
     }};

    function nextHelper10(amountOfPreviousHelpers){
    if(amountOfPreviousHelpers >= 5){
        document.getElementById('helper10').style.opacity = "1.0";
     }};


 /* Marmot vars voor de score  */
let groundhogCounter1 = document.getElementById('groundhogBtn1');
let groundhogCounter2 = document.getElementById('groundhogBtn2');
let groundhogCounter3 = document.getElementById('groundhogBtn3');
let groundhogCounter4 = document.getElementById('groundhogBtn4');
let amountofGroundhogs = document.getElementById('amountGroundhogs');
let groundhogCountvoorTekst = 0;
let groundhogCountCookies = 0;
let groundhogCost = 100;
let groundhogMultiplyer = 4;

let groundhogSound1 = new Audio();
groundhogSound1.src = 'audio/groundhogSoundBtn1.mp3';
let groundhogSound2 = new Audio();
groundhogSound2.src = 'audio/groundhogSoundBtn2.mp3';
let groundhogSound3 = new Audio();
groundhogSound3.src = 'audio/groundhogSoundBtn3.mp3';
let groundhogSound4 = new Audio();
groundhogSound4.src = 'audio/groundhogSoundBtn4.mp3';

/* Hier worden de kosten/score/aantal marmotten berekend, daarna gebruikt in de knoppen */
let addCalcGroundhog = () => {
groundhogCountCookies = parseInt(groundhogCountvoorTekst * groundhogMultiplyer);
document.getElementById('groundhogCookies').innerHTML = "Cookies: " + groundhogCountCookies;
return groundhogCountCookies;
}
let addCalcGroundhogCosts = (groundhogButton) => {
    groundhogCost = parseInt(groundhogCost * groundhogButton);
    document.getElementById('groundhogCosts').innerHTML = "Cost per Groundhog: " + groundhogCost;
    return groundhogCost;
}  
let removeCostsfromTotalScoreGroundhog = ( hoeveelheid2) => {
    parseInt(totalScore -= groundhogCost * hoeveelheid2);
    Score.innerHTML = totalScore;
    return totalScore; 
} 
function groundhogCalc1 (){
    if(groundhogCountvoorTekst >= 1){
            parseInt(totalScore += groundhogCountCookies);
            Score.innerHTML = totalScore; 
            scoreAdder2(groundhogCountCookies);
        }};
setInterval(groundhogCalc1, 12000);

function scoreAdder2(addition){
    let groundhogAdd = document.getElementById('groundhogAdd');
    groundhogAdd.innerHTML = "+ " + parseInt(addition) + " Cookies!";
    groundhogAdd.style.animation = "inAndOut 5s 1";
    groundhogAdd.onanimationend = function stopAnimation(){
        groundhogAdd.style.animation = "noinAndOut 1s infinite";
}}


/* knoppen voor de marmot */
groundhogCounter1.addEventListener('click', function(){
    if(totalScore >= groundhogCost){
        groundhogCountvoorTekst  += 1;
        amountofGroundhogs.innerHTML = "Hogs: " + groundhogCountvoorTekst;
        addCalcGroundhog();
        removeCostsfromTotalScoreGroundhog(1);
        addCalcGroundhogCosts(1.1);
        groundhogSound1.play();
        nextHelper3(groundhogCountvoorTekst);
    }});

groundhogCounter2.addEventListener('click', function(){
    if(totalScore >= groundhogCost*2){
        groundhogCountvoorTekst  += 2;
        amountofGroundhogs.innerHTML = "Hogs: " + groundhogCountvoorTekst;
        addCalcGroundhog();
        removeCostsfromTotalScoreGroundhog(2);
        addCalcGroundhogCosts(1.2);
        groundhogSound2.play();
        nextHelper3(groundhogCountvoorTekst);
    }});

groundhogCounter3.addEventListener('click', function(){
    if(totalScore >= groundhogCost*3){
    groundhogCountvoorTekst  += 3;
    amountofGroundhogs.innerHTML = "Hogs: " + groundhogCountvoorTekst;
    addCalcGroundhog();
    removeCostsfromTotalScoreGroundhog(3);
    addCalcGroundhogCosts(1.3);
    groundhogSound3.play();
    nextHelper3(groundhogCountvoorTekst);

}});

groundhogCounter4.addEventListener('click', function(){
    if(totalScore >= groundhogCost*4){
    groundhogCountvoorTekst  += 4;
    amountofGroundhogs.innerHTML = "Hogs: " + groundhogCountvoorTekst;
    addCalcGroundhog();
    removeCostsfromTotalScoreGroundhog(4);
    addCalcGroundhogCosts(1.4);
    groundhogSound4.play();
    nextHelper3(groundhogCountvoorTekst);
}}); 

 /* Gnome vars voor de score  */
 let gnomeCounter1 = document.getElementById('gnomeBtn1');
 let gnomeCounter2 = document.getElementById('gnomeBtn2');
 let gnomeCounter3 = document.getElementById('gnomeBtn3');
 let gnomeCounter4 = document.getElementById('gnomeBtn4');
 let amountofGnomes = document.getElementById('amountGnomes');
 let gnomeCountvoorTekst = 0;
 let gnomeCountCookies = 0;
 let gnomeCost = 200;
 let gnomeMultiplyer = 7;
 
 let gnomeSound1 = new Audio();
 gnomeSound1.src = 'audio/gnomeSoundBtn1.mp3';
 let gnomeSound2 = new Audio();
 gnomeSound2.src = 'audio/gnomeSoundBtn2.mp3';
 let gnomeSound3 = new Audio();
 gnomeSound3.src = 'audio/gnomeSoundBtn3.mp3';
 let gnomeSound4 = new Audio();
 gnomeSound4.src = 'audio/gnomeSoundBtn4.mp3';
 
 /* Hier worden de kosten/score/aantal gnomes berekend, daarna gebruikt in de knoppen */
 let addCalcGnome = () => {
 gnomeCountCookies = parseInt(gnomeCountvoorTekst * gnomeMultiplyer);
 document.getElementById('gnomeCookies').innerHTML = "Cookies: " + gnomeCountCookies;
 return gnomeCountCookies;
 }
 let addCalcGnomeCosts = (gnomeButton) => {
     gnomeCost = parseInt(gnomeCost * gnomeButton);
     document.getElementById('gnomeCosts').innerHTML = "Cost per Gnome: " + gnomeCost;
     return gnomeCost;
 }  
 let removeCostsfromTotalScoreGnome = (hoeveelheid3) => {
     parseInt(totalScore -= gnomeCost * hoeveelheid3);
     Score.innerHTML = totalScore;
     return totalScore; 
 } 
 function gnomeCalc1 (){
     if(gnomeCountvoorTekst >= 1){
             parseInt(totalScore += gnomeCountCookies);
             Score.innerHTML = totalScore; 
             scoreAdder3(gnomeCountCookies);
         }};
 setInterval(gnomeCalc1, 16000);

 function scoreAdder3(addition){
    let gnomeAdd = document.getElementById('gnomeAdd');
    gnomeAdd.innerHTML = "+ " + parseInt(addition) + " Cookies!";
    gnomeAdd.style.animation = "inAndOut 5s 1";
    gnomeAdd.onanimationend = function stopAnimation(){
        gnomeAdd.style.animation = "noinAndOut 1s infinite";
}
 }
 
 /* knoppen voor de gnome */
 gnomeCounter1.addEventListener('click', function(){
     if(totalScore >= gnomeCost){
         gnomeCountvoorTekst  += 1;
         amountofGnomes.innerHTML = "Gnomes: " + gnomeCountvoorTekst;
         addCalcGnome();
         removeCostsfromTotalScoreGnome(1);
         addCalcGnomeCosts(1.1);
         gnomeSound1.play();
         nextHelper4(gnomeCountvoorTekst);
     }});
 
 gnomeCounter2.addEventListener('click', function(){
     if(totalScore >= gnomeCost*2){
         gnomeCountvoorTekst  += 2;
         amountofGnomes.innerHTML = "Gnomes: " + gnomeCountvoorTekst;
         addCalcGnome();
         removeCostsfromTotalScoreGnome(2);
         addCalcGnomeCosts(1.2);
         gnomeSound2.play();
         nextHelper4(gnomeCountvoorTekst);
     }});
 
 gnomeCounter3.addEventListener('click', function(){
     if(totalScore >= gnomeCost*3){
     gnomeCountvoorTekst  += 3;
     amountofGnomes.innerHTML = "Gnomes: " + gnomeCountvoorTekst;
     addCalcGnome();
     removeCostsfromTotalScoreGnome(3);
     addCalcGnomeCosts(1.3);
     gnomeSound3.play();
     nextHelper4(gnomeCountvoorTekst);
 
 }});
 
 gnomeCounter4.addEventListener('click', function(){
     if(totalScore >= gnomeCost*4){
     gnomeCountvoorTekst  += 4;
     amountofGnomes.innerHTML = "Gnomes: " + gnomeCountvoorTekst;
     addCalcGnome();
     removeCostsfromTotalScoreGnome(4);
     addCalcGnomeCosts(1.4);
     gnomeSound4.play();
     nextHelper4(gnomeCountvoorTekst);
 }}); 

 /* Robot vars voor de score  */
 let robotCounter1 = document.getElementById('robotBtn1');
 let robotCounter2 = document.getElementById('robotBtn2');
 let robotCounter3 = document.getElementById('robotBtn3');
 let robotCounter4 = document.getElementById('robotBtn4');
 let amountofRobots = document.getElementById('amountRobots');
 let robotCountvoorTekst = 0;
 let robotCountCookies = 0;
 let robotCost = 400;
 let robotMultiplyer = 10;
 
 let robotSound1 = new Audio();
 robotSound1.src = 'audio/robotSoundBtn1.mp3';
 let robotSound2 = new Audio();
 robotSound2.src = 'audio/robotSoundBtn2.mp3';
 let robotSound3 = new Audio();
 robotSound3.src = 'audio/robotSoundBtn3.mp3';
 let robotSound4 = new Audio();
 robotSound4.src = 'audio/robotSoundBtn4.mp3';
 
 /* Hier worden de kosten/score/aantal robots berekend, daarna gebruikt in de knoppen */
 let addCalcRobot = () => {
 robotCountCookies = parseInt(robotCountvoorTekst * robotMultiplyer);
 document.getElementById('robotCookies').innerHTML = "Cookies: " + robotCountCookies;
 return robotCountCookies;
 }
 let addCalcRobotCosts = (robotButton) => {
     robotCost = parseInt(robotCost * robotButton);
     document.getElementById('robotCosts').innerHTML = "Cost per Robot: " + robotCost;
     return robotCost;
 }  
 let removeCostsfromTotalScoreRobot = (hoeveelheid4) => {
     parseInt(totalScore -= robotCost * hoeveelheid4);
     Score.innerHTML = totalScore;
     return totalScore; 
 } 
 function robotCalc1 (){
     if(robotCountvoorTekst >= 1){
             parseInt(totalScore += robotCountCookies);
             Score.innerHTML = totalScore; 
             scoreAdder4(robotCountCookies);
         }};
 setInterval(robotCalc1, 20500);

 function scoreAdder4(addition){
    let robotAdd = document.getElementById('robotAdd');
    robotAdd.innerHTML = "+ " + parseInt(addition) + " Cookies!";
    robotAdd.style.animation = "inAndOut 5s 1";
    robotAdd.onanimationend = function stopAnimation(){
        robotAdd.style.animation = "noinAndOut 1s infinite";
}
 }
 
 /* knoppen voor de robot */
 robotCounter1.addEventListener('click', function(){
     if(totalScore >= robotCost){
         robotCountvoorTekst  += 1;
         amountofRobots.innerHTML = "Robots: " + robotCountvoorTekst;
         addCalcRobot();
         removeCostsfromTotalScoreRobot(1);
         addCalcRobotCosts(1.1);
         robotSound1.play();
         nextHelper5(robotCountvoorTekst);
     }});
 
 robotCounter2.addEventListener('click', function(){
     if(totalScore >= robotCost*2){
         robotCountvoorTekst  += 2;
         amountofRobots.innerHTML = "Robots: " + robotCountvoorTekst;
         addCalcRobot();
         removeCostsfromTotalScoreRobot(2);
         addCalcRobotCosts(1.2);
         robotSound2.play();
         nextHelper5(robotCountvoorTekst);
     }});
 
 robotCounter3.addEventListener('click', function(){
     if(totalScore >= robotCost*3){
     robotCountvoorTekst  += 3;
     amountofRobots.innerHTML = "Robots: " + robotCountvoorTekst;
     addCalcRobot();
     removeCostsfromTotalScoreRobot(3);
     addCalcRobotCosts(1.3);
     robotSound3.play();
     nextHelper5(robotCountvoorTekst);
 
 }});
 
 robotCounter4.addEventListener('click', function(){
     if(totalScore >= robotCost*4){
     robotCountvoorTekst  += 4;
     amountofRobots.innerHTML = "Robots: " + robotCountvoorTekst;
     addCalcRobot();
     removeCostsfromTotalScoreRobot(4);
     addCalcRobotCosts(1.4);
     robotSound4.play();
     nextHelper5(robotCountvoorTekst);
 }}); 

 /* Monster vars voor de score  */
 let monsterCounter1 = document.getElementById('monsterBtn1');
 let monsterCounter2 = document.getElementById('monsterBtn2');
 let monsterCounter3 = document.getElementById('monsterBtn3');
 let monsterCounter4 = document.getElementById('monsterBtn4');
 let amountofMonsters = document.getElementById('amountMonsters');
 let monsterCountvoorTekst = 0;
 let monsterCountCookies = 0;
 let monsterCost = 600;
 let monsterMultiplyer = 16;
 
 let monsterSound1 = new Audio();
 monsterSound1.src = 'audio/monsterSoundBtn1.mp3';
 let monsterSound2 = new Audio();
 monsterSound2.src = 'audio/monsterSoundBtn2.mp3';
 let monsterSound3 = new Audio();
 monsterSound3.src = 'audio/monsterSoundBtn3.mp3';
 let monsterSound4 = new Audio();
 monsterSound4.src = 'audio/monsterSoundBtn4.mp3';
 
 /* Hier worden de kosten/score/aantal monsters berekend, daarna gebruikt in de knoppen */
 let addCalcMonster = () => {
 monsterCountCookies = parseInt(monsterCountvoorTekst * monsterMultiplyer);
 document.getElementById('monsterCookies').innerHTML = "Cookies: " + monsterCountCookies;
 return monsterCountCookies;
 }
 let addCalcMonsterCosts = (monsterButton) => {
     monsterCost = parseInt(monsterCost * monsterButton);
     document.getElementById('monsterCosts').innerHTML = "Cost per monster: " + monsterCost;
     return monsterCost;
 }  
 let removeCostsfromTotalScoreMonster = (hoeveelheid5) => {
     parseInt(totalScore -= monsterCost * hoeveelheid5);
     Score.innerHTML = totalScore;
     return totalScore; 
 } 
 function monsterCalc1 (){
     if(monsterCountvoorTekst >= 1){
             parseInt(totalScore += monsterCountCookies);
             Score.innerHTML = totalScore; 
             scoreAdder5(monsterCountCookies);
         }};
 setInterval(monsterCalc1, 32500);

 function scoreAdder5(addition){
    let monsterAdd = document.getElementById('monsterAdd');
    monsterAdd.innerHTML = "+ " + parseInt(addition) + " Cookies!";
    monsterAdd.style.animation = "inAndOut 5s 1";
    monsterAdd.onanimationend = function stopAnimation(){
        monsterAdd.style.animation = "noinAndOut 1s infinite";
}
 }
 
 /* knoppen voor de monster */
 monsterCounter1.addEventListener('click', function(){
     if(totalScore >= monsterCost){
        monsterCountvoorTekst  += 1;
         amountofMonsters.innerHTML = "Monsters: " + monsterCountvoorTekst;
         addCalcMonster();
         removeCostsfromTotalScoreMonster(1);
         addCalcMonsterCosts(1.1);
         monsterSound1.play();
         nextHelper6(monsterCountvoorTekst);
     }});
 
monsterCounter2.addEventListener('click', function(){
     if(totalScore >= monsterCost*2){
        monsterCountvoorTekst  += 2;
         amountofMonsters.innerHTML = "Monsters: " + monsterCountvoorTekst;
         addCalcMonster();
         removeCostsfromTotalScoreMonster(2);
         addCalcMonsterCosts(1.2);
         monsterSound2.play();
         nextHelper6(monsterCountvoorTekst);
     }});
 
monsterCounter3.addEventListener('click', function(){
     if(totalScore >= monsterCost*3){
        monsterCountvoorTekst  += 3;
     amountofMonsters.innerHTML = "Monsters: " + monsterCountvoorTekst;
     addCalcMonster();
     removeCostsfromTotalScoreMonster(3);
     addCalcMonsterCosts(1.3);
     monsterSound3.play();
     nextHelper6(monsterCountvoorTekst);
 
 }});
 
monsterCounter4.addEventListener('click', function(){
     if(totalScore >= monsterCost*4){
        monsterCountvoorTekst  += 4;
     amountofMonsters.innerHTML = "Monsters: " + monsterCountvoorTekst;
     addCalcMonster();
     removeCostsfromTotalScoreMonster(4);
     addCalcMonsterCosts(1.4);
     monsterSound4.play();
     nextHelper6(monsterCountvoorTekst);
 }}); 

 /* Commie vars voor de score  */
 let commieCounter1 = document.getElementById('commieBtn1');
 let commieCounter2 = document.getElementById('commieBtn2');
 let commieCounter3 = document.getElementById('commieBtn3');
 let commieCounter4 = document.getElementById('commieBtn4');
 let amountofCommies = document.getElementById('amountCommies');
 let commieCountvoorTekst = 0;
 let commieCountCookies = 0;
 let commieCost = 900;
 let commieMultiplyer = 20;
 
 let commieSound1 = new Audio();
 commieSound1.src = 'audio/commieSoundBtn1.mp3';
 let commieSound2 = new Audio();
 commieSound2.src = 'audio/commieSoundBtn2.mp3';
 let commieSound3 = new Audio();
 commieSound3.src = 'audio/commieSoundBtn3.mp3';
 let commieSound4 = new Audio();
 commieSound4.src = 'audio/commieSoundBtn4.mp3';
 
 /* Hier worden de kosten/score/aantal commies berekend, daarna gebruikt in de knoppen */
 let addCalcCommie = () => {
 commieCountCookies = parseInt(commieCountvoorTekst * commieMultiplyer);
 document.getElementById('commieCookies').innerHTML = "Cookies: " + commieCountCookies;
 return commieCountCookies;
 }
 let addCalcCommieCosts = (commieButton) => {
     commieCost = parseInt(commieCost * commieButton);
     document.getElementById('commieCosts').innerHTML = "Cost per commie: " + commieCost;
     return commieCost;
 }  
 let removeCostsfromTotalScoreCommie = (hoeveelheid6) => {
     parseInt(totalScore -= commieCost * hoeveelheid6);
     Score.innerHTML = totalScore;
     return totalScore; 
 } 
 function commieCalc1 (){
     if(commieCountvoorTekst >= 1){
             parseInt(totalScore += commieCountCookies);
             Score.innerHTML = totalScore;
             scoreAdder6(commieCountCookies);
         }};
 setInterval(commieCalc1, 40000);

 function scoreAdder6(addition){
    let commieAdd = document.getElementById('commieAdd');
    commieAdd.innerHTML = "+ " + parseInt(addition) + " Cookies!";
    commieAdd.style.animation = "inAndOut 5s 1";
    commieAdd.onanimationend = function stopAnimation(){
        commieAdd.style.animation = "noinAndOut 1s infinite";
    }
}
 
 
 /* knoppen voor de commie */
 commieCounter1.addEventListener('click', function(){
     if(totalScore >= commieCost){
        commieCountvoorTekst  += 1;
         amountofCommies.innerHTML = "Commies: " + commieCountvoorTekst;
         addCalcCommie();
         removeCostsfromTotalScoreCommie(1);
         addCalcCommieCosts(1.1);
         commieSound1.play();
         nextHelper7(commieCountvoorTekst);
     }});
 
commieCounter2.addEventListener('click', function(){
     if(totalScore >= commieCost*2){
        commieCountvoorTekst  += 2;
         amountofCommies.innerHTML = "Commies: " + commieCountvoorTekst;
         addCalcCommie();
         removeCostsfromTotalScoreCommie(2);
         addCalcCommieCosts(1.2);
        commieSound2.play();
        nextHelper7(commieCountvoorTekst);
     }});
 
commieCounter3.addEventListener('click', function(){
     if(totalScore >= commieCost*3){
        commieCountvoorTekst  += 3;
     amountofCommies.innerHTML = "Commies: " + commieCountvoorTekst;
     addCalcCommie();
     removeCostsfromTotalScoreCommie(3);
     addCalcCommieCosts(1.3);
     commieSound3.play();
     nextHelper7(commieCountvoorTekst);
 }});
 
commieCounter4.addEventListener('click', function(){
     if(totalScore >= commieCost*4){
        commieCountvoorTekst  += 4;
     amountofCommies.innerHTML = "Commies: " + commieCountvoorTekst;
     addCalcCommie();
     removeCostsfromTotalScoreCommie(4);
     addCalcCommieCosts(1.4);
    commieSound4.play();
    nextHelper7(commieCountvoorTekst);
 }}); 

/* sergeant vars voor de score */
let sergeantCounter1 = document.getElementById('sergeantBtn1');
let sergeantCounter2 = document.getElementById('sergeantBtn2');
let sergeantCounter3 = document.getElementById('sergeantBtn3');
let sergeantCounter4 = document.getElementById('sergeantBtn4');
let amountofSergeants = document.getElementById('amountSergeants');
let sergeantCountvoorTekst = 0;
let sergeantCountCookies = 0;
let sergeantCost = 1500;
let sergeantMultiplyer = 25;

let sergeantSound1 = new Audio();
sergeantSound1.src = 'audio/sergeantSoundBtn1.mp3';
let sergeantSound2 = new Audio();
sergeantSound2.src = 'audio/sergeantSoundBtn2.mp3';
let sergeantSound3 = new Audio();
sergeantSound3.src = 'audio/sergeantSoundBtn3.mp3';
let sergeantSound4 = new Audio();
sergeantSound4.src = 'audio/sergeantSoundBtn4.mp3';

/* Hier worden de kosten/score/aantal sergeanten berekend, daarna gebruikt in de knoppen */
let addCalcSergeant = () => {
sergeantCountCookies = parseInt(sergeantCountvoorTekst * sergeantMultiplyer);
document.getElementById('sergeantCookies').innerHTML = "Cookies: " + sergeantCountCookies;
return sergeantCountCookies;
}
let addCalcSergeantCosts = (sergeantButton) => {
    sergeantCost = parseInt(sergeantCost * sergeantButton);
    document.getElementById('sergeantCosts').innerHTML = "Cost per Sergeant: " + sergeantCost;
    return sergeantCost;
}
let removeCostsfromTotalScoreSergeant = (hoeveelheid7) => {
    parseInt(totalScore -= sergeantCost * hoeveelheid7);
    Score.innerHTML = totalScore;
    return totalScore;
}
function sergeantCalc1 (){
    if(sergeantCountvoorTekst >= 1){
            parseInt(totalScore += sergeantCountCookies);
            Score.innerHTML = totalScore;
            scoreAdder7(sergeantCountCookies);
        }};
setInterval(sergeantCalc1, 43400);

function scoreAdder7(addition){
    let sergeantAdd = document.getElementById('sergeantAdd');
    sergeantAdd.innerHTML = "+ " + parseInt(addition) + " Cookies!";
    sergeantAdd.style.animation = "inAndOut 5s 1";
    sergeantAdd.onanimationend = function stopAnimation(){
        sergeantAdd.style.animation = "noinAndOut 1s infinite";
    }
}

/* knoppen voor de sergeant */
sergeantCounter1.addEventListener('click', function(){
    if(totalScore >= sergeantCost){
        sergeantCountvoorTekst  += 1;
        amountofSergeants.innerHTML = "Sergeants: " + sergeantCountvoorTekst;
        addCalcSergeant();
        removeCostsfromTotalScoreSergeant(1);
        addCalcSergeantCosts(1.1);
        sergeantSound1.play();
        nextHelper8(sergeantCountvoorTekst);
    }});

sergeantCounter2.addEventListener('click', function(){
    if(totalScore >= sergeantCost*2){
        sergeantCountvoorTekst  += 2;
        amountofSergeants.innerHTML = "Sergeants: " + sergeantCountvoorTekst;
        addCalcSergeant();
        removeCostsfromTotalScoreSergeant(2);
        addCalcSergeantCosts(1.2);
        sergeantSound2.play();
        nextHelper8(sergeantCountvoorTekst);
    }});

sergeantCounter3.addEventListener('click', function(){
    if(totalScore >= sergeantCost*3){
    sergeantCountvoorTekst  += 3;
    amountofSergeants.innerHTML = "Raccoons: " + sergeantCountvoorTekst;
    addCalcRaccoon();
    removeCostsfromTotalScoreSergeant(3);
    addCalcRaccoonCosts(1.3);
    sergeantSound3.play();
    nextHelper8(sergeantCountvoorTekst);
}});

sergeantCounter4.addEventListener('click', function(){
    if(totalScore >= sergeantCost*4){
    sergeantCountvoorTekst  += 4;
    amountofSergeants.innerHTML = "Sergeants: " + sergeantCountvoorTekst;
    addCalcSergeant();
    removeCostsfromTotalScoreSergeant(4);
    addCalcSergeantCosts(1.4);
    sergeantSound4.play();
    nextHelper8(sergeantCountvoorTekst);
}});

/* sait vars voor de score */
let saitCounter1 = document.getElementById('saitBtn1');
let saitCounter2 = document.getElementById('saitBtn2');
let saitCounter3 = document.getElementById('saitBtn3');
let saitCounter4 = document.getElementById('saitBtn4');
let amountofSaits = document.getElementById('amountSaits');
let saitCountvoorTekst = 0;
let saitCountCookies = 0;
let saitCost = 2000;
let saitMultiplyer = 30;

let saitSound1 = new Audio();
saitSound1.src = 'audio/saitSoundBtn1.mp3';
let saitSound2 = new Audio();
saitSound2.src = 'audio/saitSoundBtn2.mp3';
let saitSound3 = new Audio();
saitSound3.src = 'audio/saitSoundBtn3.mp3';
let saitSound4 = new Audio();
saitSound4.src = 'audio/saitSoundBtn4.mp3';

/* Hier worden de kosten/score/aantal saits berekend, daarna gebruikt in de knoppen */
let addCalcSait = () => {
saitCountCookies = parseInt(saitCountvoorTekst * saitMultiplyer);
document.getElementById('saitCookies').innerHTML = "Cookies: " + saitCountCookies;
return saitCountCookies;
}
let addCalcSaitCosts = (saitButton) => {
    saitCost = parseInt(saitCost * saitButton);
    document.getElementById('saitCosts').innerHTML = "Cost per Sait: " + saitCost;
    return saitCost;
}
let removeCostsfromTotalScoreSait = (hoeveelheid8) => {
    parseInt(totalScore -= saitCost * hoeveelheid8);
    Score.innerHTML = totalScore;
    return totalScore;
}
function saitCalc1 (){
    if(saitCountvoorTekst >= 1){
            parseInt(totalScore += saitCountCookies);
            Score.innerHTML = totalScore;
            scoreAdder8(saitCountCookies);
        }};
setInterval(saitCalc1, 52000);

function scoreAdder8(addition){
    let saitAdd = document.getElementById('saitAdd');
    saitAdd.innerHTML = "+ " + parseInt(addition) + " Cookies!";
    saitAdd.style.animation = "inAndOut 5s 1";
    saitAdd.onanimationend = function stopAnimation(){
        saitAdd.style.animation = "noinAndOut 1s infinite";
    }
}


/* knoppen voor Sait */
saitCounter1.addEventListener('click', function(){
    if(totalScore >= saitCost){
        saitCountvoorTekst  += 1;
        amountofSaits.innerHTML = "Saits: " + saitCountvoorTekst;
        addCalcSait();
        removeCostsfromTotalScoreSait(1);
        addCalcSaitCosts(1.1);
        saitSound1.play();
        nextHelper9(saitCountvoorTekst);
    }});

saitCounter2.addEventListener('click', function(){
    if(totalScore >= saitCost*2){
        saitCountvoorTekst  += 2;
        amountofSaits.innerHTML = "Saits: " + saitCountvoorTekst;
        addCalcSait();
        removeCostsfromTotalScoreSait(2);
        addCalcSaitCosts(1.2);
        saitSound2.play();
        nextHelper9(saitCountvoorTekst);
    }});

saitCounter3.addEventListener('click', function(){
    if(totalScore >= saitCost*3){
    saitCountvoorTekst  += 3;
    amountofSaits.innerHTML = "Saits: " + saitCountvoorTekst;
    addCalcSait();
    removeCostsfromTotalScoreSait(3);
    addCalcSaitCosts(1.3);
    saitSound3.play();
    nextHelper9(saitCountvoorTekst);
}});

saitCounter4.addEventListener('click', function(){
    if(totalScore >= saitCost*4){
    saitCountvoorTekst  += 4;
    amountofSaits.innerHTML = "Saits: " + saitCountvoorTekst;
    addCalcSait();
    removeCostsfromTotalScoreSait(4);
    addCalcSaitCosts(1.4);
    saitSound4.play();
    nextHelper9(saitCountvoorTekst);
}});


 /* Gungaginga vars voor de score  */
 let gungagingaCounter1 = document.getElementById('gungagingaBtn1');
 let gungagingaCounter2 = document.getElementById('gungagingaBtn2');
 let gungagingaCounter3 = document.getElementById('gungagingaBtn3');
 let gungagingaCounter4 = document.getElementById('gungagingaBtn4');
 let amountofGungagingas = document.getElementById('amountGungagingas');
 let gungagingaCountvoorTekst = 0;
 let gungagingaCountCookies = 0;
 let gungagingaCost = 4000;
 let gungagingaMultiplyer = 40;
 
 let gungagingaSound1 = new Audio();
 gungagingaSound1.src = 'audio/gungagingaSoundBtn1.mp3';
 let gungagingaSound2 = new Audio();
 gungagingaSound2.src = 'audio/gungagingaSoundBtn2.mp3';
 let gungagingaSound3 = new Audio();
 gungagingaSound3.src = 'audio/gungagingaSoundBtn3.mp3';
 let gungagingaSound4 = new Audio();
 gungagingaSound4.src = 'audio/gungagingaSoundBtn4.mp3';
 
 /* Hier worden de kosten/score/aantal gungagingas berekend, daarna gebruikt in de knoppen */
 let addCalcGungaginga = () => {
gungagingaCountCookies = parseInt(gungagingaCountvoorTekst * gungagingaMultiplyer);
 document.getElementById('gungagingaCookies').innerHTML = "Cookies: " + gungagingaCountCookies;
 return gungagingaCountCookies;
 }
 let addCalcGungagingaCosts = (gungagingaButton) => {
    gungagingaCost = parseInt(gungagingaCost * gungagingaButton);
     document.getElementById('gungagingaCosts').innerHTML = "Cost per Gunga: " + gungagingaCost;
     return gungagingaCost;
 }  
 let removeCostsfromTotalScoreGungaginga = (hoeveelheid9) => {
     parseInt(totalScore -= gungagingaCost * hoeveelheid9);
     Score.innerHTML = totalScore;
     return totalScore; 
 } 
 function gungagingaCalc1 (){
     if(gungagingaCountvoorTekst >= 1){
             parseInt(totalScore += gungagingaCountCookies);
             Score.innerHTML = totalScore; 
             scoreAdder9(gungagingaCountCookies);
         }};
 setInterval(gungagingaCalc1, 55000);

 function scoreAdder9(addition){
    let gungagingaAdd = document.getElementById('gungagingaAdd');
    gungagingaAdd.innerHTML = "+ " + parseInt(addition) + " Cookies!";
    gungagingaAdd.style.animation = "inAndOut 5s 1";
    gungagingaAdd.onanimationend = function stopAnimation(){
        gungagingaAdd.style.animation = "noinAndOut 1s infinite";
    }
}
 
 
 /* knoppen voor de gungaginga */
 gungagingaCounter1.addEventListener('click', function(){
     if(totalScore >= gungagingaCost){
        gungagingaCountvoorTekst  += 1;
         amountofGungagingas.innerHTML = "Gungas: " + gungagingaCountvoorTekst;
         addCalcGungaginga();
         removeCostsfromTotalScoreGungaginga(1);
         addCalcGungagingaCosts(1.1);
         gungagingaSound1.play();
         nextHelper10(gungagingaCountvoorTekst);
     }});
 
gungagingaCounter2.addEventListener('click', function(){
     if(totalScore >=gungagingaCost*2){
        gungagingaCountvoorTekst  += 2;
         amountofGungagingas.innerHTML = "Gungas: " + gungagingaCountvoorTekst;
         addCalcGungaginga();
         removeCostsfromTotalScoreGungaginga(2);
         addCalcGungagingaCosts(1.2);
         gungagingaSound2.play();
         nextHelper10(gungagingaCountvoorTekst);
     }});
 
gungagingaCounter3.addEventListener('click', function(){
     if(totalScore >= gungagingaCost*3){
        gungagingaCountvoorTekst  += 3;
     amountofGungagingas.innerHTML = "Gungas: " + gungagingaCountvoorTekst;
     addCalcGungaginga();
     removeCostsfromTotalScoreGungaginga(3);
     addCalcGungagingaCosts(1.3);
     gungagingaSound3.play();
     nextHelper10(gungagingaCountvoorTekst);
 
 }});
 
gungagingaCounter4.addEventListener('click', function(){
     if(totalScore >= gungagingaCost*4){
        gungagingaCountvoorTekst  += 4;
     amountofGungagingas.innerHTML = "Gungas: " + gungagingaCountvoorTekst;
     addCalcGungaginga();
     removeCostsfromTotalScoreGungaginga(4);
     addCalcGungagingaCosts(1.4);
     gungagingaSound4.play();
     nextHelper10(gungagingaCountvoorTekst);
 }}); 



  /* Booga vars voor de score  */
  let boogaCounter1 = document.getElementById('boogaBtn1');
  let boogaCounter2 = document.getElementById('boogaBtn2');
  let boogaCounter3 = document.getElementById('boogaBtn3');
  let boogaCounter4 = document.getElementById('boogaBtn4');
  let amountofBoogas = document.getElementById('amountBoogas');
  let boogaCountvoorTekst = 0;
  let boogaCountCookies = 0;
  let boogaCost = 5000;
  let boogaMultiplyer = 45;
  
  let boogaSound1 = new Audio();
  boogaSound1.src = 'audio/boogaSoundBtn1.mp3';
  let boogaSound2 = new Audio();
  boogaSound2.src = 'audio/boogaSoundBtn2.mp3';
  let boogaSound3 = new Audio();
  boogaSound3.src = 'audio/boogaSoundBtn3.mp3';
  let boogaSound4 = new Audio();
  boogaSound4.src = 'audio/boogaSoundBtn4.mp3';
  
  /* Hier worden de kosten/score/aantal boogas berekend, daarna gebruikt in de knoppen */
  let addCalcBooga = () => {
    boogaCountCookies = parseInt(boogaCountvoorTekst * boogaMultiplyer);
  document.getElementById('boogaCookies').innerHTML = "Cookies: " + boogaCountCookies;
  return boogaCountCookies;
  }
  let addCalcBoogaCosts = (boogaButton) => {
    boogaCost = parseInt(boogaCost * boogaButton);
      document.getElementById('boogaCosts').innerHTML = "Cost per Yoshi: " + boogaCost;
      return boogaCost;
  }  
  let removeCostsfromTotalScoreBooga = (hoeveelheid10) => {
      parseInt(totalScore -= boogaCost * hoeveelheid10);
      Score.innerHTML = totalScore;
      return totalScore; 
  } 
  function boogaCalc1 (){
      if(boogaCountvoorTekst >= 1){
              parseInt(totalScore += boogaCountCookies);
              Score.innerHTML = totalScore; 
              scoreAdder10(boogaCountCookies);
          }};
  setInterval(boogaCalc1, 63100);

  function scoreAdder10(addition){
    let boogaAdd = document.getElementById('boogaAdd');
    boogaAdd.innerHTML = "+ " + parseInt(addition) + " Cookies!";
    boogaAdd.style.animation = "inAndOut 5s 1";
    boogaAdd.onanimationend = function stopAnimation(){
        boogaAdd.style.animation = "noinAndOut 1s infinite";
    }
}
  
  /* knoppen voor de booga */
  boogaCounter1.addEventListener('click', function(){
      if(totalScore >= boogaCost){
        boogaCountvoorTekst  += 1;
          amountofBoogas.innerHTML = "Yoshis: " + boogaCountvoorTekst;
          addCalcBooga();
          removeCostsfromTotalScoreBooga(1);
          addCalcBoogaCosts(1.1);
          boogaSound1.play();
      }});
  
      boogaCounter2.addEventListener('click', function(){
      if(totalScore >=boogaCost*2){
        boogaCountvoorTekst  += 2;
          amountofBoogas.innerHTML = "Yoshis: " + boogaCountvoorTekst;
          addCalcBooga();
          removeCostsfromTotalScoreBooga(2);
          addCalcBoogaCosts(1.2);
          boogaSound2.play();
      }});
  
      boogaCounter3.addEventListener('click', function(){
      if(totalScore >= boogaCost*3){
        boogaCountvoorTekst  += 3;
      amountofBoogas.innerHTML = "Yoshis: " + boogaCountvoorTekst;
      addCalcBooga();
      removeCostsfromTotalScoreBooga(3);
      addCalcBoogaCosts(1.3);
      boogaSound3.play();
  
  }});
  
  boogaCounter4.addEventListener('click', function(){
      if(totalScore >= boogaCost*4){
        boogaCountvoorTekst  += 4;
      amountofBoogas.innerHTML = "Yoshis: " + boogaCountvoorTekst;
      addCalcBooga();
      removeCostsfromTotalScoreBooga(4);
      addCalcBoogaCosts(1.4);
      boogaSound4.play();
  }}); 


  /* Upgrades */
  let upSound1 = new Audio();
  upSound1.src = 'audio/upgradeSound1.mp3';
  let upSound2 = new Audio();
  upSound2.src = 'audio/upgradeSound2.mp3';
  let upSound3 = new Audio();
  upSound3.src = 'audio/upgradeSound3.mp3';


  let buyUp1 = document.getElementById('buyUpgrade1');
  let upgradeDarkCookie = document.getElementById('upgrade1'); 
  let buyUp1Cost = 200;

  buyUp1.addEventListener('click', function(){
    if(totalScore >= buyUp1Cost){
        koekje2Active = true;
        Koekje2.style.opacity = "1.0";
        totalScore -= buyUp1Cost;
        Score.innerHTML = totalScore;
        upSound1.play();
        upgradeDarkCookie.remove();
    }
    });

    let buyUp2 = document.getElementById('buyUpgrade2');
    let upgradeWhiteCookie = document.getElementById('upgrade2'); 
    let buyUp2Cost = 5000;
  
    buyUp2.addEventListener('click', function(){
      if(totalScore >= buyUp2Cost){
          koekje3Active = true;
          Koekje3.style.opacity = "1.0";
          totalScore -= buyUp2Cost;
          Score.innerHTML = totalScore;
          upSound2.play();
          upgradeWhiteCookie.remove();
      }
      });
      
      let buyUp3 = document.getElementById('buyUpgrade3');
      let upgradeRaccoon = document.getElementById('upgrade3'); 
      let buyUp3Cost = 400;

      buyUp3.addEventListener('click', function(){
        if(totalScore >= buyUp3Cost){
            raccoonMultiplyer = parseInt(raccoonMultiplyer*2);
            addCalcRaccoon();
            totalScore -= buyUp3Cost;
            Score.innerHTML = totalScore;
            upSound3.play();
            upgradeRaccoon.remove();
        }
        });
        
      let buyUp4 = document.getElementById('buyUpgrade4');
      let upgradeGroundhog = document.getElementById('upgrade4'); 
      let buyUp4Cost = 800;
    
      buyUp4.addEventListener('click', function(){
        if(totalScore >= buyUp4Cost){
            groundhogMultiplyer = parseInt(groundhogMultiplyer*2);
            addCalcGroundhog();
            totalScore -= buyUp4Cost;
            Score.innerHTML = totalScore;
            upSound1.play();
            upgradeGroundhog.remove();
        }
        });

      let buyUp5 = document.getElementById('buyUpgrade5');
      let upgradeGnome = document.getElementById('upgrade5'); 
      let buyUp5Cost = 1200;
    
      buyUp5.addEventListener('click', function(){
        if(totalScore >= buyUp5Cost){
            gnomeMultiplyer = parseInt(gnomeMultiplyer*2);
            addCalcGnome();
            totalScore -= buyUp5Cost;
            Score.innerHTML = totalScore;
            upSound2.play();
            upgradeGnome.remove();
        }
        });

      let buyUp6 = document.getElementById('buyUpgrade6');
      let upgradeRobot = document.getElementById('upgrade6'); 
      let buyUp6Cost = 2000;
    
      buyUp6.addEventListener('click', function(){
        if(totalScore >= buyUp6Cost){
            robotMultiplyer = parseInt(robotMultiplyer*2);
            addCalcRobot();
            totalScore -= buyUp6Cost;
            Score.innerHTML = totalScore;
            upSound3.play();
            upgradeRobot.remove();
        }
        });

      let buyUp7 = document.getElementById('buyUpgrade7');
      let upgradeMonster = document.getElementById('upgrade7'); 
      let buyUp7Cost = 3500;
    
      buyUp7.addEventListener('click', function(){
        if(totalScore >= buyUp7Cost){
            monsterMultiplyer = parseInt(monsterMultiplyer*2);
            addCalcMonster();
            totalScore -= buyUp7Cost;
            Score.innerHTML = totalScore;
            upSound1.play();
            upgradeMonster.remove();
        }
        });
 
      let buyUp8 = document.getElementById('buyUpgrade8');
      let upgradeCommie = document.getElementById('upgrade8'); 
      let buyUp8Cost = 6000;
    
      buyUp8.addEventListener('click', function(){
        if(totalScore >= buyUp8Cost){
            commieMultiplyer = parseInt(commieMultiplyer*2);
            addCalcCommie();
            totalScore -= buyUp8Cost;
            Score.innerHTML = totalScore;
            upSound2.play();
            upgradeCommie.remove();
        }
        });
   
      let buyUp9 = document.getElementById('buyUpgrade9');
      let upgradeSergeant = document.getElementById('upgrade9'); 
      let buyUp9Cost = 8000;

      buyUp9.addEventListener('click', function(){
        if(totalScore >= buyUp9Cost){
            sergeantMultiplyer = parseInt(sergeantMultiplyer*2);
            addCalcSergeant();
            totalScore -= buyUp9Cost;
            Score.innerHTML = totalScore;
            upSound3.play();
            upgradeSergeant.remove();
        }
        });

      let buyUp10 = document.getElementById('buyUpgrade10');
      let upgradeSait = document.getElementById('upgrade10'); 
      let buyUp10Cost = 10000;
    
      buyUp10.addEventListener('click', function(){
        if(totalScore >= buyUp10Cost){
            saitMultiplyer = parseInt(saitMultiplyer*2);
            addCalcSait();
            totalScore -= buyUp10Cost;
            Score.innerHTML = totalScore;
            upSound1.play();
            upgradeSait.remove();
        }
        });

      let buyUp11 = document.getElementById('buyUpgrade11');
      let upgradeGungaginga = document.getElementById('upgrade11'); 
      let buyUp11Cost = 12000;
    
      buyUp11.addEventListener('click', function(){
        if(totalScore >= buyUp11Cost){
            gungagingaMultiplyer = parseInt(gungagingaMultiplyer*2);
            addCalcGungaginga();
            totalScore -= buyUp11Cost;
            Score.innerHTML = totalScore;
            upSound2.play();
            upgradeGungaginga.remove();
        }
        });

      let buyUp12 = document.getElementById('buyUpgrade12');
      let upgradeBooga = document.getElementById('upgrade12'); 
      let buyUp12Cost = 15000;
    
      buyUp12.addEventListener('click', function(){
        if(totalScore >= buyUp12Cost){
            boogaMultiplyer = parseInt(boogaMultiplyer*2);
            addCalcBooga();
            totalScore -= buyUp12Cost;
            Score.innerHTML = totalScore;
            upSound3.play();
            upgradeBooga.remove();
        }
        });