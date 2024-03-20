
let playone = true;


window.addEventListener("scroll", (e) => {
    let scrolly = (window.scrollY + window.innerHeight) / document.body.offsetHeight


    if (window.scrollY > 50) {
        navbar.style.height = 50 + "px";
    } else {
        navbar.style.height = 90 + "px";

    }
    if (scrolly > 0.45) {
        imgImprovise.style.opacity = "1";
        imgImprovise.style.transform = "translateX(0)";
    }

    if (scrolly > 0.8 && playone) {
        popup.style.opacity = "1";
        popup.style.transform = "translateX(0)";
        playone = false
    }
})


closeBtn.addEventListener("click", () => {
    popup.style.opacity = "0";
    popup.style.transform = "translateX(700px)";
})








