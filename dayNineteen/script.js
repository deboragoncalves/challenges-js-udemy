const showWordVowels = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let word = document.querySelector("#word").value;

    if (word.length > 0) {
        getWordVowels(word);
    } else {
        containerResult.innerHTML = `Informe uma palavra.`;
        containerResult.style.color = "red";
    }

}

const getWordVowels = word => {
    if (word) {
        let containerResult = document.querySelector("#result");
        word = word.toLowerCase();
        let arrayVowels = ["a", "e", "i", "o", "u"];
        let arrayWord = word.split("");
        let countVowels = 0;

        for (let letter of arrayWord) {
            arrayVowels.includes(letter) ? countVowels++ : null;
        }

        countVowels == 0 || countVowels == 1 ? containerResult.innerHTML = `A palavra ${word} possui ${countVowels} vogal.` :
            containerResult.innerHTML = `A palavra ${word} possui ${countVowels} vogais.`;
        containerResult.style.color = "black";
    }

}