$(document).ready(function(){


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
        prevArrow: '<button class="prev-btn"><img src="../images/comments/prev.png" alt=""></button>',
        nextArrow: '<button class="next-btn"><img src="../images/comments/next.png" alt=""></button>',
    });


    $('.burger').on('click', function(){
        $('.menu-list').toggleClass('active');
    })

})