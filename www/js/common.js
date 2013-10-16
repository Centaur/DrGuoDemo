/**
 * Created with JetBrains WebStorm.
 * User: xf
 * Date: 13-10-16
 * Time: 下午2:06
 * To change this template use File | Settings | File Templates.
 */

'use strict';

window.Utils = {
    onMediaError: function(error){
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

    require_phonegap_js: function(){
        var phonegap_js = document.createElement('script');
        phonegap_js.src = 'phonegap.js';
        phonegap_js.type = 'text/javascript';
        document.body.appendChild(phonegap_js);
    },

    isAndroid: function(){
        return /android/i.test(navigator.userAgent.toLowerCase());
    }
};