const navactive = document.getElementsByClassName("active");
const navclass = document.getElementsByClassName("nav");

window.addEventListener("resize", sizerTriggers);

function sizerTriggers() {
    if (window.innerWidth <= 814) {
        console.log("yes");
    }
}
sizerTriggers();