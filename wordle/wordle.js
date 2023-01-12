//references to DOM elements
const guessInputElement = document.querySelector(".guess-input");
console.log(guessInputElement);
const guessLettersElement = document.querySelector(".guess-letters");
let lettersDivs;
console.log(lettersDivs);
const trialsElement = document.querySelector(".trials-remained");//obrash k elementy trials
const gameResultElement = document.querySelector(".game-result");
const playAgainElement = document.querySelector(".play-again");
//varibales required for JS logic
const wordsForGuess = ["pappy", "apple", "table", "gold", "silver", "index",
 "script", "peace", "picture"];
 let trials; 
 let word;
 let flGameOver = false;
 //functions
 function startGame() {
     word = getWord();//vernuli slovo slu4aynoe iz 10-y stro4ki iz massiva slov
     fillLettersDivs();
     console.log(lettersDivs);
     flGameOver = false;
     trials = word.length + 1;
     playAgainElement.style.display = "none";
     gameResultElement.innerHTML = "";
     trialsElement.innerHTML = `remained trials ${trials}`;
//stroke prisvaivay dinamich peremennuu kotoraya postoanno menaetsya 
 }
 function getWord() {
    const index = Math.trunc(Math.random() * wordsForGuess.length);
    return wordsForGuess[index];
 }
 function fillLettersDivs() {
    const arrayWord = Array.from(word);//massiv bukv iz slova iz 17 stro4ki
    console.log(arrayWord);
    //pomenat soderjimoe
    //reduce rabotaet stolko raz skolko dlina massiva iz 30 stro4ki
    //cur - eto elementi massiva - bukvi
    //innerHtml - eto izmenenie soderjimgo elementa
    guessLettersElement.innerHTML = arrayWord.reduce(function (res, cur) {
        res = res + '<div class="letter"></div>';
        console.log(cur);
        //res-eto stroka
        return res;
    },'');
    lettersDivs = document.querySelectorAll(".letter");
 }
 function onChange() {
    if(flGameOver) {
        alert("game is over, press play-again");
    } else {
        const trialWord = guessInputElement.value;
        console.log(trialWord);
        trials--;
        if (trials==0) {flGameOver=true;  
            finishGame();           
        }
        trialsElement.innerHTML = `remained trials ${trials}`;
        if (trialWord.length != word.length) {
            alert("wrong number of letters");
        } else {
            coloringWord(trialWord);
        }
    }
 }
 function coloringWord(trialWord) {
    const arWord = Array.from(trialWord);//massiv simvolov
    arWord.forEach(function(letter, index){//obras k kajdomu elementu
        lettersDivs[index].innerHTML = letter;//menyaem soderjimoe kvadratika
        lettersDivs[index].style.color = getColor(letter, index);//konkretnomu kvadratu prisvaev zvet
    })
 }
 function getColor(letter, index) {
    let res = "red";
    if (word.includes(letter)) {
        res = word[index] == letter ? "green" : "yellow";
    }
    return res;
 }
 function finishGame() {
    playAgainElement.style.cssText = `
    display:block;
    width:100px;
    height:100px;
    margin-left: 50%;
    color: brown;
    background-color:coral;
    `;// pozvolaet otobrazit knopku
 }

 //innerHTML menaet soderjimoe kontenta
//  document.getElementById("color").innerHTML="gold";
//  function changeColor() {
//     document.getElementById("color").innerHTML=`<img src="https://www.iconsdb.com/icons/preview/red/facebook-4-xxl.png" alt="">`;
//  }
 //actions
 startGame(); //kogda zagruj brauzer zapusk start game

