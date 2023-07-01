const rankAge = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let age = document.querySelector("#age").value;

    if (age) {
        age >= 0 && age <= 12 ? containerResult.innerHTML = `Criança: 0-12 anos` :
            age >= 13 && age <= 17 ? containerResult.innerHTML = `Adolescente: 13-17 anos` :
                age >= 18 && age <= 59 ? containerResult.innerHTML = `Adulto: 18-59 anos` :
                    containerResult.innerHTML = `Idoso: 60 anos ou mais`;
        
        containerResult.style.color = "black";
    } else {
        containerResult.innerHTML = "Informe valores válidos";
        containerResult.style.color = "red";
    }

}