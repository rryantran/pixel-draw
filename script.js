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

// remove cells from a grid for repopulation
function removeCells(parent) {
  while (parent.firstElementChild) {
    parent.removeChild(parent.firstElementChild);
  }
}

// grid
const grid = document.getElementById("grid");
createGrid(16);

// size slider
const sizeValue = document.getElementById("size");
const slider = document.getElementById("size-input");
slider.addEventListener("change", function () {
  removeCells(grid);
  createGrid(this.value);
  sizeValue.textContent = this.value;
});
