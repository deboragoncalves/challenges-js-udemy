const calculatePrimeNumbers = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let number1 = document.querySelector("#number1").value;
    let number2 = document.querySelector("#number2").value;

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    let arrayNumbers = new Array();

    if (number2 > number1) {  
        arrayNumbers = new Array();
        arrayNumbers = getPrimeNumbers(number1, number2, arrayNumbers);
        showResult(number1, number2, arrayNumbers);
    } else if (number2 < number1) {
        arrayNumbers = new Array();
        arrayNumbers = getPrimeNumbers(number2, number1, arrayNumbers);
        showResult(number2, number1, arrayNumbers);
    } else {
        containerResult.innerHTML = `Informe números válidos.`;
        containerResult.style.color = "red";
    }

}

const isPrimeNumber = number => {
    let dividers = 0;

    if (number) {
        for (let count = 1; count <= number; count++) {
            if (number % count == 0) {
                dividers++;
            }
        }
    }

    return dividers;
}

const getPrimeNumbers = (number1, number2, arrayNumbers) => {
    for (let count = number1; count <= number2; count++) {
        let dividers = isPrimeNumber(count);
        if (dividers == 2) arrayNumbers.push(count);
    }

    return arrayNumbers;
}

const showResult = (number1, number2, arrayNumbers) => {
    let containerResult = document.querySelector("#result");

    if (arrayNumbers.length > 0) {
        arrayNumbers = arrayNumbers.join(", ");
        containerResult.innerHTML = `Números primos entre ${number1} e ${number2}: ${arrayNumbers}`;
    } else {
        containerResult.innerHTML = `Não há números primos entre ${number1} e ${number2}.`;
    }

    containerResult.style.color = "black";
}

// TODO: Corrigir numeros negativos