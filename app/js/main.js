$(document).ready(function(){


    $(function () {
        $("body, .about__btn-text").niceScroll({
            cursorwidth: "8px",
            cursorcolor: "#95e1d3"
        });
    });

    $('.intro-link').on('click', function () {
        var top = $('.services').offset().top;
        $('html, body').animate({
            scrollTop: top
        }, 700)
    });

    $('.work-link').on('click', function () {
        var top = $('.work').offset().top;
        $('html, body').animate({
            scrollTop: top
        }, 700)
    });

    $('.about-link').on('click', function () {
        var top = $('.about').offset().top;
        $('html, body').animate({
            scrollTop: top
        }, 700)
    });

    $('.contacts-link').on('click', function () {
        var top = $('footer').offset().top;
        $('html, body').animate({
            scrollTop: top
        }, 1000)
    });


    $('div.about__btn').click(function () {
        if ($(this).next().is(":visible")) {
            $(this).next().hide('slow');
            $(this).removeClass('active');
        }
        else {
            $('div.about__btn-text:visible').hide('slow');
            $('div.about__btn-text:visible').prev().removeClass('active');
            $(this).next().show('slow');
            $(this).toggleClass('active');
        }
    });

    $('.comments__slider').slick({
        dots: false,
        prevArrow: '<button class="prev-btn"><img src="images/comments/prev.png" alt=""></button>',
        nextArrow: '<button class="next-btn"><img src="images/comments/next.png" alt=""></button>',
    });

    $('.reviews__slider').slick({
        dots: false,
        prevArrow: '<button class="prev-btn"><img src="images/comments/prev.png" alt=""></button>',
        nextArrow: '<button class="next-btn"><img src="images/comments/next.png" alt=""></button>',
    });


    $('.burger-menu').on('click', function(){
        $('.menu-list').toggleClass('active');
    })

})