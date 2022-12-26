// let str = "123m"
// let num = parseInt(str) + 10 + 'm';
// let str1 = "js.5";
// let numInt = parseInt(str1, 32);
// let numFloat = parseFloat(str1);
function myParseInt(str, base) {
    base = base || 10;
    let res = 0;
    // let start=0;
    // if (str[0]==`-`){start=1;}
    // else 
    // start=0;

    let start=str[0]==`-`?1:0;
    let j =0;

    for (let index = start; index < str.length; index++) {
     if (!(str[index].charCodeAt()>47 && str[index].charCodeAt()<58)) {
        j=index;break;
     }      
    }
    str=str.substring(0,j);//obrezaet ot 0 do j
    
    for(let i = start; i < str.length; i++) {
            res = res * base + getCode(str[i]);//ne ponyatno
    }
    if (str[0]==`-`) {
        res*=-1;
    }
    return res;
}
function getCode(symbol) {
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();
    const res = symbol <= '9'? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}



let str1 = "-123a";
// let str2 = "123";
// let str22 = "Java";
// let str3 = "123m"
// let str4 = "123.5"
// let num = parseInt(str1, 16);
let myNum = myParseInt(str1, 10);

// num = parseInt(str2);
// myNum = myParseInt(str2);
// num = parseInt(str22, 36);
// myNum = myParseInt(str22, 36);
// num = parseInt(str3);
// myNum = myParseInt(str3);
// num = parseInt(str4);
// myNum = myParseInt(str4);
// let number = 255;
// let str = "" + number;
// str = number.toString(36);
function myToString(number, base) {
    let res = '';
    base = base || 10;

    number1=String(number);
    let a = number1[0]=='-'?"-":"";
    let fr = number1.indexOf(".")==-1?"":number1.substring(number1.indexOf("."));
 
    

    number = Math.trunc(Math.abs(number));
    do {
        const digit = number % base;
        const symbol = getSymbol(digit);
        res = symbol + res;
        number = Math.trunc(number / base);


    }while(number);
    return a+res+fr;


}
function getSymbol(digit) {
    const codeA = 'a'.charCodeAt();
    let symbol;
   if(digit < 10) {
    symbol = "" + digit;
   } else {
     const codeAscii = digit - 10 + codeA;
     symbol = String.fromCharCode(codeAscii);
   }
   return symbol;

}
let num100 = -990500.07;
let myStr100 = myToString(num100);
console.log(myStr100);

let str100 = num100.toString();
// let myStr100 = myToString(num100);
str100 = num100.toString(36);
myStr100 = myToString(num100, 36);
num100 = 123.45;
str100 = num100.toString(16);
myStr100 = myToString(num100, 16);
