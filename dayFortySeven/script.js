const arrayEvens = ['a', 'e', 'i', 'o', 'u'];

const getEvenLetters = () => {
    let objectEven = {};
    let countA = 0, countE = 0, countI = 0, countO = 0, countU = 0;
    let word = document.querySelector("#word").value;
    
    if (word) {
        word = word.toLowerCase();
        let arrayWord = word.split("");
        
        for (let letter of arrayWord) {
            if (arrayEvens.includes(letter)) {
                if (letter == 'a') {
                    countA++;
                    objectEven[letter] = countA;
                } else if (letter == 'e') {
                    countE++;
                    objectEven[letter] = countE;
                } else if (letter == 'i') {
                    countI++;
                    objectEven[letter] = countI;
                } else if (letter == 'o') {
                    countO++;
                    objectEven[letter] = countO;
                } else if (letter == 'u') {
                    countU++;
                    objectEven[letter] = countU;
                }
            }
        }
    }
    
    showEvenFrequency(word, objectEven);
    return objectEven;
}

const showEvenFrequency = (word, objectEven) => {
    let containerResult = document.querySelector("#result");
    let isObjectEmpty = Object.keys(objectEven).length == 0;

    if (word && !isObjectEmpty) {
        containerResult.innerHTML = "";
        containerResult.innerHTML = `Palavra: ${word}`;
        containerResult.innerHTML += `<br />`;

        for (let letter in objectEven) {
            containerResult.innerHTML += `Letra ${letter} - Frequência: ${objectEven[letter]}`;
            containerResult.innerHTML += `<br />`;
        }

        containerResult.style.color = "black";
    } else if (!word) {
        containerResult.innerHTML = "";
        containerResult.innerHTML = "Informe uma palavra";
        containerResult.style.color = "red";
    } else if (word && isObjectEmpty) {
        containerResult.innerHTML = "";
        containerResult.innerHTML = `Não há vogais na palavra ${word}`;
        containerResult.style.color = "black";
    }
}