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

            //声音的加载//get the value of a Symbol variable
            //var audio_title = sym.getVariable("audio_title");
            //audio_title.play();
            //var audio_title_background = sym.getVariable('audio_title_background')
            //audio_title_background();
            sym.getVariable('title_background_audio').play();
            sym.getVariable('title_audio').play();

            /*
             var au_to_play=new Audio(); //申请一个动态内存存放音频文件
             au_to_play.src="sound/title.mp3"; //指定文件名，这里使用的是相对路径
             au_to_play.volume=1; //设置音频播放时候的音量大小
             au_to_play.play(); //让文件开始播放

             var au_to_play2=new Audio();
             au_to_play2.src="common/S1564.WAV";
             au_to_play2.volume=0.5;
             au_to_play2.play();
             */

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

            var au_to_play = new Audio();
            au_to_play.src = "sound/log.mp3";
            au_to_play.volume = 1;
            au_to_play.play();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9390, function (sym, e) {
            sym.$("btnA").show();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function (sym, e) {
            sym.$("text02-a").show();

            var au_to_play = new Audio();
            au_to_play.src = "sound/long.mp3";
            au_to_play.volume = 1;
            au_to_play.play();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10622, function (sym, e) {
            sym.$("btnB").show();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function (sym, e) {
            var au_to_play = new Audio();
            au_to_play.src = "common/S1564.WAV";
            au_to_play.volume = 0.5;
            au_to_play.play();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7870, function (sym, e) {
            var au_to_play = new Audio();
            au_to_play.src = "sound/Brick Drops B.WAV";
            au_to_play.volume = 0.5;
            au_to_play.play();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8060, function (sym, e) {
            var au_to_play = new Audio();
            au_to_play.src = "sound/Bumps 5 Dull.WAV";
            au_to_play.volume = 0.4;
            au_to_play.play();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function (sym, e) {
            // insert code here
        });
        //Edge binding end

        Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function (sym, e) {
            // insert code to be run at timeline play here

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function (sym, e) {
            window.Utils.auto_scale(sym, $);

            function onDeviceReady() {
                var title_audio = new Media('/android_asset/www/longlog/sound/title.mp3', null, null);
                title_audio.play();
                sym.setVariable('title_audio', title_audio);
                var title_background_audio = new Media('/android_asset/www/common/S1564.WAV', null, null);
                title_background_audio.play();
                sym.setVariable('title_background_audio', title_background_audio);
            }
            document.addEventListener("deviceready", onDeviceReady, false);

            function init() {
                document.addEventListener("deviceready", onDeviceReady, false);
            }

            yepnope({
                nope: [],
//                nope: ['../js/common.js', '../cordova.js'],
                complete: init
            });
        });
        //Edge binding end

    })("stage");
    //Edge symbol end:'stage'

    //=========================================================

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

            var au_to_play = new Audio();
            au_to_play.src = "sound/log.mp3";
            au_to_play.volume = 1;
            au_to_play.play();

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

            var au_to_play = new Audio();
            au_to_play.src = "sound/long.mp3";
            au_to_play.volume = 1;
            au_to_play.play();

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