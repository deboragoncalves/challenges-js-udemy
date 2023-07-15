const showArray = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let sizeArray = document.querySelector("#size").value;
    let minArray = document.querySelector("#minValue").value;
    let maxArray = document.querySelector("#maxValue").value;

    if (sizeArray > 0 && minArray >= 0 && maxArray > 0) {  
        getArray(sizeArray, minArray, maxArray);
    } else {
        containerResult.innerHTML = `Informe uma palavra.`;
        containerResult.style.color = "red";
    }

}

const getArray = (sizeArray, minArray, maxArray) => {
    if (sizeArray && minArray && maxArray) {
        let containerResult = document.querySelector("#result");
        let arrayRandomNumbers = new Array();

        for (let count = 0; count < sizeArray; count++) {
            // Math.floor(Math.random() * (max - min + 1) + min);
            let randomNumber = Math.floor(Math.random() * (maxArray - minArray + 1) + minArray);
            arrayRandomNumbers[count] = randomNumber;
        }

        containerResult.innerHTML = `Array de números aleatórios de tamanho ${sizeArray}, com valores entre ${minArray} e ${maxArray}: ${arrayRandomNumbers.join(", ")}`;
        containerResult.style.color = "black";   
    }
}