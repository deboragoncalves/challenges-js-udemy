let listTasks = new Array();

const addTask = () => {
    let containerList = document.querySelector("#list");
    containerList.innerHTML = "";

    let task = document.querySelector("#task").value;

    if (task) {
        listTasks.push(task);
        showTasks();
    } else {
        containerList.innerHTML = `Informe uma tarefa.`;
        containerList.style.color = "red";
        containerList.style.marginTop = "15px";
    }
}

let showTasks = () => {
    let containerList = document.querySelector("#list");
    containerList.innerHTML = "";

    if (task) {
        let containerUl = document.createElement("ul");
        
        for (let task of listTasks) {
            let containerLi = document.createElement("li");
            containerLi.innerHTML = `${task}`;
            containerLi.style.listStyleType = "none";

            let trashImage = document.createElement("img");
            trashImage.src = "trash.svg";
            trashImage.style.marginLeft = "15px";
            trashImage.style.cursor = "pointer";
            trashImage.addEventListener("click", () => {
                let indexTask = listTasks.indexOf(task);
                indexTask != -1 ? listTasks.splice(indexTask, 1) : null;
                showTasks();
            });

            containerLi.appendChild(trashImage);
            containerUl.appendChild(containerLi);
        }

        containerList.appendChild(containerUl);
        containerUl.style.paddingInlineStart = "0px";
        containerList.style.marginTop = "15px";
        containerList.style.color = "black";
    }
}