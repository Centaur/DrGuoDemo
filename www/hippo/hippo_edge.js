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
            type:'ellipse',
            rect:['10px','380px','780px','275px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)",[270,[['rgba(171,208,88,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],[],[],['0.92479']]
         },
         {
            id:'title',
            type:'rect',
            rect:['82','117','auto','auto','auto','auto']
         },
         {
            id:'hippoA',
            type:'rect',
            rect:['37','298','auto','auto','auto','auto']
         },
         {
            id:'text01-a',
            type:'image',
            rect:['167px','586px','256px','53px','auto','auto'],
            clip:['rect(0px 256pxpx 53pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"text01-a.svg",'0px','0px'],
            boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
         },
         {
            id:'btnA-f',
            type:'image',
            rect:['45px','239px','465px','352px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"btnA-f.svg",'0px','0px']
         },
         {
            id:'text01-b',
            type:'image',
            rect:['167px','586px','256px','53px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text01-b.svg",'0px','0px']
         },
         {
            id:'hippoB-CT3',
            type:'rect',
            rect:['361','89','auto','auto','auto','auto']
         },
         {
            id:'text02-a',
            type:'image',
            rect:['327px','89px','192px','53px','auto','auto'],
            clip:['rect(0px 192pxpx 53pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"text02-a.svg",'0px','0px']
         },
         {
            id:'btnB-f',
            type:'image',
            rect:['432px','161px','205px','175px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"btnB-f.svg",'0px','0px']
         },
         {
            id:'text02-b',
            type:'image',
            rect:['327px','89px','192px','53px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text02-b.svg",'0px','0px']
         },
         {
            id:'btnA_symbol',
            type:'rect',
            rect:['49','240','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'btnB_symbol',
            type:'rect',
            rect:['432','161','auto','auto','auto','auto'],
            cursor:['pointer']
         }],
         symbolInstances: [
         {
            id:'hippoA',
            symbolName:'hippoA'
         },
         {
            id:'title',
            symbolName:'title'
         },
         {
            id:'btnB_symbol',
            symbolName:'btnB_symbol'
         },
         {
            id:'btnA_symbol',
            symbolName:'btnA_symbol'
         },
         {
            id:'hippoB-CT3',
            symbolName:'hippoB-CT'
         }
         ]
      },
   states: {
      "Base State": {
         "${_text01-b}": [
            ["style", "left", '167px'],
            ["style", "top", '586px']
         ],
         "${_hippoA}": [
            ["style", "top", '260px'],
            ["style", "opacity", '0'],
            ["style", "left", '-221px']
         ],
         "${_text02-b}": [
            ["style", "left", '327px'],
            ["style", "top", '89px']
         ],
         "${_hippoB-CT3}": [
            ["style", "top", '-331px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '442px'],
            ["style", "opacity", '0'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_text02-a}": [
            ["style", "top", '89px'],
            ["style", "clip", [0,0,53,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '327px']
         ],
         "${_text01-a}": [
            ["style", "top", '586px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "clip", [0,0,53,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "left", '167px']
         ],
         "${_bg}": [
            ["transform", "scaleX", '0.92479'],
            ["gradient", "background-image", [270,[['rgba(171,208,88,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "top", '380px'],
            ["style", "height", '275px']
         ],
         "${_btnB-f}": [
            ["style", "top", '161px'],
            ["style", "opacity", '0'],
            ["style", "left", '432px']
         ],
         "${_btnA_symbol}": [
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
         "${_btnA-f}": [
            ["style", "top", '239px'],
            ["style", "opacity", '0'],
            ["style", "left", '45px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12000,
         autoPlay: true,
         timeline: [
            { id: "eid1499", tween: [ "transform", "${_hippoB-CT3}", "scaleY", '0.94', { fromValue: '1'}], position: 9455, duration: 101, easing: "easeOutQuad" },
            { id: "eid1517", tween: [ "transform", "${_hippoB-CT3}", "scaleY", '1.02', { fromValue: '0.94'}], position: 9555, duration: 71, easing: "easeOutQuad" },
            { id: "eid1520", tween: [ "transform", "${_hippoB-CT3}", "scaleY", '1', { fromValue: '1.02'}], position: 9626, duration: 44, easing: "easeOutQuad" },
            { id: "eid2153", tween: [ "style", "${_text02-a}", "clip", [0,192,53,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,53,0]}], position: 9906, duration: 297 },
            { id: "eid2172", tween: [ "style", "${_btnA-f}", "opacity", '1', { fromValue: '0.000000'}], position: 8434, duration: 316, easing: "easeOutQuad" },
            { id: "eid1466", tween: [ "style", "${_hippoA}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 338, easing: "easeOutQuad" },
            { id: "eid2175", tween: [ "style", "${_btnB-f}", "opacity", '1', { fromValue: '0.000000'}], position: 10203, duration: 297, easing: "easeOutQuad" },
            { id: "eid1480", tween: [ "style", "${_hippoB-CT3}", "opacity", '1', { fromValue: '0.000000'}], position: 9250, duration: 205, easing: "easeOutQuad" },
            { id: "eid1493", tween: [ "style", "${_hippoB-CT3}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 9555, duration: 0, easing: "easeOutQuad" },
            { id: "eid4247", tween: [ "style", "${_hippoB-CT3}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 9555, duration: 0, easing: "easeOutQuad" },
            { id: "eid4248", tween: [ "style", "${_hippoB-CT3}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 9555, duration: 0, easing: "easeOutQuad" },
            { id: "eid4249", tween: [ "style", "${_hippoB-CT3}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 9555, duration: 0, easing: "easeOutQuad" },
            { id: "eid4250", tween: [ "style", "${_hippoB-CT3}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 9555, duration: 0, easing: "easeOutQuad" },
            { id: "eid2149", tween: [ "style", "${_text01-a}", "clip", [0,256,53,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,53,0]}], position: 8117, duration: 316 },
            { id: "eid1484", tween: [ "style", "${_hippoB-CT3}", "top", '89px', { fromValue: '-331px'}], position: 9250, duration: 205, easing: "easeOutQuad" },
            { id: "eid1462", tween: [ "style", "${_hippoA}", "left", '69px', { fromValue: '-221px'}], position: 7500, duration: 338, easing: "easeOutQuad" }         ]
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
      rect: ['54px','17px','528px','47px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'title-a',
      type: 'image',
      clip: ['rect(0px 528pxpx 47pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/title-a.svg','0px','0px']
   },
   {
      rect: ['-3px','114px','642px','40px','auto','auto'],
      id: 'title-b',
      type: 'image',
      clip: ['rect(0px 642pxpx 40pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/title-b.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_title-a}": [
            ["style", "top", '17px'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "clip", [0,0,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "left", '54px']
         ],
         "${symbolSelector}": [
            ["style", "height", '82px'],
            ["style", "width", '636px']
         ],
         "${_title-b}": [
            ["style", "top", '114px'],
            ["style", "left", '-3px'],
            ["style", "clip", [0,0,40,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
            { id: "eid3414", tween: [ "style", "${_title-b}", "clip", [0,642,40,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,40,0]}], position: 1750, duration: 1250 },
            { id: "eid3411", tween: [ "style", "${_title-a}", "clip", [0,528,47,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,47,0]}], position: 245, duration: 1255 }         ]
      }
   }
},
"hippoA": {
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
      id: 'hippoA-ear01',
      type: 'image',
      rect: ['-11px','155px','17px','11px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hippoA-ear01.svg','0px','0px']
   },
   {
      id: 'hippoA-ear02',
      type: 'image',
      rect: ['-3px','170px','13px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hippoA-ear02.svg','0px','0px']
   },
   {
      id: 'hippoA-body',
      type: 'image',
      rect: ['4px','0px','426px','312px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hippoA-body.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hippoA-ear01}": [
            ["style", "top", '155px'],
            ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-11px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_hippoA-body}": [
            ["style", "left", '4px'],
            ["style", "top", '0px']
         ],
         "${_hippoA-ear02}": [
            ["style", "top", '170px'],
            ["style", "-webkit-transform-origin", [100,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-3px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '312px'],
            ["style", "width", '426px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid11", tween: [ "transform", "${_hippoA-ear01}", "rotateZ", '-25deg', { fromValue: '0deg'}], position: 0, duration: 120 },
            { id: "eid16", tween: [ "transform", "${_hippoA-ear01}", "rotateZ", '0deg', { fromValue: '-25deg'}], position: 120, duration: 130 },
            { id: "eid20", tween: [ "transform", "${_hippoA-ear01}", "rotateZ", '-25deg', { fromValue: '0deg'}], position: 250, duration: 125 },
            { id: "eid21", tween: [ "transform", "${_hippoA-ear01}", "rotateZ", '0deg', { fromValue: '-25deg'}], position: 375, duration: 125 },
            { id: "eid6", tween: [ "style", "${_hippoA-ear02}", "-webkit-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
            { id: "eid4251", tween: [ "style", "${_hippoA-ear02}", "-moz-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
            { id: "eid4252", tween: [ "style", "${_hippoA-ear02}", "-ms-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
            { id: "eid4253", tween: [ "style", "${_hippoA-ear02}", "msTransformOrigin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
            { id: "eid4254", tween: [ "style", "${_hippoA-ear02}", "-o-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "transform", "${_hippoA-ear02}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 0, duration: 120 },
            { id: "eid14", tween: [ "transform", "${_hippoA-ear02}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 120, duration: 130 },
            { id: "eid18", tween: [ "transform", "${_hippoA-ear02}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 250, duration: 125 },
            { id: "eid22", tween: [ "transform", "${_hippoA-ear02}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 375, duration: 125 },
            { id: "eid37", tween: [ "transform", "${_hippoA-ear02}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0 },
            { id: "eid10", tween: [ "style", "${_hippoA-ear01}", "-webkit-transform-origin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 0, duration: 0 },
            { id: "eid4255", tween: [ "style", "${_hippoA-ear01}", "-moz-transform-origin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 0, duration: 0 },
            { id: "eid4256", tween: [ "style", "${_hippoA-ear01}", "-ms-transform-origin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 0, duration: 0 },
            { id: "eid4257", tween: [ "style", "${_hippoA-ear01}", "msTransformOrigin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 0, duration: 0 },
            { id: "eid4258", tween: [ "style", "${_hippoA-ear01}", "-o-transform-origin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 0, duration: 0 }         ]
      }
   }
},
"hippoB": {
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
      rect: ['253px','186px','146px','117px','auto','auto'],
      id: 'hippoB-hand7',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/hippoB-hand.svg','0px','0px']
   },
   {
      id: 'hippoB-body',
      type: 'image',
      rect: ['0px','0px','300px','442px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hippoB-body.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hippoB-body}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_hippoB-hand7}": [
            ["style", "top", '186px'],
            ["style", "-webkit-transform-origin", [10.96,92.31], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [10.96,92.31],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [10.96,92.31],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [10.96,92.31],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [10.96,92.31],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '253px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '442px'],
            ["style", "width", '300px']
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
            { id: "eid1275", tween: [ "transform", "${_hippoB-hand7}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid1276", tween: [ "transform", "${_hippoB-hand7}", "rotateZ", '0deg', { fromValue: '-12deg'}], position: 500, duration: 500 }         ]
      }
   }
},
"hippoB-CT": {
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
      id: 'hippoB',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'hippoB',
      symbolName: 'hippoB'
   }   ]
   },
   states: {
      "Base State": {
         "${_hippoB}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [68,98.42], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [68,98.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [68,98.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [68,98.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [68,98.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '-3deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '442px'],
            ["style", "width", '300px']
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
            { id: "eid1280", tween: [ "style", "${_hippoB}", "-webkit-transform-origin", [68,98.42], { valueTemplate: '@@0@@% @@1@@%', fromValue: [68,98.42]}], position: 0, duration: 0 },
            { id: "eid4259", tween: [ "style", "${_hippoB}", "-moz-transform-origin", [68,98.42], { valueTemplate: '@@0@@% @@1@@%', fromValue: [68,98.42]}], position: 0, duration: 0 },
            { id: "eid4260", tween: [ "style", "${_hippoB}", "-ms-transform-origin", [68,98.42], { valueTemplate: '@@0@@% @@1@@%', fromValue: [68,98.42]}], position: 0, duration: 0 },
            { id: "eid4261", tween: [ "style", "${_hippoB}", "msTransformOrigin", [68,98.42], { valueTemplate: '@@0@@% @@1@@%', fromValue: [68,98.42]}], position: 0, duration: 0 },
            { id: "eid4262", tween: [ "style", "${_hippoB}", "-o-transform-origin", [68,98.42], { valueTemplate: '@@0@@% @@1@@%', fromValue: [68,98.42]}], position: 0, duration: 0 },
            { id: "eid1284", tween: [ "transform", "${_hippoB}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 0, duration: 500 },
            { id: "eid1285", tween: [ "transform", "${_hippoB}", "rotateZ", '-3deg', { fromValue: '2deg'}], position: 500, duration: 500 }         ]
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
      rect: ['0px','0px','465px','352px','auto','auto'],
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
            ["style", "height", '352px'],
            ["style", "width", '465px']
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
            { id: "eid2449", tween: [ "style", "${_btnA-m}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 130, easing: "easeOutQuad" },
            { id: "eid2450", tween: [ "style", "${_btnA-m}", "opacity", '0', { fromValue: '1'}], position: 130, duration: 120 }         ]
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
      rect: ['0px','0px','205px','175px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btnB-m.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '175px'],
            ["style", "width", '205px']
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
            { id: "eid2518", tween: [ "style", "${_btnB-m}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 130 },
            { id: "eid2520", tween: [ "style", "${_btnB-m}", "opacity", '0', { fromValue: '1'}], position: 130, duration: 120 }         ]
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
})(jQuery, AdobeEdge, "EDGE-5176730");
