const getSum = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let number1 = document.querySelector("#number1").value;
    let number2 = document.querySelector("#number2").value;
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    if (number2 > number1) {
        calculateSumNumbers(number1, number2);
    } else if (number2 < number1) {
        calculateSumNumbers(number2, number1);
    } else {
        containerResult.innerHTML = `Informe números válidos.`;
        containerResult.style.color = "red";
    }

}

const calculateSumNumbers = (number1, number2) => {
    let containerResult = document.querySelector("#result");

    let sum = 0;
    for (let count = number1; count <= number2; count++) {
        sum += count;
    }

    containerResult.innerHTML = `Somário de ${number1} até ${number2}: ${sum}`;        
    containerResult.style.color = "black";
}