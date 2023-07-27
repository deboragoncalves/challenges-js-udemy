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
    if (task) {
        let containerList = document.querySelector("#list");
        let containerUl = document.createElement("ul");
        
        for (let task of listTasks) {
            let containerLi = document.createElement("li");
            containerLi.innerHTML = `${task}`;
            containerLi.style.listStyleType = "none";
            containerUl.appendChild(containerLi);
        }

        containerList.appendChild(containerUl);
        containerUl.style.paddingInlineStart = "0px";
        containerList.style.marginTop = "15px";
        containerList.style.color = "black";
    }
}