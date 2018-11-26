const board = document.getElementById("board");
let tile = document.createElement("div");
let player = true;

function buildBoard() {
    for (let i = 0; i < 9; i++) {
        tile = document.createElement("div");
        tile.classList.add("tile");
        board.appendChild(tile);
    }
}

function play() {
    if(event.target.textContent === "") {
        if (player === true) {
            event.target.textContent = "X";
        }
        else {
            event.target.textContent = "O";
        }
        player = !player;
    }

}

buildBoard();
board.addEventListener('click', play);

