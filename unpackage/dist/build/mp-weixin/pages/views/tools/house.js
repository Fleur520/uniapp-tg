(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/views/tools/house"],{"0945":function(t,e,o){},"181a":function(t,e,o){"use strict";var n=o("0945"),u=o.n(n);u.a},"18e6":function(t,e,o){"use strict";var n=o("5c45"),u=o.n(n);u.a},2618:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),u={data:function(){return{colors:"",list:[{name:"商业贷款"},{name:"公积金贷款"},{name:"组合贷款"}],current:0,showType:!1,typeList:[{value:"0",label:"等额本息"},{value:"1",label:"等额本金"}],typeMap:{0:"等额本息",1:"等额本金"},showCustomeRate:!1,showPeriod:!1,periodMap:{},periodList:[],showRate:!1,rateList:[{value:"0.04165",label:"基准利率8.5折(4.165%)"},{value:"0.0441",label:"基准利率9折(4.41%)"},{value:"0.04655",label:"基准利率9.5折(4.655%)"},{value:"0.049",label:"基准利率(4.9%)"},{value:"0.0539",label:"基准利率1.1倍(5.39%)"},{value:"0.0588",label:"基准利率1.2倍(5.88%)"},{value:"0",label:"自定义"}],showGjjRate:!1,gjjRateList:[{value:"0.0325",label:"基准利率(3.25%)"},{value:"0.03575",label:"基准利率1.1倍(3.575%)"},{value:"0.039",label:"基准利率1.2倍(3.9%)"},{value:"0",label:"自定义"}],type:"0",amount:void 0,gjjAmount:void 0,period:20,rate:"0.049",gjjRate:"0.0325",customeRate:void 0,customeType:void 0,showResultList:!1,reslut:{monthAmount:0,totalAmount:0,totalReturnAmount:0,rateAmount:0},groupResult:{},listAmount:[],resultType:0}},components:{},props:{},onLoad:function(t){for(var e=[],o={},u=1;u<=30;u++){var a=u+"年 ("+12*u+"期)";e.push({value:u,label:a}),o[u]=a}var i={};for(u=0;u<this.rateList.length;u++){var s=this.rateList[u];i[s.value]=s.label}this.setData({colors:n.globalData.newColor,periodList:e,periodMap:o,rateMap:i})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{changeResultType:function(t){this.setData({type:t,reslut:0==t?this.groupResult["bx"]:this.groupResult["bj"]})},resultDetail:function(){0!=this.type?this.setData({showResultList:!0}):this.$refs.uToast.show({title:"等额本息还款固定",type:"warning"})},calc:function(){2==this.current?this.calcGroup():this.calcSimple()},calcSimple:function(){for(var t=0==this.current?this.rate:this.gjjRate,e=0==this.current?1e4*this.amount:1e4*this.gjjAmount,o=12*this.period,n={},u=[],a=0,i=0,s=0;s<o;s++){var r=this.getMonthMoney2(t,e,o,s);a+=r,r=Math.round(100*r)/100,0==s&&(i=r),u.push({value:s+1+"月",label:"第"+(s+1)+"月       还 "+r+"元"})}var l=Math.round(100*a)/100,c=Math.round(100*(a-e))/100,h={totalAmount:(e/1e4).toFixed(2),monthAmount:i.toFixed(2),totalReturnAmount:(l/1e4).toFixed(2),rateAmount:(c/1e4).toFixed(2)};n["bj"]=h;var d=this.getMonthMoney1(t,e,o);d=Math.round(100*d)/100;var m=d*o,f=Math.round(100*(m-e))/100;m=Math.round(100*m)/100;var p={totalAmount:(e/1e4).toFixed(2),monthAmount:d.toFixed(2),totalReturnAmount:(m/1e4).toFixed(2),rateAmount:(f/1e4).toFixed(2)};n["bx"]=p,this.setData({groupResult:n,listAmount:u,reslut:"0"==this.type?n["bx"]:n["bj"]})},calcGroup:function(){for(var t=1e4*this.amount,e=1e4*this.gjjAmount,o=t+e,n=this.rate,u=this.gjjRate,a={},i=0,s=12*this.period,r=0,l=[],c=0;c<s;c++){var h=this.getMonthMoney2(n,t,s,c)+this.getMonthMoney2(u,e,s,c);i+=h,h=Math.round(100*h)/100,0==c&&(r=h),l.push({value:c+1+"月",label:"第"+(c+1)+"月       还 "+h+"元"})}var d=Math.round(100*i)/100,m=Math.round(100*(i-o))/100,f={totalAmount:(o/1e4).toFixed(2),monthAmount:r.toFixed(2),totalReturnAmount:(d/1e4).toFixed(2),rateAmount:(m/1e4).toFixed(2)};a["bj"]=f;var p=this.getMonthMoney1(n,t,s)+this.getMonthMoney1(u,e,s),v=Math.round(100*p)/100,b=p*s,g=Math.round(100*b)/100,j=Math.round(100*(b-o))/100,R={totalAmount:(o/1e4).toFixed(2),monthAmount:v.toFixed(2),totalReturnAmount:(g/1e4).toFixed(2),rateAmount:(j/1e4).toFixed(2)};a["bx"]=R,this.setData({groupResult:a,listAmount:l,reslut:"0"==this.type?a["bx"]:a["bj"]})},getMonthMoney1:function(t,e,o){var n=t/12;return e*n*Math.pow(1+n,o)/(Math.pow(1+n,o)-1)},getMonthMoney2:function(t,e,o,n){var u=t/12,a=e/o;return(e-a*n)*u+a},sectionChange:function(t){this.current=t,this.reset()},reset:function(){this.setData({type:"0",amount:void 0,gjjAmount:void 0,period:20,rate:"0.049",gjjRate:"0.0325",customeRate:void 0,customeType:void 0,reslut:{monthAmount:0,totalAmount:0,totalReturnAmount:0,rateAmount:0},groupResult:{}})},changeType:function(){this.setData({showType:!0})},typeConfirm:function(t){this.setData({type:t[0].value})},periodConfirm:function(t){this.setData({period:t[0].value})},rateConfirm:function(t){"0"!=t[0].value?this.setData({rate:t[0].value}):this.setData({showCustomeRate:!0,customeType:0})},gjjRateConfirm:function(t){"0"!=t[0].value?this.setData({gjjRate:t[0].value}):this.setData({showCustomeRate:!0,customeType:1})},customeConfirm:function(){0==this.customeType?this.setData({rate:Number(this.customeRate)/100}):this.setData({gjjRate:Number(this.customeRate)/100})}}};e.default=u},"5c45":function(t,e,o){},"93a5":function(t,e,o){"use strict";(function(t){o("11a7");n(o("66fd"));var e=n(o("dfd8"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},b120:function(t,e,o){"use strict";o.r(e);var n=o("2618"),u=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=u.a},dc2b:function(t,e,o){"use strict";o.d(e,"b",(function(){return u})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return n}));var n={uSubsection:function(){return o.e("uview-ui/components/u-subsection/u-subsection").then(o.bind(null,"8384"))},uCellGroup:function(){return o.e("uview-ui/components/u-cell-group/u-cell-group").then(o.bind(null,"ff5d"))},uCellItem:function(){return o.e("uview-ui/components/u-cell-item/u-cell-item").then(o.bind(null,"d1d6"))},uInput:function(){return Promise.all([o.e("common/vendor"),o.e("uview-ui/components/u-input/u-input")]).then(o.bind(null,"e03e"))},uSelect:function(){return o.e("uview-ui/components/u-select/u-select").then(o.bind(null,"ec32"))},uModal:function(){return o.e("uview-ui/components/u-modal/u-modal").then(o.bind(null,"0fd3"))},uToast:function(){return o.e("uview-ui/components/u-toast/u-toast").then(o.bind(null,"defa"))}},u=function(){var t=this,e=t.$createElement,o=(t._self._c,(100*t.rate).toFixed(3)),n=(100*t.gjjRate).toFixed(3),u=(100*t.rate).toFixed(3),a=(100*t.gjjRate).toFixed(3);t._isMounted||(t.e0=function(e){t.showPeriod=!0},t.e1=function(e){t.showRate=!0},t.e2=function(e){t.showPeriod=!0},t.e3=function(e){t.showGjjRate=!0},t.e4=function(e){t.showPeriod=!0},t.e5=function(e){t.showRate=!0},t.e6=function(e){t.showGjjRate=!0}),t.$mp.data=Object.assign({},{$root:{g0:o,g1:n,g2:u,g3:a}})},a=[]},dfd8:function(t,e,o){"use strict";o.r(e);var n=o("dc2b"),u=o("b120");for(var a in u)"default"!==a&&function(t){o.d(e,t,(function(){return u[t]}))}(a);o("181a"),o("18e6");var i,s=o("f0c5"),r=Object(s["a"])(u["default"],n["b"],n["c"],!1,null,"45b8c362",null,!1,n["a"],i);e["default"]=r.exports}},[["93a5","common/runtime","common/vendor"]]]);