const getData = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let name = document.querySelector("#name");
    let age = document.querySelector("#age");
    let city = document.querySelector("#city");

    let showData = name && name.value && age && age.value && city && city.value;

    if (showData) {
        containerResult.innerHTML = `Nome: ${name.value}, Idade: ${age.value}, Cidade: ${city.value}`;
        containerResult.style.color = "black";
    } else {
        containerResult.innerHTML = "Informe dados válidos";
        containerResult.style.color = "red";
    }

}