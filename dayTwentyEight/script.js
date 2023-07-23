const showObjects = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let sizeObject = document.querySelector("#size").value;

    if (sizeObject > 0) {  
        let firstObject = getObject(sizeObject);
        let secondObject = getObject(sizeObject);
        showFinalObject(firstObject, secondObject);
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
            let objectKey = `${randomNumber}`;
            numbersObject[objectKey] = randomNumber;
        }
        
        return numbersObject;
    }
}

const showFinalObject = (firstObject, secondObject) => {
    if (firstObject && secondObject) {
        let containerResult = document.querySelector("#result");
        let containerPre = document.createElement("pre");
        containerPre.innerHTML = JSON.stringify(firstObject, null, 4);

        containerResult.innerHTML += `Primeiro objeto: `;
        containerResult.innerHTML += `<br />`;
        containerResult.appendChild(containerPre);

        containerPre = document.createElement("pre");
        containerPre.innerHTML = JSON.stringify(secondObject, null, 4);

        containerResult.innerHTML += `Segundo objeto: `;
        containerResult.innerHTML += `<br />`;
        containerResult.appendChild(containerPre);

        let finalObject = { ...firstObject, ...secondObject };
        containerPre = document.createElement("pre");
        containerPre.innerHTML = JSON.stringify(finalObject, null, 4);

        containerResult.innerHTML += `Objeto final - Objeto 1 + Objeto 2: `;
        containerResult.innerHTML += `<br />`;
        containerResult.appendChild(containerPre);

    }
}