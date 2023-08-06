window.onload = () => {
    getOptionsSelect();
}

const getOptionsSelect = () => {
    let selectedCountries = document.querySelector("#countries");
    let optionBrazil = document.createElement("option");
    optionBrazil.innerHTML = "Brasil";
    optionBrazil.value = "Brazil";

    let optionCanada = document.createElement("option");
    optionCanada.innerHTML = "Canadá";
    optionCanada.value = "Canada";

    let optionUSA = document.createElement("option");
    optionUSA.innerHTML = "Estados Unidos";
    optionUSA.value = "United States";

    let optionArgentina = document.createElement("option");
    optionArgentina.innerHTML = "Argentina";
    optionArgentina.value = "Argentina";

    let optionChina = document.createElement("option");
    optionChina.innerHTML = "China";
    optionChina.value = "China";

    let optionJapan = document.createElement("option");
    optionJapan.innerHTML = "Japão";
    optionJapan.value = "Japan";

    selectedCountries.appendChild(optionBrazil);
    selectedCountries.appendChild(optionCanada);
    selectedCountries.appendChild(optionUSA);
    selectedCountries.appendChild(optionArgentina);
    selectedCountries.appendChild(optionChina);
    selectedCountries.appendChild(optionJapan);

}

const showWarningMessage = () => {
    const containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";
    containerResult.innerHTML = "Selecione um país";
    containerResult.style.color = "red";
}

const showUniversities = async () => {
    let selectedCountries = document.querySelector("#countries");
    let countrySelected = selectedCountries.options[selectedCountries.selectedIndex].value;
    let countryText = selectedCountries.options[selectedCountries.selectedIndex].text;

    if (!countrySelected) {
        showWarningMessage();
        return;
    } 

    const URL_API_UNIVERSITIES = `http://universities.hipolabs.com/search?country=${countrySelected}`;
    const response = await fetch(URL_API_UNIVERSITIES);

    let dataApi = await response.json();
    if (dataApi) {
        let containerResult = document.querySelector("#result");
        containerResult.innerHTML = `10 universidades - ${countryText}`;
        containerResult.innerHTML += `<br />`;
        
        for (let count = 0; count < 9; count++) {
            let university = dataApi[count].name;
            containerResult.innerHTML += university;
            containerResult.innerHTML += `<br />`;
        }
    }
}