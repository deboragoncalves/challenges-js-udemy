const showWarningMessage = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "Informe um número válido";
    containerResult.style.color = "red";
}

const getStatistics = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let number = document.querySelector("#number").value;

    if (number) {
        if (number > 0) {
            let arrayRandomNumbers = new Array();

            for (let count = 0; count < number; count++) {
                // Math.floor(Math.random() * (max - min + 1) + min);
                let randomNumber = Math.floor(Math.random() * (10 - 0 + 1) + 0);
                arrayRandomNumbers[count] = randomNumber;
            }

            calculateStatistics(arrayRandomNumbers);
        } else {
            showWarningMessage();
        }
        
    } else {
        showWarningMessage();
    }

}

const calculateStatistics = (arrayNumbers) => {
    let containerResult = document.querySelector("#result");
    let dataObject = {};
    let sumNumbers = 0;
    let arrayLength = 0;
    let averageNumbers = 0;
    let minNumber = 0;
    let maxNumber = 0;
    
    if (arrayNumbers.length == 0 || !arrayNumbers) {
        dataObject = {
            soma: sumNumbers,
            media: averageNumbers,
            minimo: minNumber,
            maximo: maxNumber,
            quantidade: arrayLength
        }
        
        return dataObject;
    }
    
    for (let number of arrayNumbers) {
        number = parseFloat(number);
        sumNumbers += number;
    }

    arrayLength = arrayNumbers.length;
    averageNumbers = sumNumbers / arrayLength;
    minNumber = Math.min(...arrayNumbers);
    maxNumber = Math.max(...arrayNumbers);

    dataObject = {
        soma: sumNumbers,
        media: averageNumbers,
        minimo: minNumber,
        maximo: maxNumber,
        quantidade: arrayLength
    };
    
    containerResult.innerHTML = `Array com números aleatórios: ${arrayNumbers.join(", ")}`;
    containerResult.innerHTML += `<br />`;
    containerResult.innerHTML += `Estatísticas:`;
    containerResult.innerHTML += `<br />`;
    containerResult.innerHTML += `Soma: ${sumNumbers}`;
    containerResult.innerHTML += `<br />`;
    containerResult.innerHTML += `Média: ${averageNumbers}`;
    containerResult.innerHTML += `<br />`;
    containerResult.innerHTML += `Mínimo: ${minNumber}`;
    containerResult.innerHTML += `<br />`;
    containerResult.innerHTML += `Máximo: ${maxNumber}`;
    containerResult.innerHTML += `<br />`;
    containerResult.innerHTML += `Tamanho array: ${arrayLength}`;
    containerResult.style.color = "black";
}