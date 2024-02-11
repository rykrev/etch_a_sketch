const big = document.querySelector(".big");
const refresh = document.querySelector(".refresh")

refresh.style.width = "100px";
refresh.style.height = "45px";
refresh.textContent = "Refresh?"

refresh.addEventListener("click", () => {
    let dimensions = prompt("How many squares do you want on both sides? (e.g. 25 for a 25 x 25 grid)");
    if (dimensions >= 100) {
        alert("Please do not pass 100 squares.");
        return;
    }
    else {
        grid(dimensions);
}})

function grid(size) {
    big.replaceChildren();
    for (i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        column.style.width = "60px";
        for (j = 0; j < size; j++) {
            const row = document.createElement("div");
            row.classList.add("row");
            row.addEventListener("mouseover", () => {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                row.style.backgroundColor = `#` + `${randomColor}`;
            })
            row.style.height = "50px";
            row.style.border = "2px solid black";
            column.appendChild(row);
        }
        big.appendChild(column)
    }
}

function clear() {
    for (i=0; i < document.childNodes; i++) {
        document.removeChild(document.childNodes[i])
    }
}

grid(16);





























