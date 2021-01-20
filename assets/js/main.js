function popUp() {
    console.log("it works")
    console.log(document.getElementById("emailInput").value)
    document.getElementById("popUp-container").style.display = 'block'
    document.getElementById("subscribe1").style.visibility = 'hidden'
    document.getElementById("subscribe2").style.visibility = 'hidden'
    document.getElementById("subscribe3").style.visibility = 'hidden'
}

function backtowebsite() {
    document.getElementById("popUp-container").style.display = 'none'
    document.getElementById("subscribe1").style.visibility = 'visible'
    document.getElementById("subscribe2").style.visibility = 'visible'
    document.getElementById("subscribe3").style.visibility = 'visible'
}