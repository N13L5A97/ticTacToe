// Get all cells of the game
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const c5 = document.getElementById("c5");
const c6 = document.getElementById("c6");
const c7 = document.getElementById("c7");
const c8 = document.getElementById("c8");
const c9 = document.getElementById("c9");

// Create an array of all cells
const allCells = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
];

// Check turn and set value
flag = 1;

// Functions to set value of box
function setValueC1() {
  if (flag == 1) {
    document.getElementById("c1").value = "X";
    document.getElementById("c1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("c1").value = "O";
    document.getElementById("c1").disabled = true;
    flag = 1;
  }
}

function setValueC2() {
  if (flag == 1) {
    document.getElementById("c2").value = "X";
    document.getElementById("c2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("c2").value = "O";
    document.getElementById("c2").disabled = true;
    flag = 1;
  }
}

function setValueC3() {
  if (flag == 1) {
    document.getElementById("c3").value = "X";
    document.getElementById("c3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("c3").value = "O";
    document.getElementById("c3").disabled = true;
    flag = 1;
  }
}

function setValueC4() {
  if (flag == 1) {
    document.getElementById("c4").value = "X";
    document.getElementById("c4").disabled = true;
    flag = 0;
  } else {
    document.getElementById("c4").value = "O";
    document.getElementById("c4").disabled = true;
    flag = 1;
  }
}

function setValueC5() {
  if (flag == 1) {
    document.getElementById("c5").value = "X";
    document.getElementById("c5").disabled = true;
    flag = 0;
  } else {
    document.getElementById("c5").value = "O";
    document.getElementById("c5").disabled = true;
    flag = 1;
  }
}

function setValueC6() {
  if (flag == 1) {
    document.getElementById("c6").value = "X";
    document.getElementById("c6").disabled = true;
    flag = 0;
  } else {
    document.getElementById("c6").value = "O";
    document.getElementById("c6").disabled = true;
    flag = 1;
  }
}

function setValueC7() {
  if (flag == 1) {
    document.getElementById("c7").value = "X";
    document.getElementById("c7").disabled = true;
    flag = 0;
  } else {
    document.getElementById("c7").value = "O";
    document.getElementById("c7").disabled = true;
    flag = 1;
  }
}

function setValueC8() {
  if (flag == 1) {
    document.getElementById("c8").value = "X";
    document.getElementById("c8").disabled = true;
    flag = 0;
  } else {
    document.getElementById("c8").value = "O";
    document.getElementById("c8").disabled = true;
    flag = 1;
  }
}

function setValueC9() {
  if (flag == 1) {
    document.getElementById("c9").value = "X";
    document.getElementById("c9").disabled = true;
    flag = 0;
  } else {
    document.getElementById("c9").value = "O";
    document.getElementById("c9").disabled = true;
    flag = 1;
  }
}

// Function called whenever user tab on any box
function check() {
  // Setting DOM to all boxes or input 

  const c1Value = c1.value;
  const c2Value = c2.value;
  const c3Value = c3.value;
  const c4Value = c4.value;
  const c5Value = c5.value;
  const c6Value = c6.value;
  const c7Value = c7.value;
  const c8Value = c8.value;
  const c9Value = c9.value;

  // Checking if Player X won
  // disable all the other cells
  if (c1Value == "X" && c2Value == "X" && c3Value == "X") {
    document.getElementById("result").innerHTML = "Player X won";

    openCells = [c4, c5, c6, c7, c8, c9];
    openCells.forEach((cell) => {
      cell.disabled = true;
    });

    c1.classList.add("xWin");
    c2.classList.add("xWin");
    c3.classList.add("xWin");
  } else if (c1Value == "X" && c4Value == "X" && c7Value == "X") {
    document.getElementById("result").innerHTML = "Player X won";

    const opens = [c2, c3, c5, c6, c8, c9];
    openCells.forEach((cell) => {
      cell.disabled = true;
    });

    c1.classList.add("xWin");
    c4.classList.add("xWin");
    c7.classList.add("xWin");
  } else if (c7Value == "X" && c8Value == "X" && c9Value == "X") {
    document.getElementById("result").innerHTML = "Player X won";

    const openCells = [c1, c2, c3, c4, c5, c6];
    openCells.forEach((cell) => {
      cell.disabled = true;
    });

    c7.classList.add("xWin");
    c8.classList.add("xWin");
    c9.classList.add("xWin");
  } else if (c3Value == "X" && c6Value == "X" && c9Value == "X") {
    document.getElementById("result").innerHTML = "Player X won";

    const openCells = [c1, c2, c4, c5, c7, c8];
    openCells.forEach((cell) => {
      cell.disabled = true;
    });

    c3.classList.add("xWin");
    c6.classList.add("xWin");
    c9.classList.add("xWin");
  } else if (c1Value == "X" && c5Value == "X" && c9Value == "X") {
    document.getElementById("result").innerHTML = "Player X won";

    const openCells = [c2, c3, c4, c6, c7, c8];
    openCells.forEach((cell) => {
      cell.disabled = true;
    });

    c1.classList.add("xWin");
    c5.classList.add("xWin");
    c9.classList.add("xWin");
  } else if (c3Value == "X" && c5Value == "X" && c7Value == "X") {
    document.getElementById("result").innerHTML = "Player X won";

    const openCells = [c1, c2, c4, c6, c8, c9];
    openCells.forEach((cell) => {
      cell.disabled = true;
    });

    c3.classList.add("xWin");
    c5.classList.add("xWin");
    c7.classList.add("xWin");
  } else if (c2Value == "X" && c5Value == "X" && c8Value == "X") {
    document.getElementById("result").innerHTML = "Player X won";

    const openCells = [c1, c3, c4, c6, c7, c9];
    openCells.forEach((cell) => {
      cell.disabled = true;
    });

    c2.classList.add("xWin");
    c5.classList.add("xWin");
    c8.classList.add("xWin");
  } else if (c4Value == "X" && c5Value == "X" && c6Value == "X") {
    document.getElementById("result").innerHTML = "Player X won";

    const openCells = [c1, c2, c3, c7, c8, c9];
    openCells.forEach((cell) => {
      cell.disabled = true;
    });

    c4.classList.add("xWin");
    c5.classList.add("xWin");
    c6.classList.add("xWin");
  }

  // Checking if Player 0 won
  // disable all the other cells
  else if (
    (c1Value == "O" || c1Value == "O") &&
    (c2Value == "O" || c2Value == "O") &&
    (c3Value == "O" || c3Value == "O")
  ) {
    document.getElementById("result").innerHTML = "Player O won";

    const openCells = [c4, c5, c6, c7, c8, c9];
    openCells.forEach((cell) => {
      cell.disabled = true;
    });

    c1.classList.add("oWin");
    c2.classList.add("oWin");
    c3.classList.add("oWin");
  } else if (
    (c1Value == "O" || c1Value == "O") &&
    (c4Value == "O" || c4Value == "O") &&
    (c7Value == "O" || c7Value == "O")
  ) {
    document.getElementById("result").innerHTML = "Player O won";

    const openCells = [c2, c3, c5, c6, c8, c9];
    openCells.forEach((cell) => {
      cell.disabled = true;
    });

    c1.classList.add("oWin");
    c4.classList.add("oWin");
    c7.classList.add("oWin");
  } else if (c7Value == "O" && c8Value == "O" && c9Value == "O") {
    document.getElementById("result").innerHTML = "Player O won";

    const openCells = [c1, c2, c3, c4, c5, c6];
    openCells.forEach((cel) => {
      cel.disabled = true;
    });

    c7.classList.add("oWin");
    c8.classList.add("oWin");
    c9.classList.add("oWin");
  } else if (c3Value == "O" && c6Value == "O" && c9Value == "O") {
    document.getElementById("result").innerHTML = "Player O won";

    const openCells = [c1, c2, c4, c5, c7, c8];
    openCells.forEach((cell) => {
      cell.disabled = true;
    });

    c3.classList.add("oWin");
    c6.classList.add("oWin");
    c9.classList.add("oWin");
  } else if (c1Value == "O" && c5Value == "O" && c9Value == "O") {
    document.getElementById("result").innerHTML = "Player O won";

    const openCells = [c2, c3, c4, c6, c7, c8];
    openCells.forEach((cell) => {
      cell.disabled = true;
    });

    c1.classList.add("oWin");
    c5.classList.add("oWin");
    c9.classList.add("oWin");
  } else if (c3Value == "O" && c5Value == "O" && c7Value == "O") {
    document.getElementById("result").innerHTML = "Player O won";

    const openCells = [c1, c2, c4, c6, c8, c9];
    openCells.forEach((cell) => {
      cell.disabled = true;
    });

    c3.classList.add("oWin");
    c5.classList.add("oWin");
    c7.classList.add("oWin");
  } else if (c2Value == "O" && c5Value == "O" && c8Value == "O") {
    document.getElementById("result").innerHTML = "Player O won";

    const openCells = [c1, c3, c4, c6, c7, c9];
    openCells.forEach((cell) => {
      cell.disabled = true;
    });

    c2.classList.add("oWin");
    c5.classList.add("oWin");
    c8.classList.add("oWin");
  } else if (c4Value == "O" && c5Value == "O" && c6Value == "O") {
    document.getElementById("result").innerHTML = "Player O won";

    const openCells = [c1, c2, c3, c7, c8, c9];
    openCells.forEach((cell) => {
      cell.disabled = true;
    });

    c4.classList.add("oWin");
    c5.classList.add("oWin");
    c6.classList.add("oWin");
  }

  // Checking if there is a tie
  else if (
    (c1Value == "X" || c1Value == "O") &&
    (c2Value == "X" || c2Value == "O") &&
    (c3Value == "X" || c3Value == "O") &&
    (c4Value == "X" || c4Value == "O") &&
    (c5Value == "X" || c5Value == "O") &&
    (c6Value == "X" || c6Value == "O") &&
    (c7Value == "X" || c7Value == "O") &&
    (c8Value == "X" || c8Value == "O") &&
    (c9Value == "X" || c9Value == "O")
  ) {
    document.getElementById("result").innerHTML = "It's a Tie";
  } else {
    // Printing Result
    // add styling for hover X turn
    if (flag == 1) {
      document.getElementById("result").innerHTML = "Player X Turn";
      document.querySelectorAll("li").forEach((cell) => {
        cell.classList.add("xLetter");
        cell.classList.remove("oLetter");
        cell.classList.add("xTurn");
        cell.classList.remove("oTurn");
      });
      // add styling for hover O turn
    } else {
      document.getElementById("result").innerHTML = "Player O Turn";
      document.querySelectorAll("li").forEach((cell) => {
        cell.classList.add("oLetter");
        cell.classList.remove("XLetter");
        cell.classList.add("oTurn");
        cell.classList.remove("xTurn");
      });
    }
  }
}

// Function to reset game
function reset() {
  location.reload();
  c1 = c2 = c3 = c4 = c5 = c6 = c7 = c8 = c9 = "";

  // remove win class
  allCells.forEach((cell) => {
    cell.classList.remove("oWin");
    cell.classList.remove("xWin");
  });
}

//create functions on enter for more accessibility
c1.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    setValueC1();
    check();
  }
});

c2.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    setValueC2();
    check();
  }
});

c3.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    setValueC3();
    check();
  }
});

c4.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    setValueC4();
    check();
  }
});

c5.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    setValueC5();
    check();
  }
});

c6.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    setValueC6();
    check();
  }
});

c7.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    setValueC7();
    check();
  }
});

c8.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    setValueC8();
    check();
  }
});

c9.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    setValueC9();
    check();
  }
});


