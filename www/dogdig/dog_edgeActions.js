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

       Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function (sym, e) {
           window.Utils.auto_scale(sym, $);
       });
       //Edge binding end
       Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
           if (window.Utils.is_android()) {
               function onDeviceReady() {
                   var title_audio = new Media('/android_asset/www/dogdig/sound/title.mp3', null, null);
                   title_audio.play();
                   sym.setVariable('title_audio', title_audio);
                   var title_background_audio = new Media('/android_asset/www/common/S1564.WAV', null, null);
                   title_background_audio.play();
                   sym.setVariable('title_background_audio', title_background_audio);
                   sym.setVariable('dog_audio', new Media('/android_asset/www/dogdig/sound/dog.mp3', null, null));
                   sym.setVariable('dig_audio', new Media('/android_asset/www/dogdig/sound/dig.mp3', null, null));
                   sym.setVariable('dog14_audio', new Media('/android_asset/www/dogdig/sound/DOG14.WAV', null, null));
                   sym.setVariable('dog17_audio', new Media('/android_asset/www/dogdig/sound/DOG17.WAV', null, null))
               }

               document.addEventListener("deviceready", onDeviceReady, false);
           }

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

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
          if (Utils.is_ios()) {
              var au_to_play = sym.$('title_background_audio')[0];
              au_to_play.volume = 0.5;
              au_to_play.play();
          } else if (Utils.is_android()) {
              sym.getVariable('title_background_audio').play();
          }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
          if (Utils.is_ios()) {
              var au_to_play = sym.$('#dog14_audio')[0];
              au_to_play.volume = 0.5;
              au_to_play.play();
          } else if (Utils.is_android()) {
              sym.getVariable('dog14_audio').play();
          }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
          if (Utils.is_ios()) {
              var au_to_play = sym.$('#dog_audio')[0];
              au_to_play.volume = 1;
              au_to_play.play();
          }
          else if (Utils.is_android()) {
              sym.getVariable('dog_audio').play();
          }
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11750, function(sym, e) {
          if (Utils.is_ios()) {
              var au_to_play = sym.$('#dig_audio')[0];
              au_to_play.volume = 1;
              au_to_play.play();
          }
          else if (Utils.is_android()) {
              sym.getVariable('dig_audio').play();
          }
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12531, function(sym, e) {
         sym.$("text01-b").show();
         sym.$("text02-b").show();
         
         sym.$("text01-a").hide();
         sym.$("text02-a").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13412, function(sym, e) {
         sym.$("text01-a").show();
         sym.$("text02-a").show();
         
         sym.$("text01-b").hide();
         sym.$("text02-b").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13752, function(sym, e) {
         sym.$("text01-a").show();
         sym.$("text02-a").show();
         
         sym.$("text01-b").hide();
         sym.$("text02-b").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13588, function(sym, e) {
         sym.$("text01-b").show();
         sym.$("text02-b").show();
         
         sym.$("text01-a").hide();
         sym.$("text02-a").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13912, function(sym, e) {
         sym.$("text01-b").show();
         sym.$("text02-b").show();
         
         sym.$("text01-a").hide();
         sym.$("text02-a").hide();
         
         sym.$("btnA_symbol").show();
         sym.$("btnB_symbol").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7523, function(sym, e) {
          if (Utils.is_ios()) {
              var au_to_play = sym.$('#dog17_audio')[0];
              au_to_play.volume = 0.3;
              au_to_play.play();
          } else if (Utils.is_android()) {
              sym.getParentSymbol().getVariable('dog17_audio').play();
          }
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
          if (Utils.is_ios()) {
              var dog_audio = new Audio();
              dog_audio.src = "sound/dog.mp3";
              dog_audio.play();
          } else if (Utils.is_android()) {
              sym.getParentSymbol().getVariable('dog_audio').play();
          }
          sym.play(1);
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.getParentSymbol().play(13400);

      });
      //Edge binding end

   })("btnA_symbol");
   //Edge symbol end:'btnA_symbol'

   //=========================================================
   
   //Edge symbol: 'btnB_symbol'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.getParentSymbol().play(13400);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnB-m}", "click", function(sym, e) {

          if (Utils.is_ios()) {
              var au_to_play = new Audio();
              au_to_play.src = 'sound/dig.mp3';
              au_to_play.play();
          } else if (Utils.is_android()) {
              sym.getParentSymbol().getVariable('dig_audio').play();
          }
          sym.play(1);
      });
      //Edge binding end

   })("btnB_symbol");
   //Edge symbol end:'btnB_symbol'

})(jQuery, AdobeEdge, "EDGE-31378892");