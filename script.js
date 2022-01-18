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

  function changeTurn(){
    if(nextTurn == "X"){
         nextTurn = "O";
    } else {
         nextTurn = "X";
    }
  }
  function chooseLetter() {
    document.querySelectorAll(".buttonChoices").forEach(button => button.addEventListener("click", (e) => {
      if (e.target.innerText === "X") {
        nextTurn = "X"; console.log("nextTurn " + nextTurn)
      } else if (e.target.innerText === "O") {
        nextTurn = "O"
        console.log("nextTurn " + nextTurn)
      }
    }))
  }
  document.querySelectorAll(".box").forEach(elem =>
    elem.addEventListener("click", (e) => {
      if (!nextTurn) {
        document.querySelectorAll(".box").forEach(box => box.classList.add("rednotice"))
        document.querySelector(".choosers").innerText = "You have to choose a letter"
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
    chooseLetter
  };

})();

displayControler.chooseLetter()