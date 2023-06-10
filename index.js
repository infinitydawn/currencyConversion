// TODO
import FetchWrapper from "./fetch-wrapper.js"

const baseCurrency = document.querySelector("#base-currency")
const targetCurrency = document.querySelector("#target-currency")
const dropdowns = document.querySelectorAll(".grid select")
const convResult = document.querySelector("#conversion-result")
const exchangeAPI = new FetchWrapper("https://v6.exchangerate-api.com/v6/946c56a1a142115724780c45/latest/")

dropdowns.forEach(dropdown => {
    dropdown.addEventListener("change", event => {
        console.log("test")
        exchangeAPI.get(baseCurrency.value)
        .then(data => convResult.textContent = data.conversion_rates[targetCurrency.value])
    })
})