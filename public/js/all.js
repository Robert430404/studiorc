'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LayoutFunctions = function () {
    function LayoutFunctions() {
        _classCallCheck(this, LayoutFunctions);

        this.aboutImageContainer();
    }

    _createClass(LayoutFunctions, [{
        key: 'aboutImageContainer',
        value: function aboutImageContainer() {
            var textHeight = $('.about-text').outerHeight();

            $('.image-container').css({
                'height': textHeight + 'px'
            });
        }
    }]);

    return LayoutFunctions;
}();

$(document).ready(function () {
    var layout = new LayoutFunctions();
});

jQuery(document).scroll(function () {
    var x = jQuery(document).scrollTop();

    jQuery('body').css('background-position', '50% ' + parseInt(-x / 5) + 'px');
});
//# sourceMappingURL=all.js.map
