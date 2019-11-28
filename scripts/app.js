(function($) {
    'use strict';

    // Sticky Header Function
    // TODO Write a performant scroll event handler.
    // Use a technique of your choice.
    // Use of jQuery is optional.
    // TIP: Depending on the approach you might consider browser compatibility issues, and present alternatives.
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 170) {
            jQuery('body').addClass("ec-sticky");
        } else {
            jQuery('body').removeClass("ec-sticky");
        }
    });

    // Click to Top Button
    jQuery('.backtop-btn').on("click", function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    //if email address is empty prevent submission
    jQuery('.submit').click(function(event){
        if( jQuery('.email').val().length === 0 ) {
            event.preventDefault();
            alert("Please enter email address");
        }
    });

}(jQuery));
