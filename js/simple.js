let button = document.querySelector("button")
let main = document.getElementById("main")
let colors = [
    '#191919', '#115511',
    '#551111', '#111155',
    '#919191', '#923345',
    '#121212', '#ab280f',
    '#af3b80', '#a39b73',
]
let counter = 0
button.addEventListener("click", () => {
    counter += 1
    main.style.backgroundColor = colors[counter]
    if (counter == 9) {
        counter = 0
    }
})