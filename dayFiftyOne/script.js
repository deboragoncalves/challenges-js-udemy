const showWarningMessage = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "Informe um número.";
    containerResult.style.color = "red";
}

const getDataStudents = () => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";

    let number = document.querySelector("#number").value;

    number ? number > 0 ? getObjectGrades(number) : showWarningMessage() : showWarningMessage();
}

const getObjectGrades = (numberStudents) => {
    let arrayData = new Array();

    for (let countStudents = 1; countStudents <= numberStudents; countStudents++) {
        let arrayRandomNumbers = new Array();

        for (let count = 0; count < 5; count++) {
            // Math.floor(Math.random() * (max - min + 1) + min);
            let randomNumber = Math.floor(Math.random() * (10 - 0 + 1) + 0);
            arrayRandomNumbers[count] = randomNumber;
        }

        arrayData.push({
            name: `Teste ${countStudents}`,
            grades: arrayRandomNumbers
        });
    }

    getData(arrayData);
}

const getData = (arrayData) => {
    let sumTotalAverage = 0;
    let count = 0;
    let bestGrades = new Array();
    let worstGrades = new Array();
    let approvedStudents = new Array();
    let reapprovedStudents = new Array();
    
    for (let objectData of arrayData) {
        let hasAllProperties = objectData.hasOwnProperty("name") && objectData.hasOwnProperty("grades");
        if (!hasAllProperties) return;
        
        let studentAverage = 0;
        let sumGrades = 0;
        
        for (let grade of objectData.grades) {
            sumGrades += parseFloat(grade);
        }
        
        studentAverage = sumGrades / objectData.grades.length;
        sumTotalAverage += studentAverage;
        bestGrades.push(Math.max(...objectData.grades));
        worstGrades.push(Math.min(...objectData.grades));
        
        studentAverage >= 7 ? approvedStudents.push(objectData.name) : reapprovedStudents.push(objectData.name);
            
        count++;
    }
    
    let totalAverage = sumTotalAverage / count;
    let bestGrade = Math.max(...bestGrades);
    let worstGrade = Math.min(...worstGrades);

    let allStudentsData = {
        totalAverage: totalAverage,
        bestGrade: bestGrade,
        worstGrade: worstGrade,
        approvedStudents: approvedStudents,
        reapprovedStudents: reapprovedStudents
    }

    showData(arrayData, allStudentsData);
    return allStudentsData;
}

const showData = (arrayData, statisticsStudents) => {
    let containerResult = document.querySelector("#result");

    for (let dataStudent of arrayData) {
        containerResult.innerHTML += `Aluno ${dataStudent.name} - Notas: ${dataStudent.grades.join(", ")}`;
        containerResult.innerHTML += `<br />`;
    }

    containerResult.innerHTML += `<br />`;
    containerResult.innerHTML += `Média geral: ${statisticsStudents.totalAverage.toFixed(2)}`;
    containerResult.innerHTML += `<br />`;
    containerResult.innerHTML += `Melhor nota: ${statisticsStudents.bestGrade}`;
    containerResult.innerHTML += `<br />`;
    containerResult.innerHTML += `Pior nota: ${statisticsStudents.worstGrade}`;
    containerResult.style.color = "black";
}