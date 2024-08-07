function render() {

    
    const container = document.getElementById("container");

    container.innerHTML = "";


   const title = document.createElement("h1");
   title.textContent = "Cabinet of Curiosities";
   container.appendChild(title); 


    
   
};

export default { render };