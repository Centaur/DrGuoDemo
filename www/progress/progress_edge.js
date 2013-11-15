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
            rect:['0px','0px','800px','680px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg.svg",'0px','0px']
         },
         {
            id:'see_btn',
            type:'rect',
            rect:['623','244','auto','auto','auto','auto'],
            boxShadow:["",0,0,0,0,"rgba(0,0,0,0)"]
         },
         {
            id:'see_btnCopy',
            type:'rect',
            rect:['623','244','auto','auto','auto','auto']
         },
         {
            id:'see_btnCopy2',
            type:'rect',
            rect:['623','244','auto','auto','auto','auto']
         },
         {
            id:'pop_frame',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'pop_frame2',
            type:'rect',
            rect:['405','332','auto','auto','auto','auto']
         },
         {
            id:'pop_frame3',
            type:'rect',
            rect:['417','355','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'see_btnCopy2',
            symbolName:'see_btn'
         },
         {
            id:'see_btnCopy',
            symbolName:'see_btn'
         },
         {
            id:'pop_frame3',
            symbolName:'pop3'
         },
         {
            id:'pop_frame',
            symbolName:'pop'
         },
         {
            id:'pop_frame2',
            symbolName:'pop2'
         },
         {
            id:'see_btn',
            symbolName:'see_btn'
         }
         ]
      },
   states: {
      "Base State": {
         "${_see_btn}": [
            ["style", "top", '230px'],
            ["style", "left", '591px']
         ],
         "${_pop_frame2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_see_btnCopy2}": [
            ["style", "top", '422px'],
            ["style", "left", '591px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '680px'],
            ["style", "width", '800px']
         ],
         "${_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_pop_frame3}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_see_btnCopy}": [
            ["style", "top", '326px'],
            ["style", "left", '591px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"see_btn": {
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
      id: 'see_btnA',
      type: 'image',
      rect: ['0px','0px','99px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/see_btnA.svg','0px','0px']
   },
   {
      id: 'see_btnB',
      type: 'image',
      rect: ['0px','0px','99px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/see_btnB.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_see_btnA}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '48px'],
            ["style", "width", '99px']
         ],
         "${_see_btnB}": [
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
            { id: "eid9", tween: [ "style", "${_see_btnB}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 55 },
            { id: "eid15", tween: [ "style", "${_see_btnB}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 50 }         ]
      }
   }
},
"pop": {
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
      id: 'pop',
      type: 'image',
      rect: ['0px','0px','800px','680px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pop.svg','0px','0px']
   },
   {
      id: 'pop_btn',
      type: 'rect',
      rect: ['676','255','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'pop_btn',
      symbolName: 'pop_btn'
   }   ]
   },
   states: {
      "Base State": {
         "${_pop_btn}": [
            ["style", "top", '224px'],
            ["style", "opacity", '0'],
            ["style", "left", '651px']
         ],
         "${_pop}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '0.2725'],
            ["transform", "scaleX", '0.2725'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '680px'],
            ["style", "width", '800px']
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
            { id: "eid125", tween: [ "style", "${_pop_btn}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 0 },
            { id: "eid157", tween: [ "style", "${_pop}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid72", tween: [ "transform", "${_pop}", "scaleX", '1', { fromValue: '0.2725'}], position: 0, duration: 250 },
            { id: "eid73", tween: [ "transform", "${_pop}", "scaleY", '1', { fromValue: '0.2725'}], position: 0, duration: 250 }         ]
      }
   }
},
"pop_btn": {
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
      id: 'pop_btnA',
      type: 'image',
      rect: ['0px','0px','72px','75px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pop_btnA.svg','0px','0px']
   },
   {
      id: 'pop_btnB',
      type: 'image',
      rect: ['0px','0px','72px','75px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pop_btnB.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pop_btnA}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_pop_btnB}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '75px'],
            ["style", "width", '72px']
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
            { id: "eid36", tween: [ "style", "${_pop_btnB}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 50 },
            { id: "eid35", tween: [ "style", "${_pop_btnB}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 50 }         ]
      }
   }
},
"pop3": {
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
      id: 'pop',
      type: 'image',
      rect: ['0px','0px','800px','680px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pop_2.svg','0px','0px']
   },
   {
      id: 'pop_btn',
      type: 'rect',
      rect: ['735','299','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'pop_btn',
      symbolName: 'pop_btn'
   }   ]
   },
   states: {
      "Base State": {
         "${_pop_btn}": [
            ["style", "top", '224px'],
            ["style", "opacity", '0'],
            ["style", "left", '651px']
         ],
         "${_pop}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '0.2725'],
            ["transform", "scaleX", '0.2725'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '680px'],
            ["style", "width", '800px']
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
            { id: "eid154", tween: [ "style", "${_pop_btn}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 0 },
            { id: "eid72", tween: [ "transform", "${_pop}", "scaleX", '1', { fromValue: '0.2725'}], position: 0, duration: 250 },
            { id: "eid159", tween: [ "style", "${_pop}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid73", tween: [ "transform", "${_pop}", "scaleY", '1', { fromValue: '0.2725'}], position: 0, duration: 250 }         ]
      }
   }
},
"pop2": {
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
      id: 'pop',
      type: 'image',
      rect: ['0px','0px','800px','680px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pop_3.svg','0px','0px']
   },
   {
      id: 'pop_btn',
      type: 'rect',
      rect: ['651px','156px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'pop_btn',
      symbolName: 'pop_btn'
   }   ]
   },
   states: {
      "Base State": {
         "${_pop_btn}": [
            ["style", "top", '156px'],
            ["style", "opacity", '0'],
            ["style", "left", '651px']
         ],
         "${_pop}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '0.2725'],
            ["transform", "scaleX", '0.2725'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '680px'],
            ["style", "width", '800px']
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
            { id: "eid149", tween: [ "style", "${_pop_btn}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 0 },
            { id: "eid72", tween: [ "transform", "${_pop}", "scaleX", '1', { fromValue: '0.2725'}], position: 0, duration: 250 },
            { id: "eid158", tween: [ "style", "${_pop}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid73", tween: [ "transform", "${_pop}", "scaleY", '1', { fromValue: '0.2725'}], position: 0, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-28233390");
