import "../../node_modules/isotope-layout/dist/isotope.pkgd.min.js";

const nav = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll >= 1) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

$(".filter").on("click", "button", function (e) {
    e.preventDefault();
    $(".filter button").removeClass("active");
    $(this).addClass("active");
});

var $grid = $(".meubels_filter").isotope({
    itemSelector: ".meubel",
});
$(".filter").on("click", "button", function () {
    var filterValue = $(this).attr("data-meubels");
    $grid.isotope({
        filter: filterValue,
    });
});
