

function render() {

    const container = document.getElementById("container");

    container.innerHTML = "";

    const hallOfFameContainer = document.createElement("div");
    container.appendChild(hallOfFameContainer)

    container.setAttribute("id", "hallOfFameContainer")
    const title = document.createElement("h1");
    title.textContent = "PUTA";
    container.appendChild(title);

    if (firstPlace) {
        const gold = document.createElement("img")
        gold.setAttribute("src", "gold.png")
        hallOfFameContainer.appendChild(gold)
    } else if (secondPlace) {
        const silver = document.createElement("img")
        silver.setAttribute("src", "silver.png")
        hallOfFameContainer.appendChild(silver)
    } else if (thirdPlace) {
        const bronze = document.createElement("img")
        bronze.setAttribute("src", "bronze.png")
        hallOfFameContainer.appendChild(bronze)
    } else if(trash) {
        const trash = document.createElement("img")
        trash.setAttribute("src", "trash.png")
        hallOfFameContainer.appendChild(trash)
    }

};

export default { render };