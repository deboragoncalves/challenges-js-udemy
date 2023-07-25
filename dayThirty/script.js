const showText = () => {
    let containerText = document.querySelector("#default-text");
    containerText.innerHTML = "";

    let firstParagraph = document.createElement("p");
    firstParagraph.innerHTML = "Lorem ipsum dolor sit amet. Ut nostrum odio in officiis autem eos saepe aliquam At veritatis consequuntur aut nulla beatae et explicabo praesentium. Et corrupti iusto sed quia internos hic dolores officiis est necessitatibus fugiat. Ut deleniti architecto eos galisum modi hic autem quaerat sit fugit iure.";
    
    let secondParagraph = document.createElement("p");
    secondParagraph.innerHTML = "Lorem ipsum dolor sit amet. Ut nostrum odio in officiis autem eos saepe aliquam At veritatis consequuntur aut nulla beatae et explicabo praesentium. Et corrupti iusto sed quia internos hic dolores officiis est necessitatibus fugiat. Ut deleniti architecto eos galisum modi hic autem quaerat sit fugit iure.";
    containerText.appendChild(firstParagraph);
    containerText.appendChild(secondParagraph);
}

const changeTextColor = () => {
    let containerText = document.querySelector("#default-text");
    if (containerText.innerHTML == "") return;

    let paragraphs = document.querySelectorAll("#default-text p");
    for (let text of paragraphs) {
        text.style.color = "red";
    }
}