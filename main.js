import Game from "./game.js";
import GameView from "./gameView.js";

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", ()=>{
    game = new Game;
    gameView.updateBoard(game);
})

let tiles = document.querySelectorAll(".board-title");
tiles.forEach((tile)=>{
    tile.addEventListener("click",()=>{
        onTitleClick(tile.dataset.index);
    })
})

function onTitleClick(i){
    // do this.
    game.makeMove(i);
    gameView.updateBoard(game);
}

gameView.updateBoard(game);