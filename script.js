function Go(){
    p1= document.getElementById("N1").value
    p2= document.getElementById("N2").value
    localStorage.setItem("Player1", p1)
    localStorage.setItem("Player2", p2)
    window.location="game_page.html"
}