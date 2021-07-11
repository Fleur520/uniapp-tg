<template>
	<view>
		<view class="index-box hideOnPc">
			<!-- #ifdef APP-NVUE -->
			<text class="index-text">导航栏</text>
			<!-- #endif -->
			<!-- #ifndef APP-NVUE -->
			<text class="index-text">导航栏</text>
			<!-- #endif -->
		</view>

		<uni-section title="办公常用" type="line" style="margin-top: 0;"></uni-section>
		<uni-list>
			<uni-list-item v-for="(layout, index) in layouts" :key="index" :title="layout.name" link :to='`/pages/views/zone/${layout.url}/${layout.url}`' />
		</uni-list>
		<uni-section title="业务员专区" type="line"></uni-section>
		<uni-list>
			<uni-list-item v-for="(view, index) in views" :key="index" :title="view.name" link :to='`/pages/views/zone/${view.url}/${view.url}`' />
		</uni-list>
		<uni-section title="设计师专区" type="line"></uni-section>
		<uni-list>
			<uni-list-item v-for="(view, index) in forms" :key="index" :title="view.name" link :to='`/pages/views/zone/${view.url}/${view.url}`' />
		</uni-list>
		<uni-section title="程序员专区" type="line"></uni-section>
		<uni-list>
			<uni-list-item v-for="(func, index) in functionals" :key="index" :title="func.name" link :to='`/pages/views/zone/${func.url}/${func.url}`' />
		</uni-list>
		<uni-section title="其他" type="line"></uni-section>
		<uni-list>
			<uni-list-item v-for="(navi, index) in navigations" :key="index" :title="navi.name" link :to='`/pages/views/zone/${navi.url}/${navi.url}`' />
		</uni-list>
	</view>
</template>
<script>
	export default {
		components: {},
		data() {
			return {
				layouts: [{
						name: '文档办公',
						url: 'grid'
					},
					{
						name: '视频图片',
						url: 'grid'
					},
					{
						name: '学习平台',
						url: 'list'
					},
					{
						name: '学习平台',
						url: 'title'
					},
					{
						name: '学习平台',
						url: 'section'
					},
					{
						name: '学习平台',
						url: 'row'
					}

				],
				views: [{
						name: '开发工具',
						url: 'badge'
					},
					{
						name: '学习平台',
						url: 'fab'
					},
					{
						name: '建站工具',
						url: 'fav'
					},
					{
						name: '学习平台',
						url: 'tag'
					}, {
						name: '学习平台',
						url: 'transition'
					}
				],
				forms: [{
					name: '开发工具',
					url: 'data-checkbox'
				}, {
					name: '建站工具',
					url: 'easyinput'
				}, {
					name: '学习平台',
					url: 'forms'
				}, {
					name: '学习平台',
					url: 'file-picker'
				}],
				functionals: [{
						name: '开发工具',
						url: 'calendar'
					},
					{
						name: '学习平台',
						url: 'collapse'
					},
					// {
					// 	name: 'Combox 组合输入框',
					// 	url: 'combox'
					// },
					{
						name: 'Drawer 抽屉',
						url: 'drawer'
					},
					{
						name: 'Pagination 分页器',
						url: 'pagination'
					},
					{
						name: 'SwiperDot 轮播图指示点',
						url: 'swiper-dot'
					},
					{
						name: 'Steps 步骤条',
						url: 'steps'
					},
					{
						name: 'SegmentedControl 分段器',
						url: 'segmented-control'
					},
					{
						name: 'Countdown 倒计时',
						url: 'countdown'
					},
					{
						name: 'Rate 评分',
						url: 'rate'
					},
					{
						name: 'Popup 弹出层',
						url: 'popup'
					},
					{
						name: 'IndexedList 索引列表',
						url: 'indexed-list'
					},
					{
						name: 'Link 超链接',
						url: 'link'
					},
					{
						name: 'LoadMore 加载更多',
						url: 'load-more'
					},
					{
						name: 'SwipeAction 滑动操作',
						url: 'swipe-action'
					},
					{
						name: 'SearchBar 搜索栏',
						url: 'search-bar'
					},
					{
						name: 'Dateformat 日期格式化',
						url: 'dateformat'
					}
				],
				navigations: [{
						name: 'NavBar 导航栏',
						url: 'nav-bar'
					},
					{
						name: 'GoodsNav 商品导航',
						url: 'goods-nav'
					}
				],
				// #ifdef APP-NVUE
				platform: 'nvue',
				// #endif
				// #ifndef APP-NVUE
				platform: 'vue'
				// #endif
			}
		},
		methods: {
			goDetailPage(e) {
				let path = e.url
				// #ifdef APP-NVUE
				uni.navigateTo({
					url: `/pages/nvue/${path}/${path}`
				})
				// #endif
				// #ifndef APP-NVUE
				uni.navigateTo({
					url: `/pages/vue/${path}/${path}`
				})
				// #endif
			}
		}
	}
	
	
const config = require('utils/globalConfig.js');
var baseStaticUrl = config.BASE_STATICP_URL;
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

	.index-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		height: 50px;
		padding: 0 15px;
	}

	.index-text {
		font-size: 14px;
		color: #666;
	}
</style>
