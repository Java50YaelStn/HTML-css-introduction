import weatherConfig from "./weather-config.js";
import DataProcessor from "./dataProccecor.js";
import {DataForm} from "./data-form.js"
const cities = weatherConfig.cities;
let cities1=null;
let datestart = null;
let dateend=null;
const maxDays = weatherConfig.maxDays;
const url = weatherConfig.url;
let citiesArray = Object.keys(weatherConfig.cities);
const dataProcessor = new DataProcessor(url,cities);
const dataForm = new DataForm("form-section", maxDays,citiesArray);

document.getElementById("select_id").onchange = function(event) {
   cities1= event.target.value; 
}
document.getElementById("date-from-id").onchange=function (event) {
   datestart= event.target.value
   console.log(datestart)
}
document.getElementById("date-to-id").onchange=function (event) {
   dateend= event.target.value
   console.log(dateend)
}
const btn = document.getElementById("btn");
btn.addEventListener("click",displayTemperatures);
async function displayTemperatures() {
   console.log(cities[cities1]);
    const data = await dataProcessor.getData(29.5577, 34.9519);
    const data1 = await dataProcessor.getTemperatureData(cities[cities1],datestart,dateend,"06:00","15:00");
    const reduceStr = data1.reduce(function(a,b,c,d){
a+=`<li class="main-li">${cities1}</li>
<li class="main-li">${b.date}</li>
<li class="main-li">${b.hour}</li>
<li class="main-li">${b.temperature}</li>`
return a;

    },"");
    document.getElementById("main-ul").innerHTML=reduceStr; 
}
document.getElementById("rst").addEventListener("click",function () {
    document.getElementById("main-ul").innerHTML=""; 
})
