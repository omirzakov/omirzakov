const infoButtons = document.querySelectorAll(".info .info-item");
const navBtn = document.querySelector(".navbar-fixed .title");
const navLinks = document.querySelector(".navbar-links");


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


