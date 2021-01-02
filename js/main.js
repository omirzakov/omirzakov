const infoButtons = document.querySelectorAll(".info .info-item");
const navBtn = document.querySelector(".navbar-fixed .title");
const navLinks = document.querySelector(".navbar-links");
const openBtn = document.getElementById("modal-btn");
const closeBtn = document.getElementById("modal-close");
const modal = document.querySelector(".modal-wrapper");

function accordeon(item) {
    item.forEach(item => {
        item.addEventListener("click", function (e) {
            if(item.querySelector(".main-info") == e.target) {
                item.querySelector('.main-info').classList.toggle('open');
                item.querySelector(".sub-info").classList.toggle('active');
            }
        })
    })
}

accordeon(infoButtons);

navBtn.addEventListener("click", function () {
    navBtn.classList.toggle("open")
    navLinks.classList.toggle("active");
})

openBtn.addEventListener("click", function () {
    modal.classList.add("modal-active");
    document.body.style.overflowY = "hidden";
})

closeBtn.addEventListener("click", function () {
    modal.classList.remove("modal-active");
    document.body.style.overflowY = "scroll";
})


