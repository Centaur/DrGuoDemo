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
            function onDeviceReady() {
                if (window.Utils.is_android()) {
                    var title_audio = new Media('/android_asset/www/longlog/sound/title.mp3', null, null);
                    title_audio.play();
                    sym.setVariable('title_audio', title_audio);
                    var title_background_audio = new Media('/android_asset/www/common/S1564.WAV', null, null);
                    title_background_audio.play();
                    sym.setVariable('title_background_audio', title_background_audio);
                    sym.setVariable('log_audio', new Media('/android_asset/www/longlog/sound/log.mp3', null, null));
                    sym.setVariable('long_audio', new Media('/android_asset/www/longlog/sound/long.mp3', null, null));
                    sym.setVariable('brick_audio', new Media('/android_asset/www/longlog/sound/Brick Drop B.WAV', null, null));
                    sym.setVariable('bumps_audio', new Media('/android_asset/www/longlog/sound/Bumps 5 Dull.WAV', null, null))
                }
            }
            document.addEventListener("deviceready", onDeviceReady, false);
        });
        //Edge binding end
        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            //调试跳过title
            //sym.play(7499);

            //隐藏原件
            sym.$("btnB_symbol").hide();
            sym.$("btnA_symbol").hide();
            sym.$("btnB").hide();
            sym.$("btnA").hide();
            sym.$("Image").hide();
            sym.$("text01-a").hide();
            sym.$("text02-a").hide();
            sym.$("text01-b").hide();
            sym.$("text02-b").hide();

            if (window.Utils.is_ios()) {
                var title_audio = sym.$('#title_audio')[0];
                title_audio.volume = 1;
                title_audio.play();

                var background_audio = sym.$('#background_audio')[0];
                background_audio.volume = 0.5;
                background_audio.play();
            }

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function (sym, e) {
            sym.$("text01-b").show();
            sym.$("text02-b").show();

            sym.$("text01-a").hide();
            sym.$("text02-a").hide();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11919, function (sym, e) {
            sym.$("text01-a").show();
            sym.$("text02-a").show();

            sym.$("text01-b").hide();
            sym.$("text02-b").hide();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12111, function (sym, e) {
            sym.$("text01-b").show();
            sym.$("text02-b").show();

            sym.$("text01-a").hide();
            sym.$("text02-a").hide();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12308, function (sym, e) {
            sym.$("text01-a").show();
            sym.$("text02-a").show();

            sym.$("text01-b").hide();
            sym.$("text02-b").hide();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function (sym, e) {
            sym.$("text01-b").show();
            sym.$("text02-b").show();

            sym.$("text01-a").hide();
            sym.$("text02-a").hide();

            sym.$("btnA_symbol").show();
            sym.$("btnB_symbol").show();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function (sym, e) {
            sym.$("title").hide();
            sym.$("Image").show();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function (sym, e) {
            sym.$("text01-a").show();

            if (Utils.is_ios()) {
                var au_to_play = new Audio();
                au_to_play.src = "sound/log.mp3";
                au_to_play.volume = 1;
                au_to_play.play();
            } else if (Utils.is_android()) {
                sym.getVariable('log_audio').play()
            }

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9390, function (sym, e) {
            sym.$("btnA").show();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function (sym, e) {
            sym.$("text02-a").show();

            if (Utils.is_ios()) {
                var au_to_play = new Audio();
                au_to_play.src = "sound/long.mp3";
                au_to_play.volume = 1;
                au_to_play.play();
            } else if (Utils.is_android()) {
                sym.getVariable('long_audio').play();
            }

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10622, function (sym, e) {
            sym.$("btnB").show();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function (sym, e) {
            if (window.Utils.is_ios()) {
                var background_audio = sym.$('#background_audio')[0];
                background_audio.volume = 0.5;
                background_audio.play();
            } else if (Utils.is_android()) {
                sym.getVariable('title_background_audio').play();
            }
        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7870, function (sym, e) {
            if (Utils.is_ios()) {
                var au_to_play = new Audio();
                au_to_play.src = "sound/Brick Drops B.WAV";
                au_to_play.volume = 0.5;
                au_to_play.play();
            } else if (Utils.is_android()) {
                sym.getVariable('brick_audio').play();
            }

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8060, function (sym, e) {
            if (Utils.is_ios()) {
                var au_to_play = new Audio();
                au_to_play.src = "sound/Bumps 5 Dull.WAV";
                au_to_play.volume = 0.4;
                au_to_play.play();
            } else if (Utils.is_android()) {
                sym.getVariable('bumps_audio').play();
            }

        });
        //Edge binding end

    })("stage");
    //Edge symbol end:'stage'
//Edge symbol: 'btnA_symbol'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // insert code heresym.stop();
            sym.stop();

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_btnA-003}", "click", function (sym, e) {
            // play the timeline from the given position (ms or label)
            sym.play(1);

            if (Utils.is_ios()) {
                var au_to_play = new Audio();
                au_to_play.src = "sound/log.mp3";
                au_to_play.volume = 1;
                au_to_play.play();
            } else if (Utils.is_android()) {
                sym.getParentSymbol().getVariable('log_audio').play();
            }

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 210, function (sym, e) {
            sym.getParentSymbol().play(11919);

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

        Symbol.bindElementAction(compId, symbolName, "${_btnB-00}", "click", function (sym, e) {
            // play the timeline from the given position (ms or label)
            sym.play(1);

            if (Utils.is_ios()) {
                var au_to_play = new Audio();
                au_to_play.src = "sound/long.mp3";
                au_to_play.volume = 1;
                au_to_play.play();
            } else if (Utils.is_android()) {
                sym.getParentSymbol().getVariable('long_audio').play();
            }

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 210, function (sym, e) {
            sym.getParentSymbol().play(11919);

        });
        //Edge binding end

    })("btnB_symbol");
    //Edge symbol end:'btnB_symbol'

    //=========================================================

    //Edge symbol: 'title'
    (function (symbolName) {

    })("title");
    //Edge symbol end:'title'
})(jQuery, AdobeEdge, "EDGE-26622905");