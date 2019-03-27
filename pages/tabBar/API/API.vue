<template>
	<view>
		<view class="y-headerBar">
			<navigator 
			class="y-bar_changeCity" 
			url="./selectCity/selectCity" 
			open-type="navigate" 
			hover-class="none">北京<text class="iconfont selecti-tip">&#xe61c;</text></navigator>
			<text class="y-bar_title">首页</text>
			<navigator 
			class="y_bar_search" 
			url="./searchAny/searchAny" 
			hover-class="none"><text 
			class="iconfont">&#xe609;</text></navigator>
		</view>
		<!-- <view class="y-body">
			<ul class="y-swiper">
				<li><image src="../../../static/test.png" mode=""></image></li>
				<li class="y-swiper_now"><image src="../../../static/test.png" mode=""></image></li>
				<li><image src="../../../static/test.png" mode=""></image><li>
				<li><image src="../../../static/test.png" mode=""></image></li>
			</ul>
		</view> -->
		<swiper class="y-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../../static/test.png" mode="aspectFill"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../../static/test.png" mode="aspectFill"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../../static/test.png" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="y-body">
			<h2>热门赛事<text class="iconfont">&#xe637;</text></h2>
			<view class="hot-list">
				<view class="hot-event">
					<view class="hot-img">
						<image src="../../../static/hot.png" mode="aspectFit"></image>
						<text class="hot-level">TOP 1</text>
					</view>
					<view class="hot-event_desc">
						<h3>北京跳伞大赛</h3>
						<text class="hot-event_time">
							<text class="iconfont">&#xe62d;</text>
							2018/02/13 10:00
						</text>
						<text class="hot-event_address">
							<text class="iconfont">&#xe60f;</text>
							北京市城区万达广场
						</text>
					</view>
				</view>
				<view class="hot-event">
					<view class="hot-img">
						<image src="../../../static/hot2.png" mode="aspectFit"></image>
						<text class="hot-level">TOP 2</text>
					</view>
					<view class="hot-event_desc">
						<h3>北京跳伞大赛</h3>
						<text class="hot-event_time">
							<text class="iconfont">&#xe62d;</text>
							2018/02/13 10:00
						</text>
						<text class="hot-event_address">
							<text class="iconfont">&#xe60f;</text>
							北京市城区万达广场
						</text>
					</view>
				</view>
				<view class="hot-event">
					<view class="hot-img">
						<image src="../../../static/hot3.png" mode="aspectFit"></image>
						<text class="hot-level">TOP 3</text>
					</view>
					<view class="hot-event_desc">
						<h3>北京跳伞大赛</h3>
						<text class="hot-event_time">
							<text class="iconfont">&#xe62d;</text>
							2018/02/13 10:00
						</text>
						<text class="hot-event_address">
							<text class="iconfont">&#xe60f;</text>
							北京市城区万达广场
						</text>
					</view>
				</view>
				<view class="hot-event">
					<view class="hot-img">
						<image src="../../../static/hot4.png" mode="aspectFit"></image>
						<text class="hot-level">TOP 4</text>
					</view>
					<view class="hot-event_desc">
						<h3>北京跳伞大赛</h3>
						<text class="hot-event_time">
							<text class="iconfont">&#xe62d;</text>
							2018/02/13 10:00
						</text>
						<text class="hot-event_address">
							<text class="iconfont">&#xe60f;</text>
							北京市城区万达广场
						</text>
					</view>
				</view>
			</view>
			<h2>精彩回顾<text class="iconfont">&#xe637;</text></h2>
			<view class="hot-list">
				<view class="hot-event">
					<view class="hot-img">
						<image src="../../../static/hot4.png" mode="aspectFit"></image>
						<text class="hot-level">TOP 4</text>
					</view>
					<view class="hot-event_desc">
						<h3>北京跳伞大赛</h3>
						<text class="hot-event_time">
							<text class="iconfont">&#xe62d;</text>
							2018/02/13 10:00
						</text>
						<text class="hot-event_address">
							<text class="iconfont">&#xe60f;</text>
							北京市城区万达广场
						</text>
					</view>
				</view>
				<view class="hot-event">
					<view class="hot-img">
						<image src="../../../static/hot4.png" mode="aspectFit"></image>
						<text class="hot-level">TOP 4</text>
					</view>
					<view class="hot-event_desc">
						<h3>北京跳伞大赛</h3>
						<text class="hot-event_time">
							<text class="iconfont">&#xe62d;</text>
							2018/02/13 10:00
						</text>
						<text class="hot-event_address">
							<text class="iconfont">&#xe60f;</text>
							北京市城区万达广场
						</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	@font-face {
	  font-family: 'iconfont';
	  src: url('../../../common/icon/iconfont.eot');
	  src: url('../../../common/icon/iconfont.woff2') format('woff2'),
		  url('../../../common/icon/iconfont.woff') format('woff'),
		  url('../../../common/icon/iconfont.ttf') format('truetype'),
		  url('../../../common/icon/iconfont.svg#iconfont') format('svg');
	}
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 28upx;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		}
	.y-headerBar {
		padding: 0 5%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 88upx;
		background: #fff;
		box-shadow: 0 1px 2px #eee;
		.y-bar_changeCity,
		.y-bar_title,
		.y_bar_search {
			display: block;
			width: 30%;
		}
		.y-bar_changeCity {
			font-size: 32upx;
			.selecti-tip {
				margin-left: 2upx;
			}
		}
		.y-bar_title {
			text-align: center;
		}
		.y_bar_search {
			text-align: right;
		}
	}
	/* .y-body {
		position: relative;
		.y-swiper {
			position: absolute;
			top: 40upx;
			left: calc(80upx - 100vw + 10upx);
			padding: 0;
			list-style: none;
			display: flex;
			height: 350upx;
			li {
				width: calc(100vw - 80upx);
				padding: 0 10upx;
				image {
					width: 100%;
					height: 100%;
				}
				&.y-swiper_now {
					transform: scale(1,1.1);
				}
			}
		}
	} */
	.y-swiper {
		height: 350upx;
	}
	.swiper-item {
		padding: 30upx;
		height: 100%;
		border-radius: 10upx;
		overflow: hidden;
		image {
			width: 100%;
			height: 350upx;
		}
	}
	.y-body {
		padding: 0 40upx;
		h2 {
			position: relative;
			display: flex;
			justify-content: space-between;
			padding-left: 20upx;
			font-size: 32upx;
			font-weight: 600;
			line-height: 36px;
			color: #333;
			&::after {
				content: '';
				position: absolute;
				top: 20upx;
				left: 0;
				width: 6upx;
				height: 30upx;
				border-radius: 2upx;
				background: skyblue;
				display: block;
			}
		}
		.hot-list {
			position: relative;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			&::after {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 10upx;
				display: block;
				background: #ddd;
			}
		}
		.hot-event_desc {
			padding: 10upx 0;
		}
		.hot-event {
			width: calc(50% - 10upx);
			overflow: hidden;
			.hot-img {
				position: relative;
				width: 100%;
				height: 230upx;
				box-shadow: 0 2upx 8upx #eee;
				image {
					width: 100%;
					height: 100%;
				}
				.hot-level {
					position: absolute;
					left: 6upx;
					bottom: 6upx;
					color: #fff;
					font-size: 12upx;
				}
			}
		}
		h3 {
			padding:10upx 0 6upx 10upx;
			font-size: 30upx;
			font-weight: 600;
			line-height: 32upx;
			color: #333;
		}
		.hot-event_time,
		.hot-event_address {
			display: block;
			font-size: 24upx;
			line-height: 40upx;
			color: #666;
		}
	}
</style>
