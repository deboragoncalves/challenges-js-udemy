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
            let countEvenNumbers = 0;

            for (let count = 1; count <= number; count++) {
                containerResult.innerHTML += `Número: ${count}`;
                containerResult.innerHTML += `<br />`;
                if (count % 2 == 0 && count > 0) {
                    sumNumbers += count;
                    countEvenNumbers++;
                }
            }

            getAverageEvenNumbers(sumNumbers, countEvenNumbers);
        } else {
            showWarningMessage();
        }
        
    } else {
        showWarningMessage();
    }

}

const getAverageEvenNumbers = (sumNumbers, sumEvenNumbers) => {
    let containerResult = document.querySelector("#result");
    let averageEvenNumbers = sumNumbers / sumEvenNumbers;
    averageEvenNumbers = averageEvenNumbers.toFixed(1);
    containerResult.innerHTML += `Média dos números pares: ${averageEvenNumbers}`;
    containerResult.style.color = "black";
}