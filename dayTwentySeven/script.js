const showFilterObject = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;

    if (name && age) {
        getObject(name, age);
    } else {
        containerResult.innerHTML = `Informe seu nome e sua idade.`;
        containerResult.style.color = "red";
    }

}

const getObject = (name, age) => {
    if (name && age) {
        let object = {
            "nome": name,
            "idade": age
        }

        let containerResult = document.querySelector("#result");
        let containerPre = document.createElement("pre");
        containerPre.innerHTML = JSON.stringify(object, null, 4);

        containerResult.innerHTML += `Objeto original: `;
        containerResult.innerHTML += `<br />`;
        containerResult.appendChild(containerPre);
        getFilterObject(object, ["nome"]);
    }

}

const getFilterObject = (object, arrayProperties) => {
    if (object && arrayProperties) {
        let filterObject = {};
        for (let property of arrayProperties) {
            if (object.hasOwnProperty(property)) {
                filterObject[property] = object[property];
            }
        }

        let containerResult = document.querySelector("#result");
        let containerPre = document.createElement("pre");
        containerPre.innerHTML = JSON.stringify(filterObject, null, 4);

        containerResult.innerHTML += `Objeto filtrado - Exibir apenas propriedades ${arrayProperties.join(", ")}: `;
        containerResult.innerHTML += `<br />`;
        containerResult.appendChild(containerPre);
    }
}

// TODO: Ir incrementando objeto com novos inputs