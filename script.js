$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".navbar").addClass("nav-scroll");
    } else {
        $(".navbar").removeClass("nav-scroll");
    }
    
});

$('.testimonial_slider').slick({
    dots: true,
    isfinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint:1024,
            settings{
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ]
});
AOS.init();    


