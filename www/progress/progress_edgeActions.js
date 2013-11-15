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
           if (Utils.is_android()) {
               function onDeviceReady() {
                   sym.setVariable('open_audio', new Media('/android_asset/www/common/open.wav', null, null));
                   sym.setVariable('close_audio', new Media('/android_asset/www/common/close.wav', null, null));
               }
               document.addEventListener("deviceready", onDeviceReady, false);
           }
       });
       //Edge binding end


       Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //隐藏原件
         sym.$("pop_frame").hide();
         sym.$("pop_frame2").hide();
         sym.$("pop_frame3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_see_btn}", "click", function(sym, e) {
         sym.$("pop_frame").show();
         sym.getSymbol("pop_frame").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_see_btnCopy}", "click", function(sym, e) {
         sym.$("pop_frame2").show();
         sym.getSymbol("pop_frame2").play(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_see_btnCopy2}", "click", function(sym, e) {
         sym.$("pop_frame3").show();
         sym.getSymbol("pop_frame3").play(1);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'see_btn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_see_btnB}", "click", function(sym, e) {
         sym.play(1);
         if(Utils.is_ios()){
             var au_to_play=sym.$('#open_audio')[0];
             au_to_play.volume=0.8;
             au_to_play.play();
         } else if(Utils.is_android()){
             sym.getParentSymbol().getVariable('open_audio').play();
         }
      });
      //Edge binding end

   })("see_btn");
   //Edge symbol end:'see_btn'

   //=========================================================
   
   //Edge symbol: 'pop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("pop");
   //Edge symbol end:'pop'

   //=========================================================
   
   //Edge symbol: 'pop_btn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pop_btnB}", "click", function(sym, e) {
         sym.play(1);

          if(Utils.is_ios()){
              var au_to_play=sym.$('#close_audio')[0];
              au_to_play.volume=0.8;
              au_to_play.play();
          } else if(Utils.is_android()){
              sym.getParentSymbol().getParentSymbol().getVariable('close_audio').play();
          }

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         
         sym.getParentSymbol().getSymbolElement().hide();

      });
      //Edge binding end

   })("pop_btn");
   //Edge symbol end:'pop_btn'

   //=========================================================
   
   //Edge symbol: 'pop_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("pop3");
   //Edge symbol end:'pop3'

   //=========================================================
   
   //Edge symbol: 'pop_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("pop2");
   //Edge symbol end:'pop2'

})(jQuery, AdobeEdge, "EDGE-28233390");