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
            rect:['381px','232px','304px','355px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg.svg",'0px','0px']
         },
         {
            id:'title',
            type:'rect',
            rect:['82','117','auto','auto','auto','auto']
         },
         {
            id:'mud',
            type:'rect',
            rect:['559','401','auto','auto','auto','auto']
         },
         {
            id:'dog-tail',
            type:'rect',
            rect:['114','138','auto','auto','auto','auto']
         },
         {
            id:'dog-talon',
            type:'rect',
            rect:['442','338','auto','auto','auto','auto']
         },
         {
            id:'dog-body',
            type:'image',
            rect:['100px','205px','367px','270px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"dog-body.svg",'0px','0px']
         },
         {
            id:'text01-a',
            type:'image',
            rect:['218px','117px','155px','53px','auto','auto'],
            clip:['rect(0px 155pxpx 53pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"text01-a.svg",'0px','0px']
         },
         {
            id:'btnA-f',
            type:'image',
            rect:['73px','114px','419px','388px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"btnA-f.svg",'0px','0px']
         },
         {
            id:'text02-a',
            type:'image',
            rect:['578px','232px','144px','53px','auto','auto'],
            clip:['rect(0px 144pxpx 53pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"text02-a.svg",'0px','0px']
         },
         {
            id:'btnB-f',
            type:'image',
            rect:['484px','282px','159px','236px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"btnB-f.svg",'0px','0px']
         },
         {
            id:'text01-b',
            type:'image',
            rect:['218px','117px','155px','53px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text01-b.svg",'0px','0px']
         },
         {
            id:'text02-b',
            type:'image',
            rect:['578px','232px','144px','53px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text02-b.svg",'0px','0px']
         },
         {
            id:'btnA_symbol',
            type:'rect',
            rect:['74','114','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'btnB_symbol',
            type:'rect',
            rect:['484','283','auto','auto','auto','auto'],
            cursor:['pointer']
         }],
         symbolInstances: [
         {
            id:'dog-tail',
            symbolName:'dog-tail'
         },
         {
            id:'title',
            symbolName:'title'
         },
         {
            id:'mud',
            symbolName:'mud'
         },
         {
            id:'dog-talon',
            symbolName:'dog-talon'
         },
         {
            id:'btnB_symbol',
            symbolName:'btnB_symbol'
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
            ["style", "left", '218px'],
            ["style", "top", '117px']
         ],
         "${_text02-a}": [
            ["style", "top", '232px'],
            ["style", "left", '578px'],
            ["style", "clip", [0,0,53,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_text02-b}": [
            ["style", "left", '578px'],
            ["style", "top", '232px']
         ],
         "${_text01-a}": [
            ["style", "top", '117px'],
            ["style", "left", '218px'],
            ["style", "clip", [0,0,53,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_btnB-f}": [
            ["style", "top", '282px'],
            ["style", "opacity", '0'],
            ["style", "left", '484px']
         ],
         "${_btnA-f}": [
            ["style", "top", '114px'],
            ["style", "opacity", '0'],
            ["style", "left", '73px']
         ],
         "${_btnA_symbol}": [
            ["style", "cursor", 'pointer']
         ],
         "${_dog-body}": [
            ["style", "left", '100px'],
            ["style", "top", '205px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '800px'],
            ["style", "height", '680px'],
            ["style", "overflow", 'hidden']
         ],
         "${_bg}": [
            ["style", "left", '381px'],
            ["style", "top", '232px']
         ],
         "${_btnB_symbol}": [
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 11500,
         autoPlay: true,
         timeline: [
            { id: "eid108", tween: [ "style", "${_text01-a}", "clip", [0,155,53,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,53,0]}], position: 8000, duration: 420 },
            { id: "eid111", tween: [ "style", "${_text02-a}", "clip", [0,144,53,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,53,0]}], position: 9338, duration: 412 },
            { id: "eid114", tween: [ "style", "${_btnA-f}", "opacity", '1', { fromValue: '0'}], position: 8420, duration: 387 },
            { id: "eid117", tween: [ "style", "${_btnB-f}", "opacity", '1', { fromValue: '0'}], position: 9750, duration: 369 }         ]
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
      rect: ['105px','17px','426px','48px','auto','auto'],
      id: 'title-a',
      opacity: 1,
      clip: ['rect(0px 426pxpx 48pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/title-a.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'title-b',
      rect: ['20px','120px','596px','40px','auto','auto'],
      clip: ['rect(0px 596pxpx 40pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/title-b.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_title-a}": [
            ["style", "top", '17px'],
            ["style", "left", '105px'],
            ["style", "clip", [0,0,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
            ["style", "left", '0px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '76px'],
            ["color", "border-color", 'rgba(255,153,204,1.00)'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_title-b}": [
            ["style", "top", '120px'],
            ["style", "left", '20px'],
            ["style", "clip", [0,0,40,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
            { id: "eid7", tween: [ "style", "${_title-b}", "clip", [0,596,40,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,40,0]}], position: 1750, duration: 1250 },
            { id: "eid3", tween: [ "style", "${_title-a}", "clip", [0,426,48,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,48,0]}], position: 250, duration: 1250 }         ]
      }
   }
},
"dog-tail": {
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
      rect: ['0px','0px','69px','108px','auto','auto'],
      id: 'dog-tail',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/dog-tail.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_dog-tail}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [84.06,93.52], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [84.06,93.52],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [84.06,93.52],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [84.06,93.52],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [84.06,93.52],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '7deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '108px'],
            ["style", "width", '69px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 325,
         autoPlay: true,
         timeline: [
            { id: "eid16", tween: [ "transform", "${_dog-tail}", "rotateZ", '-8deg', { fromValue: '7deg'}], position: 0, duration: 165 },
            { id: "eid17", tween: [ "transform", "${_dog-tail}", "rotateZ", '7deg', { fromValue: '-8deg'}], position: 165, duration: 160 }         ]
      }
   }
},
"dog-talon": {
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
      id: 'dog-talon',
      type: 'image',
      rect: ['0px','0px','136px','72px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/dog-talon.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '136px']
         ],
         "${_dog-talon}": [
            ["style", "top", '0px'],
            ["style", "left", '10px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 410,
         autoPlay: true,
         timeline: [
            { id: "eid24", tween: [ "transform", "${_dog-talon}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 0, duration: 175 },
            { id: "eid39", tween: [ "transform", "${_dog-talon}", "rotateZ", '0deg', { fromValue: '-12deg'}], position: 310, duration: 100 },
            { id: "eid34", tween: [ "style", "${_dog-talon}", "top", '-8px', { fromValue: '0px'}], position: 0, duration: 175 },
            { id: "eid35", tween: [ "style", "${_dog-talon}", "top", '-6px', { fromValue: '-8px'}], position: 175, duration: 135 },
            { id: "eid40", tween: [ "style", "${_dog-talon}", "top", '0px', { fromValue: '-6px'}], position: 310, duration: 100 },
            { id: "eid28", tween: [ "style", "${_dog-talon}", "left", '-19px', { fromValue: '10px'}], position: 0, duration: 175 },
            { id: "eid29", tween: [ "style", "${_dog-talon}", "left", '0px', { fromValue: '-19px'}], position: 175, duration: 135 },
            { id: "eid41", tween: [ "style", "${_dog-talon}", "left", '10px', { fromValue: '0px'}], position: 310, duration: 100 }         ]
      }
   }
},
"mud": {
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
      type: 'image',
      id: 'mud-01',
      rect: ['0px','0px','19px','17px','auto','auto'],
      transform: [[0,0],[],[],['0.57895','0.57895']],
      fill: ['rgba(0,0,0,0)','images/mud.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'mud-02',
      rect: ['10px','-8px','19px','17px','auto','auto'],
      transform: [[0,0],[],[],['0.68112','0.68112']],
      fill: ['rgba(0,0,0,0)','images/mud.svg','0px','0px']
   },
   {
      id: 'mud-03',
      type: 'image',
      rect: ['0px','-3px','19px','17px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mud.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mud-03}": [
            ["style", "top", '-29px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '12px'],
            ["style", "opacity", '0'],
            ["style", "left", '3px'],
            ["style", "width", '13px']
         ],
         "${_mud-02}": [
            ["style", "top", '-8px'],
            ["style", "height", '17px'],
            ["transform", "scaleY", '0.68112'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.68112'],
            ["style", "opacity", '0'],
            ["style", "left", '10px'],
            ["style", "width", '19px']
         ],
         "${_mud-01}": [
            ["style", "top", '0px'],
            ["style", "height", '18px'],
            ["transform", "scaleY", '0.57895'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.57895'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '17px'],
            ["style", "width", '19px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 610,
         autoPlay: true,
         timeline: [
            { id: "eid88", tween: [ "transform", "${_mud-03}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 105, duration: 245 },
            { id: "eid74", tween: [ "style", "${_mud-02}", "width", '40px', { fromValue: '19px'}], position: 195, duration: 415 },
            { id: "eid93", tween: [ "style", "${_mud-03}", "left", '-73px', { fromValue: '3px'}], position: 105, duration: 245 },
            { id: "eid101", tween: [ "style", "${_mud-03}", "opacity", '1', { fromValue: '0'}], position: 65, duration: 40 },
            { id: "eid95", tween: [ "style", "${_mud-03}", "opacity", '0', { fromValue: '1'}], position: 350, duration: 65 },
            { id: "eid104", tween: [ "style", "${_mud-02}", "opacity", '1', { fromValue: '0'}], position: 155, duration: 40 },
            { id: "eid70", tween: [ "style", "${_mud-02}", "top", '65px', { fromValue: '-8px'}], position: 195, duration: 415 },
            { id: "eid91", tween: [ "style", "${_mud-03}", "width", '25px', { fromValue: '13px'}], position: 105, duration: 245 },
            { id: "eid56", tween: [ "transform", "${_mud-01}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 415 },
            { id: "eid89", tween: [ "style", "${_mud-03}", "height", '23px', { fromValue: '12px'}], position: 105, duration: 245 },
            { id: "eid49", tween: [ "style", "${_mud-01}", "top", '23px', { fromValue: '0px'}], position: 0, duration: 415 },
            { id: "eid53", tween: [ "style", "${_mud-01}", "width", '22px', { fromValue: '20px'}], position: 0, duration: 415 },
            { id: "eid45", tween: [ "style", "${_mud-01}", "left", '-74px', { fromValue: '0px'}], position: 0, duration: 415 },
            { id: "eid77", tween: [ "transform", "${_mud-02}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 195, duration: 415 },
            { id: "eid52", tween: [ "style", "${_mud-01}", "height", '20px', { fromValue: '18px'}], position: 0, duration: 415 },
            { id: "eid90", tween: [ "style", "${_mud-03}", "top", '55px', { fromValue: '-29px'}], position: 105, duration: 245 },
            { id: "eid69", tween: [ "style", "${_mud-02}", "left", '-69px', { fromValue: '10px'}], position: 195, duration: 415 },
            { id: "eid73", tween: [ "style", "${_mud-02}", "height", '38px', { fromValue: '17px'}], position: 195, duration: 415 },
            { id: "eid98", tween: [ "style", "${_mud-01}", "opacity", '0', { fromValue: '1'}], position: 415, duration: 40 }         ]
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
      id: 'btnA-m',
      type: 'image',
      rect: ['0px','0px','419px','388px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btnA-m.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btnA-m}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '388px'],
            ["style", "width", '419px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid122", tween: [ "style", "${_btnA-m}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 125 },
            { id: "eid121", tween: [ "style", "${_btnA-m}", "opacity", '0', { fromValue: '1'}], position: 125, duration: 125 }         ]
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
      id: 'btnB-m',
      type: 'image',
      rect: ['0px','0px','159px','236px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btnB-m.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '236px'],
            ["style", "width", '159px']
         ],
         "${_btnB-m}": [
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
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid127", tween: [ "style", "${_btnB-m}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 125 },
            { id: "eid126", tween: [ "style", "${_btnB-m}", "opacity", '0', { fromValue: '1'}], position: 125, duration: 125 }         ]
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
})(jQuery, AdobeEdge, "EDGE-31378892");
