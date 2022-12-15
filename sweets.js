// alert("NEW YEAR'S SWEETS");
// let a = +prompt("hahahaha", 5);
// if (a==10) {
// alert("a=10");
// }
// else{ alert("a!=10");}
const detailsImage = document.querySelector(".details-image");//moje bit let. eto kartinka
// console.log(detailsImage);
// let a = document.getElementById("NEWYEAR");
// alert(a);
// a.style.width="1000px";
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const thumbnailsTitle = document.querySelectorAll(".thumbnails-title");

console.log (anchorElements);
let b= document.getElementsByClassName("details-image");
console.log (b);
for (let index = 0; index < b.length; index++) {
    b[index].style.cssText="border:5px solid red";
    
}

// for (let index = 0; index < thumbnailsTitle.length; index++) {
//     if (index%2 ==0) {
// console.log (thumbnailsTitle[index]);
// thumbnailsTitle[index].style.cssText="background:white;border:5px solid black";
//     }
//     else 
//     thumbnailsTitle[index].style.background= "red";  
// }
function setDetails(anchor) {
    let dataImage = anchor.getAttribute("data-details-image");
    console.log (dataImage);
    detailsImage.src = dataImage;
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");//menaet soderjimoe podpis

}
for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click",function(){
        setDetails(anchorElements[i]);
    } )
}

let c=document.getElementsByClassName("thumbnails-item");
for(let i=0; i< c.length; i++){
c[i].addEventListener("click",function () {
let r= document.getElementsByClassName("thumbnails-list")[0];
r.classList.add("scroll");
    let f=c[i].getElementsByTagName("img")[0];
    let m=c[i].getElementsByTagName("a")[0];
   
        let str =(f.getAttribute("src"));
        let str1 =(m.getAttribute("data-details-title"));
  
    
    let k=document.getElementsByClassName("details-container")[0];
    
        k.classList.add("show");
    
    document.getElementsByClassName("details-container")[0].innerHTML= `<div class="details-frame">
    <img src="${str}" id="NEWYEAR" class="details-image">
    <span class="details-title">${str1}</span>
    </div>`;
})

}
hideButtonElement.addEventListener("click",hideDetails);