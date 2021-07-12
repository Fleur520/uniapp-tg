<template>
	<view class="warp">

	
		<view class="example-body">
			<uni-grid :column="3" :square="false" :highlight="false" @change="change">
				<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.url" class="image" mode="aspectFill" />
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	const config = require('utils/globalConfig.js');
	var baseStaticUrl = config.BASE_STATICP_URL;
	
	export default {
		components: {},
		data() {
			return {
				dynamicList: [],
				list: [{
						url: baseStaticUrl+"/mind/jzt.png",
						text: '数据可视化',
						//badge: '0',
						type: "primary"
					},
					{
						url: baseStaticUrl+"/c2.png",
						text: '图片去水印',
						//badge: '1',
						type: "success"
					},
					{
						url: baseStaticUrl+"/c3.png",
						text: '创可贴',
						// badge: '99',
						type: "warning"
					},
					{
						url: baseStaticUrl+"/c4.png",
						text: '制作GIF图片',
						// badge: '2',
						type: "error"
					},
					{
						url: baseStaticUrl+"/c5.png",
						text: '创可贴'
					},
					{
						url: baseStaticUrl+"/c6.png",
						text: 'AI抠图'
					},
					{
						url: baseStaticUrl+"/c7.png",
						text: '图片搜索'
					}
				]
			}
		},
		methods: {
			change(e) {
				let {
					index
				} = e.detail
				this.list[index].badge && this.list[index].badge++
                window.location.href = "https://www.baidu.com"
				//uni.showToast({
				//	title: `点击第${index+1}个宫格`,
				//	icon: 'none'
				//})
			},
			add() {
				if (this.dynamicList.length < 9) {
					this.dynamicList.push({
						url: `/static/c${this.dynamicList.length+1}.png`,
						text: `Grid ${this.dynamicList.length+1}`,
						color: this.dynamicList.length % 2 === 0 ? '#f5f5f5' : "#fff"
					})
				} else {
					uni.showToast({
						title: '最多添加9个',
						icon: 'none'
					});
				}
			},
			del() {
				this.dynamicList.splice(this.dynamicList.length - 1, 1)
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

	.image {
		width: 50rpx;
		height: 50rpx;
	}

	.text {
		font-size: 26rpx;
		margin-top: 10rpx;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}

	.grid-dynamic-box {
		margin-bottom: 15px;
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.grid-dot {
		position: absolute;
		top: 5px;
		right: 15px;
	}
	.swiper {
		height: 420px;
	}
		
	/* #ifdef H5 */
	@media screen and (min-width: 768px) and (max-width: 1425px) {
		.swiper {
			height: 630px;
		}
	}
	@media screen and (min-width: 1425px) {
		.swiper {
			height: 830px;
		}
	}
	/* #endif */
</style>
