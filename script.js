let columns = 1;

function addRow() {
    let table = document.getElementById("table");
    let row = document.createElement("tr");
    row.classList.add("row");
    table.appendChild(row);
    for(let i = 0; i < columns; i++) {
        let cell = document.createElement("td");
        cell.classList.add("cell");
        allowChangeColor(cell);
        row.appendChild(cell);
    }
}

function removeRow() {
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    tr[tr.length - 1].parentNode.removeChild(tr[tr.length - 1]);
}

function addColumn() {
    columns++;
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    for (let i = 0; i < tr.length; i++) {
        let cell = document.createElement("td");
        cell.classList.add("cell");
        allowChangeColor(cell);
        tr[i].appendChild(cell);
    }
}

function removeColumn() {
    columns--;
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    for (let i = 0; i < tr.length; i++) {
        tr[i].removeChild(tr[i].lastChild);
    }
}
//Come back to this
let selectedColor = "";
let mouseHold = false;
let currentColor = "";

function selectColor(color) {
    selectedColor = color;
}

function colorAllUncoloredCells() {
    let allCells = document.getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].style.backgroundColor == "")
            allCells[i].style.backgroundColor = selectedColor;
    }
}

function allowChangeColor(cell){
    cell.addEventListener("click", setColor);

    cell.addEventListener("mousedown", function() {
        mouseHold = true;
        currentColor = selectedColor;
    })

    cell.addEventListener("mousemove" , function() {
        if (mouseHold == true)
        {
            cell.style.backgroundColor = currentColor;
        }
    })

    cell.addEventListener("mouseup" , function() {
        if (mouseHold == true)
        {
            mouseHold = false;
        }
    })
}

function setColor(){
    this.style.backgroundColor = selectedColor;
}

function colorAllCells() {
    let allCells = document.getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].style.backgroundColor = selectedColor;
    }
}


function resetColorOfCells() {
    let allCells = document.getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].style.backgroundColor = "";
    }
}