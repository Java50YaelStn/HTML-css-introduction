// //Task2
// function getNumbersWithDigitAmount(digitAmount,array) {
//  let arrayNew=array.filter(t=>Math.pow(10,digitAmount-1)<t&&t<Math.pow(10,digitAmount));
//  return arrayNew;   
// }
// let digitAmount=3;
// let array1 =[100,200,567,764,987,32,54,12,4,3,0,2,5432];
// // let array2=[];

// // for (let i = 0; i < array1.length; i++) {
// // if (Math.pow(10,digitAmount-1)<array1[i]&&array1[i]<Math.pow(10,digitAmount)) {
// //    array2.push(array1[i]); 
// // }    
// // }
// // console.log(array2);
// let array=getNumbersWithDigitAmount(digitAmount,array1);
// console.log(array);

//Task1
let str1= "banana";
let str2= "matanannn";

function coloringString(str1,str2) {
    while (str1.length!=str2.length) {
        str1=prompt("enter another word!");
        str2=prompt("enter another word");
    }
    let arrayNewColor=[];
for (let i = 0; i < str2.length; i++) {
if (str1.includes(str2.charAt(i))&&str1.charAt(i)!=str2.charAt(i)) {
    //s help metod includes mi opredelaem est li v stroke str1 simvol iz stroki str2
    //i pri uslovii 4to poradkovie nomera etix simvolov ne doljni sovpadat
    
    arrayNewColor.push("yellow");
}    
 else if (str1.charAt(i)==str2.charAt(i)) {
    arrayNewColor.push("green");
 }   
 else{
 arrayNewColor.push("red");
}
}
  return arrayNewColor; 
}
let arrayColor=coloringString(str1,str2);
console.log(arrayColor);

