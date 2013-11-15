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
       Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {

           var all_start = function (event, ui) {
               ui.position.left = 0;
               ui.position.top = 0;
           };

           var all_drag = function (event, ui) {
               var zoomScale = window.Utils.scale_factor;
               var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
               var newLeft = ui.originalPosition.left + changeLeft / (( zoomScale)); // adjust new left by our zoomScale

               var changeTop = ui.position.top - ui.originalPosition.top; // find change in top
               var newTop = ui.originalPosition.top + changeTop / zoomScale; // adjust new top by our zoomScale

               ui.position.left = newLeft;
               ui.position.top = newTop;

           };
           var on_revert = function (is_valid_drop) {
               if (Utils.is_ios()) {
                   if (is_valid_drop)
                       $('#yes_audio')[0].play();
                   else
                       $('#no_audio')[0].play();
               } else if (Utils.is_android()) {
                   if (is_valid_drop)
                       sym.getVariable('yes_audio').play();
                   else
                       sym.getVariable('no_audio').play();
               }
               return true;
           };

           function init() {
               sym.getSymbol('Symbol_s_dog').$('src_dog').draggable({opacity: 0.5, revert: on_revert, start: all_start, drag: all_drag});

               sym.getSymbol('Symbol_s_dig').$('src_dig').draggable({opacity: 0.5, revert: on_revert, start: all_start, drag: all_drag});
               sym.getSymbol('Symbol_s_dish').$('src_dish').draggable({opacity: 0.5, revert: on_revert, start: all_start, drag: all_drag});
               sym.getSymbol('Symbol_s_disk').$('src_disk').draggable({opacity: 0.5, revert: on_revert, start: all_start, drag: all_drag});

               sym.getSymbol('Symbol_t_dog').$('target_dog').droppable({
                   accept: sym.getSymbol('Symbol_s_dog').$('src_dog'),
                   drop: function () {
                       sym.$('line-01').show();
                   }
               });

               sym.getSymbol('Symbol_t_dig').$('target_dig').droppable({
                   accept: sym.getSymbol('Symbol_s_dig').$('src_dig'),
                   drop: function () {
                       sym.$('line-02').show();
                   }
               });

               sym.getSymbol('Symbol_t_dish').$('target_dish').droppable({
                   accept: sym.getSymbol('Symbol_s_dish').$('src_dish'),
                   drop: function () {
                       sym.$('line-04').show();
                   }
               });

               sym.getSymbol('Symbol_t_disk').$('target_disk').droppable({
                   accept: sym.getSymbol('Symbol_s_disk').$('src_disk'),
                   drop: function () {
                       sym.$('line-03').show();
                   }
               });

           }

           if (Utils.is_android()) {
               function onDeviceReady() {
                   sym.setVariable('yes_audio', new Media('/android_asset/www/common/yes.wav', null, null));
                   sym.setVariable('no_audio', new Media('/android_asset/www/common/no.wav', null, null));
               }

               document.addEventListener("deviceready", onDeviceReady, false);
           }

           yepnope({
               nope: ['../bower_components/jquery-ui/ui/minified/jquery-ui.min.js',
                   '../bower_components/jqueryui-touch-punch/jquery.ui.touch-punch.min.js'],
               complete: init
           });

       });
       //Edge binding end


       Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("line-01").hide();
         sym.$("line-02").hide();
         sym.$("line-03").hide();
         sym.$("line-04").hide();
         
         sym.$("Symbol_s_dog").hide();
         sym.$("Symbol_s_dig").hide();
         sym.$("Symbol_s_dish").hide();
         sym.$("Symbol_s_disk").hide();
         sym.$("Symbol_t_dog").hide();
         sym.$("Symbol_t_dig").hide();
         sym.$("Symbol_t_dish").hide();
         sym.$("Symbol_t_disk").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1845, function(sym, e) {
         sym.$("textA-01").hide();
         sym.$("textA-02").hide();
         sym.$("textA-03").hide();
         sym.$("textA-04").hide();
         sym.$("textB-01").hide();
         sym.$("textB-02").hide();
         sym.$("textB-03").hide();
         sym.$("textB-04").hide();
         
         sym.$("Symbol_s_dog").show();
         sym.$("Symbol_s_dig").show();
         sym.$("Symbol_s_dish").show();
         sym.$("Symbol_s_disk").show();
         sym.$("Symbol_t_dog").show();
         sym.$("Symbol_t_dig").show();
         sym.$("Symbol_t_dish").show();
         sym.$("Symbol_t_disk").show();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'happy'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
//         var au_to_play=new Audio();
//         au_to_play.src="../common/happy.mp3";
//         au_to_play.volume=0.5;
//         au_to_play.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14747, function(sym, e) {
//         sym.play();

      });
      //Edge binding end

   })("happy");
   //Edge symbol end:'happy'

   //=========================================================
   
   //Edge symbol: 'Symbol_s_dog'
   (function(symbolName) {   
   
   })("Symbol_s_dog");
   //Edge symbol end:'Symbol_s_dog'

   //=========================================================
   
   //Edge symbol: 'Symbol_S_dig'
   (function(symbolName) {   
   
   })("Symbol_S_dig");
   //Edge symbol end:'Symbol_S_dig'

   //=========================================================
   
   //Edge symbol: 'Symbol_S_dish'
   (function(symbolName) {   
   
   })("Symbol_S_dish");
   //Edge symbol end:'Symbol_S_dish'

   //=========================================================
   
   //Edge symbol: 'Symbol_s_disk'
   (function(symbolName) {   
   
   })("Symbol_s_disk");
   //Edge symbol end:'Symbol_s_disk'

   //=========================================================
   
   //Edge symbol: 'Symbol_t_dish'
   (function(symbolName) {   
   
   })("Symbol_t_dish");
   //Edge symbol end:'Symbol_t_dish'

   //=========================================================
   
   //Edge symbol: 'Symbol_t_disk'
   (function(symbolName) {   
   
   })("Symbol_t_disk");
   //Edge symbol end:'Symbol_t_disk'

   //=========================================================
   
   //Edge symbol: 'Symbol_t_dig'
   (function(symbolName) {   
   
   })("Symbol_t_dig");
   //Edge symbol end:'Symbol_t_dig'

   //=========================================================
   
   //Edge symbol: 'Symbol_t_dog'
   (function(symbolName) {   
   
   })("Symbol_t_dog");
   //Edge symbol end:'Symbol_t_dog'

})(jQuery, AdobeEdge, "EDGE-25639878");