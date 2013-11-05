'use strict';
(function ($) {
    var drag_start_x, drag_start_y;
    var drag_started = false;
    var drag_ele;
    $('#Stage_Symbol_a').on('mousedown', function(e){
        alert('mousedown')
    });
    $('#Stage_Symbol_a_a').on('touchstart mousedown',function (e) {
        e.preventDefault();
        drag_started = true;
        drag_ele = e.target;
    }).on('touchend mouseup',function (e) {
            e.preventDefault();
            alert('touchend')
        }).on('touchmove mousemove', function (e) {
            e.preventDefault();
            alert('touchmove')
        })

})(jQuery);