/**
 * Created with JetBrains WebStorm.
 * User: xf
 * Date: 13-10-16
 * Time: 下午2:06
 * To change this template use File | Settings | File Templates.
 */

'use strict';

window.Utils = {
    scale_factor: 1.0,
    checkIfFileExists: function (path, onExist) {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
            fileSystem.root.getFile(path, { create: false }, onExist, null);
        }, null); //of requestFileSystem
    },

    onMediaError: function (error) {
        var cause = '未知错误';
        switch (error.code) {
            case MediaError.MEDIA_ERR_ABORTED:
                cause = '异常中止';
                break;
            case MediaError.MEDIA_ERR_NETWORK:
                cause = '网络错误';
                break;
            case MediaError.MEDIA_ERR_DECODE:
                cause = '解码错误';
                break;
            case MediaError.MEDIA_ERR_NONE_SUPPORTED:
                cause = '不支持';
                break;
        }
    },

    require_phonegap_js: function () {
        var phonegap_js = document.createElement('script');
        phonegap_js.src = 'phonegap.js';
        phonegap_js.type = 'text/javascript';
        document.body.appendChild(phonegap_js);
    },

    is_android: function () {
        return /android/i.test(navigator.userAgent.toLowerCase());
    },

    is_ios: function() {
        return /(iPad|iPhone|iPod)/i.test(navigator.userAgent.toLowerCase());
    },

    isPhone: function () {
        alert('user-agent = ' + navigator.userAgent.toLowerCase());
        return /mobile/i.test(navigator.userAgent.toLowerCase());
    },

    auto_scale: function(sym, $){
        sym.$('#Stage').css({ // Set the transform origin so we always scale to the top left corner of the stage
            "transform-origin":"center center",
            "-ms-transform-origin":"center center",
            "-webkit-transform-origin":"center center",
            "-moz-transform-origin":"center center",
            "-o-transform-origin":"center center"
        });

        function scaleStage() {
            var stage = sym.$('Stage'); // Set a reusable variable to reference the stage
            var parent = sym.$('Stage').parent(); // Set a reusable variable to reference the parent container of the stage

            var parentWidth = $(window).width();//stage.parent().width(); // Get the parent of the stage width
            var parentHeight = $(window).height(); // Get the browser window height
            var stageWidth = stage.width(); // Get the stage width
            var stageHeight = stage.height(); // Get the stage height
            var desiredWidth = Math.round(parentWidth * 1); // Set the new width of the stage as it scales
            var desiredHeight = Math.round(parentHeight * 1); // Set the new height of the stage as it scales
            var rescaleWidth = (desiredWidth / stageWidth); // Set a variable to calculate the new width of the stage as it scales
            var rescaleHeight = (desiredHeight / stageHeight); // Set a variable to calculate the new height of the stage as it scales
            var rescale = rescaleWidth;

            if (stageHeight * rescale > desiredHeight){ // Do not scale larger than the height of the browser window
                rescale = rescaleHeight;
            }

            window.Utils.scale_factor = rescale;
// Rescale the stage!
            stage.css('transform', "scale(" + rescale + ")");
            stage.css( '-o-transform', "scale(" + rescale + ")");
            stage.css('-ms-transform', "scale(" + rescale + ")");
            stage.css('-webkit-transform', "scale(" + rescale + ")");
            stage.css('-moz-transform', "scale(" + rescale + ")");
            stage.css('-o-transform', "scale(" + rescale + ")");
            parent.height(stageHeight * rescale); // Reset the height of the parent container so the objects below it will reflow as the height adjusts
        }

// Make it happen when the browser resizes
        $(window).on('resize', function(){
            scaleStage();
        });

// Make it happen when the page first loads
        $(document).ready(function(){
            scaleStage();
        });
    }
}
;