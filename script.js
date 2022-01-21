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
          console.log(player1, player2)
        } else if (e.target.innerText === "O") {
          nextTurn = "O";
          player1.letter = "O"
          player2.letter = "X"
          console.log(player1, player2)
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
            console.log(Gameboard.gameBoard);
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
      document.querySelector(".choosers").innerText = "you win!";
      console.log("you win");
      letWin = true;
    } else if (
      four.innerText === five.innerText &&
      five.innerText === six.innerText &&
      six.innerText !== ""
    ) {
      document.querySelector(".choosers").innerText = "you win!";
      console.log("you win");
      letWin = true;
    } else if (
      seven.innerText === eight.innerText &&
      eight.innerText === nine.innerText &&
      nine.innerText !== ""
    ) {
      document.querySelector(".choosers").innerText = "you win!";
      console.log("you win");
      letWin = true;
    } else if (
      one.innerText === four.innerText &&
      four.innerText === seven.innerText &&
      seven.innerText !== ""
    ) {
      document.querySelector(".choosers").innerText = "you win!";
      console.log("you win");
      letWin = true;
    } else if (
      two.innerText === five.innerText &&
      five.innerText === eight.innerText &&
      eight.innerText !== ""
    ) {
      document.querySelector(".choosers").innerText = "you win!";
      console.log("you win");
      letWin = true;
    } else if (
      three.innerText === six.innerText &&
      six.innerText === nine.innerText &&
      nine.innerText !== ""
    ) {
      document.querySelector(".choosers").innerText = "you win!";
      console.log("you win");
      letWin = true;
    } else if (
      one.innerText === five.innerText &&
      five.innerText === nine.innerText &&
      nine.innerText !== ""
    ) {
      document.querySelector(".choosers").innerText = "you win!";
      console.log("you win");
      letWin = true;
    } else if (
      three.innerText === five.innerText &&
      five.innerText === seven.innerText &&
      seven.innerText !== ""
    ) {
      document.querySelector(".choosers").innerText = "you win!";
      console.log("you win");
      letWin = true;
    } else {
      return;
    }

    if (letWin === true) {
      document.querySelectorAll(".box").forEach((box) => box.classList.add("winCase"))
    }






  }
  return {
    winningCombos, letWin
  };
})();
