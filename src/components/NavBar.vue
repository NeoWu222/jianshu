<style scoped lang="stylus">
	#navBar
		position fixed
		top 0 
		left 0
		height 100%
		width 170px
		background-color  #2a2a2a
		a
			display block
			padding 10px 15px
			line-height 25px
			color #999
			text-shadow  0 1px 0 black
			&.logo
				color red
			&:hover
				color white
				i:before
					background-image url('../assets/navSprits2.png')
			i
				float left
				&:before
					content " "
					display inline-block
					width 16px
					height 14px
					line-height 14px
					background-image url("../assets/navSprits.png")
					background-repeat no-repeat
				&.home:before
					background-position-y 0
				&.collections:before
					background-position-y -15px
				&.app:before
					height 20px
					background-position-y -29px
				&.displayMode:before
					height 16px
					background-position-y -49px
				&.login:before
					background-position-y -66px
					
			span
				font-family -apple-system, "Helvetica Neue", Arial, "PingFang SC", "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif
				display inline-block
				margin-left 8px
				font-size 14px
				line-height 14px
				height 14px
		.dropdown
			a
				&:first-child
					color white
				&.router-link-active
					background-color #e78170
					color white
					text-shadow 0 1px 0 #de533a
					i:before
						background-image url("../assets/navSprits2.png")
				&:hover
					background-color #f49484
		.nav-user
			position absolute
			bottom 0
			left 0
			width 100%
			padding-bottom 5px
			
</style>
<template>
	<div id="navBar">
		<div class="dropdown">
			<router-link v-for="(item, index) in navArr"  :to="item.href">
				<i :class="item.type"></i>
				<span class="title" v-text="item.title"></span>
			</router-link>
			<div class="">
				
			</div>
		</div>
		<div class="nav-user">
			<a>
				<i class="displayMode"></i>
				<span class="title">显示模式</span>
			</a>
			<a>
				<i class="login"></i>
				<span class="title">登录</span>
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		props:['activeIndex'],
		data() {
			return {
				navArr: [
					{
						type: "home",
						title: "首页",
						href: '/home',
					},
					{
						type: "collections",
						title: "专题",
						href: '/collections',
					},
					{
						type: "app",
						title: "下载手机应用",
						href:'/apps',
					}
				]
			};
		},
		methods : {
		}
	}	
</script>