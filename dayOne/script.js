// conversão de temperatura
let temperature = document.querySelector("#temperature");
let containerResult = document.querySelector("#result");

const convertTemperature = () => {
    let isConvertCelsiusFaren = document.querySelector("#celsiusFaren").checked;
    let isConvertFarenCelsius = document.querySelector("#farenCelsius").checked;

    isConvertCelsiusFaren ? convertCelsiusFaren() : isConvertFarenCelsius ? convertFarenCelsius() : null;
}

const convertCelsiusFaren = () => {
    containerResult.innerHTML = "";

    if (temperature && temperature.value) {
        let result = (temperature.value * 1.8) + 32;
        result = result.toFixed(2);
        containerResult.innerHTML = `Resultado: ${result}`;
    } 
}

const convertFarenCelsius = () => {
    containerResult.innerHTML = "";

    if (temperature && temperature.value) {
        let result = (temperature.value - 32) * 0.55;
        result = result.toFixed(2);
        containerResult.innerHTML = `Resultado: ${result}`;
    } 
}