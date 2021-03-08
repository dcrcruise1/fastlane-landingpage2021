jQuery(function() {
    "use strict";

    /*global jQuery, $*/
    jQuery(document).ready(function() {

        // Magnific Popup 
        jQuery('.image-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });

        // Background Video Player
        $(".player").mb_YTPlayer();
        // $("#bgndVideo").mb_YTPlayer();

        jQuery('.playBV').on('click', function() {
            console.log("play button click")
            jQuery('.player').playYTP();
            jQuery(".playBV").addClass("active");
            jQuery(".video-area .overlay").animate({ opacity: '0' });
            jQuery(".pauseBV").removeClass("active");
            jQuery(".video-play-button").animate({
                opacity: '0',
                top: '-100px'
            }, "slow");
            jQuery(".playerCont").animate({
                opacity: '1'
            }, "slow");
        });

        jQuery('.pauseBV').on('click', function() {
            jQuery('.player').pauseYTP();
            jQuery(this).addClass("active");
            jQuery(".playBV").removeClass("active");
        });

        jQuery('.muteBV').on('click', function() {
            jQuery('.player').muteYTPVolume();
            jQuery(this).addClass("active");
            jQuery(".unmuteBV").removeClass("active");
        });

        jQuery('.unmuteBV').on('click', function() {
            jQuery('.player').unmuteYTPVolume();
            jQuery(this).addClass("active");
            jQuery(".muteBV").removeClass("active");
        });



        //JS for Scroll section to section

        jQuery(window).on('scroll', function() {
            parallax();
        });

        jQuery('a.learn-more').on('click', function() { // code
            jQuery('html, body').animate({ scrollTop: $('#service').offset().top - 50 }, 1000, // animation Speed
                function() {
                    parallax();
                });
            return false;
        });

        function parallax() {
            jQuery(window).scrollTop();
        }

    });



}());