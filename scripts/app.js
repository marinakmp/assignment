(function($) {
    'use strict';

    // Sticky Header Function
    // TODO Write a performant scroll event handler.
    // Use a technic of your choise.
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

}(jQuery));
