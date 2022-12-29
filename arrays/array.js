//task 1
///
let mas =[];
for (let i = 0; i < 10; i++) 
   mas[i]=Math.round(Math.random());

function getHtmlUl(mas) {
   let mas_li=[];
   let ul1 = document.getElementById("ul1");
   for (let j = 0; j < mas.length; j++) {
      mas_li.push(`<li><div class="${mas[j]==0?"white":"black"}"></div></li>`);
   }
   ul1.innerHTML = mas_li.join(" "); 
}
getHtmlUl(mas);


let matrix = [],mas2 = [],count=0;
for (let i = 0; i < 5; i++) {
   mas2 = [];
   for (let j = 0; j < 4 ; j++) {
      mas2.push(count++);
   }
   matrix.push(mas2);
}
function transpMatrix(matrix){
   let mas1 = [],matrix1 = [];
   for (let i = 0; i < matrix[i].length; i++) {
      mas1=[];
      for (let j = 0; j < matrix.length; j++) {
         mas1.push(matrix[j][i]);
      }
      matrix1.push(mas1);
   }

return matrix1;
}
let matrix1=transpMatrix(matrix);
console.log(matrix);
console.log(matrix1);
