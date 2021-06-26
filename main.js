import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameview = new GameView();

document.querySelector(".restart").addEventListener("click",() =>{
    onRestartClick();
})

let tile = document.querySelectorAll(".board-tile")
tile.forEach((tile) => {
    tile.addEventListener("click",() => {
        onTileClicked(tile.dataset.index);
    })
})

function onTileClicked(i){
    //1.make move
    //2.change turn
    //3.update board
    game.makeMove(i);
    gameview.updateBoard(game);
}

function onRestartClick() {
    game = new Game();
    gameview.updateBoard(game);
}

gameview.updateBoard(game);

