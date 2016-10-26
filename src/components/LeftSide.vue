<style scoped lang="stylus">
	.left-side
		position fixed
		width 25%
		height 100%
		.cover-img 
			width 100%
			height 100%
			background-size cover
			background-position center
		.bottom-block
			position absolute
			bottom 0
			padding 30px
			color white
			h1
			h2
			h3
			h4
				text-shadow  -1px 0 0 rgba(0,0,0,0.75)
			p
				margin-bottom 10px
				line-height 20px
			.btn
				display inline-block
				color white
				height 20px
				margin-top 10px
				font-size 16px
				vertical-align middle
				text-align center
				line-height 20px
				padding 11px 19px 11px 34px
				border 1px solid rgb(73, 190, 56)
				border-radius 4px
				background  url("../assets/sprite1.png") -104px -20px /250px no-repeat rgb(73, 190, 56)
				&:hover
					background-color rgb(107, 217, 91)
					border-color rgb(107, 217, 91)
				
</style>
<template>
	<div class="left-side">
		<div class="cover-img" :style="{'backgroundImage': `url(${options.img})`}"></div>
		<div class="bottom-block">
			<h1 v-text="options.title"></h1>
			<h3 v-text="options.subTit"></h3>
			<p v-text="options.desc"></p>
			<a class="btn" v-text="options.btnName"></a>
		</div>
		<div class="img-info"></div>
	</div>
</template>
<script>
	export default {
		props: ["options"],
		methods: {
			test(){
				alert();
			}
		}
	}
</script>