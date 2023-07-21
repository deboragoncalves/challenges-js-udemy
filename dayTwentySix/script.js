const showSumNumbers = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let sizeObject = document.querySelector("#size").value;

    if (sizeObject > 0) {  
        getObject(sizeObject);
    } else {
        containerResult.innerHTML = `Informe o tamanho do objeto.`;
        containerResult.style.color = "red";
    }

}

const getObject = sizeObject => {
    if (sizeObject) {
        let numbersObject = {};

        for (let count = 1; count <= sizeObject; count++) {
            // Math.floor(Math.random() * (max - min + 1) + min);
            let randomNumber = Math.floor(Math.random() * (10 - 0 + 1) + 0);
            let objectKey = `number${count}`;
            numbersObject[objectKey] = randomNumber;
        }

        getSumNumbers(numbersObject);
        
    }
}

const getSumNumbers = object => {
    if (object) {
        let sum = 0;

        for (let keyObject in object) {
            let number = parseInt(object[keyObject]);
            sum += number;
        }

        let containerResult = document.querySelector("#result");
        let containerPre = document.createElement("pre");
        containerPre.innerHTML = JSON.stringify(object, null, 4);

        containerResult.innerHTML += `Objeto: `;
        containerResult.innerHTML += `<br />`;
        containerResult.appendChild(containerPre);
        containerResult.innerHTML += `Soma dos valores: ${sum}`;
        containerResult.style.color = "black";
    }
}