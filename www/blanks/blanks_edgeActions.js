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