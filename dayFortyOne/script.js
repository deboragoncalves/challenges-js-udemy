window.onload = () => {
    getRandomJoke();
}

const getRandomJoke = async () => {
    const URL_API_JOKES = "https://official-joke-api.appspot.com/random_joke";
    const response = await fetch(URL_API_JOKES);
    let dataApi = "";

    // question setup - answer punchline

    setTimeout(async () => {
        dataApi = await response.json();
        const containerResult = document.querySelector("#result");
        if (dataApi) {
            let question = dataApi.setup;
            let answer = dataApi.punchline;
            containerResult.innerHTML = question;
            containerResult.innerHTML += "<br />";
            containerResult.innerHTML += answer;
        }
    }, 5);

}