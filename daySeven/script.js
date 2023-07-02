const compareNumbers = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let number1 = document.querySelector("#number1").value;
    let number2 = document.querySelector("#number2").value;

    if (number1 && number2) {
        number1 = parseFloat(number1);
        number2 = parseFloat(number2);

        number1 > number2 ? containerResult.innerHTML = `${number1} é maior que ${number2}` :
            number1 < number2 ? containerResult.innerHTML = `${number1} é menor que ${number2}` :
                containerResult.innerHTML = `Os números são iguais.`;
        
        containerResult.style.color = "black";
    } else {
        containerResult.innerHTML = "Informe valores válidos";
        containerResult.style.color = "red";
    }

}