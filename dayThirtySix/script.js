window.onload = () => {
    createModal();
}

const createModal = () => {
    let containerModal = document.createElement("div");
    containerModal.id = "modal";
    containerModal.classList.add("modal");

    let subcontainerModal = document.createElement("div");
    subcontainerModal.classList.add("modal-content");

    let buttonClose = document.createElement("img");
    buttonClose.src = "close.svg";
    buttonClose.alt = "Fechar modal";
    buttonClose.style.width = "16px";
    buttonClose.style.height = "16px";
    buttonClose.style.cursor = "pointer";
    buttonClose.style.alignSelf = "flex-end";
    buttonClose.style.marginBottom = "15px";

    buttonClose.addEventListener("click", () => {
        let modal = document.querySelector("#modal");
        modal.style.display = "none";
    })

    let textModal = document.createElement("p");
    textModal.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at urna faucibus, tristique justo eu, convallis lacus. Integer fringilla porta ante, in ornare augue consectetur id. Curabitur vel leo erat. Sed vel tellus et eros euismod feugiat eget nec orci. Nunc hendrerit scelerisque leo, rutrum rhoncus lorem hendrerit dapibus. Nunc fringilla arcu eget tellus tempus, a placerat arcu viverra. Fusce aliquet auctor nibh sit amet pretium. Suspendisse nec augue pharetra, malesuada tortor ut, cursus enim.";

    subcontainerModal.appendChild(buttonClose);
    subcontainerModal.appendChild(textModal);

    containerModal.appendChild(subcontainerModal);

    let buttonShowModal = document.createElement("button");
    buttonShowModal.textContent = "Exibir modal";
    buttonShowModal.classList.add("btn");
    buttonShowModal.classList.add("btn-primary");
    buttonShowModal.addEventListener("click", () => {
        let modal = document.querySelector("#modal");
        if (!modal) return;
        modal.style.display = "block";
    });

    let bodyHtml = document.querySelector("body");
    bodyHtml.appendChild(buttonShowModal);
    bodyHtml.appendChild(containerModal);
}

window.onclick = function (event) {
    let modal = document.querySelector("#modal");
    
    if (event.target == modal) {
        modal.style.display = "none";
    }
}