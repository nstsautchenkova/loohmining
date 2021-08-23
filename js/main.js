//load
$(window).on('load', function() {
    $('#preloader').delay(700).fadeToggle(500);

});
$(window).on('load', function() {
    function anims() {
        $('.start-anim').addClass('anim');
    }
    setTimeout(anims, 1000);
});


$(document).scroll(function() {
    var WinTop = $(window).scrollTop();
    var docHeight = $(window).height();

    $('.fadeEl').each(function() {
        var topIn = $(this).offset().top - docHeight * 0.80;
        if (WinTop > topIn) {
            $(this).addClass('anim');
        }
    });

    $('.animation').each(function() {
        var topIn = $(this).offset().top - docHeight * 0.80;
        if (WinTop > topIn) {
            $(this).addClass('start-animation');
        }
    });

});


// Menu
$(document).on("ready", function() {
    $(".menu .trigger-menu").click(function() {
        $(this).toggleClass('op');
        $(".menu").toggleClass("menu-open");
        $('.menu .hamburger-menu__bar').toggleClass('animate');
        $('.page__header').toggleClass('menu-open');
    });
});

// tariff select
$(document).on("ready", function() {
    $(".tariff__item").click(function() {
        $(".tariff__item").removeClass('tariff__item_active');
        $(this).addClass('tariff__item_active');
    });
});

//dropdown
$(document).ready(function() {
    $(".dropdown__btn").click(function() {
        $(this).siblings(".dropdown__list").slideToggle('medium');
        $(this).toggleClass('active');
    });
});

// anchor
$('.anchor').on('click', function() {
    var href = $(this).attr('href');
    $('.anchor').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
        scrollTop: $(href).offset().top - 180
    }, {
        duration: 370,
        easing: "linear"
    });
    return false;
});


// adaptive
$(document).on("ready", function() {
    if (window.innerWidth <= 1367) {

        // tariff
        $(".tariff__slider").addClass('swiper-container');
        $(".tariff__slider-row").addClass('swiper-wrapper');
        $(".tariff__slider .swiper-wrapper").removeClass('tariff__slider-row');
        $(".tariff__slider-item").addClass('swiper-slide');


        var tariff__slider = new Swiper(".tariff__slider", {
            slidesPerView: 1,
            spaceBetween: 15,
            pagination: {
                el: '.tariff__slider .swiper-pagination',
                clickable: true,
            },
        });

        // documents-slider
        $(".documents-slider").addClass('swiper-container');
        $(".documents-slider__row").addClass('swiper-wrapper');
        $(".documents-slider .swiper-wrapper").removeClass('documents-slider__row');
        $(".documents-slider__item").addClass('swiper-slide');


        var documents__slider = new Swiper(".documents-slider", {
            slidesPerView: 1,
            spaceBetween: 25,
            pagination: {
                el: '.documents-slider .swiper-pagination',
                clickable: true,
            },
        });

        // review__slider
        $(".review__slider").addClass('swiper-container');
        $(".review__slider-row").addClass('swiper-wrapper');
        $(".review__slider .swiper-wrapper").removeClass('review__slider-row');
        $(".review_slider-item").addClass('swiper-slide');


        var review__slider = new Swiper(".review__slider", {
            slidesPerView: 2,
            spaceBetween: 25,
            navigation: {
                nextEl: '.reviews .swiper-button-next',
                prevEl: '.reviews .swiper-button-prev',
            },
            breakpoints: {
                600: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
            }
        });

    } else {
        $("document").ready(function($) {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 90) {
                    $('.page__header').addClass("fix");
                } else {
                    $('.page__header').removeClass("fix");
                }
            });
        });
    }


});