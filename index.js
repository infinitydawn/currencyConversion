// TODO
import FetchWrapper from "./fetch-wrapper.js"

const baseCurrency = document.querySelector("#base-currency")
const targetCurrency = document.querySelector("#target-currency")
const dropdowns = document.querySelectorAll(".grid select")
const convResult = document.querySelector("#conversion-result")
const exchangeAPI = new FetchWrapper("https://v6.exchangerate-api.com/v6/946c56a1a142115724780c45/latest/")
//let currencies = document.querySelectorAll("#base-currency option");
let targetValue;
let inputValue = document.querySelector("#input-amount")

//console.log(currencies)
dropdowns.forEach(dropdown => {
    dropdown.addEventListener("change", event => {
        exchangeAPI.get(baseCurrency.value)
            .then(data =>{ 
                targetValue = data.conversion_rates[targetCurrency.value];
                updateResult(targetValue);}
            )
    })
})


inputValue.addEventListener("change", event => {
    // update target curr value
    let newValue = `${parseInt(targetValue) * inputValue.value}`
    updateResult(newValue);
})


function updateResult(textValue){
    convResult.textContent = `${textValue}`;
}