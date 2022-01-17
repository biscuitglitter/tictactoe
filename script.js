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

  function choosePlayer (event) {
    if (event.target.innerText == "X") {
      nextTurn = "X"
      console.log(nextTurn)
    } else if (event.target.innerText == "O") {
      nextTurn = "O"
      console.log(this.innerText, nextTurn)
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
      if (!nextTurn) {
        document.querySelectorAll(".box").forEach(box => box.classList.add("rednotice"))
        document.querySelector(".choosers").innerText = "Choose X or O"
        document.querySelector(".choosers").style.color = "hsl(8, 89%, 50%, 0.9)"
      } else if (nextTurn) {
        document.querySelectorAll(".box").forEach(box => box.classList.remove("rednotice"))
        if (e.target.innerText == "") {
          e.target.innerText = nextTurn
          changeTurn()
          moves+
        console.log(moves++)
        } 
      }
      }))
    
  return {
    choosePlayer
  };
})();

