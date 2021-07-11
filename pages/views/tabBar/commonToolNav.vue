<template>
	<view class="home">
		<!-- 顶部 -->
		<headers :colors="colors" :locations="locations" :swiperList="swiperList"></headers>
		<!-- 公告 -->
		<notice :colors="colors" :noticeList="noticeList"></notice>
		<!-- 推荐分类菜单 与tab分类中不同 -->
		<classList :categoryList="categoryList"></classList>
		<!-- 栏目 -->
		<!-- <column></column> -->
		<!-- 广告图 -->
		<!-- <banner></banner> -->
		
		<view class="loading">—— 我是有底线的 ——</view>
	</view>
</template>

<script>
	var app = getApp();
	import headers from '../../commponent/home/header';
	import classList from '../../commponent/home/classList';
	import notice from '../../commponent/home/notice';
	import column from '../../commponent/home/column';
	import banner from '../../commponent/home/banner';
	import {
		getlocation
	} from '@/utils/auth.js'
	export default {
		data() {
			return {
				colors: '',
				bottoms: '100',
				scrollShow: false, //是否显示悬浮菜单
				categoryList: [{ //分类列表
					id: 1,
					name: 'IP查询',
					img: "https://fexcoin.oss-cn-shenzhen.aliyuncs.com/appbox/images/menu/icon-ip.jpg",
					link: "https://www.baidu.com/"
				}, {
					id: 2,
					name: '手机号查询',
					img: "https://fexcoin.oss-cn-shenzhen.aliyuncs.com/appbox/images/menu/icon-mobile.jpg",
					link: "/pages/views/tools/mobile"
				}, {
					id: 3,
					name: '身份证查询',
					img: "https://fexcoin.oss-cn-shenzhen.aliyuncs.com/appbox/images/menu/icon-idcard.png",
					link: "/pages/views/tools/idcard"
				},  {
					id: 4,
					name: '银行卡查询',
					img: "https://fexcoin.oss-cn-shenzhen.aliyuncs.com/appbox/images/menu/icon-bank.jpg",
					link: "/pages/views/tools/bank"
				}, {
					id: 5,
					name: '电费计算器',
					img: "https://fexcoin.oss-cn-shenzhen.aliyuncs.com/appbox/images/menu/icon-electric.png",
					link: "/pages/views/tools/electric"
				},{
					id: 8,
					name: '房贷计算器',
					img: "https://fexcoin.oss-cn-shenzhen.aliyuncs.com/appbox/images/menu/icon-fancalc.jpeg",
					link: "/pages/views/tools/house"
				},{
					id: 9,
					name: '简繁互转',
					img: "https://fexcoin.oss-cn-shenzhen.aliyuncs.com/appbox/images/menu/icon-font.png",
					link: "/pages/views/tools/font"
				}],
				locations: {},
				loading: true,
				swiperList: [{
					img: 'https://fexcoin.oss-cn-shenzhen.aliyuncs.com/images/banner.jpg'
				}, {
					img: 'https://www.1212.com/data/uploadimg/1605144772.jpg'
				}, {
					img: 'https://www.1212.com/data/uploadimg/1607664900.jpg'
				}],
				noticeList: []
			};
		},
		components: {
			headers,
			classList,
			notice,
			column,
			banner,
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			// #ifdef APP-PLUS
			this.bottoms = '0'  //在APP下 规格弹窗的位置发生变化
			// #endif
		},

		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function() {},

		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {
			this.setData({
				colors: app.globalData.newColor
			});
			uni.setNavigationBarColor({ //设置标题栏颜色
				backgroundColor: app.globalData.newColor,
				frontColor: '#ffffff'
			});
			// #ifdef H5
			let locations = getlocation() //获取位置信息
			if (locations) {
				this.locations = locations
			}
			// #endif
			
			this.getNotice()
		},

		/**
		 * 生命周期函数--监听页面隐藏
		 */
		onHide: function() {},

		/**
		 * 生命周期函数--监听页面卸载
		 */
		onUnload: function() {},

		/**
		 * 页面相关事件处理函数--监听用户下拉动作
		 */
		onPullDownRefresh: function() {},

		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {
		},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {},
		methods: {
			getNotice(){
				this.request('/v1/notice/list', {limit: 5}, 'GET').then(res=>{
					let rows = res.rows;			   
					this.setData({
					 noticeList: rows
					});
				})
			}
			
			
			
		}
	};
</script>
<style scoped lang="scss">
	.home {
		margin-bottom: 40rpx;
	}
	.loading{
	  height: 80upx;
	  line-height: 80upx;
	  text-align: center;
	  color: #ccc;
	  font-size: 24upx;
	  width: 100%;
	  margin-bottom: 20upx;
	}
</style>
