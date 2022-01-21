const Gameboard = (function () {
  // module pattern
  let gameBoard = [];

  return {
    gameBoard,
  };
})();

const Player = {
  name: "",
  letter: "",
};

const displayControler = (function () {
  let nextTurn;

  function chooseLetter() {
    document
      .querySelectorAll(".box")
      .forEach((box) => box.classList.remove("rednotice"));
    document.querySelectorAll(".buttons").forEach((button) =>
      button.addEventListener("click", (e) => {
        if (e.target.innerText === "X") {
          nextTurn = "X";
        } else if (e.target.innerText === "O") {
          nextTurn = "O";
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

  function changeTurn() {
    if (nextTurn == "X") {
      nextTurn = "O";
    } else {
      nextTurn = "X";
    }
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

  function winningCombos() {
    if (
      one.innerText === two.innerText &&
      two.innerText === three.innerText &&
      three.innerText !== ""
    ) {
      document.querySelector(".choosers").innerText = "you win!";
      console.log("you win");
    } else if (
      four.innerText === five.innerText &&
      five.innerText === six.innerText &&
      six.innerText !== ""
    ) {
      document.querySelector(".choosers").innerText = "you win!";
      console.log("you win");
    } else if (
      seven.innerText === eight.innerText &&
      eight.innerText === nine.innerText &&
      nine.innerText !== ""
    ) {
      document.querySelector(".choosers").innerText = "you win!";
      console.log("you win");
    } else if (
      one.innerText === four.innerText &&
      four.innerText === seven.innerText &&
      seven.innerText !== ""
    ) {
      document.querySelector(".choosers").innerText = "you win!";
      console.log("you win");
    } else if (
      two.innerText === five.innerText &&
      five.innerText === eight.innerText &&
      eight.innerText !== ""
    ) {
      document.querySelector(".choosers").innerText = "you win!";
      console.log("you win");
    } else if (
      three.innerText === six.innerText &&
      six.innerText === nine.innerText &&
      nine.innerText !== ""
    ) {
      document.querySelector(".choosers").innerText = "you win!";
      console.log("you win");
    } else if (
      one.innerText === five.innerText &&
      five.innerText === nine.innerText &&
      nine.innerText !== ""
    ) {
      document.querySelector(".choosers").innerText = "you win!";
      console.log("you win");
    } else if (
      three.innerText === five.innerText &&
      five.innerText === seven.innerText &&
      seven.innerText !== ""
    ) {
      document.querySelector(".choosers").innerText = "you win!";
      console.log("you win");
    } else {
      return;
    }
  }
  return {
    winningCombos,
  };
})();
