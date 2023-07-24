const showAge = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let age = document.querySelector("#age").value;

    if (age > 0) {  
        let elementAge = document.createElement("p");
        elementAge.innerHTML = `Você tem ${age} anos.`;
        containerResult.appendChild(elementAge);
        containerResult.style.color = "black";
    } else {
        containerResult.innerHTML = `Informe a sua idade.`;
        containerResult.style.color = "red";
    }

}


