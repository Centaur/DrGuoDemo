/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bg',
            type:'image',
            rect:['15px','390px','770px','127px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg.svg",'0px','0px']
         },
         {
            id:'title',
            type:'rect',
            rect:['82','117','auto','auto','auto','auto']
         },
         {
            id:'Image',
            type:'image',
            rect:['89px','315px','621px','156px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wood.svg",'0px','0px','100%','100%']
         },
         {
            id:'text01-a',
            type:'image',
            rect:['519px','199px','191px','54px','auto','auto'],
            clip:['rect(0px 191pxpx 54pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"text01-a.svg",'0px','0px']
         },
         {
            id:'btnA',
            type:'image',
            rect:['76px','279px','647px','183px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"btnA.svg",'0px','0px']
         },
         {
            id:'text02-a',
            type:'image',
            rect:['159px','490px','223px','54px','auto','auto'],
            clip:['rect(0px 223pxpx 54pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"text02-a.svg",'0px','0px']
         },
         {
            id:'btnB',
            type:'image',
            rect:['106px','473px','570px','123px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"btnB.svg",'0px','0px']
         },
         {
            id:'text01-b',
            type:'image',
            rect:['519px','199px','191px','54px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text01-b.svg",'0px','0px']
         },
         {
            id:'btnA_symbol',
            type:'rect',
            rect:['80px','284px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'btnB_symbol',
            type:'rect',
            rect:['112','473','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'text02-b',
            type:'image',
            rect:['159px','490px','223px','54px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text02-b.svg",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'btnB_symbol',
            symbolName:'btnB_symbol'
         },
         {
            id:'title',
            symbolName:'title'
         },
         {
            id:'btnA_symbol',
            symbolName:'btnA_symbol'
         }
         ]
      },
   states: {
      "Base State": {
         "${_text01-b}": [
            ["style", "left", '519px'],
            ["style", "top", '199px']
         ],
         "${_text02-a}": [
            ["style", "top", '490px'],
            ["style", "left", '159px'],
            ["style", "clip", [0,0,54,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_text02-b}": [
            ["style", "left", '159px'],
            ["style", "top", '490px']
         ],
         "${_btnA}": [
            ["style", "top", '279px'],
            ["style", "opacity", '0'],
            ["style", "left", '76px'],
            ["transform", "scaleX", '1.02473']
         ],
         "${_text01-a}": [
            ["style", "top", '199px'],
            ["style", "left", '519px'],
            ["style", "clip", [0,0,54,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_bg}": [
            ["style", "top", '390px'],
            ["style", "left", '15px']
         ],
         "${_btnA_symbol}": [
            ["style", "top", '284px'],
            ["style", "opacity", '1'],
            ["style", "left", '80px'],
            ["style", "cursor", 'pointer']
         ],
         "${_btnB_symbol}": [
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '800px'],
            ["style", "height", '680px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Image}": [
            ["style", "top", '-156px'],
            ["style", "left", '89px'],
            ["transform", "rotateZ", '3deg']
         ],
         "${_btnB}": [
            ["style", "top", '473px'],
            ["style", "opacity", '0'],
            ["style", "left", '106px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12500,
         autoPlay: true,
         timeline: [
            { id: "eid12", tween: [ "transform", "${_Image}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 7500, duration: 370, easing: "easeOutBounce" },
            { id: "eid14", tween: [ "transform", "${_Image}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 7870, duration: 190, easing: "easeOutBounce" },
            { id: "eid16", tween: [ "transform", "${_Image}", "rotateZ", '-2deg', { fromValue: '5deg'}], position: 8060, duration: 190, easing: "easeOutBounce" },
            { id: "eid20", tween: [ "transform", "${_Image}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 8320, duration: 95, easing: "easeOutBounce" },
            { id: "eid6", tween: [ "style", "${_Image}", "top", '293px', { fromValue: '-156px'}], position: 7500, duration: 1000, easing: "easeOutBounce" },
            { id: "eid134", tween: [ "style", "${_text01-a}", "clip", [0,191,54,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,54,0]}], position: 9000, duration: 390, easing: "easeOutQuad" },
            { id: "eid140", tween: [ "style", "${_text02-a}", "clip", [0,223,54,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,54,0]}], position: 10250, duration: 372, easing: "easeOutQuad" },
            { id: "eid32", tween: [ "style", "${_btnB}", "opacity", '1', { fromValue: '0'}], position: 10622, duration: 378, easing: "easeOutQuad" },
            { id: "eid29", tween: [ "style", "${_btnA}", "opacity", '1', { fromValue: '0'}], position: 9390, duration: 360, easing: "easeOutQuad" }         ]
      }
   }
},
"btnA_symbol": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'btnA-003',
      type: 'image',
      rect: ['0px','0px','639px','174px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btnA-00.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btnA-003}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '174px'],
            ["style", "width", '639px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 210,
         autoPlay: true,
         timeline: [
            { id: "eid53", tween: [ "style", "${_btnA-003}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 105, easing: "easeOutQuad" },
            { id: "eid71", tween: [ "style", "${_btnA-003}", "opacity", '0.000000', { fromValue: '1'}], position: 105, duration: 105, easing: "easeOutQuad" }         ]
      }
   }
},
"btnB_symbol": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'btnB-00',
      type: 'image',
      rect: ['0px','0px','557px','105px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btnB-00.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '105px'],
            ["style", "width", '557px']
         ],
         "${_btnB-00}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 210,
         autoPlay: true,
         timeline: [
            { id: "eid77", tween: [ "style", "${_btnB-00}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 105, easing: "easeOutQuad" },
            { id: "eid80", tween: [ "style", "${_btnB-00}", "opacity", '0', { fromValue: '1'}], position: 105, duration: 105, easing: "easeOutQuad" }         ]
      }
   }
},
"title": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','630px','76px','auto','auto'],
      borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'title',
      stroke: [3,'rgba(255,153,204,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,204,1.00)']
   },
   {
      type: 'image',
      id: 'title-a3',
      rect: ['101px','16px','434px','50px','auto','auto'],
      clip: ['rect(0px 434pxpx 50pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/title-a.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'title-b4',
      rect: ['91px','114px','454px','40px','auto','auto'],
      clip: ['rect(0px 454pxpx 40pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/title-b.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_title-a3}": [
            ["style", "top", '16px'],
            ["style", "left", '101px'],
            ["style", "clip", [0,0,50,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_title}": [
            ["color", "background-color", 'rgba(255,255,204,1.00)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '3px'],
            ["style", "width", '630px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "filter.blur", '0px'],
            ["style", "height", '76px'],
            ["color", "border-color", 'rgba(255,153,204,1.00)'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "left", '0px']
         ],
         "${_title-b4}": [
            ["style", "top", '114px'],
            ["style", "clip", [0,0,40,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '91px']
         ],
         "${symbolSelector}": [
            ["style", "height", '82px'],
            ["style", "width", '636px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid107", tween: [ "style", "${_title-b4}", "clip", [0,454,40,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,40,0]}], position: 1750, duration: 1250 },
            { id: "eid100", tween: [ "style", "${_title-a3}", "clip", [0,434,50,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,50,0]}], position: 250, duration: 1250 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-26622905");
