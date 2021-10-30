<!-- Top DropUp meniu -->

function showtopbar() {
    document.getElementById("topbar").style.display = "block";
    document.getElementById("topbar2").style.display = "block";
    document.getElementById("showtopbar").style.display = "none";
    document.getElementById("shoppingamount").style.display = "none";

}

function hidetopbar() {
    document.getElementById("topbar").style.display = "none";
    document.getElementById("topbar2").style.display = "none";
    document.getElementById("showtopbar").style.display = "block";
    document.getElementById("shoppingamount").style.display = "block";
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the <div> element that closes the modal
var div = document.getElementsByClassName("close")[0];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
