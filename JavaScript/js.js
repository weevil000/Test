

$(document).ready(function () {
    $('.header-menu__burger').click(function(){
        $('.header-menu__burger,.header-menu__link').toggleClass('active');
    });
    $('.portfolio__item').on('click', function () {
        $('.portfolio__card').toggleClass('container-origin');
    });


    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });



   /* new WOW().init() ;*/
    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        }
    );
    wow.init();
});