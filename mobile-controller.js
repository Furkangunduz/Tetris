const mobileController = document.getElementById("mobile-controller")
const isMobile = navigator.userAgentData.mobile

const rotateLeft = document.getElementById("rotate-left")
const rotateRight = document.getElementById("rotate-right")
const left = document.getElementById("left")
const right = document.getElementById("right")
const down = document.getElementById("down")
let dropIntervalmobile


if (isMobile) {
    mobileController.style.display = "grid"
    score.classList.add("score-mobile");
} else {
    mobileController.style.display = "none"
    score.classList.remove("score-mobile");
}

rotateLeft.addEventListener("click", () => {
    playerRotate(1)

})
rotateRight.addEventListener("click", () => {
    playerRotate(-1)

})
left.addEventListener("click", () => {
    playerMove(-1)

})
right.addEventListener("click", () => {
    playerMove(1)
})
down.addEventListener("touchstart", (e) => {
    dropIntervalmobile = setInterval(() => {
        playerDrop()
    }, 50)
    console.log(dropIntervalmobile)
})
down.addEventListener("touchend", (e) => {
    clearInterval(dropIntervalmobile)
})

