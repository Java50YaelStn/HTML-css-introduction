let mas = [-100,200,333,234,345,282,-123];

//task 1.1
function evenOddSort(array) {
return array.filter(p=>p%2==0).concat(array.filter(p=>p%2!=0));

}
//task 1.2
let mas1 = evenOddSort(mas);
function oddEvenSort(array) {
   return array.filter(p=>p%2!=0).concat(array.filter(p=>p%2==0));

}
//task 1.3
let mas2 = oddEvenSort(mas);
function evenAscOddDesc(array) {
   let mas_ch = array.sort(function (a,b) {return a-b;}).filter(p=>p%2==0);
   
let mas_ch1 = array.sort(function (a,b) {return b-a;}).filter(p=>p%2!=0);
return mas_ch.concat(mas_ch1);
}
let mas3 = evenAscOddDesc(mas);
//task 2.1
function getMin(array) {
   return array.reduce((a,b)=>a<b?a:b);
 
}
let mas4 = getMin(mas);

//task 2.2
function getMax(array) {
   return array.reduce((a,b)=>a>b?a:b);
}
let mas5 = getMax(mas);

//task 2.3
function getAverage(array) {
   return array.reduce((a,b,c,d)=>{a+=b;return c==d.length-1?a/d.length:a;});
  
}
let mas6 = getAverage(mas);
//task 2.4
function getMinMaxAvg(array1) {
   let arrayNew = [0,1,2];
   let arrayReduce =arrayNew.reduce(()=>{
      EmptyArray=[];
      EmptyArray[0]=(array1.reduce((a,b)=>a>b?a:b));
      EmptyArray[1] = (array1.reduce((a,b)=>a<b?a:b));
      EmptyArray[2] = (array1.reduce((a,b,c,d)=>{a+=b;return c==d.length-1?a/d.length:a;}));

      return EmptyArray;
   });
   return arrayReduce;
}
let mas7 = getMinMaxAvg(mas);
console.log(mas1);
console.log(mas2);
console.log(mas3);
console.log(mas4);
console.log(mas5);
console.log(mas6);
console.log(mas7);





