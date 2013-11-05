'use strict';

function onDeviceReady() {
    (function($){
        $('#svg-container').load('img/I_idea.svg', function () {

        })
    })(jQuery)
}

if (Utils.is_android()) {
    Utils.require_phonegap_js();
    document.addEventListener("deviceready", onDeviceReady, false);
} else {
    onDeviceReady();
}
