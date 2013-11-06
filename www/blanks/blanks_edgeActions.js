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
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
          var all_start = function(event, ui) {
              ui.position.left = 0;
              ui.position.top = 0;
          };
          var all_drag = function(event, ui) {
              var zoomScale = window.Utils.scale_factor;
              var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
              var newLeft = ui.originalPosition.left + changeLeft / (( zoomScale)); // adjust new left by our zoomScale

              var changeTop = ui.position.top - ui.originalPosition.top; // find change in top
              var newTop = ui.originalPosition.top + changeTop / zoomScale; // adjust new top by our zoomScale

              ui.position.left = newLeft;
              ui.position.top = newTop;

          };
          var on_revert = function(is_valid_drop){
              if(is_valid_drop){
                  return false;
              } else {
                  $('#no_audio')[0].play();
                  return true;
              }
          };

         function init() {
         	sym.getSymbol('Symbol_a').$('a').draggable({opacity: 0.5, revert: on_revert, start: all_start, drag: all_drag});
         	sym.getSymbol('Symbol_i').$('i').draggable({opacity: 0.5, revert: on_revert, start: all_start, drag: all_drag});
         	sym.getSymbol('Symbol_o').$('o').draggable({opacity: 0.5, revert: on_revert, start: all_start, drag: all_drag});
         	sym.getSymbol('Symbol_t').$('t').draggable({opacity: 0.5, revert: on_revert, start: all_start, drag: all_drag});
         	sym.$('target_frame').droppable({
         		accept: sym.getSymbol('Symbol_o').$('o'),
         		drop: function() {
         			if(window.Utils.is_ios()){
                        sym.getSymbol('Symbol_o').stop();
         				$('#yes_audio')[0].play();
         			}
         		}
            });
         }
         
         yepnope({
         	 nope: ['../bower_components/jquery-ui/ui/minified/jquery-ui.min.js',
         		  '../bower_components/jqueryui-touch-punch/jquery.ui.touch-punch.min.js'],
         	 complete: init
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_a'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

   })("Symbol_a");
   //Edge symbol end:'Symbol_a'

   //=========================================================
   
   //Edge symbol: 'Symbol_i'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

   })("Symbol_i");
   //Edge symbol end:'Symbol_i'

   //=========================================================
   
   //Edge symbol: 'Symbol_t'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

   })("Symbol_t");
   //Edge symbol end:'Symbol_t'

   //=========================================================
   
   //Edge symbol: 'Symbol_o'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

   })("Symbol_o");
   //Edge symbol end:'Symbol_o'

})(jQuery, AdobeEdge, "EDGE-10893320");