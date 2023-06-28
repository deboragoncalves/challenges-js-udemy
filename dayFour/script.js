const getAreaPerimeter = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let length = document.querySelector("#length").value;
    let width = document.querySelector("#width").value;

    let showData = length && width;

    if (showData) {
        width = parseFloat(width);
        length = parseFloat(length);
        let area = width * length;
        let perimeter = 2 * (width + length);
        area = area.toFixed(2);
        perimeter = perimeter.toFixed(2);
        containerResult.innerHTML = `Área: ${area}, Perimetro: ${perimeter}`;
        containerResult.style.color = "black";
    } else {
        containerResult.innerHTML = "Informe valores válidos";
        containerResult.style.color = "red";
    }

}