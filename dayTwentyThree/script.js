const showArray = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let sizeArray = document.querySelector("#size").value;

    if (sizeArray > 0) {  
        let firstArray = getArray(sizeArray);
        let secondArray = getArray(sizeArray);
        concatArrays(firstArray, secondArray);
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

        return arrayRandomNumbers;
    }
}

const concatArrays = (firstArray, secondArray) => {
    if (firstArray.length <= 0 || secondArray.length <= 0) return;
    let finalArray = firstArray.concat(secondArray);

    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = `Primeiro array: ${firstArray.join(", ")}`;
    containerResult.innerHTML += `<br />`;
    containerResult.innerHTML += `Segundo array: ${secondArray.join(", ")}`;
    containerResult.innerHTML += `<br />`;
    containerResult.innerHTML += `Array final: ${finalArray.join(", ")}`;

    containerResult.style.color = "black";
}