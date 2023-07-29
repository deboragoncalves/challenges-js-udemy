let listItems = new Array();
let filteredList = new Array();
let containerList = document.querySelector("#items");

window.onload = () => {
    createList();
}

const createList = () => {
    listItems.push("Mochachino Canela");
    listItems.push("Cappucino");
    listItems.push("Cappucino com chocolate");
    listItems.push("Milkshake");
    listItems.push("Milkshake de ovomaltine");
    listItems.push("Milkshake de nutella");
    showList(listItems);
}

let showList = (list) => {
    if (!list || list.lenght < 0) return;

    containerList.innerHTML = "";

    let containerUl = document.createElement("ul");

    for (let item of list) {
        item = item.toLowerCase();
        let containerLi = document.createElement("li");
        containerLi.innerHTML = `${item}`;
        containerLi.style.listStyleType = "none";
        containerUl.appendChild(containerLi);
    }

    containerList.appendChild(containerUl);
    containerUl.style.paddingInlineStart = "0px";
    containerList.style.marginTop = "15px";
    containerList.style.color = "black";

}

const showWarningMessage = () => {
    containerList.innerHTML = "O item não foi encontrado na lista. Tente novamente";
    containerList.style.color = "red";
    containerList.style.marginTop = "15px";

    setTimeout(() => {
        showList(listItems);
    }, 5000);
}

const changeItem = (e) => {
    filteredList = new Array();
    let itemUser = e.target.value;

    if (itemUser) {        
        for (let item of listItems) {
            item = item.toUpperCase();
            itemUser = itemUser.toUpperCase();
    
            if (item.includes(itemUser)) {
                filteredList.push(item);
            }
        }

        showList(filteredList);
    }

    filteredList.length <= 0 ? showWarningMessage() : null;
}