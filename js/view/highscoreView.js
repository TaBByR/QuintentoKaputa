function render() {

    
    const container = document.getElementById("container");

    container.innerHTML = "";


   const title = document.createElement("h1");
   title.textContent = "Highscores";
   container.appendChild(title); 


    
   
};

export default { render };