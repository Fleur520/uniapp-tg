(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/commponent/home/header"],{"2c1a":function(t,e,a){},"301f":function(t,e,a){"use strict";var i=a("2c1a"),n=a.n(i);n.a},"446d":function(t,e,a){"use strict";a.r(e);var i=a("d8bd"),n=a("5c03");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("301f");var s,c=a("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"bb9bf944",null,!1,i["a"],s);e["default"]=u.exports},"5c03":function(t,e,a){"use strict";a.r(e);var i=a("803b"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"803b":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(a("92a5")),n=a("04f6");function o(t){return t&&t.__esModule?t:{default:t}}var s=function(){a.e("pages/commponent/public/search").then(function(){return resolve(a("bcaa"))}.bind(null,a)).catch(a.oe)},c={data:function(){return{currentSwiper:0,city:"我的位置",weatherData:[{type:"阴",img:"/static/images/weather/yin.png"},{type:"晴",img:"/static/images/weather/qing.png"},{type:"多云",img:"/static/images/weather/duoyun.png"},{type:"雨",img:"/static/images/weather/xiaoyu.png"},{type:"小雨",img:"/static/images/weather/xiaoyu.png"},{type:"中雨",img:"/static/images/weather/xiaoyu.png"},{type:"大雨",img:"/static/images/weather/dayu.png"},{type:"暴雨",img:"/static/images/weather/leiyu.png"},{type:"雷阵雨",img:"/static/images/weather/leiyu.png"},{type:"雨夹雪",img:"/static/images/weather/xiaoxue.png"},{type:"雪",img:"/static/images/weather/xue.png"},{type:"小雪",img:"/static/images/weather/xue.png"},{type:"中雪",img:"/static/images/weather/xiaoxue.png"},{type:"大雪",img:"/static/images/weather/daxue.png"}],high:"",weatherName:"",latitude:"",longitude:"",todyWeather:{},statusBarHeight:20}},components:{search:s},props:{colors:{type:String},locations:{type:Object},swiperList:{type:Array}},created:function(){console.log("key",n.hfKey,n.txMapKey),this.getUserPosition()},watch:{locations:function(t){this.latitude=this.locations.latlng.lat||"",this.longitude=this.locations.latlng.lng||"",this.city=this.locations.poiname,this.getWeather(this.latitude,this.longitude)}},methods:{getUserPosition:function(){var e=this;t.getLocation({type:"wgs84",geocode:!0,success:function(t){console.log("获取经纬度成功",t),e.setData({latitude:t.latitude,longitude:t.longitude})},fail:function(){e.setData({latitude:"",longitude:""})},complete:function(){e.getCity()}})},getCity:function(){var e=new i.default({key:n.txMapKey}),a=this;e.reverseGeocoder({location:{latitude:a.latitude,longitude:a.longitude},success:function(e){console.log("解析地址成功",e);e.result.ad_info.province;var i=e.result.address;a.setData({city:i});var n={};n.lat=a.latitude,n.lng=a.longitude,n.name=i,a.getWeather(a.latitude,a.longitude),e.result.ad_info&&t.setStorage({key:"address_info",data:e.result.ad_info,success:function(){console.log("success")}})},fail:function(t){console.log(t)},complete:function(t){console.log(t)}})},getWeather:function(e,a){var i=this,o="https://free-api.heweather.net/s6/weather/now?key="+n.hfKey+"&location="+a+","+e;t.request({url:o,method:"GET",success:function(t){console.log(t);var e=t.data.HeWeather6[0].now,a=e.fl;if(i.setData({high:a,weatherName:e.cond_txt}),i.weatherData.forEach((function(t){t.type==e.cond_txt&&i.setData({todyWeather:t})})),""==i.todyWeather.type||!i.todyWeather.type){var n=i.weatherData[0];i.setData({todyWeather:n})}},fail:function(){},complete:function(){}})},nearAddress:function(){var e=this;t.getSetting({success:function(a){a&&a.authSetting&&a.authSetting.hasOwnProperty("scope.userLocation")&&t.openSetting({success:function(){e.getUserPosition()}})}})},swiperChange:function(t){this.setData({currentSwiper:t.detail.current})}}};e.default=c}).call(this,a("543d")["default"])},d8bd:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement;t._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/commponent/home/header-create-component',
    {
        'pages/commponent/home/header-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("446d"))
        })
    },
    [['pages/commponent/home/header-create-component']]
]);