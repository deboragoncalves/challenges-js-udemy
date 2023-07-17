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

        removeDuplicateNumbers(arrayRandomNumbers);
    }
}

const removeDuplicateNumbers = array => {
    let arrayUniqueElements = new Set(array);

    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = `Array original com tamanho ${array.length}: ${array.join(", ")}`;
    containerResult.innerHTML += `<br />`;
 
    containerResult.innerHTML += `Array sem elementos duplicados: ${Array.from(arrayUniqueElements).join(", ")}`;
    containerResult.style.color = "black";
}