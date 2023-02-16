import weatherConfig from "./weather-config.js";
import DataProcessor from "./dataProccecor.js";
import {DataForm} from "./data-form.js";
const cities = weatherConfig.cities;
const maxDays = weatherConfig.maxDays;
const url = weatherConfig.url;
let citiesArray = Object.keys(weatherConfig.cities);
const dataProcessor = new DataProcessor(url,cities);
const dataForm = new DataForm("form-section", maxDays,citiesArray);
const citiesHTML = document.getElementById("select_id").getAttribute("value");
const endDate = document.getElementById("date-from-id");
// console.log(endDate);

const btn = document.getElementById("btn");
btn.addEventListener("click",displayTemperatures);
async function displayTemperatures() {
    const data = await dataProcessor.getData(29.5577, 34.9519);
    const data1 = await dataProcessor.getTemperatureData(cities.Rehovot,"2023-02-13","2023-02-17","06:00","15:00");
   //  console.log(data);
    const reduceStr = data1.reduce(function(a,b,c,d){
a+=`<li class="main-li">${citiesArray[0]}</li>
<li class="main-li">${b.date}</li>
<li class="main-li">${b.hour}</li>
<li class="main-li">${b.temperature}</li>`
return a;

    },"");
    document.getElementById("main-ul").innerHTML=reduceStr; 
}
displayTemperatures();

