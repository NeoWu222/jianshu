<style scoped lang="stylus">
	.app-download
		background-color white
		.download-content
			padding 100px 0
			backgroung-color #f8f8f8
			text-align center
			>div
				display inline-block
				&.page-left
					padding-top 50px
					margin-right 80px
					vertical-align top
					.title
						padding-bottom 50px
						margin-bottom 60px
						border-bottom 1px solid #e6e6e6
						img
							width 252px
					.download
						margin-bottom 35px
						.download-btn
							float left
							margin-right 30px
							a
								display block
								position relative
								width 180px
								height 58px
								padding-left 64px
								font-size 20px
								line-height 58px
								font-family -apple-system, "Helvetica Neue", Arial, "PingFang SC", "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif
								color white
								box-sizing border-box
								margin-bottom 20px
								text-align left
								&.andr-btn
									border-color #49be38
									background #49be38
									&:before
										content " "
										dispaly inline-block
								&.ios-btn
									border-color #15a7f0
									background #15a7f0
									&:before
										content " "
										dispaly inline-block
						img
							width 135px
							border 1px solid #d9d9d9
				&.app-img
					width 470px
			
</style>
<template>
	<div>
		
		<div class="app-download">
			<div class="download-content">
				<div class="page-left">
					<div class=" title logo">
						<img src="../assets/logo.png">
					</div>
					<div class="download">
						<div class="download-btn">
							<a class="btn andr-btn">Android版</a>
							<a class="btn ios-btn">iPhone版</a>
						</div>
						<img src="../assets/qrcode.png" />
					</div>
					<div class="share">
						
					</div>
				</div>
				<div class="app-img">
					<img src="../assets/phoneimg.png" />
				</div>
			</div>
			<div class="app-info"></div>
		</div>
		<my-footer></my-footer>
	</div>
</template>
<script>
	import NavBar from '../components/NavBar';
	import MyFooter from "../components/MyFooter"
	export default {
		data(){
			return {

			}
		},
		components:{
			NavBar,
			MyFooter
		}
	}
</script>