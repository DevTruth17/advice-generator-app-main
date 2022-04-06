window.addEventListener("DOMContentLoaded", () => {
    let id = document.getElementById("id")
    let text = document.getElementById("text")
    fetch("https://api.adviceslip.com/advice")
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
        id.textContent = data.slip.id
        text.textContent = `"${data.slip.advice}"`
    })
    let btn = document.getElementById("dice")
    btn.addEventListener("click", () => {
        fetch("https://api.adviceslip.com/advice")
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            id.textContent = data.slip.id
            text.textContent = `"${data.slip.advice}"`
    })
    })
})