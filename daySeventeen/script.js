const showMaxMin = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let number1 = document.querySelector("#number1").value;
    let number2 = document.querySelector("#number2").value;

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    if (number1 > 0 && number2 > 0) {  
        getMaxValue(number1, number2);
    } else {
        containerResult.innerHTML = `Informe números válidos.`;
        containerResult.style.color = "red";
    }

}

const getMaxValue = (number1, number2) => {
    if (number1 && number2) {
        let containerResult = document.querySelector("#result");

        number1 > number2 ? containerResult.innerHTML = `O maior valor entre ${number1} e ${number2} é ${number1};` 
            : number2 > number1 ? containerResult.innerHTML = `O maior valor entre ${number1} e ${number2} é ${number2};`
                : containerResult.innerHTML = `Os números ${number1} e ${number2} são iguais.`;        
    }

    getMinValue(number1, number2);
}

const getMinValue = (number1, number2) => {
    if (number1 && number2) {
        let containerResult = document.querySelector("#result");

        number1 < number2 ? containerResult.innerHTML += ` e o menor valor é ${number1}.` 
            : number2 < number1 ? containerResult.innerHTML += ` e o menor valor é ${number2}.`
                : null;
        
        containerResult.style.color = "black";
    }
}