
// - - - - - -  GAME SCREEN  - - - - - -
// Elements
const map = document.getElementById("map");
const topBar = document.getElementById("top-bar");
const cameras = document.getElementById("cameras");





// - - - - - - INPUT SERVICE - - - - - -
var keysPressed = {};

document.addEventListener("keydown",(event) => {
    keysPressed[event.key] = true;
});
document.addEventListener("keyup",(event) => {
    keysPressed[event.key] = false;
});





//  - - - - - - - LIBRARY - - - - - - -
var charactersList = {
    "chaves": {
        "displayName": "Chaves",
        "acceleration": 8,
        "maxspeed": 60,
        "brakes": 10,
    }
}





//  - - - - - - - PLAYERS - - - - - - -
// Variables
var lastID = 0;
var playerList = [];
var playerCount = playerList.length;

// CREATE PLAYER
function Player(name,selectedCharacter,XPos,YPos) {

    // Player Variables
    let currentID = lastID;
    this.id = currentID;
    this.name = name;
    this.character = selectedCharacter;
    this.speed = 0;
    this.acceleration = charactersList[selectedCharacter].acceleration;
    this.maxspeed = charactersList[selectedCharacter].maxspeed;
    this.brakes = charactersList[selectedCharacter].brakes;
    this.X = 0;
    this.Y = 0;
    // Player Camera
    this.camera = document.createElement("div");
    this.camera.classList.add("player-camera");
    cameras.appendChild(this.camera);
    // Player Card
    this.card = document.createElement("div");
    this.card.innerHTML = `
        <img class="profile-icon" src="assets/characters/${selectedCharacter}/profile-icon.png">
        <h2>${charactersList[selectedCharacter].displayName}</h2>
        <h3>${name}</h3>
    `;
    this.card.classList.add("player-card");
    topBar.appendChild(this.card);
    // Character Element in Map
    this.characterElement = document.createElement("div");
    this.characterElement.classList = `character-element ${selectedCharacter}`;
    map.appendChild(this.characterElement);


    // - - - - - FUNCTIONS - - - - -

    // Reload Camera function
    this.reloadCamera = function(){
        if (this.camera.map) {
            this.camera.map.remove();
        }
        this.camera.map = map.cloneNode(true);
        this.camera.map.id = "";
        this.camera.map.classList.add("camera-map");
        this.camera.appendChild(this.camera.map);

        this.camera.map.style.translate = `${(this.camera.clientWidth/2)-(this.X)}px ${(this.camera.clientHeight/2)-(this.Y)}px`;
    }

    // Change Character position function
    this.setPos = function(X,Y){
        if (X) {
            this.characterElement.style.left = `${X}px`;
            this.X = X;
        };
        if (Y) {
            this.characterElement.style.top = `${Y}px`;
            this.Y = Y;
        };
        reloadEveryonesCamera();
    };
    if (XPos||YPos) {
        this.setPos(XPos,YPos);
    };



    // Final touches
    playerCount++;
    lastID++;
    reloadDisplays();
    this.reloadCamera();
    reloadEveryonesCamera();

};


// - - - - - FUNCTIONS - - - - -
// Reload Everyone's camera function
function reloadEveryonesCamera() {
    playerList.forEach(element=>{
        element.reloadCamera();
    });
}
// Reload Cameras Display function
function reloadDisplays() {
    if (playerCount == 1) {
        cameras.style.gridTemplateColumns = "100%";
        cameras.style.gridTemplateRows = "100%";
    } else if (playerCount == 2) {
        cameras.style.gridTemplateColumns = "50% 50%";
        cameras.style.gridTemplateRows = "100%";
    } else if (playerCount >= 3) {
        cameras.style.gridTemplateColumns = "50% 50%";
        cameras.style.gridTemplateRows = "50% 50%";
    }
}

playerList[lastID] = new Player("jogador1 sla","chaves",-50,100);
playerList[lastID] = new Player("tome jogador 2","chaves",75,250);
playerList[lastID] = new Player("receba 3","chaves",95,150);