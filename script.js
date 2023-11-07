let box = document.querySelector('#dots')
let h4 = document.querySelector('#title')
let colors = document.querySelector('#colors_block')

dots_effect1.onclick  = () => {
    dots_effect1.classList.toogle('blue')

    if (h4.innerText === "Color - Natural Titanium") {
        h4.innerText = "Work zone"
    } else {
        h4.innerHTML = "Chill <b>zone</b>"
    }
}