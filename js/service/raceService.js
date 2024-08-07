import gameController from "../controler/gameController.js";

let animationFrameId;

function move({ target }) {
    const actualPosition = parseInt(getComputedStyle(target).left);
    const points = gameController.getPoints();
    if (points === 10) {
        target.style.left = actualPosition + 4 + "px";
    } else if (points === 8) {
        target.style.left = actualPosition + 3 + "px";
    } else if (points === 7) {
        target.style.left = actualPosition + 2 + "px";
    } else if (points === 5) {
        target.style.left = actualPosition + 1 + "px";
    }
}

function checkAndMove() {
    if (!gameController.getIsMoving()) {
        console.log("Stopped moving");
        cancelAnimationFrame(animationFrameId);
        return;
    }
    console.log("Checking if moving:", gameController.getIsMoving());
    const playerElement = document.querySelector("#player");
    move({ target: playerElement });
    animationFrameId = requestAnimationFrame(checkAndMove);
}

export default { checkAndMove };