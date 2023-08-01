window.onload = () => {
    createQuestions();
}

const createQuestions = () => {
    let bodyHtml = document.querySelector("body");
    let buttonFirstQuestion = document.createElement("button");
    buttonFirstQuestion.textContent = "Como obter maior produtividade?";
    buttonFirstQuestion.classList.add("btn");
    buttonFirstQuestion.classList.add("btn-primary");

    let firstAnswer = document.createElement("div");
    firstAnswer.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at urna faucibus, tristique justo eu, convallis lacus. Integer fringilla porta ante, in ornare augue consectetur id. Curabitur vel leo erat. Sed vel tellus et eros euismod feugiat eget nec orci. Nunc hendrerit scelerisque leo, rutrum rhoncus lorem hendrerit dapibus. Nunc fringilla arcu eget tellus tempus, a placerat arcu viverra. Fusce aliquet auctor nibh sit amet pretium. Suspendisse nec augue pharetra, malesuada tortor ut, cursus enim.";

    let buttonSecondQuestion = document.createElement("button");
    buttonSecondQuestion.textContent = "Quais são as principais soft-skills nos dias atuais?";
    buttonSecondQuestion.classList.add("btn");
    buttonSecondQuestion.classList.add("btn-primary");

    let secondAnswer = document.createElement("div");
    secondAnswer.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at urna faucibus, tristique justo eu, convallis lacus. Integer fringilla porta ante, in ornare augue consectetur id. Curabitur vel leo erat. Sed vel tellus et eros euismod feugiat eget nec orci. Nunc hendrerit scelerisque leo, rutrum rhoncus lorem hendrerit dapibus. Nunc fringilla arcu eget tellus tempus, a placerat arcu viverra. Fusce aliquet auctor nibh sit amet pretium. Suspendisse nec augue pharetra, malesuada tortor ut, cursus enim.";

    let buttonThirdQuestion = document.createElement("button");
    buttonThirdQuestion.textContent = "Quais são as principais hard-skills nos dias atuais?";
    buttonThirdQuestion.classList.add("btn");
    buttonThirdQuestion.classList.add("btn-primary");

    let thirdAnswer = document.createElement("div");
    thirdAnswer.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at urna faucibus, tristique justo eu, convallis lacus. Integer fringilla porta ante, in ornare augue consectetur id. Curabitur vel leo erat. Sed vel tellus et eros euismod feugiat eget nec orci. Nunc hendrerit scelerisque leo, rutrum rhoncus lorem hendrerit dapibus. Nunc fringilla arcu eget tellus tempus, a placerat arcu viverra. Fusce aliquet auctor nibh sit amet pretium. Suspendisse nec augue pharetra, malesuada tortor ut, cursus enim.";

    bodyHtml.appendChild(buttonFirstQuestion);
    bodyHtml.appendChild(firstAnswer);
    bodyHtml.appendChild(buttonSecondQuestion);
    bodyHtml.appendChild(secondAnswer);
    bodyHtml.appendChild(buttonThirdQuestion);
    bodyHtml.appendChild(thirdAnswer);

    buttonFirstQuestion.addEventListener("click", () => {
        firstAnswer.style.display = "block";
        secondAnswer.style.display = "none";
        thirdAnswer.style.display = "none";
    });
    
    buttonSecondQuestion.addEventListener("click", () => {
        firstAnswer.style.display = "none";
        secondAnswer.style.display = "block";
        thirdAnswer.style.display = "none";
    });
    
    buttonThirdQuestion.addEventListener("click", () => {
        firstAnswer.style.display = "none";
        secondAnswer.style.display = "none";
        thirdAnswer.style.display = "block";
    });
}