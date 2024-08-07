import { questions } from "../service/gameService.js";
import { navigate } from "../router.js";

let currentQuestion = 0;
const maxQuestions = questions.length - 1;
let quizzContainer;
let currentTimer
let firstPlace = false;
let secondPlace = false;
let thirdPlace = false;
let trash = false;

function render() {

    const container = document.getElementById("container");

    container.innerHTML = "";

    const olympicContainer = document.createElement("div");
    olympicContainer.setAttribute("id", "olympicContainer");

    container.appendChild(olympicContainer);

    quizzContainer = document.createElement("div");
    quizzContainer.setAttribute("id", "quizzContainer");
    olympicContainer.appendChild(quizzContainer);


    const raceContainer = document.createElement("div");
    raceContainer.setAttribute("id", "raceContainer");
    olympicContainer.appendChild(raceContainer);

    const player1 = document.createElement("img");
    player1.setAttribute("id", "player1");
    player1.setAttribute("src", "player.png");
    raceContainer.appendChild(player1)

    const player2 = document.createElement("img");
    player2.setAttribute("id", "player2");
    player2.setAttribute("src", "player.png");
    raceContainer.appendChild(player2)

    const player3 = document.createElement("img");
    player3.setAttribute("id", "player3");
    player3.setAttribute("src", "player.png");
    raceContainer.appendChild(player3)

    const player4 = document.createElement("img");
    player4.setAttribute("id", "player4");
    player4.setAttribute("src", "player.png");
    raceContainer.appendChild(player4)
   

    makeQuestionForm();


};

function makeQuestionForm() {

    quizzContainer.innerHTML = "";

    const timer = document.createElement("h3");
    timer.textContent = questions[currentQuestion].time;

    const questionText = document.createElement("p");
    questionText.textContent = questions[currentQuestion].question;

    quizzContainer.appendChild(timer);
    quizzContainer.appendChild(questionText);

    currentTimer = setInterval(() => {
        questions[currentQuestion].time--;
        timer.textContent = questions[currentQuestion].time;

        if (questions[currentQuestion].time === 0) {
            changeQuestion();
        }

    }, 1000);

    for (let i = 0; i < questions[0].responses.length; i++) {
        let response = document.createElement("p");
        let responseButton = document.createElement("button");
        responseButton.setAttribute("id", i);

        responseButton.addEventListener("click", checkResponse, currentTimer);

        responseButton.textContent = i + 1;
        response.textContent = questions[currentQuestion].responses[i];

        quizzContainer.appendChild(response);
        quizzContainer.appendChild(responseButton);
    }


}

function changeQuestion() {
    clearInterval(currentTimer);

    if (currentQuestion >= maxQuestions) {
        console.log("entrei");
        navigate("/cabinetofcuriosities");
        return;
    }
    currentQuestion++;
    makeQuestionForm();
}

function checkResponse(currentTimer) {
    const userResponse = event.target.id;

    if (userResponse == questions[currentQuestion].correctResponse) {
        console.log("acertou");
    } else {
        console.log("fodeus");
    }
    changeQuestion();
}

export default { render };



