/*! Build time : Mon Apr 26 2021 10:29:36 GMT+0800 (中国标准时间) */(function(e){function o(o){for(var t,l,f=o[0],i=o[1],a=o[2],c=0,d=[];c<f.length;c++)l=f[c],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);b&&b(o);while(d.length)d.shift()();return n.push.apply(n,a||[]),_()}function _(){for(var e,o=0;o<n.length;o++){for(var _=n[o],t=!0,l=1;l<_.length;l++){var i=_[l];0!==r[i]&&(t=!1)}t&&(n.splice(o--,1),e=f(f.s=_[0]))}return e}var t={},r={"mobile-app":0},n=[];function l(e){return f.p+"static/js/platform/"+({"touch-emulator":"touch-emulator"}[e]||e)+".js"}function f(o){if(t[o])return t[o].exports;var _=t[o]={i:o,l:!1,exports:{}};return e[o].call(_.exports,_,_.exports,f),_.l=!0,_.exports}f.e=function(e){var o=[],_=r[e];if(0!==_)if(_)o.push(_[2]);else{var t=new Promise((function(o,t){_=r[e]=[o,t]}));o.push(_[2]=t);var n,i=document.createElement("script");i.charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.src=l(e);var a=new Error;n=function(o){i.onerror=i.onload=null,clearTimeout(c);var _=r[e];if(0!==_){if(_){var t=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;a.message="Loading chunk "+e+" failed.\n("+t+": "+n+")",a.name="ChunkLoadError",a.type=t,a.request=n,_[1](a)}r[e]=void 0}};var c=setTimeout((function(){n({type:"timeout",target:i})}),12e4);i.onerror=i.onload=n,document.head.appendChild(i)}return Promise.all(o)},f.m=e,f.c=t,f.d=function(e,o,_){f.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:_})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,o){if(1&o&&(e=f(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var _=Object.create(null);if(f.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)f.d(_,t,function(o){return e[o]}.bind(null,t));return _},f.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(o,"a",o),o},f.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},f.p="",f.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=o,i=i.slice();for(var c=0;c<i.length;c++)o(i[c]);var b=a;n.push([1,"dsf-mobile","dsf-vendors"]),_()})({1:function(e,o,_){e.exports=_("c3f0")},"365c":function(e,o){},4360:function(e,o,_){"use strict";var t=_("5530"),r=_("5880"),n=_.n(r),l=(_("9fb0"),{}),f={};Vue.use(n.a);o["a"]=new n.a.Store({state:{route:{}},mutations:l,actions:f,modules:Object(t["a"])({},$platformStore)})},"4ce4":function(e,o){},5880:function(e,o){e.exports=Vuex},9401:function(e,o,_){"use strict";_("1276"),_("ac1f");var t=_("c158"),r=_.n(t),n={};for(var l in r.a)for(var f=l.split("___"),i=n,a=0,c=f.length;a<c;a++)a!=c-1?(i[f[a]]||(i[f[a]]={}),i=i[f[a]]):i[f[a]]=r.a[l];o["a"]=n},"9fb0":function(e,o){},a745:function(e,o){dsf.mix(!0,dsf.config,{webRoot:{default:"/",dsfa:"/",teas:"/dsfa/",nc:"/dsfa_nc/",exam:"/dsfa/"},file:{preViewServer:"/dsfa/"},runType:"platform",assetsDir:"./static/",setting_public_default_theme:"red-theme",setting_public_default_size:"normal",setting_public_default_header_mini:!1,setting_public_gotoicon:"1",setting_public_login_success_to:"./index.html",setting_public_mobile_login_success_to:"./mobile-index.html",setting_public_pc_login_page:"./page.html#/pc/login",setting_public_mobile_login_page:"./mobile-index.html#/mobile/login",setting_public_logo_image:"",setting_public_logo_title:"",setting_public_user_default_header:"./static/img/defaultHeader.png",setting_public_home_menu_src:"/menu/getTree",setting_public_file_host:"/",setting_flow_count_down_time:3},window.$$serverConfig?window.$$serverConfig:{},window.$$config?window.$$config:{}),window.$$webRoot=dsf.config.webRoot},c158:function(e,o,_){e.exports={"red-theme___main":"#c62f26","red-theme___normal":"#ff7200","red-theme___button_plain_bgcolor":"#fff","red-theme___button_plain_bordercolor":"#c9c9c9","red-theme___button_plain_fontcolor":"#5f5f5f","red-theme___nav_active_bgColor":"#e63b2e","red-theme___shadow_normal":"rgba(0,0,0,0.1)","red-theme___bottom_color":"#fff","red-theme___mobile_head_border_color":"#ebedf0","red-theme___mobile_foot_color":"#fff","red-theme___mobile_foot_border_color":"#ebedf0","blue-theme___main":"#1a66b1","blue-theme___normal":"#3c8ddb","blue-theme___button_plain_bgcolor":"#fff","blue-theme___button_plain_bordercolor":"#c9c9c9","blue-theme___button_plain_fontcolor":"#5f5f5f","blue-theme___nav_active_bgColor":"#3c8ddb","blue-theme___bottom_color":"#fff","blue-theme___mobile_head_border_color":"#ebedf0","blue-theme___mobile_foot_color":"#fff","blue-theme___mobile_foot_border_color":"#ebedf0","green-theme___main":"#189a5a","green-theme___normal":"#4daf7b","green-theme___button_plain_bgcolor":"#fff","green-theme___button_plain_bordercolor":"#c9c9c9","green-theme___button_plain_fontcolor":"#5f5f5f","green-theme___nav_active_bgColor":"#4daf7b","green-theme___bottom_color":"#fff","green-theme___mobile_head_border_color":"#ebedf0","green-theme___mobile_foot_color":"#fff","green-theme___mobile_foot_border_color":"#ebedf0","orange-theme___main":"#fc7001","orange-theme___normal":"#ffb142","orange-theme___button_plain_bgcolor":"#fff","orange-theme___button_plain_bordercolor":"#c9c9c9","orange-theme___button_plain_fontcolor":"#5f5f5f","orange-theme___nav_active_bgColor":"#ffb142","orange-theme___bottom_color":"#fff","orange-theme___mobile_head_border_color":"#ebedf0","orange-theme___mobile_foot_color":"#fff","orange-theme___mobile_foot_border_color":"#ebedf0","darkred-theme___main":"#c60100","darkred-theme___normal":"#c60100","darkred-theme___button_plain_bgcolor":"#fff","darkred-theme___button_plain_bordercolor":"#c9c9c9","darkred-theme___button_plain_fontcolor":"#5f5f5f","darkred-theme___nav_active_bgColor":"#c60100","darkred-theme___bottom_color":"#fff","darkred-theme___mobile_head_border_color":"#ebedf0","darkred-theme___mobile_foot_color":"#fff","darkred-theme___mobile_foot_border_color":"#ebedf0","darkblue-theme___main":"#2659bf","darkblue-theme___normal":"#2659bf","darkblue-theme___button_plain_bgcolor":"#fff","darkblue-theme___button_plain_bordercolor":"#c9c9c9","darkblue-theme___button_plain_fontcolor":"#5f5f5f","darkblue-theme___nav_active_bgColor":"#3c7ade","darkblue-theme___bottom_color":"#fff","darkblue-theme___mobile_head_border_color":"#ebedf0","darkblue-theme___mobile_foot_color":"#fff","darkblue-theme___mobile_foot_border_color":"#ebedf0","dingtalk-theme___main":"#3C8AF8","dingtalk-theme___normal":"#3C8AF8","dingtalk-theme___button_plain_bgcolor":"#fff","dingtalk-theme___button_plain_bordercolor":"#c9c9c9","dingtalk-theme___button_plain_fontcolor":"#5f5f5f","dingtalk-theme___nav_active_bgColor":"#3C8AF8","dingtalk-theme___bottom_color":"#fff","dingtalk-theme___mobile_head_border_color":"#ebedf0","dingtalk-theme___mobile_foot_color":"#fff","dingtalk-theme___mobile_foot_border_color":"#ebedf0"}}});
//# sourceMappingURL=mobile-app.js.map