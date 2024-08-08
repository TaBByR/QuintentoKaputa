import gameView from "./gameView.js";

function render() {

    const container = document.getElementById("container");

    container.innerHTML = "";

    const hallOfFameContainer = document.createElement("div");
    container.appendChild(hallOfFameContainer)

    container.setAttribute("id", "hallOfFameContainer")
    const title = document.createElement("h1");
    
    container.appendChild(title);

    if (gameView.firstPlace) {
        title.textContent = "YOU ARE THE CHAMPION";
        const gold = document.createElement("img")
        gold.setAttribute("src", "gold.png")
        hallOfFameContainer.appendChild(gold)
    } else if (gameView.secondPlace) {
        title.textContent = "ALMOST THERE, KEEP TRYING";
        const silver = document.createElement("img")
        silver.setAttribute("src", "silver.png")
        hallOfFameContainer.appendChild(silver)
    } else if (gameView.thirdPlace) {
        title.textContent = "THAT WAS VERY BAD";
        const bronze = document.createElement("img")
        bronze.setAttribute("src", "bronze.png")
        hallOfFameContainer.appendChild(bronze)
    } else if(gameView.trash) {
        title.textContent = "LOL";
        const trash = document.createElement("img")
        trash.setAttribute("src", "trash.png")
        hallOfFameContainer.appendChild(trash)
    }

};

export default { render };