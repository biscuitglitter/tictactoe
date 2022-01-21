const Gameboard = (function () {
  // module pattern
  let gameBoard = [];

  return {
    gameBoard,
  };
})();




const Player = (name, letter) => {
  return { name, letter };
  };  

const player1 = Player("player one")
const player2 = Player("player two")

const displayControler = (function () {
  let nextTurn;
  function changeTurn() {
    if (nextTurn == "X") {
      nextTurn = "O";
    } else {
      nextTurn = "X";
    }
  }

  function chooseLetter() {
    document
      .querySelectorAll(".box")
      .forEach((box) => box.classList.remove("rednotice"));
    document.querySelectorAll(".buttons").forEach((button) =>
      button.addEventListener("click", (e) => {
        if (e.target.innerText === "X") {
          nextTurn = "X";
          player1.letter = "X"
          player2.letter = "O"
          document.querySelector(".choosers").style.color = "black"
          document.querySelector(".choosers").innerText = "player one: X player two: O"
        } else if (e.target.innerText === "O") {
          nextTurn = "O";
          player1.letter = "O"
          player2.letter = "X"
          document.querySelector(".choosers").style.color = "black"
          document.querySelector(".choosers").innerText = "player one: O player two: X"
        }
      })
    );
  }

  function playerMarks() {
    document.querySelectorAll(".box").forEach((elem) =>
      elem.addEventListener("click", (e) => {
        if (nextTurn) {
          if (e.target.innerText == "") {
            e.target.innerText = nextTurn;
            Gameboard.gameBoard.push(nextTurn);
            changeTurn();
            Game.winningCombos();
          }
        } else if (!nextTurn) {
          document
            .querySelectorAll(".box")
            .forEach((box) => box.classList.add("rednotice"));
          document.querySelector(".choosers").innerText =
            "You have to choose a letter";
          document.querySelector(".choosers").style.color =
            "hsl(8, 89%, 50%, 0.9)";
          chooseLetter();
        }
      })
    );
  }
  return {
    chooseLetter,
    playerMarks,
    nextTurn,
    changeTurn,
  };
})();

displayControler.chooseLetter();
displayControler.playerMarks();


const Game = (function () {
  let one = document.getElementById("1");
  let two = document.getElementById("2");
  let three = document.getElementById("3");
  let four = document.getElementById("4");
  let five = document.getElementById("5");
  let six = document.getElementById("6");
  let seven = document.getElementById("7");
  let eight = document.getElementById("8");
  let nine = document.getElementById("9");

  letWin = false;
 
  function winningCombos() {
    if (
      one.innerText === two.innerText &&
      two.innerText === three.innerText &&
      three.innerText !== ""
    ) {
      letWin = true;
      getWinner()
    } else if (
      four.innerText === five.innerText &&
      five.innerText === six.innerText &&
      six.innerText !== ""
    ) {
      letWin = true;
      getWinner()
    } else if (
      seven.innerText === eight.innerText &&
      eight.innerText === nine.innerText &&
      nine.innerText !== ""
    ) {
      letWin = true;
      getWinner()
    } else if (
      one.innerText === four.innerText &&
      four.innerText === seven.innerText &&
      seven.innerText !== ""
    ) {
      letWin = true;
      getWinner()
    } else if (
      two.innerText === five.innerText &&
      five.innerText === eight.innerText &&
      eight.innerText !== ""
    ) {
      letWin = true;
      getWinner()
    } else if (
      three.innerText === six.innerText &&
      six.innerText === nine.innerText &&
      nine.innerText !== ""
    ) {
      letWin = true;
      getWinner()
    } else if (
      one.innerText === five.innerText &&
      five.innerText === nine.innerText &&
      nine.innerText !== ""
    ) {
      letWin = true;
      getWinner()
    } else if (
      three.innerText === five.innerText &&
      five.innerText === seven.innerText &&
      seven.innerText !== ""
    ) {
      letWin = true;
      getWinner()
    } else if (one.innerText !== "" && two.innerText !== "" && three.innerText !== "" && four.innerText !== "" && five.innerText !== "" && six.innerText !== "" && seven.innerText !== "" && eight.innerText !== "" && nine.innerText !== "") {
      document.querySelector(".choosers").innerText = "tie..."
    }
  }

    if (letWin === true) {
      document.querySelectorAll(".box").forEach((box) => box.classList.add("winCase"))
    }

    function getWinner() {
      if (Gameboard.gameBoard.slice(-1).toString() ===  player1.letter) {
        document.querySelector(".choosers").innerText = "player one wins!"
      } else if (Gameboard.gameBoard.slice(-1) === player2.letter) {
        document.querySelector(".choosers").innerText = "player two wins!"
    }
    }
  
  return {
    winningCombos, letWin
  };
})();
