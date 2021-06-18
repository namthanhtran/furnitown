// Homepage
// ---------------Scroll Top--------------------
let header = document.querySelector('header .container-fluid');
let hHeader = header.clientHeight;
document.addEventListener('scroll', function() {
    let scrollY = window.pageYOffset;
    if (scrollY > 10) {
        $('.header .container-fluid').css("visibility", "hidden");
        $('.header .header__menu').css("visibility", "hidden");
        $('.header .scroll').css("display", "flex");
    } else {
        $('.header .container-fluid').css("visibility", "visible");
        $('.header .scroll').css("display", "none");
        $('.header .header__menu').css("visibility", "visible");
    }
})

// --------------Popup menu-----------------------
$('.hidden-menu').on('click', function(e) {
    e.preventDefault();
    $('.header .container-fluid').css("visibility", "hidden");
    $('.header__menu-hidden').css("display", "block");
    $('.header__menu-hidden').addClass('isPopup');
    $('.header__menu-block').css("display", "none");
})

document.querySelector('.header__menu-hidden').addEventListener('click', function() {
    $('.header .container-fluid').css("visibility", "visible");
    $('.header__menu-hidden').css("display", "none");
    $('.header__menu-block').css("display", "block");
})

$('.mobile .menu').on('click', function(e) {
    e.preventDefault();
    console.log(1);
})

//--------------------Back to top-------------------------
$('.back-to-top').on('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

//---------------------Slider-------------------------------

let $carousel = $('.slider__image');
$carousel.flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false
})

//button next, prev controls
$('.slider-prev').on('click', function(e) {
    e.preventDefault();
    $carousel.flickity('previous');
});
$('.slider-next').on('click', function(e) {
    e.preventDefault();
    $carousel.flickity('next');
})

// Nav mobile
let btnMobile = $('header .mobile .grToggle .toggle');
let navMobile = $('.mobile .nav a');


$(btnMobile).on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('clicked');
})

$(navMobile).each(function(index, element) {
    $(element).on('click', function(e) {
        $('body').removeClass('clicked');
    })
})

// Product details

let $carousel_prod = $('.watch-prod__slider');
$carousel_prod.flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false

})

// button next, prev controls
$('.btn-sli-prd-prev').on('click', function(e) {
    e.preventDefault();
    $carousel_prod.flickity('previous');
});
$('.btn-sli-prd-next').on('click', function(e) {
    e.preventDefault();
    $carousel_prod.flickity('next');
})