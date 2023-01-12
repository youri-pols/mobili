import "../../node_modules/isotope-layout/dist/isotope.pkgd.min.js";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper-testimonials", {
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    // watchOverflow: false,
    spaceBetween: 20,
    grabCursor: true,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".testimonial-next",
        prevEl: ".testimonial-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
});

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

$(".filter").on("click", "button", function () {
    var $grid = $(".meubels_filter").isotope({
        itemSelector: ".meubel",
    });
    var filterValue = $(this).attr("data-meubels");
    console.log(filterValue);
    $grid.isotope({
        filter: filterValue,
    });
});

const modelViewerSofa = document.querySelector(".sofaglb");
const modelViewerSofa2 = document.querySelector(".sofa2glb");
const modelViewerTable = document.querySelector(".tableglb");
const modelViewerChair = document.querySelector(".chairglb");
const modelViewerCloset = document.querySelector(".closetglb");
const modelViewerGardob = document.querySelector(".gardobglb");
const modelViewerLChair = document.querySelector(".luxurychairglb");
const modelViewerNight = document.querySelector(".nightstandglb");

const onProgress = (event) => {
    const progressBar = event.target.querySelector(".progress-bar");
    const updatingBar = event.target.querySelector(".update-bar");
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
        progressBar.classList.add("hide");
    } else {
        progressBar.classList.remove("hide");
    }
};
modelViewerSofa2.addEventListener("progress", onProgress);
modelViewerGardob.addEventListener("progress", onProgress);
modelViewerCloset.addEventListener("progress", onProgress);
modelViewerLChair.addEventListener("progress", onProgress);
modelViewerNight.addEventListener("progress", onProgress);
modelViewerTable.addEventListener("progress", onProgress);
modelViewerSofa.addEventListener("progress", onProgress);
modelViewerChair.addEventListener("progress", onProgress);
