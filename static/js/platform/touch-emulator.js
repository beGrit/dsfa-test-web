/*! Build time : Mon Apr 26 2021 10:29:36 GMT+0800 (中国标准时间) */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["touch-emulator"],{cad3:function(e,t){var n,o="ontouchstart"in window;document.createTouch||(document.createTouch=function(e,t,n,o,c,i,r){return new u(t,n,{pageX:o,pageY:c,screenX:i,screenY:r,clientX:o-window.pageXOffset,clientY:c-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var e=c(),t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length=arguments.length,e});var u=function(e,t,n,o,u){o=o||0,u=u||0,this.identifier=t,this.target=e,this.clientX=n.clientX+o,this.clientY=n.clientY+u,this.screenX=n.screenX+o,this.screenY=n.screenY+u,this.pageX=n.pageX+o,this.pageY=n.pageY+u};function c(){var e=[];return e["item"]=function(e){return this[e]||null},e["identifiedTouch"]=function(e){return this[e+1]||null},e}var i=!1;function r(e){return function(t){"mousedown"===t.type&&(i=!0),"mouseup"===t.type&&(i=!1),("mousemove"!==t.type||i)&&(("mousedown"===t.type||!n||n&&!n.dispatchEvent)&&(n=t.target),s(e,t),"mouseup"===t.type&&(n=null))}}function s(e,t){var o=document.createEvent("Event");o.initEvent(e,!0,!0),o.altKey=t.altKey,o.ctrlKey=t.ctrlKey,o.metaKey=t.metaKey,o.shiftKey=t.shiftKey,o.touches=h(t),o.targetTouches=h(t),o.changedTouches=a(t),n.dispatchEvent(o)}function a(e){var t=c();return t.push(new u(n,1,e,0,0)),t}function h(e){return"mouseup"===e.type?c():a(e)}function d(){window.addEventListener("mousedown",r("touchstart"),!0),window.addEventListener("mousemove",r("touchmove"),!0),window.addEventListener("mouseup",r("touchend"),!0)}d["multiTouchOffset"]=75,o||new d}}]);
//# sourceMappingURL=touch-emulator.js.map