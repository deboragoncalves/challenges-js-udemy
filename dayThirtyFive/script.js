let listItems = new Array();
let containerList = document.querySelector("#items");

window.onload = () => {
    createList();
}

const createList = () => {
    listItems.push("mochachino canela");
    listItems.push("cappucino");
    listItems.push("cappucino com chocolate");
    listItems.push("milkshake");
    listItems.push("milkshake de ovomaltine");
    listItems.push("milkshake de nutella");
    showList(listItems);
}

let showList = (list) => {
    if (!list || list.lenght < 0) return;

    containerList.innerHTML = "";

    let containerUl = document.createElement("ul");

    for (let item of list) {
        if (!item) {
            return;
        }

        item = item.toLowerCase();
        let containerLi = document.createElement("li");
        containerLi.innerHTML = `${item}`;
        containerLi.style.listStyleType = "none";
        containerLi.style.cursor = "pointer";
        containerLi.addEventListener("click", () => {
            containerLi.classList.add("active");

            removeClass(containerLi);
        });

        containerUl.appendChild(containerLi);
    }

    containerList.appendChild(containerUl);
    containerUl.style.paddingInlineStart = "0px";
    containerList.style.marginTop = "15px";
}

const removeClass = (containerLi) => {
    let containerUl = document.querySelector("ul");
    for (let itemLi of containerUl.children) {
        if (itemLi.innerHTML != containerLi.innerHTML) {
            itemLi.classList.remove("active");        
        }
    }
}

const moveUp = () => {
    let containerUl = document.querySelector("ul");
    for (let itemLi of containerUl.children) {
        if (itemLi.classList.contains("active")) {
            let textLi = itemLi.innerHTML;
            let indexItem = listItems.indexOf(textLi.toString());
            if (indexItem != -1 && indexItem != 0) {
                listItems[indexItem] = listItems[indexItem - 1];
                listItems[indexItem - 1] = textLi;
                showList(listItems);
            } 
        }
    }
}

const moveDown = () => {
    let containerUl = document.querySelector("ul");
    for (let itemLi of containerUl.children) {
        if (itemLi.classList.contains("active")) {
            let textLi = itemLi.innerHTML;
            let indexItem = listItems.indexOf(textLi.toString());
            if (indexItem != -1 && indexItem != listItems.length - 1) {
                listItems[indexItem] = listItems[indexItem + 1];
                listItems[indexItem + 1] = textLi;
                showList(listItems);
            } 
        }
    }
}