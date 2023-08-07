const URL_API_UNIVERSITIES = `http://universities.hipolabs.com/search?country=`;

window.onload = () => {
    let attemps = 3;
    let timeCallAgain = 100;
    callApi(attemps, timeCallAgain);
}

// chamar fetch API passando a URL errada e forçando pra cair no catch
// depois de x ms, tentar novamente com URL certa
const callApi = (attemps, timeCallAgain) => {
    let containerResult = document.querySelector("#result");
    containerResult.innerHTML = "";
    
    for (let count = 0; count < attemps; count++) {
        try {
            showUniversities(URL_API);
        } catch (error) {
            setTimeout(() => {
                showUniversities(URL_API_UNIVERSITIES);
            }, timeCallAgain);
        }
    }
}

const showUniversities = async (urlUniversity) => {
    const UNIVERSITIES_BRAZIL = "Brazil";
    const UNIVERSITIES_USA = "United States";
    const UNIVERSITIES_CANADA = "Canada";

    let arrayUrlUniversities = new Array();
    arrayUrlUniversities.push(`${urlUniversity}${UNIVERSITIES_USA}`);
    arrayUrlUniversities.push(`${urlUniversity}${UNIVERSITIES_CANADA}`);
    arrayUrlUniversities.push(`${urlUniversity}${UNIVERSITIES_BRAZIL}`);

    let containerResult = document.querySelector("#result");

    for (const urlUniversity of arrayUrlUniversities) {
        const response = await fetch(urlUniversity);
        let dataApi = await response.json();

        if (dataApi) {
            let containerUniversity = document.createElement("div");
            containerUniversity.style.marginTop = "20px";

            let country = dataApi[0].country;

            containerUniversity.innerHTML = `10 universidades - ${country}`;
            containerUniversity.innerHTML += `<br />`;
            
            for (let count = 0; count < 9; count++) {
                let university = dataApi[count].name;
                containerUniversity.innerHTML += university;
                containerUniversity.innerHTML += `<br />`;
            }

            containerResult.appendChild(containerUniversity);
        }
    }
}