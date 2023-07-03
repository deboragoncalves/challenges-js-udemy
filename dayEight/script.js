const calculate = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let number1 = document.querySelector("#number1").value;
    let number2 = document.querySelector("#number2").value;

    if (number1 && number2) {
        number1 = parseFloat(number1);
        number2 = parseFloat(number2);

        // input da classe operation checked
        let operation = document.querySelector(".operation input:checked").value;
        let resultOperation = 0;

        switch (operation) {
            
            case "sum":
                resultOperation = number1 + number2;
                break;

            case "sub":
                resultOperation = number1 - number2;
                break;

            case "multiply":
                resultOperation = number1 * number2;
                break;

            case "division":
                resultOperation = number1 / number2;
                break;

            default:
                resultOperation = 0;
                break;
        }

        resultOperation = resultOperation.toFixed(2);
        containerResult.innerHTML = `Resultado: ${resultOperation}`;
        containerResult.style.color = "black";
    } else {
        containerResult.innerHTML = "Informe valores válidos";
        containerResult.style.color = "red";
    }

}