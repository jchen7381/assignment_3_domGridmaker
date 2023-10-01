document.addEventListener("DOMContentLoaded", function () {
  let selectedColor = "#007BFF"; // Default color
  let fillMode = false;
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

  document.getElementById("colorPicker").addEventListener("input", function (event) {
    selectedColor = event.target.value
    const colorPickerButton = document.getElementById("colorPickerButton");
    colorPickerButton.style.backgroundColor = selectedColor;

    // dynamically change text color based on button background color
    const rgb = parseInt(selectedColor.substring(1), 16);   
    const r = (rgb >> 16) & 0xff;  
    const g = (rgb >>  8) & 0xff;  
    const b = (rgb >>  0) & 0xff; 

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; 

    if (luma > 230) {  
      colorPickerButton.style.boxShadow = "inset 0 0 0 1px #007BFF";
    } else {
      colorPickerButton.style.boxShadow = "none";
    }

    colorPickerButton.style.color = luma < 128 ? 'white' : 'black';

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

  document.getElementById("switchMode").addEventListener("click", function() {
    fillMode = !fillMode;
    const modeText = fillMode ? "Mode: Fill Row & Column" : "Mode: Single Cell";
    document.getElementById("switchMode").innerText = modeText;
  });

  document.getElementById("grid").addEventListener("click", function (event) {
    const el = event.target;
    if (el.tagName === "TD") {
      if (fillMode ) {
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