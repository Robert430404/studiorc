class LayoutFunctions
{
    constructor()
    {
        this.aboutImageContainer();
    }

    aboutImageContainer()
    {
        var textHeight = $('.about-text').outerHeight();

        $('.image-container').css({
            'height': textHeight + 'px',
        });
    }
}

$(document).ready(function (){
    var layout = new LayoutFunctions();
});

jQuery(document).scroll(function() {
    var x = jQuery(document).scrollTop();

    jQuery('body').css('background-position', '50% ' + parseInt(-x / 10) + 'px');
});
