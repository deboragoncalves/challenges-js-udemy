const calculate = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let number = document.querySelector("#number").value;

    number = parseFloat(number);


    if (number > 0) {  

        let arrayFibonacci = new Array();
        arrayFibonacci.push(0);
        arrayFibonacci.push(1);

        for (let count = 0; count < number - 1; count++) {
            let currentIndex = count;
            let nextIndex = currentIndex++;
            let itemArray = arrayFibonacci[currentIndex] + arrayFibonacci[nextIndex];
            arrayFibonacci.push(itemArray);
            containerResult.innerHTML = `Sequência de Fibonacci até o número ${number}: ${arrayFibonacci.join(", ")}`;
        }

        containerResult.style.color = "black";
    } else {
        containerResult.innerHTML = `Informe números válidos.`;
        containerResult.style.color = "red";
    }

}