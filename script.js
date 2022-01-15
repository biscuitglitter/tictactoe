


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
        letterX.addEventListener("click", () => {
            console.log("player1 will play with X")
            playerTurn = player1
            
        })
    }
    let playerMark = function () {
        document.querySelectorAll(".box").forEach(box =>
            box.addEventListener("click", (e) => {
                e.target.innerText = "X"
            }))
    }
    return {          
        playerMark, choosePlayer, playerTurn
    }
})();
    
displayController.choosePlayer()
displayController.playerMark()


const Game = () => {

}

  


