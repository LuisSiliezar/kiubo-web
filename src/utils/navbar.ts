const sideBar = document.getElementById("sideBar");
const sideNav = document.getElementById("sideNav");
// open navigation bar
function openNav() {
    sideBar!.style.width = "100%";
    sideNav!.style.width = "100%";
}

// Close navigation
function exitNav() {
    sideBar!.style.width = "0%";
    sideNav!.style.width = "0%";
}