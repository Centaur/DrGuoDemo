/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      //Edge binding end
       Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function (sym, e) {
           window.Utils.auto_scale(sym, $);
       });
       //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //调试跳过title
         //sym.play(7499);
         
         //隐藏原件
         sym.$("bulb-ray").hide();
         sym.$("bulb-ray").hide();
         sym.$("text01-b").hide();
         sym.$("text02-b").hide();
         sym.$("questionMark").hide();
         sym.$("btnA_symbol").hide();
         sym.$("btnB_symbol").hide();
         
         //声音的加载
         var au_to_play=new Audio(); //申请一个动态内存存放音频文件
         au_to_play.src="sound/title.mp3"; //指定文件名，这里使用的是相对路径
         au_to_play.volume=1; //设置音频播放时候的音量大小
         au_to_play.play(); //让文件开始播放
         
         var au_to_play=new Audio();
         au_to_play.src="../common/S1564.WAV";
         au_to_play.volume=0.5;
         au_to_play.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11135, function(sym, e) {
         sym.$("bulb-ray").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         sym.$("text01-b").show();
         sym.$("text02-b").show();
         
         sym.$("text01-a").hide();
         sym.$("text02-a").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12395, function(sym, e) {
         sym.$("text01-a").show();
         sym.$("text02-a").show();
         
         sym.$("text01-b").hide();
         sym.$("text02-b").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12615, function(sym, e) {
         sym.$("text01-b").show();
         sym.$("text02-b").show();
         
         sym.$("text01-a").hide();
         sym.$("text02-a").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12810, function(sym, e) {
         sym.$("text01-a").show();
         sym.$("text02-a").show();
         
         sym.$("text01-b").hide();
         sym.$("text02-b").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.$("text01-b").show();
         sym.$("text02-b").show();
         
         sym.$("text01-a").hide();
         sym.$("text02-a").hide();
         
         sym.$("btnA_symbol").show();
         sym.$("btnB_symbol").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         sym.$("title").hide();
         
         var au_to_play=new Audio();
         au_to_play.src="sound/CLICK8.WAV";
         au_to_play.volume=0.5;
         au_to_play.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         sym.$("questionMark").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         var au_to_play=new Audio();
         au_to_play.src="../common/S1564.WAV";
         au_to_play.volume=0.5;
         au_to_play.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9750, function(sym, e) {
         var au_to_play=new Audio();
         au_to_play.src="sound/CLAP1.WAV";
         au_to_play.volume=0.5;
         au_to_play.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8250, function(sym, e) {
         var au_to_play=new Audio();
         au_to_play.src="sound/i.mp3";
         au_to_play.volume=1;
         au_to_play.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
         var au_to_play=new Audio();
         au_to_play.src="sound/idea.mp3";
         au_to_play.volume=1;
         au_to_play.play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'title'
   (function(symbolName) {   
   
   })("title");
   //Edge symbol end:'title'

   //=========================================================
   
   //Edge symbol: 'questionMark'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("questionMark");
   //Edge symbol end:'questionMark'

   //=========================================================
   
   //Edge symbol: 'characterB'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("characterB");
   //Edge symbol end:'characterB'

   //=========================================================
   
   //Edge symbol: 'bulb-ray'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("bulb-ray");
   //Edge symbol end:'bulb-ray'

   //=========================================================
   
   //Edge symbol: 'btnA_symbol'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_btnA-m}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(1);
         
         var au_to_play=new Audio();
         au_to_play.src="sound/i.mp3";
         au_to_play.volume=1;
         au_to_play.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.getParentSymbol().play(12395);

      });
      //Edge binding end

   })("btnA_symbol");
   //Edge symbol end:'btnA_symbol'

   //=========================================================
   
   //Edge symbol: 'btnB_symbol'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.getParentSymbol().play(12395);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnB-m2}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(1);
         
         var au_to_play=new Audio();
         au_to_play.src="sound/idea.mp3";
         au_to_play.volume=1;
         au_to_play.play();

      });
      //Edge binding end

   })("btnB_symbol");
   //Edge symbol end:'btnB_symbol'

})(jQuery, AdobeEdge, "EDGE-31348108");