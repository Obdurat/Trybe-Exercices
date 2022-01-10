let header = document.getElementById("header-container");
header.style.background = "green";
let footer = document.getElementsByTagName("footer");
footer[0].style.background = "darkgreen";
let section = document.getElementsByTagName("section");
section[0].style.background = "lightyellow";
section[1].style.background = "lightyellow";
let h3 = document.querySelectorAll("h3");
for (let i = 0; i < h3.length; i += 1) {
    h3[i].style.background = "black"
}