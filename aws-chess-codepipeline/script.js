const board = document.getElementById("chessboard");

// Unicode chess pieces
const pieces = {
  r: "♜",
  n: "♞",
  b: "♝",
  q: "♛",
  k: "♚",
  p: "♟",
  R: "♖",
  N: "♘",
  B: "♗",
  Q: "♕",
  K: "♔",
  P: "♙",
};

// Starting position
const initialBoard = [
  "r",
  "n",
  "b",
  "q",
  "k",
  "b",
  "n",
  "r",
  "p",
  "p",
  "p",
  "p",
  "p",
  "p",
  "p",
  "p",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "P",
  "P",
  "P",
  "P",
  "P",
  "P",
  "P",
  "P",
  "R",
  "N",
  "B",
  "Q",
  "K",
  "B",
  "N",
  "R",
];

function createBoard() {
  board.innerHTML = "";
  for (let i = 0; i < 64; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    const row = Math.floor(i / 8);
    const col = i % 8;
    cell.classList.add((row + col) % 2 === 0 ? "white" : "black");
    cell.setAttribute("data-index", i);

    const piece = initialBoard[i];
    if (piece) {
      const span = document.createElement("span");
      span.textContent = pieces[piece];
      span.setAttribute("draggable", true);
      span.classList.add("piece");
      span.setAttribute("data-piece", piece);
      span.setAttribute("data-index", i);
      cell.appendChild(span);
    }

    board.appendChild(cell);
  }
}

// Drag and Drop handlers
document.addEventListener("dragstart", (e) => {
  if (e.target.classList.contains("piece")) {
    e.dataTransfer.setData("text/plain", e.target.dataset.index);
  }
});

board.addEventListener("dragover", (e) => {
  e.preventDefault();
});

board.addEventListener("drop", (e) => {
  e.preventDefault();
  const fromIndex = e.dataTransfer.getData("text/plain");
  const toCell = e.target.closest(".cell");
  const toIndex = toCell.getAttribute("data-index");

  // Move piece in array
  initialBoard[toIndex] = initialBoard[fromIndex];
  initialBoard[fromIndex] = "";

  // Redraw
  createBoard();
});

createBoard();
