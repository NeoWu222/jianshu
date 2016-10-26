<style scoped lang="stylus">
	#myFooter
		padding 8px 0 10px 25%
		border-top 1px solid #d9d9d9
		overflow hidden
		color #999
		box-sizing border-box
		font-family -apple-system, "Helvetica Neue", Arial, "PingFang SC", "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif
		font-size 12px
		font-weight normal
		line-height 20px
		.footer-l
			float left
			margin-left 57px
			p
				margin-top 5px
			a
				color #999
			img
				margin-left 5px
				vertical-align middle
				width 60px
		.footer-r
			float right
			>div
				margin-top 10px
				display inline-block
				vertical-align middle
				&:first-child
					a
						&:hover
							opacity 0.7
				&:last-child
					a
						display inline-block
						width 20px
						&:before
							display inline-block
							content " "
							width 17px
							height 14px
							background-image url("../assets/linksSprit.png")
							background-repeat no-repeat
						&.weibo:before
							background-position-y 0
						&.weixin:before
							background-position-y -15px
						&.twitter:before
							background-position-y -30px
						&:hover:before
							background-image url('../assets/linksSprit2.png')
						
			a
				margin 0 3px
				color #999
				img
					width 90px
			.app-download
				margin-right 3px
</style>
<template>
	<div id="myFooter">
		<div class="footer-l">
			<p>
				<a>关于简书</a> | <a>联系我们</a> | <a>作者成书计划</a> | <a>帮助中心</a> | <a>简书周边</a> | <a>合作伙伴</a> |
			</p>
			<p>
				©2012-2016 <a>简书</a> / 沪ICP备11018329号-5 /<a><img src="../assets/beianbgs.png" style="width:18px;height:18px;"> 沪公网安备31010602000064号</a>
				<a><img src="../assets/anquan.png"></a>
			</p>
		</div>
		<div class="footer-r">
			<div class="app-download">
				<a href="/app">
					<img src="../assets/appstore.png">
				</a>
				<a href="/app">
					<img src="../assets/android.png" />
				</a>
			</div>
			<div>
				关注我们: <a class="weibo"></a><a class="weixin"></a><a class="twitter"></a>
			</div>
		</div>
	</div>
</template>