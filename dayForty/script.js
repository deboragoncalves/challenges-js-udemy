const conditionShowArray = () => {
    checkSizeArray() ? getArray() : showWarningMessage();
}

const checkSizeArray = () => {
    let sizeArray = document.querySelector("#size").value;

    if (sizeArray) {
        if (sizeArray > 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const showWarningMessage = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = `Informe o tamanho do array.`;
    containerResult.style.color = "red";
}

const getArray = () => {
    let sizeArray = document.querySelector("#size").value;
    let arrayRandomNumbers = new Array();

    for (let count = 0; count < sizeArray; count++) {
        // Math.floor(Math.random() * (max - min + 1) + min);
        let randomNumber = Math.floor(Math.random() * (10 - 0 + 1) + 0);
        arrayRandomNumbers[count] = randomNumber;
    }

    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = `Array: ${arrayRandomNumbers.join(", ")}`;
    containerResult.style.color = "black";

}