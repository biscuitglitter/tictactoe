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

let click = document.querySelector(".start")
let input = document.querySelector(".playerName")
let name = Player.name 

click.addEventListener("click", () => {
  let name = Player.name 
  name = input.value
  console.log(name)
  const player1 = Player(name)
  console.log(player1)  
})



const displayControler = (function () {
  let nextTurn
  
  function chooseLetter() {
    document.querySelectorAll(".box").forEach(box => box.classList.remove("rednotice"))
    document.querySelectorAll(".buttons").forEach(button => button.addEventListener("click", (e) => {
      if (e.target.innerText === "X") {
        nextTurn = "X"; 
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
            Gameboard.gameBoard.push(nextTurn)
            console.log(Gameboard.gameBoard)
            changeTurn();
            winningCombos();
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

  function winningCombos() {
    if (document.getElementById("1") !== "") {
      if (document.getElementById("1").innerText === document.getElementById("2").innerText && document.getElementById("2").innerText === document.getElementById("3").innerText) {
        document.querySelector(".choosers").innerText = "you win!"
      } else if (document.getElementById("4").innerText === document.getElementById("5").innerText && document.getElementById("5").innerText === document.getElementById("6").innerText) {
        document.querySelector(".choosers").innerText = "you win!"
      } else if (document.getElementById("7").innerText === document.getElementById("8").innerText && document.getElementById("8").innerText === document.getElementById("9").innerText) {
        document.querySelector(".choosers").innerText = "you win!"
      } else if (document.getElementById("1").innerText === document.getElementById("4").innerText && document.getElementById("4").innerText === document.getElementById("7").innerText) {
        document.querySelector(".choosers").innerText = "you win!"
      } else if (document.getElementById("2").innerText === document.getElementById("5").innerText && document.getElementById("5").innerText === document.getElementById("8").innerText) {
        document.querySelector(".choosers").innerText = "you win!"
      } else if (document.getElementById("3").innerText === document.getElementById("6").innerText && document.getElementById("6").innerText === document.getElementById("9").innerText) {
        document.querySelector(".choosers").innerText = "you win!"
      } else if (document.getElementById("1").innerText === document.getElementById("5").innerText && document.getElementById("5").innerText === document.getElementById("9").innerText) {
        document.querySelector(".choosers").innerText = "you win!"
      } else if (document.getElementById("3").innerText === document.getElementById("5").innerText && document.getElementById("5").innerText === document.getElementById("7").innerText) {
        document.querySelector(".choosers").innerText = "you win!"
      }
    } else {
        return
      }
    
      }
  
   return {
    chooseLetter, playerMarks, winningCombos
  };

})();

displayControler.chooseLetter()
displayControler.playerMarks()
