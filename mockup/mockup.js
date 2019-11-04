function openTab(tabName, btn) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tabcontent");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    btn.className += " active";
}

window.addEventListener("load", function () {
    openTab("homepage", document.getElementById("startingTab"))
})