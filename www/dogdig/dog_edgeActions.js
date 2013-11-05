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
         sym.$("btnB_symbol").hide();
         sym.$("btnA_symbol").hide();
         sym.$("dog-body").hide();
         sym.$("dog-tail").hide();
         sym.$("dog-talon").hide();
         sym.$("mud").hide();
         sym.$("text01-b").hide();
         sym.$("text02-b").hide();

           //声音的加载
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         sym.$("title").hide();
         
         sym.$("dog-body").show();
         sym.$("dog-tail").show();
         sym.$("dog-talon").show();
         sym.$("mud").show();
         
         var au_to_play=new Audio();
         au_to_play.src="sound/DOG17.WAV";
         au_to_play.volume=0.5;
         au_to_play.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         var au_to_play=new Audio();
         au_to_play.src="../common/S1564.WAV";
         au_to_play.volume=0.5;
         au_to_play.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         var au_to_play=new Audio();
         au_to_play.src="sound/DOG14.WAV";
         au_to_play.volume=0.5;
         au_to_play.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         var au_to_play=new Audio();
         au_to_play.src="sound/dog.mp3";
         au_to_play.volume=0.5;
         au_to_play.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9338, function(sym, e) {
         var au_to_play=new Audio();
         au_to_play.src="sound/dig.mp3";
         au_to_play.volume=0.5;
         au_to_play.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10119, function(sym, e) {
         sym.$("text01-b").show();
         sym.$("text02-b").show();
         
         sym.$("text01-a").hide();
         sym.$("text02-a").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.$("text01-a").show();
         sym.$("text02-a").show();
         
         sym.$("text01-b").hide();
         sym.$("text02-b").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11340, function(sym, e) {
         sym.$("text01-a").show();
         sym.$("text02-a").show();
         
         sym.$("text01-b").hide();
         sym.$("text02-b").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11176, function(sym, e) {
         sym.$("text01-b").show();
         sym.$("text02-b").show();
         
         sym.$("text01-a").hide();
         sym.$("text02-a").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
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
   (function(symbolName) {   
   
   })("title");
   //Edge symbol end:'title'

   //=========================================================
   
   //Edge symbol: 'dog-tail'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 325, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("dog-tail");
   //Edge symbol end:'dog-tail'

   //=========================================================
   
   //Edge symbol: 'dog-talon'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 410, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("dog-talon");
   //Edge symbol end:'dog-talon'

   //=========================================================
   
   //Edge symbol: 'mud'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 610, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("mud");
   //Edge symbol end:'mud'

   //=========================================================
   
   //Edge symbol: 'btnA_symbol'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnA-m}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(1);
         
         var au_to_play=new Audio();
         au_to_play.src="sound/dog.mp3";
         au_to_play.volume=1;
         au_to_play.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.getParentSymbol().play(11000);
         
         var au_to_play=new Audio();
         au_to_play.src="sound/DOG17.WAV";
         au_to_play.volume=0.3;
         au_to_play.play();

      });
      //Edge binding end

   })("btnA_symbol");
   //Edge symbol end:'btnA_symbol'

   //=========================================================
   
   //Edge symbol: 'btnB_symbol'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.getParentSymbol().play(11000);
         
         var au_to_play=new Audio();
         au_to_play.src="sound/DOG14.WAV";
         au_to_play.volume=0.3;
         au_to_play.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnB-m}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(1);
         
         var au_to_play=new Audio();
         au_to_play.src="sound/dig.mp3";
         au_to_play.volume=1;
         au_to_play.play();

      });
      //Edge binding end

   })("btnB_symbol");
   //Edge symbol end:'btnB_symbol'

})(jQuery, AdobeEdge, "EDGE-31378892");