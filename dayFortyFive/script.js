const classificateNumber = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let number = document.querySelector("#number").value;

    if (number) {
        number > 0 ? containerResult.innerHTML = `Número ${number} é positivo.` :
            number < 0 ? containerResult.innerHTML = `Número ${number} é negativo.` :
                containerResult.innerHTML = `Número é 0.`;
        
        containerResult.style.color = "black";
    } else {
        containerResult.innerHTML = "Informe um número válido";
        containerResult.style.color = "red";
    }

}