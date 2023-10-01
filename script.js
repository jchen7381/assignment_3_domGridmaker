document.addEventListener("DOMContentLoaded", function () {
  let selectedColor = "black"; // Default color
  const grid = document.getElementById("grid");

  document.getElementById("addRow").addEventListener("click", function () {
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

  document.getElementById("addColumn").addEventListener("click", function () {
    grid.querySelectorAll("tr").forEach((row) => {
      const newCell = document.createElement("td");
      row.appendChild(newCell);
    });
  });

  document.getElementById("removeRow").addEventListener("click", function () {
    const numRows = grid.querySelectorAll("tr").length;
    if (numRows > 0) {
      grid.lastChild.remove();
    }
  });

  document.getElementById("removeColumn").addEventListener("click", function () {
    const rows = grid.querySelectorAll("tr");
    if (rows.length > 0) {
      rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        if (cells.length > 0) {
          const lastCell = cells[cells.length - 1];
          row.removeChild(lastCell);
        }
      });
    }
  });

  document.getElementById("removeColumn").addEventListener("click", function () {
    const rows = grid.querySelectorAll("tr");
    if (rows.length > 0) {
      rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        if (cells.length > 0) {
          const lastCell = cells[cells.length - 1];
          row.removeChild(lastCell);
        }
      });
    }
  });

  document.getElementById("colorPicker").addEventListener("change", function (event) {
    selectedColor = event.target.value
  })

  document.getElementById("colorAll").addEventListener("click", function () {
    document.querySelectorAll("#grid td").forEach((el) => {
      el.style.backgroundColor = selectedColor
    })
  })

  document.getElementById("colorUncolored").addEventListener("click", function () {
    document.querySelectorAll("#grid td").forEach((el) => {
      if (el.style.backgroundColor) {
        return;
      }
      el.style.backgroundColor = selectedColor
    })
  })

  document.getElementById("removeColor").addEventListener("click", function () {
    document.querySelectorAll("#grid td").forEach((el) => {
      el.style.backgroundColor = ""
    })
  })


  document.getElementById("grid").addEventListener("click", function (event) {
    const el = event.target;
    if (el.tagName === "TD") {
      if (el.style.backgroundColor) {
        const { x, y } = el.getBoundingClientRect();
        document.querySelectorAll("#grid td").forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.x === x || rect.y === y) {
            el.style.backgroundColor = selectedColor
          }
        })
      }
      else {
        el.style.backgroundColor = selectedColor
      }
    }
  })
});