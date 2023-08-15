let tasksList = new Array();

const showWarningMessage = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "Informe uma tarefa.";
    containerResult.style.color = "red";
}

const getTasks = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let task = document.querySelector("#task").value;

    if (task) {
        tasksList.push(task);
        listTasks();
    } else {
        showWarningMessage();
    }

}

const listTasks = () => {
    let containerResult = document.querySelector("#result");
    let containerList = document.createElement("ul");
    for (let item of tasksList) {
        let containerItem = document.createElement("li");
        containerItem.textContent = item;
        containerItem.style.listStyleType = "none";
        containerList.appendChild(containerItem);
    }

    containerList.style.paddingLeft = "0";
    containerResult.appendChild(containerList);
    containerResult.style.color = "black";
    return tasksList;  
}
