const Gameboard = (function () {
  // module pattern
  let gameBoard = [];
  return {
    gameBoard,
  };
})();

const Player = (name) => {
  // factory pattern
  return { name };
};

const player1 = Player("player1");
const player2 = Player("player2");

const displayControler = (function () { // module pattern
  let moves = 0;
  let nextTurn 

  function choosePlayer() {
    if (e.target.id == "X") {
      nextTurn = "X"
    } else if (e.target.id == "O") {
      nextTurn = "O"
    }
  }

  function changeTurn(){
    if(nextTurn == 'X'){
         nextTurn = 'O';
    } else {
         nextTurn = 'X';
    }
}
  document.querySelectorAll(".box").forEach(elem =>
    elem.addEventListener("click", (e) => {
      if (e.target.innerText == "") {
        e.target.innerText = nextTurn
        changeTurn()
        moves+
        console.log(moves++)
      } else {
      }
    }))
  return {
    choosePlayer
  };
})();

