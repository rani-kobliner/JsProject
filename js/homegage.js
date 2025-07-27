document.querySelector("p").innerHTML = `שלום לך ${(localStorage.getItem("localName")).slice(1,-1)}`
document.getElementById("new").addEventListener("click", newgame)

function newgame() {
    window.location.href = "../html/game.html"
}