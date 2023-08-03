const showArray = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let sizeArray = document.querySelector("#size").value;

    if (sizeArray > 0) {  
        getArray(sizeArray);
    } else {
        containerResult.innerHTML = `Informe o tamanho do array.`;
        containerResult.style.color = "red";
    }

}

const getArray = sizeArray => {
    if (sizeArray) {
        let arrayRandomNumbers = new Array();

        for (let count = 0; count < sizeArray; count++) {
            // Math.floor(Math.random() * (max - min + 1) + min);
            let randomNumber = Math.floor(Math.random() * (10 - 0 + 1) + 0);
            arrayRandomNumbers[count] = randomNumber;
        }

        createArrayDouble(arrayRandomNumbers);
    }

}

const createArrayDouble = arrayNumbers => {
    let arrayDouble = new Array();

    for (let number of arrayNumbers) {
        let doubleNumber = parseFloat(number) * 2;
        arrayDouble.push(doubleNumber);
    }

    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = `Array original: ${arrayNumbers.join(", ")}`;
    containerResult.innerHTML += `<br />`;
    containerResult.innerHTML += `Array com o dobro dos números: ${arrayDouble.join(", ")}`;
}