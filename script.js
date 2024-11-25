function toggleNav() {
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");
    const Open = sidebar.style.width === "300px";

    if (Open) {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
    } else {
        sidebar.style.width = "300px";
        main.style.marginLeft = "300px";
    }
}