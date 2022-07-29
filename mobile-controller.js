const mobileController = document.getElementById("mobile-controller")
const isMobile = navigator.userAgentData.mobile

const rotateLeft = document.getElementById("rotate-left")
const rotateRight = document.getElementById("rotate-right")
const left = document.getElementById("left")
const right = document.getElementById("right")
const down = document.getElementById("down")
let dropIntervalmbl
let leftIntervalmbl
let rightIntervalmbl


if (isMobile) {
    mobileController.style.display = "grid"
    score.classList.add("score-mobile");
} else {
    mobileController.style.display = "none"
    score.classList.remove("score-mobile");
}

rotateLeft.addEventListener("touchstart", () => {
    playerRotate(1)

})
rotateRight.addEventListener("touchstart", () => {
    playerRotate(-1)

})
left.addEventListener("touchstart", () => {
    audio.play()
    leftIntervalmbl = setInterval(() => {
        playerMove(-1)
    }, 50)
})
left.addEventListener("touchend", () => {
    clearInterval(leftIntervalmbl)
})

right.addEventListener("touchstart", () => {
    audio.play()
    rightIntervalmbl = setInterval(() => {
        playerMove(1)
    }, 50)
})
right.addEventListener("touchend", () => {
    clearInterval(rightIntervalmbl)
})

down.addEventListener("touchstart", (e) => {
    audio.play()
    dropIntervalmbl = setInterval(() => {
        playerDrop()
    }, 50)
    console.log(dropIntervalmbl)
})
down.addEventListener("touchend", (e) => {
    clearInterval(dropIntervalmbl)
})

