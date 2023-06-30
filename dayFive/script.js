const calculate = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let number1 = document.querySelector("#number1").value;
    let number2 = document.querySelector("#number2").value;

    let showResult = number1 && number2;

    if (showResult) {
        number1 = parseFloat(number1);
        number2 = parseFloat(number2);
        let isDivisible = number1 % number2;

        isDivisible == 0 ? containerResult.innerHTML = `${number1} é divisível por ${number2}`
        : containerResult.innerHTML = `${number1} não é divisível por ${number2}`;
        containerResult.style.color = "black";
    } else {
        containerResult.innerHTML = "Informe valores válidos";
        containerResult.style.color = "red";
    }

}