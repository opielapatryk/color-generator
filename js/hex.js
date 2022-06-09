let button = document.querySelector("button")
let main = document.getElementById("main")
let span = document.querySelector("span")

function randomIntFromInterval() { // min and max included 
    return Math.floor(Math.random() * (9 - 1 + 1) + 1)
}

function randomStrFromInterval() { // min and max included 
    return String.fromCharCode(65 + Math.floor(Math.random() * 6))
}

function randomChoose() {
    if (Math.random() > 0.5) {
        return randomStrFromInterval()
    } else {
        return randomIntFromInterval()
    }
}
button.addEventListener("click", () => {
    const color = `#${randomChoose()}${randomChoose()}${randomChoose()}${randomChoose()}${randomChoose()}${randomChoose()}`;
    main.style.backgroundColor = color
    span.innerHTML = color
})