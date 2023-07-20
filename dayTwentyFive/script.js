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

        getAverageElements(arrayRandomNumbers);
    }
}

const getAverageElements = (array) => {
    if (array.length <= 0) return;

    let sumElements = 0;
    
    for (let elementArray of array) {
        elementArray = parseInt(elementArray);
        sumElements += elementArray;
    }

    let averageElements = sumElements / array.length;

    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = `Array: ${array.join(", ")}`;
    containerResult.innerHTML += `<br />`;
    containerResult.innerHTML += `Média dos elementos: ${averageElements.toFixed(2)}`;

    containerResult.style.color = "black";
}