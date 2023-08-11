const showWarningMessage = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "Informe um número válido";
    containerResult.style.color = "red";
}

const sumEvenNumbers = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let number = document.querySelector("#number").value;

    if (number) {
        if (number > 0) {
            let sumNumbers = 0;

            for (let count = 1; count <= number; count++) {
                containerResult.innerHTML += `Número: ${count}`;
                containerResult.innerHTML += `<br />`;
                if (count % 2 == 0) {
                    sumNumbers += count;
                }
            }

            containerResult.innerHTML += `Soma dos números pares: ${sumNumbers}`;
            containerResult.style.color = "black";
        } else {
            showWarningMessage();
        }
        
    } else {
        showWarningMessage();
    }

}