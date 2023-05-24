// creates initial grid
function createGrid(size) {
  for (let i = 0; i < size ** 2; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("mouseover", function (e) {
      this.style.backgroundColor = "black";
    });
    grid.appendChild(cell);
  }
  grid.setAttribute(
    "style",
    `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`
  );
}

// grid
const grid = document.getElementById("grid");
createGrid(16);
