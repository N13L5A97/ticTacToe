// Check turn and set value
flag = 1;
function setValueC1() {
  if (flag == 1) {
    document.getElementById("c1").value = "X";
    document.getElementById("c1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("c1").value = "0";
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
    document.getElementById("c2").value = "0";
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
    document.getElementById("c3").value = "0";
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
    document.getElementById("c4").value = "0";
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
    document.getElementById("c5").value = "0";
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
    document.getElementById("c6").value = "0";
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
    document.getElementById("c7").value = "0";
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
    document.getElementById("c8").value = "0";
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
    document.getElementById("c9").value = "0";
    document.getElementById("c9").disabled = true;
    flag = 1;
  }
}

// Function called whenever user tab on any box
function check() {
  // Setting DOM to all boxes or input field

  const c1field = document.getElementById("c1");
  const c2field = document.getElementById("c2");
  const c3field = document.getElementById("c3");
  const c4field = document.getElementById("c4");
  const c5field = document.getElementById("c5");
  const c6field = document.getElementById("c6");
  const c7field = document.getElementById("c7");
  const c8field = document.getElementById("c8");
  const c9field = document.getElementById("c9");

  const allFields = [
    c1field,
    c2field,
    c3field,
    c4field,
    c5field,
    c6field,
    c7field,
    c8field,
    c9field,
  ];

  const c1Value = c1field.value;
  const c2Value = c2field.value;
  const c3Value = c3field.value;
  const c4Value = c4field.value;
  const c5Value = c5field.value;
  const c6Value = c6field.value;
  const c7Value = c7field.value;
  const c8Value = c8field.value;
  const c9Value = c9field.value;

  // Checking if Player X won
  // disable all the other fields
  if (c1Value == "X" && c2Value == "X" && c3Value == "X") {
    document.getElementById("result").innerHTML = "Player X won";

    openFields = [c4field, c5field, c6field, c7field, c8field, c9field];
    openFields.forEach((field) => {
      field.disabled = true;
    });

    c1field.classList.add("xWin");
    c2field.classList.add("xWin");
    c3field.classList.add("xWin");
  } else if (c1Value == "X" && c4Value == "X" && c7Value == "X") {
    document.getElementById("result").innerHTML = "Player X won";

    const openFields = [c2field, c3field, c5field, c6field, c8field, c9field];
    openFields.forEach((field) => {
      field.disabled = true;
    });

    c1field.classList.add("xWin");
    c4field.classList.add("xWin");
    c7field.classList.add("xWin");
  } else if (c7Value == "X" && c8Value == "X" && c9Value == "X") {
    document.getElementById("result").innerHTML = "Player X won";

    const openFields = [c1field, c2field, c3field, c4field, c5field, c6field];
    openFields.forEach((field) => {
      field.disabled = true;
    });

    c7field.classList.add("xWin");
    c8field.classList.add("xWin");
    c9field.classList.add("xWin");
  } else if (c3Value == "X" && c6Value == "X" && c9Value == "X") {
    document.getElementById("result").innerHTML = "Player X won";

    const openFields = [c1field, c2field, c4field, c5field, c7field, c8field];
    openFields.forEach((field) => {
      field.disabled = true;
    });

    c3field.classList.add("xWin");
    c6field.classList.add("xWin");
    c9field.classList.add("xWin");
  } else if (c1Value == "X" && c5Value == "X" && c9Value == "X") {
    document.getElementById("result").innerHTML = "Player X won";

    const openFields = [c2field, c3field, c4field, c6field, c7field, c8field];
    openFields.forEach((field) => {
      field.disabled = true;
    });

    c1field.classList.add("xWin");
    c5field.classList.add("xWin");
    c9field.classList.add("xWin");
  } else if (c3Value == "X" && c5Value == "X" && c7Value == "X") {
    document.getElementById("result").innerHTML = "Player X won";

    const openFields = [c1field, c2field, c4field, c6field, c8field, c9field];
    openFields.forEach((field) => {
      field.disabled = true;
    });

    c3field.classList.add("xWin");
    c5field.classList.add("xWin");
    c7field.classList.add("xWin");
  } else if (c2Value == "X" && c5Value == "X" && c8Value == "X") {
    document.getElementById("result").innerHTML = "Player X won";

    const openFields = [c1field, c3field, c4field, c6field, c7field, c9field];
    openFields.forEach((field) => {
      field.disabled = true;
    });

    c2field.classList.add("xWin");
    c5field.classList.add("xWin");
    c8field.classList.add("xWin");
  } else if (c4Value == "X" && c5Value == "X" && c6Value == "X") {
    document.getElementById("result").innerHTML = "Player X won";

    const openFields = [c1field, c2field, c3field, c7field, c8field, c9field];
    openFields.forEach((field) => {
      field.disabled = true;
    });

    c4field.classList.add("xWin");
    c5field.classList.add("xWin");
    c6field.classList.add("xWin");
  }

  // Checking if Player 0 won
  // disable all the other fields
  else if (
    (c1Value == "0" || c1Value == "0") &&
    (c2Value == "0" || c2Value == "0") &&
    (c3Value == "0" || c3Value == "0")
  ) {
    document.getElementById("result").innerHTML = "Player 0 won";

    const openFields = [c4field, c5field, c6field, c7field, c8field, c9field];
    openFields.forEach((field) => {
      field.disabled = true;
    });

    c1field.classList.add("oWin");
    c2field.classList.add("oWin");
    c3field.classList.add("oWin");
  } else if (
    (c1Value == "0" || c1Value == "0") &&
    (c4Value == "0" || c4Value == "0") &&
    (c7Value == "0" || c7Value == "0")
  ) {
    document.getElementById("result").innerHTML = "Player 0 won";

    const openFields = [c2field, c3field, c5field, c6field, c8field, c9field];
    openFields.forEach((field) => {
      field.disabled = true;
    });

    c1field.classList.add("oWin");
    c4field.classList.add("oWin");
    c7field.classList.add("oWin");
  } else if (c7Value == "0" && c8Value == "0" && c9Value == "0") {
    document.getElementById("result").innerHTML = "Player 0 won";

    const openFields = [c1field, c2field, c3field, c4field, c5field, c6field];
    openFields.forEach((field) => {
      field.disabled = true;
    });

    c7field.classList.add("oWin");
    c8field.classList.add("oWin");
    c9field.classList.add("oWin");
  } else if (c3Value == "0" && c6Value == "0" && c9Value == "0") {
    document.getElementById("result").innerHTML = "Player 0 won";

    const openFields = [c1field, c2field, c4field, c5field, c7field, c8field];
    openFields.forEach((field) => {
      field.disabled = true;
    });

    c3field.classList.add("oWin");
    c6field.classList.add("oWin");
    c9field.classList.add("oWin");
  } else if (c1Value == "0" && c5Value == "0" && c9Value == "0") {
    document.getElementById("result").innerHTML = "Player 0 won";

    const openFields = [c2field, c3field, c4field, c6field, c7field, c8field];
    openFields.forEach((field) => {
      field.disabled = true;
    });

    c1field.classList.add("oWin");
    c5field.classList.add("oWin");
    c9field.classList.add("oWin");
  } else if (c3Value == "0" && c5Value == "0" && c7Value == "0") {
    document.getElementById("result").innerHTML = "Player 0 won";

    const openFields = [c1field, c2field, c4field, c6field, c8field, c9field];
    openFields.forEach((field) => {
      field.disabled = true;
    });

    c3field.classList.add("oWin");
    c5field.classList.add("oWin");
    c7field.classList.add("oWin");
  } else if (c2Value == "0" && c5Value == "0" && c8Value == "0") {
    document.getElementById("result").innerHTML = "Player 0 won";

    const openFields = [c1field, c3field, c4field, c6field, c7field, c9field];
    openFields.forEach((field) => {
      field.disabled = true;
    });

    c2field.classList.add("oWin");
    c5field.classList.add("oWin");
    c8field.classList.add("oWin");
  } else if (c4Value == "0" && c5Value == "0" && c6Value == "0") {
    document.getElementById("result").innerHTML = "Player 0 won";

    const openFields = [c1field, c2field, c3field, c7field, c8field, c9field];
    openFields.forEach((field) => {
      field.disabled = true;
    });

    c4field.classList.add("oWin");
    c5field.classList.add("oWin");
    c6field.classList.add("oWin");
  }

  // Checking if there is a tie
  else if (
    (c1Value == "X" || c1Value == "0") &&
    (c2Value == "X" || c2Value == "0") &&
    (c3Value == "X" || c3Value == "0") &&
    (c4Value == "X" || c4Value == "0") &&
    (c5Value == "X" || c5Value == "0") &&
    (c6Value == "X" || c6Value == "0") &&
    (c7Value == "X" || c7Value == "0") &&
    (c8Value == "X" || c8Value == "0") &&
    (c9Value == "X" || c9Value == "0")
  ) {
    document.getElementById("result").innerHTML = "It's a Tie";
  } else {
    // Printing Result
    if (flag == 1) {
      document.getElementById("result").innerHTML = "Player X Turn";
      document.querySelectorAll("input").forEach((field) => {
        field.classList.add("xTurn");
        field.classList.remove("oTurn");
      });
    } else {
      document.getElementById("result").innerHTML = "Player 0 Turn";
      document.querySelectorAll("input").forEach((field) => {
        field.classList.add("oTurn");
        field.classList.remove("xTurn");
      });
    }
  }
}

// Function to reset game
function reset() {
  location.reload();
  c1 = c2 = c3 = c4 = c5 = c6 = c7 = c8 = c9 = "";

  // remove win class
  allFields.forEach((field) => {
    field.classList.remove("oWin");
    field.classList.remove("xWin");
  });
}


