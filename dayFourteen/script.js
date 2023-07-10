const checkNumber = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let number = document.querySelector("#number").value;

    number = parseFloat(number);

    if (number > 0) {  
        checkEvenOrOdd(number);
    } else {
        containerResult.innerHTML = `Informe número válido.`;
        containerResult.style.color = "red";
    }

}

const checkEvenOrOdd = number => {
    if (number) {
        let containerResult = document.querySelector("#result");

        number % 2 == 0 ? containerResult.innerHTML = `O número ${number} é par.` : containerResult.innerHTML = `O número ${number} é ímpar.`;
        containerResult.style.color = "black";
    }
}