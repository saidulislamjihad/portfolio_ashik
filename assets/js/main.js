// Navbar Toggle Button For Mini Device
$('.nav-toggle-btn').on("click", function(e) {
    e.stopPropagation();
    $('.nav-list').toggleClass('menu-visible');
    $('body').toggleClass('body-overflow');
}); 

$(".nav-list").click(function(e) {
    e.stopPropagation();
});
$(document).on("click", function(e) {
    $(".nav-list").removeClass("menu-visible");
});

$('.share-btn-outer').on("click", function() {
    $('.share-icon').toggleClass('show');
}); 

$('.testimonial-items-wrapper').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.client-items-wrapper').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});