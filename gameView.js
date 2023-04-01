export default class GameView {
    
    updateBoard(game){
        this.updateTurn(game);
        const winningCombination = game.findWinningCombination();
        document.querySelector(".winner").innerText = "";
        for(let i=0; i<game.board.length; i++){
            const title = document.querySelectorAll(".board-title")[i];
            title.textContent = game.board[i];
            title.classList.remove("title-winner");
            let titleType = game.board[i]=="X" ? "title-x" : "title-o";
            if(game.board[i]!=null){
                title.classList.add(titleType);
            }
            
            if(winningCombination && winningCombination.includes(i)){
                title.classList.add("title-winner");
            }
        }
        game.findLetter();
    }

    updateTurn(game){
       let player_X = document.querySelector(".playerX");
       let player_O = document.querySelector(".playerO"); 
       player_X.classList.remove("active");
       player_O.classList.remove("active");
       if(game.turn=="X"){
        player_X.classList.add('active');
       }else{
        player_O.classList.add('active');
       }
    }
}