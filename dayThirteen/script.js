const calculate = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let number = document.querySelector("#number").value;

    number = parseFloat(number);

    if (number > 0) {  

        let line = "";
        for (let count = 1; count <= number; count++) {
            line += "*";
            containerResult.innerHTML += line;
            containerResult.innerHTML += "<br />";
        }

        containerResult.style.color = "black";
    } else {
        containerResult.innerHTML = `Informe números válidos.`;
        containerResult.style.color = "red";
    }

}