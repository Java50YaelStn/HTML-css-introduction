alert("NEW YEAR'S SWEETS");
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
    const dataImage = anchor.getAttribute("data-details-image");
    console.log (dataImage);
    detailsImage.src = dataImage;
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");//menaet soderjimoe podpis

}
for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click",function(){
        setDetails(anchorElements[i]);
    } )
}


