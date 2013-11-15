/***********************
 * Adobe Edge Animate Composition Actions
 *
 * Edit this file with caution, being careful to preserve
 * function signatures and comments starting with 'Edge' to maintain the
 * ability to interact with these actions from within Adobe Edge Animate
 *
 ***********************/
(function ($, Edge, compId) {
    var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

    //Edge symbol: 'stage'
    (function (symbolName) {
        Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function (sym, e) {
            window.Utils.auto_scale(sym, $);
        });
        //Edge binding end

        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            if (window.Utils.is_android()) {
                function onDeviceReady() {
                    var title_audio = new Media('/android_asset/www/hippo/sound/title.mp3', null, null);
                    title_audio.play();
                    sym.setVariable('title_audio', title_audio);
                    var title_background_audio = new Media('/android_asset/www/common/S1564.WAV', null, null);
                    title_background_audio.play();
                    sym.setVariable('title_background_audio', title_background_audio);
                    sym.setVariable('hippo_audio', new Media('/android_asset/www/hippo/sound/hippo.mp3', null, null));
                    sym.setVariable('hip_audio', new Media('/android_asset/www/hippo/sound/hip.mp3', null, null));
                    sym.setVariable('cartoon28_audio', new Media('/android_asset/www/hippo/sound/Cartoon28.wav', null, null));
                    sym.setVariable('cartoon39_audio', new Media('/android_asset/www/hippo/sound/Cartoon39.wav', null, null))
                }

                document.addEventListener("deviceready", onDeviceReady, false);
            }

        });
        //Edge binding end


        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            //调试跳过title
            //sym.play(7500);

            //隐藏原件
            sym.$("text01-b").hide();
            sym.$("text02-b").hide();
            sym.$("btnA_symbol").hide();
            sym.$("btnB_symbol").hide();

            //声音的加载
            if (Utils.is_ios()) {
                var au_to_play = new Audio(); //申请一个动态内存存放音频文件
                au_to_play.src = "sound/title.mp3"; //指定文件名，这里使用的是相对路径
                au_to_play.volume = 1; //设置音频播放时候的音量大小
                au_to_play.play(); //让文件开始播放

                var au_to_play = new Audio();
                au_to_play.src = "../common/S1564.WAV";
                au_to_play.volume = 0.5;
                au_to_play.play();
            }


        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function (sym, e) {
            if (Utils.is_ios()) {
                var au_to_play = new Audio();
                au_to_play.src = "../common/S1564.WAV";
                au_to_play.volume = 0.5;
                au_to_play.play();
            } else if (Utils.is_android()) {
                sym.getVariable('title_background_audio').play();
            }

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function (sym, e) {
            sym.$("title").hide();
            if (Utils.is_ios()) {
                var au_to_play = new Audio();
                au_to_play.src = "sound/Cartoon28.wav";
                au_to_play.volume = 0.5;
                au_to_play.play();
            } else if (Utils.is_android()) {
                sym.getVariable('cartoon28_audio').play();
            }

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9750, function (sym, e) {
            if (Utils.is_ios()) {
                var au_to_play = new Audio();
                au_to_play.src = "sound/Cartoon39.wav";
                au_to_play.volume = 0.5;
                au_to_play.play();
            } else if (Utils.is_android()) {
                sym.getVariable('cartoon39_audio').play();
            }

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function (sym, e) {
            if (Utils.is_ios()) {
                var au_to_play = new Audio();
                au_to_play.src = "sound/hippo.mp3";
                au_to_play.volume = 1;
                au_to_play.play();
            } else if (Utils.is_android()) {
                sym.getVariable('hippo_audio').play();
            }

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function (sym, e) {
            if (Utils.is_ios()) {
                var au_to_play = new Audio();
                au_to_play.src = "sound/hip.mp3";
                au_to_play.volume = 1;
                au_to_play.play();
            } else if (Utils.is_android()) {
                sym.getVariable('hip_audio').play();
            }

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11594, function (sym, e) {
            sym.$("text01-b").show();
            sym.$("text02-b").show();

            sym.$("text01-a").hide();
            sym.$("text02-a").hide();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12494, function (sym, e) {
            sym.$("text01-a").show();
            sym.$("text02-a").show();

            sym.$("text01-b").hide();
            sym.$("text02-b").hide();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12693, function (sym, e) {
            sym.$("text01-b").show();
            sym.$("text02-b").show();

            sym.$("text01-a").hide();
            sym.$("text02-a").hide();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12896, function (sym, e) {
            sym.$("text01-a").show();
            sym.$("text02-a").show();

            sym.$("text01-b").hide();
            sym.$("text02-b").hide();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13094, function (sym, e) {
            sym.$("text01-b").show();
            sym.$("text02-b").show();

            sym.$("text01-a").hide();
            sym.$("text02-a").hide();

            sym.$("btnA_symbol").show();
            sym.$("btnB_symbol").show();

        });
        //Edge binding end

    })("stage");
    //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'title'
    (function (symbolName) {

    })("title");
    //Edge symbol end:'title'

    //=========================================================

    //Edge symbol: 'hippoA'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function (sym, e) {
            sym.play();

        });
        //Edge binding end

    })("hippoA");
    //Edge symbol end:'hippoA'

    //=========================================================

    //Edge symbol: 'hippoB'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function (sym, e) {
            sym.play();

        });
        //Edge binding end

    })("hippoB");
    //Edge symbol end:'hippoB'

    //=========================================================

    //Edge symbol: 'hippoB-CT'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function (sym, e) {
            sym.play();

        });
        //Edge binding end

    })("hippoB-CT");
    //Edge symbol end:'hippoB-CT'

    //=========================================================

    //Edge symbol: 'btnA_symbol'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_btnA-m}", "click", function (sym, e) {
            // play the timeline from the given position (ms or label)
            sym.play(1);

            if (Utils.is_ios()) {
                var au_to_play = new Audio();
                au_to_play.src = "sound/hippo.mp3";
                au_to_play.volume = 1;
                au_to_play.play();
            } else if (Utils.is_android()) {
                sym.getParentSymbol().getVariable('hippo_audio').play();
            }

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.getParentSymbol().play(12490);

        });
        //Edge binding end

    })("btnA_symbol");
    //Edge symbol end:'btnA_symbol'

    //=========================================================

    //Edge symbol: 'btnB_symbol'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.getParentSymbol().play(12490);

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_btnB-m}", "click", function (sym, e) {
            // play the timeline from the given position (ms or label)
            sym.play(1);
            if (Utils.is_ios()) {
                var au_to_play = new Audio();
                au_to_play.src = "sound/hip.mp3";
                au_to_play.volume = 1;
                au_to_play.play();
            } else if (Utils.is_android()) {
                sym.getParentSymbol().getVariable('hip_audio').play();
            }

        });
        //Edge binding end

    })("btnB_symbol");
    //Edge symbol end:'btnB_symbol'

})(jQuery, AdobeEdge, "EDGE-5176730");