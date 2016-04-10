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

    $(window).resize(function (){
        layout.aboutImageContainer();
    });
});
