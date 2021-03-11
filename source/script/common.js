$(document).ready(function(){
    $('.catalog-menu__submenu, .catalog-menu__hasmenu').click(function(){
        $(this).children('ul').slideToggle(700);
        $(this).toggleClass('active');
    });

    $('.catalog-menu__submenu ul, .catalog-menu__submenu ul ul').click(function(event){
        event.stopPropagation();
    });

    $('.now').click(function(){
        $('.soon').removeClass('active');
        $('.archive').removeClass('active');
        $('.now').addClass('active');

        $('.films__now').addClass('active');
        $('.films__soon').removeClass('active');
        $('.films__archive').removeClass('active');
    });
    $('.soon').click(function(){
        $('.soon').addClass('active');
        $('.archive').removeClass('active');
        $('.now').removeClass('active');

        $('.films__now').removeClass('active');
        $('.films__soon').addClass('active');
        $('.films__archive').removeClass('active');
    });
    $('.archive').click(function(){
        $('.soon').removeClass('active');
        $('.archive').addClass('active');
        $('.now').removeClass('active');

        $('.films__now').removeClass('active');
        $('.films__soon').removeClass('active');
        $('.films__archive').addClass('active');
    });

    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('.m-menu').toggleClass('mm-wrapper_opening');
    });

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        dots: true,
    });

    $('.poster__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            }, 
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

