import { questions } from "../service/gameService.js";
import { navigate } from "../router.js";
import gameController from "../controler/gameController.js";
import raceService from "../service/raceService.js";

let currentQuestion = 0;
const maxQuestions = questions.length - 1;
let quizzContainer;
let currentTimer;

let firstPlace = false;
let secondPlace = false;
let thirdPlace = false;
let trash = false;

let hasAnswered = false;
let botInterval;
const margin = 60;


console.log(sessionStorage.getItem("country"));

const IMG_BASE_SRC = "../";

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
    timer.setAttribute("id", "timer");

    const questionText = document.createElement("p");
    questionText.textContent = questions[currentQuestion].question;

    quizzContainer.appendChild(timer);
    quizzContainer.appendChild(questionText);

    currentTimer = setInterval(() => {
        questions[currentQuestion].time--;
        document.getElementById("timer").textContent = questions[currentQuestion].time;

        if (questions[currentQuestion].time === 0) {
            changeQuestion();
        }

    }, 1000);

    if (questions[currentQuestion].type === "text") {
        textQuizz();
    }

    if (questions[currentQuestion].type === "image") {
        imageQuizz();
    }

    if (questions[currentQuestion].type === "click game") {
        clickGame();
        return
    }

    setTimeout(function () {
        randomMove2()
    }, parseInt(Math.random() * (9000 - 1000) + 1000));
    setTimeout(function () {
        randomMove3()
    }, parseInt(Math.random() * (9000 - 1000) + 1000));
    setTimeout(function () {
        randomMove4()
    }, parseInt(Math.random() * (9000 - 1000) + 1000));
}

function clickGame() {
    const gameText = document.createElement("p");
    gameText.textContent = "No question, run!!";

    const runButton = document.createElement("button");
    runButton.textContent = "Run!!";
    runButton.setAttribute("id", "runButton");

    quizzContainer.appendChild(gameText);
    quizzContainer.appendChild(runButton);

    botInterval = setInterval(() => {

        gameController.setIsMoving2(true);
        gameController.setIsMoving3(true);
        gameController.setIsMoving4(true);

        gameController.setPoints2(5);
        gameController.setPoints3(5);
        gameController.setPoints4(5);

        switch (Math.floor(Math.random() * 2) + 1) {
            case 1:
                raceService.checkAndMove2()
                raceService.checkAndMove4()
                break;
            case 2:
                raceService.checkAndMove3()
                break;
        }

        let randY = Math.floor(Math.random() * (quizzContainer.offsetHeight - margin * 2));
        let randX = Math.floor(Math.random() * (quizzContainer.offsetWidth - margin * 2));

        runButton.style.position = "relative";
        runButton.style.top = `${randY}px`;
        runButton.style.left = `${randX}px`;

        setTimeout(function () {
            gameController.setIsMoving2(false);
            gameController.setIsMoving3(false);
            gameController.setIsMoving4(false);
        }, 100);

    }, 1000);


    runButton.addEventListener("click", () => {
        gameController.setIsMoving1(true);

        gameController.setPoints1(5);

        raceService.checkAndMove1();


        setTimeout(function () {
            gameController.setIsMoving1(false);
        }, 100);

      

        let randY = Math.floor(Math.random() * (quizzContainer.offsetHeight - margin * 2));
        let randX = Math.floor(Math.random() * (quizzContainer.offsetWidth - margin * 2));

        runButton.style.position = "relative";
        runButton.style.top = `${randY}px`;
        runButton.style.left = `${randX}px`;


    })
}

function textQuizz() {
    for (let i = 0; i < questions[currentQuestion].responses.length; i++) {
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

function imageQuizz() {
    for (let i = 0; i < questions[currentQuestion].responses.length; i++) {
        let image = document.createElement("img");
        image.src = `${IMG_BASE_SRC}${questions[currentQuestion].responses[i]}`;
        image.setAttribute("id", i);
        image.setAttribute("class", "quizzImage");

        image.addEventListener("click", checkResponse, currentTimer);

        quizzContainer.appendChild(image);
    }
}

function changeQuestion() {
    hasAnswered = false;
    clearInterval(currentTimer);
    clearInterval(botInterval);

    if (currentQuestion >= maxQuestions) {
        return;
    }
    currentQuestion++;
    makeQuestionForm();
}

function wrongAnswer() {

    quizzContainer.innerHTML = "";

    const timer = document.createElement("h3");
    timer.textContent = questions[currentQuestion].time;
    timer.setAttribute("id", "timer");


    const youSuck = document.createElement("img");
    youSuck.setAttribute("src", "MEKIE ALWAYS LOSES, NOW SO DO YOU.jpg")

    quizzContainer.appendChild(timer);
    quizzContainer.appendChild(youSuck);
}

function checkResponse(currentTimer) {
    const userResponse = event.target.id;
    if (userResponse == questions[currentQuestion].correctResponse && hasAnswered === false) {
        gameController.setIsMoving1(true)
        switch (questions[currentQuestion].time) {
            case 0:
            case 1:
                gameController.setPoints1(4)
                raceService.checkAndMove1();
                break;
            case 2:
            case 3:
            case 4:
                gameController.setPoints1(5)
                raceService.checkAndMove1();
                break;
            case 5:
            case 6:
            case 7:
                gameController.setPoints1(7)
                raceService.checkAndMove1();
                break;
            case 8:
            case 9:
                gameController.setPoints1(8)
                raceService.checkAndMove1();
                break;
            case 10:
                gameController.setPoints1(10)
                raceService.checkAndMove1();
                break;
        }
        setTimeout(function () {
            gameController.setIsMoving1(false);
        }, 300);
    } else {
        gameController.setIsMoving1(false);
        if (hasAnswered === false) {
            wrongAnswer();
        }
    }
    hasAnswered = true

}

function randomMove2() {
    gameController.setIsMoving2(true)
    switch (questions[currentQuestion].time) {
        case 0:
        case 1:
            gameController.setPoints2(4)
            raceService.checkAndMove2();
            break;
        case 2:
        case 3:
            break;
        case 4:
            gameController.setPoints2(5)
            raceService.checkAndMove2();
            break;
        case 5:
            break;
        case 6:
        case 7:
            gameController.setPoints2(7)
            raceService.checkAndMove2();
            break;
        case 8:
        case 9:
            gameController.setPoints2(8)
            raceService.checkAndMove2();
            break;
        case 10:
            gameController.setPoints2(10)
            raceService.checkAndMove2();
            break;
    }
    setTimeout(function () {
        gameController.setIsMoving2(false);
    }, 300);
}

function randomMove3() {
    gameController.setIsMoving3(true)
    switch (questions[currentQuestion].time) {
        case 0:
        case 1:
            gameController.setPoints3(4)
            raceService.checkAndMove3();
            break;
        case 2:
        case 3:
            break;
        case 4:
            gameController.setPoints3(5)
            raceService.checkAndMove3();
            break;
        case 5:
            break;
        case 6:
        case 7:
            gameController.setPoints3(7)
            raceService.checkAndMove3();
            break;
        case 8:
        case 9:
            gameController.setPoints3(8)
            raceService.checkAndMove3();
            break;
        case 10:
            gameController.setPoints3(10)
            raceService.checkAndMove3();
            break;
    }
    setTimeout(function () {
        gameController.setIsMoving3(false);
    }, 300);
}
function randomMove4() {
    gameController.setIsMoving4(true)
    switch (questions[currentQuestion].time) {
        case 0:
        case 1:
            gameController.setPoints4(4)
            raceService.checkAndMove4();
            break;
        case 2:
        case 3:
            break;
        case 4:
            gameController.setPoints4(5)
            raceService.checkAndMove4();
            break;
        case 5:
            break;
        case 6:
        case 7:
            gameController.setPoints4(7)
            raceService.checkAndMove4();
            break;
        case 8:
        case 9:
            gameController.setPoints4(8)
            raceService.checkAndMove4();
            break;
        case 10:
            gameController.setPoints4(10)
            raceService.checkAndMove4();
            break;
    }
    setTimeout(function () {
        gameController.setIsMoving4(false);
    }, 300);
}
export default { render };



