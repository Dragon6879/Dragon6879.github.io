!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.POWERMODE=e():t.POWERMODE=e()}(this,function(){return r={},o.m=n=[function(t,e,l){"use strict";var r=document.createElement("canvas");r.width=window.innerWidth,r.height=window.innerHeight,r.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:999999",window.addEventListener("resize",function(){r.width=window.innerWidth,r.height=window.innerHeight}),document.body.appendChild(r);var i=r.getContext("2d"),c=[],p=0,u=!1;function o(t,e){return Math.random()*(e-t)+t}function f(t){if(h.colorful){var e=o(0,360);return"hsla("+o(e-10,e+10)+", 100%, "+o(50,80)+"%, 1)"}return window.getComputedStyle(t).color}function h(){for(var t,e,o,n,r,i,a=function(){var t=document.activeElement;if("TEXTAREA"===t.tagName||"INPUT"===t.tagName&&"text"===t.getAttribute("type")){var e=l(1)(t,t.selectionEnd),o=t.getBoundingClientRect();return{x:e.left+o.left,y:e.top+o.top,color:f(t)}}var n=window.getSelection();if(n.rangeCount){var r=n.getRangeAt(0),i=r.startContainer;return i.nodeType===document.TEXT_NODE&&(i=i.parentNode),{x:(o=r.getBoundingClientRect()).left,y:o.top,color:f(i)}}return{x:0,y:0,color:"transparent"}}(),d=5+Math.round(10*Math.random());d--;)c[p]=(t=a.x,e=a.y,o=a.color,{x:t,y:e,alpha:1,color:o,velocity:{x:2*Math.random()-1,y:2*Math.random()-3.5}}),p=(p+1)%500;h.shake&&(r=(n=1+2*Math.random())*(.5<Math.random()?-1:1),i=n*(.5<Math.random()?-1:1),document.body.style.marginLeft=r+"px",document.body.style.marginTop=i+"px",setTimeout(function(){document.body.style.marginLeft="",document.body.style.marginTop=""},75)),u||requestAnimationFrame(s)}function s(){u=!0,i.clearRect(0,0,r.width,r.height);for(var t=!1,e=r.getBoundingClientRect(),o=0;o<c.length;++o){var n=c[o];n.alpha<=.1||(n.velocity.y+=.075,n.x+=n.velocity.x,n.y+=n.velocity.y,n.alpha*=.96,i.globalAlpha=n.alpha,i.fillStyle=n.color,i.fillRect(Math.round(n.x-1.5)-e.left,Math.round(n.y-1.5)-e.top,3,3),t=!0)}t?requestAnimationFrame(s):u=!1}h.shake=!0,h.colorful=!1,t.exports=h},function(t,e){function o(t,e,o){var n,r=o&&o.debug||!1;!r||(n=document.querySelector("#input-textarea-caret-position-mirror-div"))&&n.parentNode.removeChild(n);var i=document.createElement("div");i.id="input-textarea-caret-position-mirror-div",document.body.appendChild(i);var a=i.style,d=window.getComputedStyle?getComputedStyle(t):t.currentStyle;a.whiteSpace="pre-wrap","INPUT"!==t.nodeName&&(a.wordWrap="break-word"),a.position="absolute",r||(a.visibility="hidden"),p.forEach(function(t){a[t]=d[t]}),u?t.scrollHeight>parseInt(d.height)&&(a.overflowY="scroll"):a.overflow="hidden",i.textContent=t.value.substring(0,e),"INPUT"===t.nodeName&&(i.textContent=i.textContent.replace(/\s/g," "));var l=document.createElement("span");l.textContent=t.value.substring(e)||".",i.appendChild(l);var c={top:l.offsetTop+parseInt(d.borderTopWidth),left:l.offsetLeft+parseInt(d.borderLeftWidth)};return r?l.style.backgroundColor="#aaa":document.body.removeChild(i),c}var p,u;p=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],u=null!=window.mozInnerScreenX,void 0!==t&&void 0!==t.exports?t.exports=o:window.getCaretCoordinates=o}],o.c=r,o.p="",o(0);function o(t){if(r[t])return r[t].exports;var e=r[t]={exports:{},id:t,loaded:!1};return n[t].call(e.exports,e,e.exports,o),e.loaded=!0,e.exports}var n,r});