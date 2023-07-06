const calculate = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let number = document.querySelector("#number").value;

    if (number) {
        number = parseFloat(number);
        containerResult.innerHTML = `Tabuada de ${number}:`;
        
        for (let count = 1; count <= 10; count++) {
            let result = number * count;
            containerResult.innerHTML += `<br />`;
            containerResult.innerHTML += `${number} x ${count}: ${result}`;
        }

        containerResult.style.color = "black";
    } else {
        containerResult.innerHTML = "Informe um número válido.";
        containerResult.style.color = "red";
    }

}