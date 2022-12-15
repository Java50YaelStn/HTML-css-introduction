
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const thumbnailsTitle = document.querySelectorAll(".thumbnails-title");

console.log (anchorElements);
let b= document.getElementsByClassName("details-image");
console.log (b);
for (let index = 0; index < b.length; index++) {
    b[index].style.cssText="border:5px solid red";
    
}


function setDetails(anchor) {
    let dataImage = anchor.getAttribute("data-details-image");
    console.log (dataImage);
    detailsImage.src = dataImage;
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
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
    <button id="hide-button" onclick="function1()" >X</button>
    <img src="${str}" id="NEWYEAR" class="details-image">
    <span class="details-title">${str1}</span>
    </div>`;
})

}
// let l=document.getElementById("hide-button");
// console.log(l);
// hideButtonElement.addEventListener("click",hideDetails);
function function1 () {
let w=document.getElementsByClassName("details-container")[0];
w.innerHTML=" ";

    
}