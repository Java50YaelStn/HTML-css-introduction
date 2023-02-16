const FORM_ID = "data-form-id";
const DATE_FROM_ID = "date-from-id";
const DATE_TO_ID = "date-to-id"
const SELECT_ID = "select_id"
export class DataForm {
    #formElement;
    #dateFromElement;
    #dateToElement;
    
    constructor(parentId, maxDays,citiesArray) {
        const parentElement = document.getElementById(parentId);
        this.#fillForm(parentElement,citiesArray);
        this.#formElement = document.getElementById(FORM_ID);
        this.#dateToElement = document.getElementById(DATE_TO_ID);
        this.#dateFromElement = document.getElementById(DATE_FROM_ID);
        this.#setMinMaxDates(maxDays);
    }
    #fillForm(parentElement,citiesArray) {
      let strCities = citiesArray.reduce(function (a,b) {
        a+=`<option value="${b}">${b}</option>`;
        return a; 
      },"");

        parentElement.innerHTML = `<form id="${FORM_ID}">
        <select id="${SELECT_ID}" required>
      <option value="Выбрать" hidden>Выбрать</option>${strCities}</select>
            <input type="date" id="${DATE_FROM_ID}" >
            <input type="date" id="${DATE_TO_ID}" >
            <button type="button" id="btn">Submit</button>
            <button type="reset" id="rst" >Reset</button>
        </form>`;

    }
    #setMinMaxDates(maxDays) {
        const current = new Date();
        console.log(current);
        const maxDayOfMonth = current.getDate() + maxDays;
        const maxDate = new Date();
        maxDate.setDate(maxDayOfMonth);
        console.log(maxDate);
        const minDateStr = current.toISOString().split("T")[0];
        const maxDateStr = maxDate.toISOString().split("T")[0];
        this.#dateFromElement={};
        this.#dateFromElement.min = minDateStr;
        this.#dateToElement.min = minDateStr;
        this.#dateFromElement.max = maxDateStr;
        this.#dateToElement.max = maxDateStr;
        

    }



}