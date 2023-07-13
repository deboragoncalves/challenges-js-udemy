const showReverseWord = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let word = document.querySelector("#word").value;

    if (word.length > 0) {  
        getReverseWord(word);
    } else {
        containerResult.innerHTML = `Informe uma palavra.`;
        containerResult.style.color = "red";
    }

}

const getReverseWord = word => {
    if (word) {
        let containerResult = document.querySelector("#result");
        // split - cria array com cada letra da palavra
        // reverse - inverte itens array
        // join - junta novamente itens array em uma só string
        let reverseWord = word.split("").reverse().join("");

        containerResult.innerHTML = `Palavra original: ${word}, palavra invertida: ${reverseWord}`;
        containerResult.style.color = "black";   
    }
}