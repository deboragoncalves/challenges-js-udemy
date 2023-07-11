const calculate = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let number = document.querySelector("#number").value;

    number = parseFloat(number);

    if (number > 0) {  
        calculateFactorial(number);
    } else {
        containerResult.innerHTML = `Informe número válido.`;
        containerResult.style.color = "red";
    }

}

const calculateFactorial = number => {
    if (number) {
        let containerResult = document.querySelector("#result");

        let factorial = 1;

        for (let count = number; count > 0; count--) {
            factorial *= count;
        }

        containerResult.innerHTML = `O fatorial do número ${number} é ${factorial}.`;
        containerResult.style.color = "black";
    }
}