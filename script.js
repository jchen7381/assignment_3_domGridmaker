document.addEventListener("DOMContentLoaded", function() {
  let selectedColor = "red"; // Default color
  const grid = document.getElementById("grid");

  document.getElementById("addRow").addEventListener("click", function() {
    const newRow = document.createElement("tr");
    const numCols = grid.querySelector("tr")
      ? grid.querySelector("tr").children.length
      : 1;
    for (let i = 0; i < numCols; i++) {
      const newCell = document.createElement("td");
      newRow.appendChild(newCell);
    }
    grid.appendChild(newRow);
  });

  document.getElementById("addColumn").addEventListener("click", function() {
    grid.querySelectorAll("tr").forEach((row) => {
      const newCell = document.createElement("td");
      row.appendChild(newCell);
    });
  });

  document.getElementById("removeRow").addEventListener("click", function() {
    const numRows = grid.querySelectorAll("tr").length;
    if (numRows > 0) {
      grid.lastChild.remove();
    }
  });

  document.getElementById("removeColumn").addEventListener("click", function() {
    const rows = grid.querySelectorAll("tr");
    if(rows.length > 0) {
      rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        if(cells.length > 0) {
          const lastCell = cells[cells.length - 1];
          row.removeChild(lastCell);
        }
      });
    }
  });

  document.getElementById("removeColumn").addEventListener("click", function() {
    const rows = grid.querySelectorAll("tr");
    if(rows.length > 0) {
      rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        if(cells.length > 0) {
          const lastCell = cells[cells.length - 1];
          row.removeChild(lastCell);
        }
      });
    }
  });

});