/*!
 * Name: @dsf/cli-platform
 * Version: 0.2.39
 * Description: 平台基础包
 * BuildTime: 2021/4/25 下午9:52:35
 */
(("undefined"!==typeof self?self:this)["webpackJsonpplatform"]=("undefined"!==typeof self?self:this)["webpackJsonpplatform"]||[]).push([[3],{903:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flow-send-list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData},on:{"row-click":t.goDetail}},[a("el-table-column",{attrs:{prop:"objectname",label:"文件标题",width:"180"}}),a("el-table-column",{attrs:{prop:"nodename",label:"文件类型",width:"180"}}),a("el-table-column",{attrs:{prop:"sendusername",label:"发件人"}}),a("el-table-column",{attrs:{prop:"reachtime",label:"发件时间"}})],1)],1)},l=[];s._withStripped=!0;var n={name:"FlowTemp",data:function(){return{tableData:[]}},created:function(){this.initTable()},mounted:function(){},methods:{initTable:function(){var t=this,e={iCurPage:0,iPageNum:5};this.$http.get(dsf.url.getWebPath("wfr/getTodoList"),e).then((function(e){e.data.success&&e.data.data?t.tableData=e.data.data:dsf.layer.message(e.data.Message||"请求异常",!1)})).catch((function(t){dsf.layer.message("请求异常",!1)}))},goDetail:function(t){var e=this;this.$http.get(dsf.url.getWebPath("wfp/getPageUrl"),{sID:t.objectid,sPID:t.pid,sCurLinkID:t.linkid,sWFID:t.wfid,sNodeID:t.nodeid}).then((function(t){t.data.success&&t.data.data?e.$openWindow(dsf.url.getWebPath("~"+t.data.data)):dsf.layer.message(t.data.Message||"请求异常",!1)})).catch((function(t){dsf.layer.message("请求异常",!1)}))}}},i=n,d=a(0),o=Object(d["a"])(i,s,l,!1,null,"c679d78a",null);o.options.__file="pc/bhc/flow/todoTemp.vue";e["default"]=o.exports}}]);
//# sourceMappingURL=dsf-platform.TodoTemp.js.map