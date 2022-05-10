onload = () => {

    var hide = document.getElementById("hide");
    var show = document.getElementById("show");

    var element = document.getElementById("options");

    hide.addEventListener("click", () => {
        element.style.display = "none";
    });
    show.addEventListener("click", () => {
        element.style.display = "block";
    });
}