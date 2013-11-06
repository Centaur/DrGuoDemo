/**
 * Created with JetBrains WebStorm.
 * User: xf
 * Date: 13-10-16
 * Time: 下午2:52
 * To change this template use File | Settings | File Templates.
 */

'use strict';

function onDeviceReady() {
    function get_video_url(elem) {
        var video_src = $('#song_video_placeholder').attr('src');
        if (Utils.is_android()) {
            var file_name = video_src.split('/')[1];
            Utils.checkIfFileExists('/mnt/sdcard-ext/' + file_name, function () {
                elem.src = 'file:///mnt/sdcard-ext/' + file_name
            });
            Utils.checkIfFileExists('/mnt/sdcard/' + file_name, function () {
                elem.src = 'file:///mnt/sdcard/' + file_name
            });
        } else {
            elem.src = video_src
        }
    }

    (function ($) {
        function calc_video_element_geo() {
            var video_width, video_height, video_x, video_y;
            var screen_width = $(window).width();
            var screen_height = $(window).height();
            if (screen_width < 800 || screen_height < 680) {
                if (screen_width / screen_height < 800 / 680) {
                    video_width = screen_width;
                    video_height = screen_width * 680 / 800;
                    video_x = 0;
                    video_y = (screen_height - video_height) / 2;
                } else {
                    video_height = screen_height;
                    video_width = screen_height * 800 / 680;
                    video_y = 0;
                    video_x = (screen_width - video_width) / 2;
                }
            } else {
                video_width = 800;
                video_height = 680;
                video_x = (screen_width - 800) / 2;
                video_y = (screen_height - 680) / 2;
            }
            return {left: video_x, top: video_y, width: video_width, height: video_height};
        }

        var video_tag = document.createElement('video');
        get_video_url(video_tag);
        video_tag.control = "controls";
        video_tag.id = 'song_video';
//        video_tag.autoplay = 'autoplay';
        video_tag.controls = 'controls';
        video_tag.poster = 'img/poster.jpg';
        document.body.appendChild(video_tag);

        function reset_video_element() {
            var video_tag = $('#song_video');
            var calc_result = calc_video_element_geo();
            video_tag.css({position: 'absolute', left: calc_result.left, top: calc_result.top});
            video_tag.attr({width: calc_result.width, height: calc_result.height})
        }

        reset_video_element();

        if(Utils.is_ios()){
            $('#song_video')[0].play();
        }

        $(window).on('resize', function () {
            reset_video_element();
        })
    })(jQuery);
}


if (Utils.is_android()) {
    Utils.require_phonegap_js();
    document.addEventListener("deviceready", onDeviceReady, false);
} else {
    onDeviceReady();
}
