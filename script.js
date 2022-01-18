const Gameboard = (function () {
  // module pattern
  let gameBoard = [];
  return {
    gameBoard,
  };
})();

const Player = (name) => { 
  return { name };
};

const player1 = Player("player1");
const player2 = Player("player2");

const displayControler = (function () {
  let moves = 0;
  let nextTurn

  function chooseLetter() {
    document.querySelectorAll(".box").forEach(box => box.classList.remove("rednotice"))
    document.querySelectorAll(".buttonChoices").forEach(button => button.addEventListener("click", (e) => {
      if (e.target.innerText === "X") {
        nextTurn = "X"; 
        console.log("it got fired!")
      } else if (e.target.innerText === "O") {
        nextTurn = "O"
      }
    }))
  }
  function playerMarks() {
    document.querySelectorAll(".box").forEach(elem =>
      elem.addEventListener("click", (e) => {
        if (nextTurn) {
          if (e.target.innerText == "") {
            e.target.innerText = nextTurn
            changeTurn();
            Gameboard.gameBoard.push(nextTurn)
            console.log(Gameboard.gameBoard)
          }
        } else if (!nextTurn) {
          document.querySelectorAll(".box").forEach(box => box.classList.add("rednotice"))
          document.querySelector(".choosers").innerText = "You have to choose a letter"
          document.querySelector(".choosers").style.color = "hsl(8, 89%, 50%, 0.9)"
          chooseLetter()
        }
      }))
  }

  function changeTurn() {
    if (nextTurn == "X") {
      nextTurn = "O";
    } else {
      nextTurn = "X";
    }
  }
  
  return {
    chooseLetter, playerMarks
  };

})();

displayControler.chooseLetter()
displayControler.playerMarks()