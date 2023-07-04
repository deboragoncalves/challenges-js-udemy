const getFee = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let age = document.querySelector("#age").value;

    if (age > 0) {
        let student = document.querySelector("#student").checked;

        const FEE = 2.50;
        let discount = 0;
        let finalPrice = 0;

        age >= 0 && age <= 5 ? discount = 2.50 : student ? discount = FEE * 0.5 : age >= 60 ? discount = FEE * 0.3 : null;

        finalPrice = FEE - discount;
        finalPrice = finalPrice.toFixed(2);

        containerResult.innerHTML = `Tarifa: ${finalPrice}`;        
        containerResult.style.color = "black";
    } else {
        containerResult.innerHTML = "Informe uma idade válida.";
        containerResult.style.color = "red";
    }

}