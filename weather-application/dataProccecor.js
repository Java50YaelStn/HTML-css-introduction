class DataProcessor {
    #url
    #cities
    constructor(url, cities) {
        this.#url = url;
        this.#cities = cities;
    }
    
    async getData(latitude, longitude) {
           const responseFromServer = await fetch(`${this.#url}&latitude=${latitude}&longitude=${longitude}`);
           let strJSON = responseFromServer.ok?responseFromServer.json():responseFromServer.status();
           
            return strJSON;     
    }
    async getTemperatureData(city, startDate, endDate, hourFrom, hourTo) {
        const responseFromServer = await fetch(`${this.#url}&latitude=${city.latitude}&longitude=${city.longitude}`);
        let responseFromServer1 = await responseFromServer.json();
        let stDateMonth = startDate.split("-")[1];
        let stDateDay = startDate.split("-")[2];
        let endDateMonth = endDate.split("-")[1];
        let endDateDay = endDate.split("-")[2];
        let hourlyTime = responseFromServer1.hourly;
        hourlyTime = Object.entries(hourlyTime);
        let masTempTime=[];
        let masTempTime1 = [];
 let findObj = hourlyTime.reduce(function(a,[key,value],c,d){
    masTempTime.push(value);
    if (c==d.length-1) {
       for (let i = 0; i < masTempTime[0].length; i++) {
          const obj = {};
          let day = Number(masTempTime[0][i].split("T")[0].split("-")[2]);
          let month = Number(masTempTime[0][i].split("T")[0].split("-")[1]);
          let min =Number( masTempTime[0][i].split("T")[1].split(":")[0])*60+Number( masTempTime[0][i].split("T")[1].split(":")[1])
          if (Number(endDateDay)>= day&& day>=Number(stDateDay)&&Number(endDateMonth)>=month&&Number(stDateMonth)<=month) {
             obj.date=masTempTime[0][i].split("T")[0];
             obj.hour=masTempTime[0][i].split("T")[1];
             obj.temperature = masTempTime[1][i];
           masTempTime1.push(obj);
          }
       }
    } 
 },[]);
 let bool=true,bool1=true;
 masTempTime1 = masTempTime1.filter(function(a){
 if(a.hour==hourFrom)
 {bool=false;}
 if(a.date==endDate&&a.hour==hourTo)
 {bool1=false;}
 if(bool==false&&bool1==true){
    return a;
 }
    });
    console.log(masTempTime1);
        return masTempTime1;
        
    }
 }
 export default DataProcessor;
 
