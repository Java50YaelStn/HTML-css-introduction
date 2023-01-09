let mas = [-100,200,333,234,345,282,-123];

//task 1.1
function evenOddSort(array) {
return array.filter(p=>p%2==0).concat(array.filter(p=>p%2!=0));
// filter nujen dla togo chobi vzyt v noviy masiv tolko to chto nado
// p - kajdiy element massiva (strelo4naya funcziya) ee ne nado ob'yavlat
// concat - slojenie strok ili massivov
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
   //mas_ch - eto 4etnoe 4islo
   //(a,b)=>(a-b); toje samoe 4to i 4erez function
   //sort - sortiruet 
let mas_ch1 = array.sort(function (a,b) {return b-a;}).filter(p=>p%2!=0);
return mas_ch.concat(mas_ch1);
}
let mas3 = evenAscOddDesc(mas);
//task 2.1
function getMin(array) {
   return array.reduce((a,b)=>a<b?a:b);
   //a - bufernaya peremena, po umol4 ravna 0
   //b- chisla v massive
   //esli bufer men6e 4isla massiva to vozvras6 bufern peremen, inache zna4 massiva
   //vozvra6 tolko poslednuu min
   //reduce vozvr posl rez funczii
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
   //c help bufern peremen sklad vse elem mas 
   // esli c raven dline mas minus 1 (posl indekz) to summu delim na kol-vo elementov
   //i vozvrash srednee arifm
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


//
let mas107=[1,4,5,7,8];
let mas108=mas107.filter(function (grisha)
{
    if(grisha%2==0 && grisha<5)
    return grisha;
} 
    
);
console.log(mas108);

//
let mas109=[10,4,595,17,9];
let mas110=mas109.sort((a,b)=>b-a);
//esli poluchartsa otriz - eto falce. esli polojit to eto true
console.log(mas110);


