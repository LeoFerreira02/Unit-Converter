const inputElement = document.querySelector("#input")
const fromElement = document.querySelector("#from")
const toElement = document.querySelector("#to")
const outputElement = document.querySelector("#output")
const convertButton = document.querySelector("#convert-btn")
const messageElement = document.querySelector("#message")

// Func. Conv. unidades

function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;
    let inputVal = inputElement.value;

    if(fromValue === toValue){
        outputElement.value = inputVal;
        messageElement.textContent = "";
        return;
    }

    // default input
    let meters;
    switch(fromValue){
        case "m": 
            meters = inputVal;
            break;
        
        case "km":
            meters = inputVal * 1000;
            break;

        case "cm":
            meters = inputVal / 100;
            break;

        case "mm": 
            meters = inputVal / 1000;
            break;
    }

    // Converter metros para unidade de saída
    let result;
    switch(toValue){
        case "m": 
            result = meters;
            break;
        
        case "km":
            result = meters / 1000;
            break;

        case "cm":
            result = meters * 100;
            break

        case "mm": 
            result = meters * 1000;
            break;
    }

    // Exibir resultado no input
    outputElement.value = result;

    // Exibir resultado na mensagem
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;

    const message = `${inputVal} ${fromLabel} equivalem a ${result} ${toLabel}`
    messageElement.textContent = message;
    return;
}

convertButton.addEventListener("click", convert);