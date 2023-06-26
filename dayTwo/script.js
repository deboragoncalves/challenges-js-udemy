const calculateIMC = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let height = document.querySelector("#height");
    let weight = document.querySelector("#weight");

    if (height && height.value && weight && weight.value) {
        let imc = weight.value / (height.value * height.value);
        imc = imc.toFixed(2);
        containerResult.innerHTML = `Resultado: ${imc}`;
        containerResult.style.color = "black";
    } else {
        containerResult.innerHTML = "Por favor, informe valores válidos para cálculo";
        containerResult.style.color = "red";
    }
}