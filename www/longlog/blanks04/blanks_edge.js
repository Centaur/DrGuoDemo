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
            id:'img',
            type:'image',
            rect:['148px','383px','504px','297px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"img.svg",'0px','0px']
         },
         {
            id:'title2',
            type:'image',
            rect:['48px','35px','686px','89px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"title.svg",'0px','0px']
         },
         {
            id:'text01',
            type:'image',
            rect:['119px','129px','116px','81px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text01.svg",'0px','0px']
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['289px','124px','96px','96px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[3,"rgba(240,205,226,1.00)","solid"]
         },
         {
            id:'target_frame',
            type:'rect',
            rect:['434px','124px','96px','96px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[3,"rgba(240,205,226,1.00)","solid"]
         },
         {
            id:'Rectangle2Copy4',
            type:'rect',
            rect:['579px','124px','96px','96px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[3,"rgba(240,205,226,1.00)","solid"]
         },
         {
            id:'Rectangle2Copy5',
            type:'rect',
            rect:['143px','272px','96px','96px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[3,"rgba(200,228,246,1.00)","solid"]
         },
         {
            id:'Rectangle2Copy6',
            type:'rect',
            rect:['289px','272px','96px','96px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[3,"rgba(200,228,246,1.00)","solid"]
         },
         {
            id:'Rectangle2Copy7',
            type:'rect',
            rect:['434px','272px','96px','96px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[3,"rgba(200,228,246,1.00)","solid"]
         },
         {
            id:'Rectangle2Copy8',
            type:'rect',
            rect:['579px','272px','96px','96px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[3,"rgba(200,228,246,1.00)","solid"]
         },
         {
            id:'d',
            type:'image',
            rect:['290px','125px','99px','99px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"d.svg",'0px','0px']
         },
         {
            id:'g',
            type:'image',
            rect:['580px','125px','99px','99px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"g.svg",'0px','0px']
         },
         {
            id:'Symbol_o',
            type:'rect',
            rect:['144','273','auto','auto','auto','auto']
         },
         {
            id:'Symbol_n',
            type:'rect',
            rect:['290','273','auto','auto','auto','auto']
         },
         {
            id:'Symbol_k',
            type:'rect',
            rect:['435','273','auto','auto','auto','auto']
         },
         {
            id:'Symbol_e',
            type:'rect',
            rect:['580','273','auto','auto','auto','auto']
         },
         {
            id:'happy',
            type:'rect',
            rect:['6','-262','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Symbol_o',
            symbolName:'Symbol_a'
         },
         {
            id:'Symbol_e',
            symbolName:'Symbol_o'
         },
         {
            id:'Symbol_k',
            symbolName:'Symbol_t'
         },
         {
            id:'happy',
            symbolName:'happy'
         },
         {
            id:'Symbol_n',
            symbolName:'Symbol_i'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Rectangle2Copy4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '3px'],
            ["style", "width", '96px'],
            ["style", "top", '172px'],
            ["style", "height", '96px'],
            ["color", "border-color", 'rgba(240,205,226,1.00)'],
            ["style", "left", '579px'],
            ["style", "opacity", '0']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '3px'],
            ["style", "width", '96px'],
            ["style", "top", '172px'],
            ["style", "height", '96px'],
            ["color", "border-color", 'rgba(240,205,226,1.00)'],
            ["style", "left", '289px'],
            ["style", "opacity", '0']
         ],
         "${_Symbol_e}": [
            ["style", "top", '321px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'auto']
         ],
         "${_Symbol_n}": [
            ["style", "top", '321px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'auto']
         ],
         "${_Rectangle2Copy5}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '143px'],
            ["style", "width", '96px'],
            ["style", "top", '320px'],
            ["style", "height", '96px'],
            ["color", "border-color", 'rgba(200,228,246,1.00)'],
            ["style", "border-width", '3px'],
            ["style", "opacity", '0']
         ],
         "${_d}": [
            ["style", "top", '124px'],
            ["style", "opacity", '0'],
            ["style", "left", '290px']
         ],
         "${_img}": [
            ["style", "left", '148px'],
            ["style", "top", '383px']
         ],
         "${_Rectangle2Copy8}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '3px'],
            ["style", "width", '96px'],
            ["style", "top", '320px'],
            ["style", "height", '96px'],
            ["color", "border-color", 'rgba(200,228,246,1.00)'],
            ["style", "left", '579px'],
            ["style", "opacity", '0']
         ],
         "${_target_frame}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '434px'],
            ["style", "width", '96px'],
            ["style", "top", '172px'],
            ["style", "height", '96px'],
            ["color", "border-color", 'rgba(240,205,226,1.00)'],
            ["style", "border-width", '3px'],
            ["style", "opacity", '0']
         ],
         "${_happy}": [
            ["style", "top", '-172px'],
            ["style", "left", '0px']
         ],
         "${_g}": [
            ["style", "top", '124px'],
            ["style", "opacity", '0'],
            ["style", "left", '580px']
         ],
         "${_Symbol_o}": [
            ["style", "top", '321px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'auto']
         ],
         "${_Rectangle2Copy6}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '3px'],
            ["style", "width", '96px'],
            ["style", "top", '320px'],
            ["style", "height", '96px'],
            ["color", "border-color", 'rgba(200,228,246,1.00)'],
            ["style", "left", '289px'],
            ["style", "opacity", '0']
         ],
         "${_Symbol_k}": [
            ["style", "top", '321px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'auto']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '680px'],
            ["style", "width", '800px']
         ],
         "${_text01}": [
            ["style", "top", '197px'],
            ["style", "height", '52px'],
            ["style", "opacity", '0'],
            ["style", "left", '6px'],
            ["style", "width", '134px']
         ],
         "${_Rectangle2Copy7}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '434px'],
            ["style", "width", '96px'],
            ["style", "top", '320px'],
            ["style", "height", '96px'],
            ["color", "border-color", 'rgba(200,228,246,1.00)'],
            ["style", "border-width", '3px'],
            ["style", "opacity", '0']
         ],
         "${_title2}": [
            ["style", "left", '48px'],
            ["style", "top", '35px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1800,
         autoPlay: true,
         timeline: [
            { id: "eid15", tween: [ "style", "${_Rectangle2Copy4}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 250 },
            { id: "eid32", tween: [ "style", "${_Rectangle2Copy7}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid12", tween: [ "style", "${_target_frame}", "opacity", '1', { fromValue: '0.000000'}], position: 380, duration: 250 },
            { id: "eid71", tween: [ "style", "${_Symbol_o}", "opacity", '1', { fromValue: '0.000000'}], position: 1645, duration: 155 },
            { id: "eid133", tween: [ "style", "${_Symbol_k}", "top", '321px', { fromValue: '321px'}], position: 1800, duration: 0 },
            { id: "eid31", tween: [ "style", "${_Rectangle2Copy6}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid20", tween: [ "style", "${_text01}", "left", '119px', { fromValue: '6px'}], position: 0, duration: 250, easing: "easeInQuad" },
            { id: "eid136", tween: [ "style", "${_Rectangle2Copy5}", "top", '320px', { fromValue: '320px'}], position: 1800, duration: 0 },
            { id: "eid41", tween: [ "style", "${_g}", "opacity", '1', { fromValue: '0.000000'}], position: 855, duration: 185, easing: "easeOutQuad" },
            { id: "eid42", tween: [ "style", "${_d}", "opacity", '1', { fromValue: '0.000000'}], position: 750, duration: 185, easing: "easeOutQuad" },
            { id: "eid140", tween: [ "style", "${_Symbol_o}", "top", '321px', { fromValue: '321px'}], position: 1800, duration: 0 },
            { id: "eid135", tween: [ "style", "${_target_frame}", "top", '172px', { fromValue: '172px'}], position: 1800, duration: 0 },
            { id: "eid132", tween: [ "style", "${_Rectangle2Copy4}", "top", '172px', { fromValue: '172px'}], position: 1800, duration: 0 },
            { id: "eid73", tween: [ "style", "${_Symbol_e}", "opacity", '1', { fromValue: '0.000000'}], position: 1645, duration: 155 },
            { id: "eid74", tween: [ "style", "${_Symbol_n}", "opacity", '1', { fromValue: '0.000000'}], position: 1645, duration: 155 },
            { id: "eid72", tween: [ "style", "${_Symbol_k}", "opacity", '1', { fromValue: '0.000000'}], position: 1645, duration: 155 },
            { id: "eid33", tween: [ "style", "${_Rectangle2Copy8}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid168", tween: [ "style", "${_happy}", "top", '-172px', { fromValue: '-172px'}], position: 0, duration: 0 },
            { id: "eid131", tween: [ "style", "${_Rectangle2Copy8}", "top", '320px', { fromValue: '320px'}], position: 1800, duration: 0 },
            { id: "eid49", tween: [ "style", "${_d}", "top", '173px', { fromValue: '124px'}], position: 750, duration: 185, easing: "easeOutQuad" },
            { id: "eid141", tween: [ "style", "${_g}", "top", '173px', { fromValue: '124px'}], position: 855, duration: 185, easing: "easeOutQuad" },
            { id: "eid34", tween: [ "style", "${_Rectangle2Copy5}", "opacity", '1', { fromValue: '0.000000'}], position: 1250, duration: 250 },
            { id: "eid130", tween: [ "style", "${_Rectangle2}", "top", '172px', { fromValue: '172px'}], position: 1800, duration: 0 },
            { id: "eid134", tween: [ "style", "${_Symbol_e}", "top", '321px', { fromValue: '321px'}], position: 1800, duration: 0 },
            { id: "eid138", tween: [ "style", "${_Rectangle2Copy6}", "top", '320px', { fromValue: '320px'}], position: 1800, duration: 0 },
            { id: "eid7", tween: [ "style", "${_text01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid10", tween: [ "style", "${_Rectangle2}", "opacity", '1', { fromValue: '0.000000'}], position: 250, duration: 250 },
            { id: "eid137", tween: [ "style", "${_Symbol_n}", "top", '321px', { fromValue: '321px'}], position: 1800, duration: 0 },
            { id: "eid166", tween: [ "style", "${_happy}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid139", tween: [ "style", "${_Rectangle2Copy7}", "top", '320px', { fromValue: '320px'}], position: 1800, duration: 0 }         ]
      }
   }
},
"Symbol_a": {
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
      id: 'o',
      type: 'image',
      rect: ['0px','0px','99px','99px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/a.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_o}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '-4deg'],
            ["style", "left", '0px'],
            ["style", "overflow", 'visible']
         ],
         "${symbolSelector}": [
            ["style", "height", '99px'],
            ["style", "width", '99px']
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
            { id: "eid55", tween: [ "transform", "${_o}", "rotateZ", '4deg', { fromValue: '-4deg'}], position: 0, duration: 125 },
            { id: "eid58", tween: [ "transform", "${_o}", "rotateZ", '-4deg', { fromValue: '4deg'}], position: 125, duration: 125 }         ]
      }
   }
},
"Symbol_i": {
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
      id: 'n',
      type: 'image',
      rect: ['0px','0px','99px','99px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/i.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_n}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '5deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '99px'],
            ["style", "width", '99px']
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
            { id: "eid84", tween: [ "transform", "${_n}", "rotateZ", '-1deg', { fromValue: '5deg'}], position: 0, duration: 125 },
            { id: "eid87", tween: [ "transform", "${_n}", "rotateZ", '5deg', { fromValue: '-1deg'}], position: 125, duration: 125 }         ]
      }
   }
},
"Symbol_t": {
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
      id: 'k',
      type: 'image',
      rect: ['0px','0px','99px','99px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/t.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_k}": [
            ["style", "top", '0px'],
            ["style", "left", '1px'],
            ["transform", "rotateZ", '3deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '99px'],
            ["style", "width", '99px']
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
            { id: "eid91", tween: [ "transform", "${_k}", "rotateZ", '-3deg', { fromValue: '3deg'}], position: 0, duration: 130 },
            { id: "eid93", tween: [ "transform", "${_k}", "rotateZ", '3deg', { fromValue: '-3deg'}], position: 130, duration: 120 }         ]
      }
   }
},
"Symbol_o": {
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
      id: 'e',
      type: 'image',
      rect: ['0px','0px','99px','99px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/o.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_e}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '5deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '99px'],
            ["style", "width", '99px']
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
            { id: "eid97", tween: [ "transform", "${_e}", "rotateZ", '-3deg', { fromValue: '5deg'}], position: 0, duration: 120 },
            { id: "eid99", tween: [ "transform", "${_e}", "rotateZ", '5deg', { fromValue: '-3deg'}], position: 120, duration: 130 }         ]
      }
   }
},
"happy": {
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
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','65px','52px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '65px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 14747,
         autoPlay: true,
         timeline: [
         ]
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
})(jQuery, AdobeEdge, "EDGE-10893320");
