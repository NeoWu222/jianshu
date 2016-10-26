<style scoped lang="stylus">
	div
		float right
		position relative
	.search
		display inline-block
		width 150px
		height 20px
		padding 4px 14px
		border 1px solid #ccc
		border-radius 15px
		font-size 14px
		line-height 20px
		font-family  -apple-system, "Helvetica Neue", Arial, "PingFang SC", "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif
		color #555
		vertical-align middle
	i
		display inline-block
		cursor pointer
		&:before
			content " "
			display inline-block
			width 12px
			height 12px
			background url('../assets/search.png')
			position absolute
			bottom 9px
			right 13px
		
</style>
<template>
	<div>
		<input class="search" placeholder="搜索" :style="{marginTop: marginTop}"  />
		<i></i>
	</div>
</template>
<script>
	export default {
		props: ['wrapBoxHeight'],
		data() {
			return {

			}
		},
		computed:{
			marginTop(){
				return (this.wrapBoxHeight - 30) / 2 + "px";
			}
		}
	}
</script>