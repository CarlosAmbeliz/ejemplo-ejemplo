let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let history = [];
var currentMov = { partida: 1, movimiento: 1, p1: 0, p2: 0 };

function handleClick(e) {
  //Obtener el indice seleccionado por player1 (usuario)
  const index = parseInt(e.target.id);

  //Verificar si casilla seleccionada esta vacía
  if (board[index] === 0) {
    //Registrar movimiento y desplegarlo en pantalla
    currentMov.p1 = index;
    board[index] = 1;
    e.target.innerText = "X";

    //Chequear si hubo ganador
    const result = checkWin();

    //Informar ganador, empate o solicitar movimiento a player2
    if (result !== 0) {
      history.push(currentMov);
      setTimeout(() => alert(`Jugador ${result} ha ganado!`), 10);
      resetGame();
    } else if (board.indexOf(0) === -1) {
      history.push(currentMov);
      setTimeout(() => alert("Empate!"), 10);
      resetGame();
    } else {
      makeMove();
    }
  }
}

function checkWin() {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < rows.length; i++) {
    const [a, b, c] = rows[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      //history.push({ winner: board[a], board: board });
      return board[a];
    }
  }
  return 0;
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function makeMove() {
  //Player 2: Obtener una posicion vacia aleatoriamente
  let index = randomIntFromInterval(0, 7);
  while (board[index] !== 0) {
    index = randomIntFromInterval(0, 7);
  }

  //Registrar movimiento y desplegarlo en pantalla
  currentMov.p2 = index;
  board[index] = 2;
  document.getElementById(index.toString()).innerText = "O";

  //Grabar historia y indicar siguiente movimiento
  history.push(currentMov);
  currentMov.movimiento += 1;

  //Chequear si player2 ganó
  const result = checkWin();

  //Informar ganador o empate
  if (result !== 0) {
    setTimeout(() => alert(`Jugador ${result} ha ganado!`), 10);
    resetGame();
  } else if (board.indexOf(0) === -1) {
    setTimeout(() => alert("Empate!"), 10);
    resetGame();
  }
}

function resetGame() {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  document.querySelectorAll("td").forEach((td) => (td.innerText = ""));
  player = 1;
}

document
  .querySelectorAll("td")
  .forEach((td) => td.addEventListener("click", handleClick));
