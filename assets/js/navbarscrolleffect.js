
window.addEventListener("scroll", function() {
    //$('.navbar_fade').fadeIn(0.4);
    if (window.scrollY > 100) {
        $('.navbar_fade').fadeIn();
    }
    else {
        $('.navbar_fade').fadeOut();
    }
},false);
