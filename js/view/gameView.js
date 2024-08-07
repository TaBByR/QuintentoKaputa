

function render() {

    const container = document.getElementById("container");

    container.innerHTML = "";

    const olympicContainer = document.createElement("div");
    olympicContainer.setAttribute("id", "olympicContainer");

    container.appendChild(olympicContainer);

    const quizzContainer = document.createElement("div");
    quizzContainer.setAttribute("id", "quizzContainer");
    olympicContainer.appendChild(quizzContainer);


    const raceContainer = document.createElement("div");
    raceContainer.setAttribute("id", "raceContainer");
    olympicContainer.appendChild(raceContainer);

    const player = document.createElement("img");
    player.setAttribute("id", "player");
    player.setAttribute("src", "player.png");
    raceContainer.appendChild(player)
   
};

export default { render};


