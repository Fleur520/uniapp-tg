<template>
	<view class="wrap">
		<view class="u-tabs-box" style="padding: 0 20upx;">
			<u-search @click="goSearch" placeholder="搜干货" :disabled="true" shape="square" :show-action="false" :animation="true" :clearabled="true"></u-search>
			<u-tabs-swiper activeColor="#0081ff" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="true" swiperWidth="750"></u-tabs-swiper>
			<scroll-view scroll-x style="height: 100upx;width: 100%;" v-show="current != 0">
				<view class="tags">
					<view @click="changeTag(index)" class="tag" :class="{'active': list[current].current == index}" v-for="(item, index) in list[current].tags">{{item.tag_name}}</view> 
				</view>
			</scroll-view>
		</view>
		<swiper class="swiper-box" :current="swiperCurrent" >
			<swiper-item class="swiper-item" v-for="(item, idx) in list">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
					<view class="page-box">
						<view class="order" @click="detail(res.item_info.article_info.article_id)" v-for="(res, index) in list[current].list" :key="index" v-if="res.item_type == 2">
							<view class="top">
								<view class="left">
									<view class="store">{{res.item_info.author_user_info.user_name}}</view>
								</view>
								<view class="right">{{res.item_info.category.category_name}}·{{res.item_info.tags[0].tag_name}}</view>
							</view>
							<view class="item" >
								
								<view class="content">
									<view class="title u-line-2" style="font-weight: bold;font-size: 30upx;">
										{{res.item_info.article_info.title}}
									</view>
									<view class="title u-line-3">
										{{res.item_info.article_info.brief_content}}
									</view>
								</view>
								<view class="left"><image v-if="res.item_info.article_info.cover_image != ''" :src="res.item_info.article_info.cover_image" mode="aspectFill"></image></view>
							</view>
						</view>
					</view>
					<u-loadmore :status="list[current].loadStatus" bgColor="#f2f2f2"></u-loadmore>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import {tags, recomments, articles} from "@/utils/tags.js";
export default {
	
	data() {
		return {
			list: [
				// { name: '推荐', cate_id: "1", tags:[], list: [], current: 0, isInitTag: false, loadStatus: 'loadmore', "cursor":"0" },
				// { name: '思维模型', cate_id: "6809637769959178254", list: [], tags:[], current: 0, isInitTag: false, loadStatus: 'loadmore', "cursor":"0" },
				// { name: '项目管理', cate_id: "6809637767543259144", list: [], tags:[], current: 0, isInitTag: false, loadStatus: 'loadmore', "cursor":"0" },
				// { name: '成长路线', cate_id: "6809635626879549454", list: [], tags:[], current: 0, isInitTag: false, loadStatus: 'loadmore', "cursor":"0"},
				// { name: '其他', cate_id: "6809635626661445640", tags:[], list: [], current: 0, isInitTag: false, loadStatus: 'loadmore', "cursor":"0" }

			],
			current: 0,
			swiperCurrent: 0,
			tabsHeight: 0,
			dx: 0,
			loadStatus: ['loadmore','loadmore','loadmore','loadmore'],
		};
	},
	onLoad() {
		// this.getList();
		this.getCateByDb();
	},
	onShareAppMessage(){
		return {
		  title: '办公效能助手TG',
		  path: '/pages/views/tabBar/home'
		}
	},
	methods: {
		async getCateByDb() {
			uni.showLoading({
				title: '处理中...'
			})
			return await uniCloud.callFunction({
				name: 'util'
			}).then((res) => {
				uni.hideLoading()
				// uni.showModal({
				// 	content: `查询成功，获取数据列表为：${JSON.stringify(res.result.data)}`,
				// 	showCancel: false
				// })
				this.list = res.result.data;
				this.getList();
				return res.result.data
			}).catch((err) => {
				uni.hideLoading()
				uni.showModal({
					content: `查询失败，错误信息为：${err.message}`,
					showCancel: false
				})
				console.error(err)
			})
		},
		goSearch(item){
			uni.navigateTo({
				url: '/pages/views/home/search?keyword='+item
			})
		},
		detail(article_id){
			uni.navigateTo({
				url: '/pages/views/tabBar/detail?id='+article_id
			})
		},
		getCate(idx){
			let _this = this
			let cate_id = _this.list[idx].cate_id
			if(cate_id == 1 || _this.list[idx].isInitTag){
				return
			}
			let list = [
				{ tag_id: "0", tag_name: "全部"},
			]
			console.log("tags:",tags.data)
			_this.list[idx].tags = list.concat(tags.data)
			_this.list[idx].isInitTag = true
		},
		reachBottom() {
			this.getList();
		},
		// 页面数据
		getList() {
			if(this.current == 0){
				this.getAllFeed()
			} else {
				this.getCateList()
			}
		},
		getCateList(){
			let _this = this
			if(_this.list[this.current].loadStatus == 'nomore'){
				return;
			}
			let tagIndex = _this.list[this.current].current;
			
			if(tagIndex != 0){
				params.tag_id = _this.list[this.current].tags[tagIndex].tag_id
			}
			_this.list[_this.current].loadStatus = 'loading'
			setTimeout(() =>{
				_this.list[_this.current].loadStatus = articles.has_more ? 'loadmore' : 'nomore'
				_this.list[_this.current].cursor = articles.cursor
				let list = []
				for(var i = 0; i < articles.data.length; i++){
					list.push({"item_type": 2, "item_info": articles.data[i]})
				}
				_this.list[_this.current].list = _this.list[_this.current].list.concat(list)
			}, 1000)
		},
		getAllFeed(){
			let _this = this
			if(_this.list[0].loadStatus == 'nomore'){
				return;
			}
			_this.list[0].loadStatus = 'loading'
			setTimeout(() => {
				_this.list[0].loadStatus = recomments.has_more ? 'loadmore' : 'nomore'
				_this.list[0].cursor = recomments.cursor
				_this.list[0].list = _this.list[0].list.concat(recomments.data)
			}, 1000)
			
		},
		// tab栏切换
		change(index) {
			this.swiperCurrent = index;
			this.$refs.tabs.setFinishCurrent(index);
			this.current = index;
			this.getCate(index)
			setTimeout(() => {
				if(this.list[index].list.length <= 0){
					this.getList()
				}
			}, 1200)
		},
		changeTag(index){
			this.list[this.current].current = index
			this.list[this.current].list = []
			this.list[this.current].loadStatus = 'loadmore'
			this.getList()
		},
		transition({ detail: { dx } }) {
			this.$refs.tabs.setDx(dx);
		},
		animationfinish({ detail: { current } }) {
			
		}
	}
};
</script>

<style lang="scss" scoped>
page{
	width: 100%;
	height: 100%;
}
.wrap {
	position: fixed;
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
}
.swiper-box {
	flex: 1;
}
.swiper-item {
	height: 100%;
	background: #f3f3f3;
}
.tags{
	display: flex;
	align-items: center;
	height: 100upx;
	width: 100%;
	.tag{
		padding: 10upx 20upx;
		margin-right: 20upx;
		background-color: #f3f3f3;
		border-radius: 30upx;
		font-size: 24upx;
		white-space:nowrap;
	}
	.active{
		background-color: #0081ff;
		color: #ffffff;
	}
}
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
			font-size: 32rpx;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				color: #e5d001;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: space-between;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
.centre {
	text-align: center;
	margin: 200rpx auto;
	font-size: 32rpx;
	image {
		width: 164rpx;
		height: 164rpx;
		border-radius: 50%;
		margin-bottom: 20rpx;
	}
	.tips {
		font-size: 24rpx;
		color: #999999;
		margin-top: 20rpx;
	}
	.btn {
		margin: 80rpx auto;
		width: 200rpx;
		border-radius: 32rpx;
		line-height: 64rpx;
		color: #ffffff;
		font-size: 26rpx;
		background: linear-gradient(270deg, rgba(249, 116, 90, 1) 0%, rgba(255, 158, 1, 1) 100%);
	}
}

</style>
