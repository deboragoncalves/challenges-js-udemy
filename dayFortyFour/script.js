const URL_API_UNIVERSITIES = `http://universities.hipolabs.com/search?country=`;

window.onload = () => {
    const UNIVERSITIES_BRAZIL = "Brazil";
    const UNIVERSITIES_USA = "United States";
    const UNIVERSITIES_CANADA = "Canada";

    let arrayUrlUniversities = new Array();
    arrayUrlUniversities.push(`${URL_API_UNIVERSITIES}${UNIVERSITIES_USA}`);
    arrayUrlUniversities.push(`${URL_API_UNIVERSITIES}${UNIVERSITIES_CANADA}`);
    arrayUrlUniversities.push(`${URL_API_UNIVERSITIES}${UNIVERSITIES_BRAZIL}`);

    showUniversities(arrayUrlUniversities);
}

const showUniversities = async (arrayUrlUniversities) => {
    if (!arrayUrlUniversities) return;

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