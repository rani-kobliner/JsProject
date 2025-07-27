document.getElementById("new").addEventListener("click", newgame)

function newgame() {
    window.location.href = "../html/game.html"
}
stringTime = localStorage.getItem("time")
document.getElementById("time").innerText = stringTime.slice(1,6)