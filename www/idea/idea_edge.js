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
            id:'characterA00',
            type:'image',
            rect:['309px','323px','182px','288px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"characterA.svg",'0px','0px']
         },
         {
            id:'title',
            type:'rect',
            rect:['82','117','auto','auto','auto','auto']
         },
         {
            id:'characterA',
            type:'image',
            rect:['105px','170px','263px','416px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"characterA.svg",'0px','0px']
         },
         {
            id:'text01-a',
            type:'image',
            rect:['253px','89px','78px','46px','auto','auto'],
            clip:['rect(0px 78pxpx 46pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"text01-a.svg",'0px','0px']
         },
         {
            id:'btnA-f',
            type:'image',
            rect:['75px','153px','324px','460px','auto','auto'],
            clip:['rect(0px 324pxpx 460pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"btnA-f.svg",'0px','0px']
         },
         {
            id:'questionMark',
            type:'rect',
            rect:['94','121','auto','auto','auto','auto']
         },
         {
            id:'characterB',
            type:'rect',
            rect:['381','239','auto','auto','auto','auto']
         },
         {
            id:'text02-a',
            type:'image',
            rect:['523px','43px','217px','46px','auto','auto'],
            clip:['rect(0px 217pxpx 46pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"text02-a.svg",'0px','0px']
         },
         {
            id:'bulb',
            type:'image',
            rect:['639px','232px','52px','68px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bulb.svg",'0px','0px']
         },
         {
            id:'bulb-ray',
            type:'rect',
            rect:['632','189','auto','auto','auto','auto']
         },
         {
            id:'btnB-f',
            type:'image',
            rect:['541px','175px','206px','182px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"btnB-f.svg",'0px','0px']
         },
         {
            id:'text01-b',
            type:'image',
            rect:['253px','89','78px','46px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text01-b.svg",'0px','0px']
         },
         {
            id:'text02-b',
            type:'image',
            rect:['523px','43px','217px','46px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text02-b.svg",'0px','0px']
         },
         {
            id:'btnA_symbol',
            type:'rect',
            rect:['75','153','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'btnB_symbol',
            type:'rect',
            rect:['541','175','auto','auto','auto','auto'],
            cursor:['pointer']
         }],
         symbolInstances: [
         {
            id:'characterB',
            symbolName:'characterB'
         },
         {
            id:'title',
            symbolName:'title'
         },
         {
            id:'bulb-ray',
            symbolName:'bulb-ray'
         },
         {
            id:'btnB_symbol',
            symbolName:'btnB_symbol'
         },
         {
            id:'questionMark',
            symbolName:'questionMark'
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
            ["style", "left", '253px']
         ],
         "${_bulb}": [
            ["style", "top", '181px'],
            ["style", "opacity", '0'],
            ["style", "left", '639px']
         ],
         "${_text02-b}": [
            ["style", "left", '523px'],
            ["style", "top", '43px']
         ],
         "${_characterA}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.07692'],
            ["style", "opacity", '0'],
            ["style", "left", '105px'],
            ["style", "top", '680px']
         ],
         "${_btnB-f}": [
            ["style", "top", '175px'],
            ["style", "opacity", '0'],
            ["style", "left", '541px']
         ],
         "${_btnA-f}": [
            ["style", "top", '153px'],
            ["style", "opacity", '0'],
            ["style", "left", '75px'],
            ["style", "clip", [0,324,460,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_characterB}": [
            ["style", "left", '820px'],
            ["transform", "skewX", '-6deg']
         ],
         "${_btnA_symbol}": [
            ["style", "cursor", 'pointer']
         ],
         "${_btnB_symbol}": [
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '680px'],
            ["style", "width", '800px']
         ],
         "${_text01-a}": [
            ["style", "top", '89px'],
            ["style", "left", '253px'],
            ["style", "clip", [0,0,46,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_text02-a}": [
            ["style", "top", '43px'],
            ["style", "left", '523px'],
            ["style", "clip", [0,0,46,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_characterA00}": [
            ["style", "top", '323px'],
            ["style", "height", '288px'],
            ["style", "opacity", '1'],
            ["style", "left", '309px'],
            ["style", "width", '182px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13000,
         autoPlay: true,
         timeline: [
            { id: "eid564", tween: [ "style", "${_btnA-f}", "opacity", '1', { fromValue: '0'}], position: 8568, duration: 320 },
            { id: "eid497", tween: [ "style", "${_bulb}", "top", '244px', { fromValue: '181px'}], position: 10750, duration: 205, easing: "easeOutQuad" },
            { id: "eid499", tween: [ "style", "${_bulb}", "top", '220px', { fromValue: '244px'}], position: 10955, duration: 97 },
            { id: "eid503", tween: [ "style", "${_bulb}", "top", '225px', { fromValue: '220px'}], position: 11052, duration: 83 },
            { id: "eid10", tween: [ "style", "${_characterA00}", "top", '680px', { fromValue: '323px'}], position: 7250, duration: 250, easing: "easeOutQuad" },
            { id: "eid567", tween: [ "style", "${_text02-a}", "clip", [0,217,46,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,46,0]}], position: 10500, duration: 290 },
            { id: "eid401", tween: [ "transform", "${_characterB}", "skewX", '2deg', { fromValue: '-6deg'}], position: 9750, duration: 250 },
            { id: "eid403", tween: [ "transform", "${_characterB}", "skewX", '-1deg', { fromValue: '2deg'}], position: 10000, duration: 79 },
            { id: "eid405", tween: [ "transform", "${_characterB}", "skewX", '1deg', { fromValue: '-1deg'}], position: 10079, duration: 90 },
            { id: "eid408", tween: [ "transform", "${_characterB}", "skewX", '0deg', { fromValue: '1deg'}], position: 10169, duration: 81 },
            { id: "eid397", tween: [ "style", "${_characterB}", "left", '365px', { fromValue: '820px'}], position: 9750, duration: 250 },
            { id: "eid441", tween: [ "style", "${_characterB}", "left", '374px', { fromValue: '365px'}], position: 10000, duration: 79 },
            { id: "eid442", tween: [ "style", "${_characterB}", "left", '366px', { fromValue: '374px'}], position: 10079, duration: 90 },
            { id: "eid443", tween: [ "style", "${_characterB}", "left", '370px', { fromValue: '366px'}], position: 10169, duration: 81 },
            { id: "eid31", tween: [ "style", "${_characterA}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid962", tween: [ "style", "${_characterA}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid963", tween: [ "style", "${_characterA}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid964", tween: [ "style", "${_characterA}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid965", tween: [ "style", "${_characterA}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid41", tween: [ "style", "${_characterA}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 250, easing: "easeOutQuad" },
            { id: "eid12", tween: [ "style", "${_characterA00}", "opacity", '0', { fromValue: '1'}], position: 7250, duration: 250, easing: "easeOutQuad" },
            { id: "eid585", tween: [ "style", "${_btnB-f}", "opacity", '1', { fromValue: '0'}], position: 11135, duration: 299 },
            { id: "eid559", tween: [ "style", "${_text01-a}", "clip", [0,78,46,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,46,0]}], position: 8250, duration: 318 },
            { id: "eid582", tween: [ "style", "${_bulb}", "opacity", '1', { fromValue: '0'}], position: 10750, duration: 205 },
            { id: "eid34", tween: [ "transform", "${_characterA}", "scaleY", '0.93029', { fromValue: '1.07692'}], position: 7750, duration: 140, easing: "easeOutQuad" },
            { id: "eid37", tween: [ "transform", "${_characterA}", "scaleY", '0.9976', { fromValue: '0.93029'}], position: 7890, duration: 110, easing: "easeOutQuad" },
            { id: "eid17", tween: [ "style", "${_characterA}", "top", '170px', { fromValue: '680px'}], position: 7500, duration: 250, easing: "easeOutQuad" },
            { id: "eid15", tween: [ "style", "${_characterA}", "top", '170px', { fromValue: '170px'}], position: 7890, duration: 0 },
            { id: "eid16", tween: [ "style", "${_characterA}", "top", '170px', { fromValue: '170px'}], position: 8000, duration: 0 }         ]
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
      id: 'title-a',
      rect: ['53px','17px','529px','48px','auto','auto'],
      clip: ['rect(0px 529pxpx 48pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/title-a.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'title-b',
      rect: ['-8px','114px','651px','40px','auto','auto'],
      clip: ['rect(0px 651pxpx 40pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/title-b.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_title-a}": [
            ["style", "top", '17px'],
            ["style", "left", '53px'],
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
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["color", "border-color", 'rgba(255,153,204,1.00)'],
            ["style", "height", '76px'],
            ["subproperty", "filter.blur", '0px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "left", '0px']
         ],
         "${_title-b}": [
            ["style", "top", '114px'],
            ["style", "left", '-8px'],
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
            { id: "eid7", tween: [ "style", "${_title-b}", "clip", [0,651,40,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,40,0]}], position: 1750, duration: 1250 },
            { id: "eid4", tween: [ "style", "${_title-a}", "clip", [0,529,48,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,48,0]}], position: 250, duration: 1250 }         ]
      }
   }
},
"questionMark": {
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
      id: 'questionMark01',
      type: 'image',
      rect: ['0px','0px','52px','79px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/questionMark01.svg','0px','0px']
   },
   {
      id: 'questionMark02',
      type: 'image',
      rect: ['-40px','44px','47px','35px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/questionMark02.svg','0px','0px']
   },
   {
      id: 'questionMark03',
      type: 'image',
      rect: ['-47px','-9px','31px','30px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/questionMark03.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_questionMark01}": [
            ["style", "top", '64px'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["style", "left", '43px'],
            ["style", "width", '11px']
         ],
         "${_questionMark03}": [
            ["style", "top", '51px'],
            ["style", "height", '7px'],
            ["style", "opacity", '0'],
            ["style", "left", '26px'],
            ["style", "width", '7px']
         ],
         "${_questionMark02}": [
            ["style", "top", '72px'],
            ["style", "height", '7px'],
            ["style", "opacity", '0'],
            ["style", "left", '37px'],
            ["style", "width", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '79px'],
            ["style", "width", '52px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: true,
         timeline: [
            { id: "eid758", tween: [ "style", "${_questionMark01}", "opacity", '1', { fromValue: '0'}], position: 455, duration: 45, easing: "easeOutQuad" },
            { id: "eid243", tween: [ "style", "${_questionMark01}", "opacity", '0', { fromValue: '1'}], position: 1005, duration: 245, easing: "easeOutQuad" },
            { id: "eid154", tween: [ "style", "${_questionMark03}", "top", '0px', { fromValue: '51px'}], position: 250, duration: 250, easing: "easeOutQuad" },
            { id: "eid159", tween: [ "style", "${_questionMark03}", "top", '-17px', { fromValue: '0px'}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid160", tween: [ "style", "${_questionMark03}", "top", '-25px', { fromValue: '-17px'}], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid116", tween: [ "style", "${_questionMark02}", "height", '35px', { fromValue: '7px'}], position: 45, duration: 250, easing: "easeOutQuad" },
            { id: "eid122", tween: [ "style", "${_questionMark02}", "height", '51px', { fromValue: '35px'}], position: 295, duration: 250, easing: "easeOutQuad" },
            { id: "eid276", tween: [ "style", "${_questionMark02}", "height", '49px', { fromValue: '51px'}], position: 545, duration: 250, easing: "easeOutQuad" },
            { id: "eid153", tween: [ "style", "${_questionMark03}", "height", '30px', { fromValue: '7px'}], position: 250, duration: 250, easing: "easeOutQuad" },
            { id: "eid157", tween: [ "style", "${_questionMark03}", "height", '34px', { fromValue: '30px'}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid158", tween: [ "style", "${_questionMark03}", "height", '39px', { fromValue: '34px'}], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid118", tween: [ "style", "${_questionMark02}", "left", '-33px', { fromValue: '37px'}], position: 45, duration: 250, easing: "easeOutQuad" },
            { id: "eid126", tween: [ "style", "${_questionMark02}", "left", '-59px', { fromValue: '-33px'}], position: 295, duration: 250, easing: "easeOutQuad" },
            { id: "eid278", tween: [ "style", "${_questionMark02}", "left", '-59px', { fromValue: '-59px'}], position: 545, duration: 250, easing: "easeOutQuad" },
            { id: "eid119", tween: [ "style", "${_questionMark02}", "width", '47px', { fromValue: '10px'}], position: 45, duration: 250, easing: "easeOutQuad" },
            { id: "eid128", tween: [ "style", "${_questionMark02}", "width", '68px', { fromValue: '47px'}], position: 295, duration: 250, easing: "easeOutQuad" },
            { id: "eid279", tween: [ "style", "${_questionMark02}", "width", '66px', { fromValue: '68px'}], position: 545, duration: 250, easing: "easeOutQuad" },
            { id: "eid212", tween: [ "style", "${_questionMark01}", "left", '0px', { fromValue: '43px'}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid228", tween: [ "style", "${_questionMark01}", "left", '-13px', { fromValue: '0px'}], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid229", tween: [ "style", "${_questionMark01}", "left", '-16px', { fromValue: '-13px'}], position: 1000, duration: 250, easing: "easeOutQuad" },
            { id: "eid155", tween: [ "style", "${_questionMark03}", "left", '-35px', { fromValue: '26px'}], position: 250, duration: 250, easing: "easeOutQuad" },
            { id: "eid161", tween: [ "style", "${_questionMark03}", "left", '-54px', { fromValue: '-35px'}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid162", tween: [ "style", "${_questionMark03}", "left", '-67px', { fromValue: '-54px'}], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid117", tween: [ "style", "${_questionMark02}", "top", '45px', { fromValue: '72px'}], position: 45, duration: 250, easing: "easeOutQuad" },
            { id: "eid124", tween: [ "style", "${_questionMark02}", "top", '29px', { fromValue: '45px'}], position: 295, duration: 250, easing: "easeOutQuad" },
            { id: "eid277", tween: [ "style", "${_questionMark02}", "top", '30px', { fromValue: '29px'}], position: 545, duration: 250, easing: "easeOutQuad" },
            { id: "eid765", tween: [ "style", "${_questionMark03}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 50, easing: "easeOutQuad" },
            { id: "eid170", tween: [ "style", "${_questionMark03}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid213", tween: [ "style", "${_questionMark01}", "width", '52px', { fromValue: '11px'}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid232", tween: [ "style", "${_questionMark01}", "width", '66px', { fromValue: '52px'}], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid239", tween: [ "style", "${_questionMark01}", "width", '52px', { fromValue: '66px'}], position: 1000, duration: 250, easing: "easeOutQuad" },
            { id: "eid156", tween: [ "style", "${_questionMark03}", "width", '31px', { fromValue: '7px'}], position: 250, duration: 250, easing: "easeOutQuad" },
            { id: "eid163", tween: [ "style", "${_questionMark03}", "width", '35px', { fromValue: '31px'}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid164", tween: [ "style", "${_questionMark03}", "width", '41px', { fromValue: '35px'}], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid210", tween: [ "style", "${_questionMark01}", "height", '79px', { fromValue: '16px'}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid230", tween: [ "style", "${_questionMark01}", "height", '92px', { fromValue: '79px'}], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid238", tween: [ "style", "${_questionMark01}", "height", '79px', { fromValue: '92px'}], position: 1000, duration: 250, easing: "easeOutQuad" },
            { id: "eid761", tween: [ "style", "${_questionMark02}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 45, easing: "easeOutQuad" },
            { id: "eid132", tween: [ "style", "${_questionMark02}", "opacity", '0', { fromValue: '1'}], position: 545, duration: 250, easing: "easeOutQuad" },
            { id: "eid211", tween: [ "style", "${_questionMark01}", "top", '0px', { fromValue: '64px'}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid226", tween: [ "style", "${_questionMark01}", "top", '-16px', { fromValue: '0px'}], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid227", tween: [ "style", "${_questionMark01}", "top", '-20px', { fromValue: '-16px'}], position: 1000, duration: 250, easing: "easeOutQuad" }         ]
      }
   }
},
"characterB": {
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
      transform: [],
      type: 'image',
      id: 'characterB-hand',
      rect: ['179px','0px','60px','99px','auto','auto'],
      clip: ['rect(0px 60pxpx 99pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/characterB-hand.svg','0px','0px']
   },
   {
      transform: [],
      id: 'characterB-head',
      type: 'image',
      rect: ['36px','-153px','184px','176px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/characterB-head.svg','0px','0px']
   },
   {
      id: 'characterB-body',
      type: 'image',
      rect: ['0px','0px','239px','382px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/characterB-body.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_characterB-body}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_characterB-hand}": [
            ["style", "-webkit-transform-origin", [11.67,88.89], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [11.67,88.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [11.67,88.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [11.67,88.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [11.67,88.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "clip", [0,60,99,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '179px'],
            ["style", "top", '0px']
         ],
         "${_characterB-head}": [
            ["style", "-webkit-transform-origin", [45.65,90.91], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [45.65,90.91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [45.65,90.91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [45.65,90.91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [45.65,90.91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '-153px'],
            ["style", "left", '36px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '382px'],
            ["style", "width", '239px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid351", tween: [ "transform", "${_characterB-hand}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid352", tween: [ "transform", "${_characterB-hand}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 500, duration: 500 },
            { id: "eid356", tween: [ "transform", "${_characterB-head}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid357", tween: [ "transform", "${_characterB-head}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 500, duration: 500 }         ]
      }
   }
},
"bulb-ray": {
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
      id: 'bulb-ray',
      type: 'image',
      rect: ['0px','0px','92px','50px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bulb-ray.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bulb-ray}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '92px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid508", tween: [ "style", "${_bulb-ray}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid511", tween: [ "style", "${_bulb-ray}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 0 }         ]
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
      rect: ['0px','0px','324px','460px','auto','auto'],
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
            ["style", "height", '460px'],
            ["style", "width", '324px']
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
            { id: "eid614", tween: [ "style", "${_btnA-m}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 125 },
            { id: "eid613", tween: [ "style", "${_btnA-m}", "opacity", '0', { fromValue: '1'}], position: 125, duration: 125 }         ]
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
      id: 'btnB-m2',
      type: 'image',
      rect: ['0px','0px','206px','182px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btnB-m.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btnB-m2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '182px'],
            ["style", "width", '206px']
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
            { id: "eid627", tween: [ "style", "${_btnB-m2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 125 },
            { id: "eid626", tween: [ "style", "${_btnB-m2}", "opacity", '0', { fromValue: '1'}], position: 125, duration: 125 }         ]
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
})(jQuery, AdobeEdge, "EDGE-31348108");
