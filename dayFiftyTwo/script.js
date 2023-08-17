const showWarningMessage = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "Informe dados válidos.";
    containerResult.style.color = "red";
}

const getBestProduct = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let nameProduct1 = document.querySelector("#product1").value;
    let priceProduct1 = document.querySelector("#price1").value;

    let nameProduct2 = document.querySelector("#product2").value;
    let priceProduct2 = document.querySelector("#price2").value;

    if (nameProduct1 && priceProduct1 && nameProduct2 && priceProduct2) {
        let product1 = {
            name: nameProduct1,
            price: priceProduct1,
            grade: Math.floor(Math.random() * (10 - 0 + 1) + 0)
        };

        let product2 = {
            name: nameProduct2,
            price: priceProduct2,
            grade: Math.floor(Math.random() * (10 - 0 + 1) + 0)
        };

        compareProducts(product1, product2);
    } else {
        showWarningMessage();
    }
}

const compareProducts = (product1, product2) => {
    let hasAllProperties = product1.hasOwnProperty("name") && product1.hasOwnProperty("price") && product1.hasOwnProperty("grade") && product2.hasOwnProperty("name") && product2.hasOwnProperty("price") && product2.hasOwnProperty("grade");
        
    if (!hasAllProperties) return;
    
    let gradeProduct1 = parseFloat(product1.grade);
    let gradeProduct2 = parseFloat(product2.grade);
    
    let priceProduct1 = parseFloat(product1.price);
    let priceProduct2 = parseFloat(product2.price);
    
    let nameProduct1 = product1.name;
    let nameProduct2 = product2.name;
    
    let finalSentence = "";
    
    if (gradeProduct1 > gradeProduct2) {
        finalSentence = `O produto ${nameProduct1} é melhor.`;
    } else if (gradeProduct2 > gradeProduct1) {
        finalSentence = `O produto ${nameProduct2} é melhor.`;
    } else if (gradeProduct2 == gradeProduct1) {
        if (priceProduct1 > priceProduct2) {
            finalSentence = `O produto ${nameProduct2} é melhor.`;
        } else if (priceProduct2 > priceProduct1) {
            finalSentence = `O produto ${nameProduct1} é melhor.`;
        } else if (priceProduct2 == priceProduct1) {
            finalSentence = "Os produtos são equivalentes.";
        }
    }
    
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = `Produto: ${nameProduct1}, Preço: ${priceProduct1}, Avaliação: ${gradeProduct1}`;    
    containerResult.innerHTML += "<br />";
    containerResult.innerHTML += `Produto: ${nameProduct2}, Preço: ${priceProduct2}, Avaliação: ${gradeProduct2}`;    
    containerResult.innerHTML += "<br />";
    containerResult.innerHTML += finalSentence;
    containerResult.style.color = "black";

    return finalSentence;   
}