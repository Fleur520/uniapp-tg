(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/std-menus/add"],{"0950":function(t,e,n){"use strict";n.r(e);var r=n("c28a"),o=n("48bd");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("27e4");var i,u=n("f0c5"),c=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=c.exports},"125e":function(t,e,n){"use strict";(function(t){n("11a7");r(n("66fd"));var e=r(n("0950"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"27e4":function(t,e,n){"use strict";var r=n("54eb"),o=n.n(r);o.a},"48bd":function(t,e,n){"use strict";n.r(e);var r=n("d109"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=o.a},"54eb":function(t,e,n){},c28a:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},d109:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("986a");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=t.database(),f="std-menus";function s(t){var e={};for(var n in o.validator)t.indexOf(n)>-1&&(e[n]=o.validator[n]);return e}var l={data:function(){var t={};return{formData:t,formOptions:{},rules:i({},s(Object.keys(t)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;r.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){t.submitForm(e)})).catch((function(){r.hideLoading()}))},submitForm:function(t){var e=this;c.collection(f).add(t).then((function(t){r.showToast({icon:"none",title:"新增成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return r.navigateBack()}),500)})).catch((function(t){r.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){r.hideLoading()}))}}};e.default=l}).call(this,n("a9ff")["default"],n("543d")["default"])}},[["125e","common/runtime","common/vendor"]]]);