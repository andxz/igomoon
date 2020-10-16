document.getElementById("hamburger-menu-toggle").addEventListener("click", openAndCloseMenu);

function openAndCloseMenu() {
    var x = document.getElementById("hamburger-menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}