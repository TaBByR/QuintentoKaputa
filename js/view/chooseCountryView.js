import { getCountryImg } from "../service/chooseCountryService.js";
import { navigate } from "../router.js";

let selectedCountry = "us-sc";

function render(countries) {
    console.log(countries);

    const container = document.getElementById("container");

    const countriesContainer = document.createElement("div");
    countriesContainer.setAttribute("id", "countriesContainer");
    
    populateCountries(countries, countriesContainer);

    const nameDiv = document.createElement("div");

    const nameText = document.createElement("p");
    nameText.textContent = "Choose Player Name";

    const nameInput = document.createElement("input");
    nameInput.setAttribute("id", "nameInput");

    const nameButton = document.createElement("button");
    nameButton.textContent = "Start";
    nameButton.addEventListener("click", startQuizz);
    
    nameDiv.appendChild(nameText);
    nameDiv.appendChild(nameInput);
    nameDiv.appendChild(nameButton);

    container.appendChild(countriesContainer);
    container.appendChild(nameDiv);
}

function populateCountries(countries, countriesContainer) {
    Object.keys(countries).forEach((countryKey) => {
        const countryDiv = document.createElement("div");
        countryDiv.setAttribute("class", "countryDiv");
        countryDiv.setAttribute("id", countryKey);
        countryDiv.addEventListener("click", selectCountry);
        
        const countryImg = document.createElement("img");
        countryImg.src = getCountryImg(countryKey);
        countryImg.setAttribute("id", countryKey);

        const countryName = document.createElement("h4");
        countryName.textContent = countries[countryKey];
        countryName.setAttribute("id", countryKey);

        countryDiv.appendChild(countryImg);
        countryDiv.appendChild(countryName);

        countriesContainer.appendChild(countryDiv);

    });
}

function selectCountry() {
    event.stopPropagation();

    document.getElementById(selectedCountry).style.backgroundColor = "grey";
    selectedCountry = event.target.id;
    document.getElementById(event.target.id).style.backgroundColor = "blue";
}

function startQuizz() {
    const nameInput = document.getElementById("nameInput").value;  

    if(nameInput === null || nameInput === undefined || nameInput === "") {
        window.alert("Choose a name");
        return
    }

    sessionStorage.setItem("country", selectedCountry);
    sessionStorage.setItem("playerName", nameInput);

    navigate("/olympics");
}
    

export default { render }