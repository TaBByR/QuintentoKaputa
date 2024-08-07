import gameView from "../view/gameView.js";
import raceService from "../service/raceService.js";

let points1 = 10;
let points2 = 8;
let points3 = 7;
let points4 = 5;

let isMoving = true;

function setPoints1(newPoints) {
    points1 = newPoints;
}
function setPoints2(newPoints) {
    points2 = newPoints;
}
function setPoints3(newPoints) {
    points3 = newPoints;
}
function setPoints4(newPoints) {
    points4 = newPoints;
}

function setIsMoving(newIsMoving) {
    isMoving = newIsMoving;
}

function getPoints1() {
    return points1;
}
function getPoints2() {
    return points2;
}   
function getPoints3() {
    return points3;
}   
function getPoints4() {
    return points4;
}   


function getIsMoving() {
    return isMoving;
}

export function init() {
    gameView.render();
    setIsMoving(true); 
    raceService.checkAndMove1();
    raceService.checkAndMove2();
    raceService.checkAndMove3();
    raceService.checkAndMove4();
    setTimeout(function() {
        setIsMoving(false);
    }, 1000);
}

export default {
    getPoints1,
    getPoints2,
    getPoints3,
    getPoints4,
    getIsMoving,
    setPoints1,
    setPoints2,
    setPoints3,
    setPoints4,
    setIsMoving,
};
