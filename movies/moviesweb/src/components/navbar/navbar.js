// const navactive = document.getElementsByClassName("active");
// const navclass = document.getElementsByClassName("nav");
const nav = document.querySelectorAll("nav")[0];
window.addEventListener("resize", sizerTriggers);

function sizerTriggers() {
    if (window.innerWidth <= 814) {
        console.log("yes");
        console.log(nav);
        // console.log(nav.classList());
    }
}
sizerTriggers();