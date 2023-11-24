const big = document.querySelector(".big")

const TOP_LEFT = document.createElement("div")
for (i = 0; i < 4; i++) {
    let newDiv_TL = document.createElement("div")
    newDiv_TL.style.cssText = "display: block; color: red;"
    TOP_LEFT.appendChild(newDiv_TL)
}
const TOP_RIGHT = document.createElement("div")
for (i = 0; i < 4; i++) {
    let newDiv_TR = document.createElement("div")
    newDiv_TR.style.cssText = "display: block; color: blue;"
    TOP_RIGHT.appendChild(newDiv_TR)
}
const BOTTOM_LEFT = document.createElement("div")
for (i = 0; i < 4; i++) {
    let newDiv_BL = document.createElement("div")
    newDiv_BL.style.cssText = "display: block; color: yellow;"
    BOTTOM_LEFT.appendChild(newDiv_BL)
}
const BOTTOM_RIGHT = document.createElement("div")
for (i = 0; i < 4; i++) {
    let newDiv_BR = document.createElement("div")
    newDiv_BR.style.cssText = "display: block; color: orange;"
    BOTTOM_RIGHT.appendChild(newDiv_BR)
}

big.appendChild(TOP_LEFT)
big.appendChild(TOP_RIGHT)
big.appendChild(BOTTOM_LEFT)
big.appendChild(BOTTOM_RIGHT)

