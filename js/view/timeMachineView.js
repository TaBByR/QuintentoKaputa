function render() {

    
    const container = document.getElementById("container");

    container.innerHTML = "";


    const timeMachineContainer = document.createElement("div");
    timeMachineContainer.setAttribute("id", "timeMachineContainer");
    container.appendChild(timeMachineContainer);

    const swimmerContainer = document.createElement("div");
    swimmerContainer.setAttribute("id", "swimmerContainer");
    timeMachineContainer.appendChild(swimmerContainer);


    
   
};

export default { render };