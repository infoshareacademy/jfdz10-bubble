$(document).ready(function(){

    // hide #back-top first
$("#to-top").hide();

// fade in #back-top
$(function () {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#to-top').fadeIn();
        }   
        else {
            $('#to-top').fadeOut();
        }
    });

    });

});
