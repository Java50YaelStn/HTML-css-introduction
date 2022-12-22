//The Task#1
let a = +prompt ("enter any number");
function getDigitsum(number) {
    console.log(typeof number);
 let str=String(number);
 console.log(typeof str);
let array = str.split("");
console.log(array);
let result=0;
let minus=0;
if(array[0]=="-"){minus=1;}
for (let i = minus; i < array.length; i++) {
    if (array[i]== `.`){break;}
    else
    (result+=Number(array[i])); //!!! preobraz number v 4islo
}
return result;   
}
let sum = getDigitsum (a);
console.log("result =" + sum);

// //The Task#2
let str1=prompt("enter");
function computeExpression(p) {
return eval(p);   
}
let res=computeExpression(str1);
console.log(res);

// //The Task#3
function printAnanas() {
let str2="A";
let str3="S";
let n=String.fromCharCode(str2.charCodeAt()+13);
let str4=str2+n+str2+n+str2+str3;
let str5=str4.toLowerCase();
console.log(str5);
}
printAnanas();    

//The Task#4
let s=+prompt("enter any number");
function reverse (number) {
   let str6=String(number);
   let array=str6.split("");
   let newArray=[];
   let l=array.length-1;
   for (let index = 1,j=array.length-1; index < array.length; index++,j--) {
    if(array[index]=="."){l=index;}
}
   if(array[0]=="-"){
   
    newArray.push(array[0]);
    for (let index = 1,j=l; index < array.length,j>0; index++,j--) {
        if(array[index]=="."){l=index;}
        newArray.push(array[j])  
    }
   }
else {
    for (let index = 0,j=l; index < array.length,j>=0; index++,j--) {
        newArray.push(array[j])  
    }
}
let k=newArray.toString().replaceAll(/[\s.,%]/g, '');
return k;
}
let str=reverse(s);
console.log(str);