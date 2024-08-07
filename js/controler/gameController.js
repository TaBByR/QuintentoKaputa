import gameView from "../view/gameView.js";
import raceService from "../service/raceService.js";

let points = 10;
let isMoving = true;

function setPoints(newPoints) {
    points = newPoints;
}

function setIsMoving(newIsMoving) {
    isMoving = newIsMoving;
}

function getPoints() {
    return points;
}   

function getIsMoving() {
    return isMoving;
}

export function init() {
    gameView.render();
    setIsMoving(true); 
    raceService.checkAndMove();
    setTimeout(function() {
        setIsMoving(false);
        console.log("Movement stopped. isMoving is now:", getIsMoving());
    }, 1000);
}

export default {
    getPoints,
    getIsMoving,
    setPoints,
    setIsMoving,
};
