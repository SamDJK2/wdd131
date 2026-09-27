const mode = document.getElementById("mode")
const picture = document.querySelector("img")
const divider = document.querySelector("h2")
const box = document.querySelector("#infoContent")

mode.addEventListener("change", function() {
    //debuging
    console.log(mode.value)
    console.log(picture)

    if (mode.value === "Dark") {
        document.body.style.color = "white"
        picture.src = "byui-logo-white.png"
        document.body.style.backgroundColor = "#262626"
        divider.style.borderColor = "white"
        box.style.borderColor = "white"
    }
    if (mode.value === "Light") {
        document.body.style.color = "black"
        picture.src = "byui-logo-blue.webp"
        document.body.style.backgroundColor = "white"
        divider.style.borderColor = "black"
        box.style.borderColor = "black"
    }
})