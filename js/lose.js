
let message = document.createElement("h1")
message.innerText = "You lose"
document.body.appendChild(message)


document.getElementById("new").addEventListener("click", newgame)

function newgame() {
    window.location.href = "../html/game.html"
}

stringTime = localStorage.getItem("word2")
document.getElementById("w").innerText = stringTime.slice(1,6)