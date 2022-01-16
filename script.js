


const Gameboard = (function () { 
    let gameBoard = ["x", "o", "x", "o", "x", "o", "x", "o", "x"]
    return {
     gameBoard
    }
})();
 


const Player = (name) => {
    const getName = () => name
    return {name, getName}
}

const player1 = Player("player1")
const player2 = Player("player2")

/// first step is to get my Xs and Os to appear on the grid

const displayController = (function () {
    let letterX = document.querySelector(".X")
    let playerTurn
    let choosePlayer = function () {
        letterX.addEventListener("click", (e) => {
            if (e.target.innerText === "X") {
                playerTurn = player1; console.log(playerTurn);
            } else playerTurn = player2; console.log(playerTurn);
        })
    }
    let playerMark = function () {
        document.querySelectorAll(".box").forEach(box =>
            box.addEventListener("click", () => {
                if (player1) {
                    playerTurn = player1
                    box.textContent = Gameboard.gameBoard[i]
                } else {
                    playerTurn = player2;
                }
            }))
    }
    
                return {
                    playerMark, choosePlayer, playerTurn
                }
})()
    
displayController.choosePlayer()
displayController.playerMark()


  


