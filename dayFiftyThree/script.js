let totalExpenses = 0;
let dataExpenses = {};

let typeExpenses = new Set();
let foodExpense = 0;
let transportExpense = 0;
let housingExpense = 0;

window.onload = () => {
    getOptionsSelect();
}

const showWarningMessage = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "Informe dados válidos.";
    containerResult.style.color = "red";
}

const getOptionsSelect = () => {
    let selectedTypeExpenses = document.querySelector("#typeExpenses");
    let foodExpense = document.createElement("option");
    foodExpense.innerHTML = "Alimentação";
    foodExpense.value = "alimentacao";

    let transportExpense = document.createElement("option");
    transportExpense.innerHTML = "Transporte";
    transportExpense.value = "transporte";

    let housingExpense = document.createElement("option");
    housingExpense.innerHTML = "Moradia";
    housingExpense.value = "moradia";

    selectedTypeExpenses.appendChild(foodExpense);
    selectedTypeExpenses.appendChild(transportExpense);
    selectedTypeExpenses.appendChild(housingExpense);
    selectedTypeExpenses.style.padding = "6px 0";
    selectedTypeExpenses.style.width = "120px";
}

const getDataExpenses = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";
    let selectedTypeExpenses = document.querySelector("#typeExpenses");
    let typeExpenseSelected = selectedTypeExpenses.options[selectedTypeExpenses.selectedIndex].value;
    let valueExpense = document.querySelector("#valueExpense").value;

    typeExpenseSelected && valueExpense ? showExpenses(typeExpenseSelected, valueExpense) : showWarningMessage();
}

const showExpenses = (typeExpenseSelected, valueExpense) => {
    if (!typeExpenseSelected || !valueExpense) {
        showWarningMessage();
        return;
    }

    let value = parseFloat(valueExpense);
    totalExpenses += value;
        
    let typeExpense = typeExpenseSelected;
    typeExpense = typeExpense.toLowerCase();
        
    typeExpenses.add(typeExpense);
        
    if (typeExpense == "alimentacao") {
        foodExpense += value;
        dataExpenses[typeExpense] = foodExpense;
    } else if (typeExpense == "transporte") {
        transportExpense += value;
        dataExpenses[typeExpense] = transportExpense;
    } else if (typeExpense == "moradia") {
        housingExpense += value;
        dataExpenses[typeExpense] = housingExpense;
    }

    let containerResult = document.querySelector("#result");
    containerResult.innerHTML += `<br />`;

    totalExpenses >= 0 ? containerResult.innerHTML += `Total Despesas: ${totalExpenses}` : null;
    containerResult.innerHTML += `<br />`;
    foodExpense > 0 ? containerResult.innerHTML += `Total Despesas - Alimentação: ${foodExpense}` : null;
    containerResult.innerHTML += `<br />`;
    transportExpense > 0 ? containerResult.innerHTML += `Total Despesas - Transporte: ${transportExpense}` : null;
    containerResult.innerHTML += `<br />`;
    housingExpense > 0 ? containerResult.innerHTML += `Total Despesas - Moradia: ${housingExpense}` : null;
    containerResult.style.color = "black";
        
    return {
        total: totalExpenses,
        types: typeExpenses,
        expensesByType: dataExpenses
    }

}