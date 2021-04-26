/*!
 * Name: @dsf/cli-platform
 * Version: 0.2.39
 * Description: 平台基础包
 * BuildTime: 2021/4/25 下午9:52:35
 */
(("undefined"!==typeof self?self:this)["webpackJsonpplatform"]=("undefined"!==typeof self?self:this)["webpackJsonpplatform"]||[]).push([[11],{462:function(t,e,n){var r=n(243),i=n(136),o=n(32),u=o("iterator");t.exports=function(t){if(void 0!=t)return t[u]||t["@@iterator"]||i[r(t)]}},487:function(t,e,n){"use strict";var r=n(194),i=n(61),o=n(497),u=n(495),f=n(48),a=n(137),s=n(462);t.exports=function(t){var e,n,c,v,l,d,h=i(t),p="function"==typeof this?this:Array,x=arguments.length,y=x>1?arguments[1]:void 0,g=void 0!==y,w=s(h),E=0;if(g&&(y=r(y,x>2?arguments[2]:void 0,2)),void 0==w||p==Array&&u(w))for(e=f(h.length),n=new p(e);e>E;E++)d=g?y(h[E],E):h[E],a(n,E,d);else for(v=w.call(h),l=v.next,n=new p;!(c=l.call(v)).done;E++)d=g?o(v,y,[c.value,E],!0):c.value,a(n,E,d);return n.length=E,n}},494:function(t,e,n){var r=n(46);t.exports=function(t){var e=t["return"];if(void 0!==e)return r(e.call(t)).value}},495:function(t,e,n){var r=n(32),i=n(136),o=r("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||u[o]===t)}},496:function(t,e,n){var r=n(32),i=r("iterator"),o=!1;try{var u=0,f={next:function(){return{done:!!u++}},return:function(){o=!0}};f[i]=function(){return this},Array.from(f,(function(){throw 2}))}catch(a){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(a){}return n}},497:function(t,e,n){var r=n(46),i=n(494);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(u){throw i(t),u}}},498:function(t,e,n){var r=n(13),i=n(487),o=n(496),u=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:u},{from:i})},536:function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},593:function(t,e,n){var r=n(87);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},870:function(t,e,n){var r=n(171),i=n(59),o=n(58),u=n(67).f,f=n(195),a=n(887),s=f("meta"),c=0,v=Object.isExtensible||function(){return!0},l=function(t){u(t,s,{value:{objectID:"O"+ ++c,weakData:{}}})},d=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,s)){if(!v(t))return"F";if(!e)return"E";l(t)}return t[s].objectID},h=function(t,e){if(!o(t,s)){if(!v(t))return!0;if(!e)return!1;l(t)}return t[s].weakData},p=function(t){return a&&x.REQUIRED&&v(t)&&!o(t,s)&&l(t),t},x=t.exports={REQUIRED:!1,fastKey:d,getWeakData:h,onFreeze:p};r[s]=!0},871:function(t,e,n){var r=n(46),i=n(495),o=n(48),u=n(194),f=n(462),a=n(494),s=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var c,v,l,d,h,p,x,y=n&&n.that,g=!(!n||!n.AS_ENTRIES),w=!(!n||!n.IS_ITERATOR),E=!(!n||!n.INTERRUPTED),b=u(e,y,1+g+E),k=function(t){return c&&a(c),new s(!0,t)},I=function(t){return g?(r(t),E?b(t[0],t[1],k):b(t[0],t[1])):E?b(t,k):b(t)};if(w)c=t;else{if(v=f(t),"function"!=typeof v)throw TypeError("Target is not iterable");if(i(v)){for(l=0,d=o(t.length);d>l;l++)if(h=I(t[l]),h&&h instanceof s)return h;return new s(!1)}c=v.call(t)}p=c.next;while(!(x=p.call(c)).done){try{h=I(x.value)}catch(R){throw a(c),R}if("object"==typeof h&&h&&h instanceof s)return h}return new s(!1)}},885:function(t,e,n){"use strict";var r=n(886),i=n(888);t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},886:function(t,e,n){"use strict";var r=n(13),i=n(27),o=n(175),u=n(87),f=n(870),a=n(871),s=n(536),c=n(59),v=n(22),l=n(496),d=n(244),h=n(261);t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),x=-1!==t.indexOf("Weak"),y=p?"set":"add",g=i[t],w=g&&g.prototype,E=g,b={},k=function(t){var e=w[t];u(w,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(x&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return x&&!c(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(x&&!c(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},I=o(t,"function"!=typeof g||!(x||w.forEach&&!v((function(){(new g).entries().next()}))));if(I)E=n.getConstructor(e,t,p,y),f.REQUIRED=!0;else if(o(t,!0)){var R=new E,m=R[y](x?{}:-0,1)!=R,S=v((function(){R.has(1)})),z=l((function(t){new g(t)})),A=!x&&v((function(){var t=new g,e=5;while(e--)t[y](e,e);return!t.has(-0)}));z||(E=e((function(e,n){s(e,E,t);var r=h(new g,e,E);return void 0!=n&&a(n,r[y],{that:r,AS_ENTRIES:p}),r})),E.prototype=w,w.constructor=E),(S||A)&&(k("delete"),k("has"),p&&k("get")),(A||m)&&k(y),x&&w.clear&&delete w.clear}return b[t]=E,r({global:!0,forced:E!=g},b),d(E,t),x||n.setStrong(E,t,p),E}},887:function(t,e,n){var r=n(22);t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},888:function(t,e,n){"use strict";var r=n(67).f,i=n(187),o=n(593),u=n(194),f=n(536),a=n(871),s=n(260),c=n(463),v=n(60),l=n(870).fastKey,d=n(125),h=d.set,p=d.getterFor;t.exports={getConstructor:function(t,e,n,s){var c=t((function(t,r){f(t,c,e),h(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),v||(t.size=0),void 0!=r&&a(r,t[s],{that:t,AS_ENTRIES:n})})),d=p(e),x=function(t,e,n){var r,i,o=d(t),u=y(t,e);return u?u.value=n:(o.last=u={index:i=l(e,!0),key:e,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=u),r&&(r.next=u),v?o.size++:t.size++,"F"!==i&&(o.index[i]=u)),t},y=function(t,e){var n,r=d(t),i=l(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return o(c.prototype,{clear:function(){var t=this,e=d(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,v?e.size=0:t.size=0},delete:function(t){var e=this,n=d(e),r=y(e,t);if(r){var i=r.next,o=r.previous;delete n.index[r.index],r.removed=!0,o&&(o.next=i),i&&(i.previous=o),n.first==r&&(n.first=i),n.last==r&&(n.last=o),v?n.size--:e.size--}return!!r},forEach:function(t){var e,n=d(this),r=u(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),o(c.prototype,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return x(this,0===t?0:t,e)}}:{add:function(t){return x(this,t=0===t?0:t,t)}}),v&&r(c.prototype,"size",{get:function(){return d(this).size}}),c},setStrong:function(t,e,n){var r=e+" Iterator",i=p(e),o=p(r);s(t,e,(function(t,e){h(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),c(e)}}},889:function(t,e,n){"use strict";var r=n(13),i=n(500),o=n(501);r({target:"String",proto:!0,forced:o("sub")},{sub:function(){return i(this,"sub","","")}})}}]);
//# sourceMappingURL=dsf-platform.vendors~Flow.js.map