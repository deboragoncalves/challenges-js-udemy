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

        getFrequencyElements(arrayRandomNumbers);
    }
}

const getFrequencyElements = array => {
    let frequencyElementsArray = {};
    let numbersMostFrequencies = new Array();
    
    // criar objeto com frequencias dos numeros
    // chave: numero que está no array
    // valor: frequencia do numero no array
    array.forEach(number => {
        // se elemento não existir no objeto, adicionar chave com o numero e com valor 0
        if (!frequencyElementsArray[number]) {
            frequencyElementsArray[number] = 0;
        }

        // incrementar valor caso o numero ja exista no objeto
        return frequencyElementsArray[number]++;
    });

    for (let number in frequencyElementsArray) {
        // pegar array com frequencia dos numeros - valores do objeto
        // ordenar array com sort
        // pegar valor maximo do array 
        let mostFrequencyArray = Math.max(...Object.values(frequencyElementsArray).sort());

        if (frequencyElementsArray[number] == mostFrequencyArray) {
            numbersMostFrequencies.push(number);
        }

        let containerResult = document.querySelector("#result");
        containerResult.innerHTML = `Array com tamanho ${array.length}: ${array.join(", ")}`;
        containerResult.innerHTML += `<br />`;
 
        containerResult.innerHTML += `O elemento que mais se repete no array é o ${numbersMostFrequencies.join(", ")}`;
        containerResult.style.color = "black";
    }
}