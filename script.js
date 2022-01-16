const Gameboard = (function () {
  // module pattern
  let gameBoard = [];
  return {
    gameBoard,
  };
})();

const Player = (name) => {  // factory pattern
  return { name };
};

const player1 = Player("player1");
const player2 = Player("player2");

const displayControler = (function () {   // module pattern
    let moves = 0;
    let count = 0
    let choice
    let buttons = document.querySelector(".buttonChoices")
    let playerTurn
    let start = document.querySelector(".start")

    let startGame = function () {
        start.addEventListener("click", () => {
            playerChoice()
            if ()
        }
        )
    }
    let playerChoice = function () {
        buttons.addEventListener("click", (e) => {
            if (e.target.innerText === "X" && Gameboard.gameBoard.slice(-1) !== "X") {
                choice = "X"
                playerTurn = player1
                Gameboard.gameBoard.push(choice)
                console.log(Gameboard.gameBoard)
            } else if (e.target.innerText === "O" && Gameboard.gameBoard.slice(-1) !== "O") {
                choice = "O"
                playerTurn = player2
                Gameboard.gameBoard.push(choice)
                console.log(Gameboard.gameBoard)
            }
        }
        )
    }
    let playerMoves = function () {
            document.querySelectorAll(".box").forEach(box =>
                box.addEventListener("click", (e) => {
                    if (playerTurn = player1) {
                        box.innerText = choice
                        console.log(choice)
                } else if (playerTurn = player2) {
                    box.innerText = choice
                }              
            }))
    }
  return {
    moves, count, buttons, playerMoves, startGame
  };
})();

displayControler.startGame();
displayControler.playerMoves();

    
  
  