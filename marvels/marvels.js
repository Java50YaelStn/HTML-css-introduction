const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
let letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
let wordLettersElement;
let trials=document.getElementsByClassName("trials")[0];
let lengthWord=0;
let  anyNumber=0;
const questionsWords = [["There is a mother, but is there?", "pappy"], ["Growing on an apple tree","apple"],["There is in every house, they write for him","table"],["A precious metal","gold"],["Vampires are killed in movies using this material.","silver"]];
let arrayStock=[];
let start = confirm(`start the game?`);
if (start) {
    startGame();
}
let currentIndex = 0;
let initialLettersNumber;
let remainedLettersNumber;
function startGame(){
   wordInputElement.setAttribute("readonly","true");
   wordInputElement.value="";
   letterInputElement.value="";
   letterInputElement.removeAttribute("readonly");
    remainedLettersElement.innerHTML =getWordDivs();
    playAgain.style.display='none'
    resultMessage.innerHTML='';
}
function getWordDivs() {
  
    anyNumber=Math.trunc(Math.random() * questionsWords.length);
    console.log(questionsWords[anyNumber][1]);
    lengthWord=Math.round(questionsWords[anyNumber][1].length*0.3);
    trials.innerHTML=`number of trial ${lengthWord}`;
    console.log(lengthWord);
    questionElement.innerHTML = `Question: ${questionsWords[anyNumber][0]}`;
    const arrayWord = Array.from(questionsWords[anyNumber][1]);
   let str = arrayWord.reduce(function (res) {
        res = res + '<div class="letter"></div>'
        return res;
    },'');
return str;
}
function takeChance() {
    let compareLetters=letterInputElement.value; 
    const arrayWord = Array.from(questionsWords[anyNumber][1]);
    let arrayIndex2=arrayWord.reduce(function(a,b,c){
if (compareLetters==b) {
    a.push(c);
    
}
return a;
    },[]);
for (let i = 0; i < arrayIndex2.length; i++) {
    arrayStock.push(arrayIndex2[i]);
    
}
let setArray= new Set(arrayStock);
let setArray1 = Array.from(setArray);
console.log(setArray1);
let letterDiv=document.getElementsByClassName("letter");
for (let i = 0; i < letterDiv.length; i++) {
    if (arrayStock.includes(i)) {
       letterDiv[i].classList.add("showLetter");
       letterDiv[i].innerHTML=`${questionsWords[anyNumber][1][i]}`;
    }
}
 if (lengthWord==1) {
    wordInputElement.removeAttribute("readonly");
    letterInputElement.value="";
    letterInputElement.setAttribute("readonly","true");  
 }
 if(questionsWords[anyNumber][1]==wordInputElement.value&& lengthWord==0) {
alert(`you won`);
playAgain.style.display="block";
arrayStock=[];
resultMessage.innerHTML = "Вы победили, можете сыграть еще!!! "
let question = confirm("Продолжаете?");
if(question==true)
startGame();
else alert("Всего вам хорошего!!!");
    }
    else if (questionsWords[anyNumber][1]!=wordInputElement.value&& lengthWord==0) {
alert(`you lose`); playAgain.style.display="block"; 
startGame();  

    }
 
    lengthWord--;
    trials.innerHTML=`number of trial ${lengthWord}`;
}
