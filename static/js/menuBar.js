// menuBar.js

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    moveImage(250);
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    moveImage(0);
}

function moveImage(position) {
    var imgElement = document.querySelector("img[src='potatoRegister.png']");

    if (imgElement) {
        imgElement.style.right = position + "px";
    }
}
