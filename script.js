


const Gameboard = (function () {
let gameBoard = []
})();
 
const Player = (name) => {
    const getName = () => name
    return {name, getName}
}

/// first step is to get my Xs and Os to appear on the grid

const displayController = (function () {
    return {     
        
    }
})();
    

const Game = () => {
    const flow = () => {
        document.querySelector(".X").addEventListener("click",
            () => {
                document.querySelectorAll(".box").forEach(box =>
                    box.innerText = "X"
                )
            })
    }
    flow()
}
Game()

