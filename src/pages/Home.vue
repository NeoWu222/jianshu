<style scoped lang="stylus">
	$font-family = -apple-system, "Helvetica Neue", Arial, "PingFang SC", "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif
	.home
		margin-left 170px
		.navbar-user
			position fixed
			top 10px
			right 0
			z-index 1
			a
				float right
				position relative
				top 8px
				margin-right 8px
				padding 0 2px
			i
				&:before
					display inline-block
					content " "
					width 12px
					height 12px
					background-image url("../assets/navbaruser.png")
					background-repeat no-repeat
				&.login:before
					background-position-y 2px
				&.user:before
					background-position-y -13px
		.main-con
			margin-left 25%
			padding-left 43px
			max-width 1000px
			box-sizing border-box
			.page-title
				position fixed
				background white
				border-width 2px
				box-sizing border-box
				z-index 1
				padding-left 20px
				font-size 12px
				border-bottom 2px solid #d9d9d9
				width 50%
				a
					float left
					display inline-block
					padding 15px
					line-height 20px
					color #999
					&.active
						color #555
						border-bottom 2px solid
						margin-bottom -2px
					&:hover
						transition all 0.7s
						color #555
						background-color #eee
			.list-container
				padding-top 52px
				.sort-nav
					padding 9px 0 0 32px
					font-size 0
					a
						display inline-block
						margin 10px 15px 0 0
						padding 3px 10px
						border 1px solid #d9d9d9
						border-radius 14px
						box-sizing border-box
						font-size 12px
						line-height 1.5
						font-family $font-family
						cursor pointer
						&:hover
							color black
						&.active
							color white
							background-color #e78170
							border-color #e78170
							&:hover
								background-color rgb(244, 148, 132)
				.article-list
					margin 35px 0
					padding-left 36px
					li
						position relative
						padding-right 2px
						padding-bottom 17px
						margin-bottom 17px
						word-wrap break-word
						line-height 20px
						border-bottom 1px dashed #d9d9d9
						box-sizing border-box
						&.have-img
							.wrap-img
								width 100px
								height 100px
								float right
								img
									width 100px
									height 100px
									border-radius 4px
									border 1px solid #eee
									box-sizing border-box
						&:last-child
							border-width 0
						> div
							padding-right 110px
							p
								margin-bottom 8px
								padding-top 8px
								font-size 12px
								> span
									margin-left 3px
									color #717171
							h4
								margin-bottom 10px
								font-size 18px
								font-weight bold
								line-height 1.5
								a:hover
									color black
							div
								font-size 12px
								line-height 20px
								a
									color #999
									font-family $font-family
									&:hover
										color #717171
										transition color .2s
				.load-more
					margin-bottom 30px
					text-align center
					button
						background-color #e78170
						padding 14px 18px
						font-size 18px
						cursor pointer
						border-radius 2px
						border 1px solid transparent
						color white
						&:hover
							background-color #f49484
							border-color #f49484
							
</style>
<template>
	<div>
		<div class="home">
			<div class="navbar-user">
				<a>
					<i class="user"></i>
					注册
				</a>
				<a>
					<i class="login"></i>
					登录
				</a>
			</div>
			<leftSide :options="leftSideOptions"></leftSide>
			
			<div class="main-con">
				<div class="page-title">
					<a class="active">发现</a>
					<a>2015精选</a>
					<search :wrapBoxHeight="pageTitHeight"></search>
				</div>
				<div class="list-container">
					<div class="sort-nav">
						<a :class="{active: index == 0}" v-for="(item, index) of sortNavArr" v-text="item" @click="changeStyle($event, index)"></a>
					</div>
					<ul class="article-list">
						<li v-for="item of articleArr" :class="{'have-img' : item['have-img']}">
							<a class="wrap-img" v-if="item['have-img']">
								<img :src="item.img" />
							</a>
							<div>
								<p>
									<a class="blue-link" v-text="item.author"></a>
									<em>·</em>
									<span v-text="item.time"></span>
								</p>
								<h4>
									<a v-text="item.title"></a>
								</h4>
								<div>
									<a v-text="item.read"></a><a v-text="item.comments"></a><a v-text="item.like"></a><a v-text="item.reward"></a>
								</div>
							</div>
						</li>
					</ul>
					<div class="load-more">
						<button @click="loadMore">点击查看更多</button>
					</div>
				</div>
			</div>
			<my-footer></my-footer>
		</div>
	</div>
</template>
<script>
	import LeftSide from '../components/LeftSide'
	import Search from '../components/Search'
	import MyFooter from "../components/MyFooter"
	export default {
		data(){
			return {
				pageTitHeight: 50,
				leftSideOptions: {
					title : "简书",
					subTit : "交流故事，沟通想法",
					desc : "一个基于内容分享的社区",
					btnName : "提笔写篇文章",
					img : require("../assets/dailyImg1.jpg")
				},
				articleArr: [
					{
						"have-img":1,
						author : "公子小七",
						time: "大约20小时之前",
						title: "别不信，我们最后可能都和这种人在一起",
						read: "阅读 8085",
						comments:" · 评论 89",
						like:" · 喜欢 212",
						img: require("../assets/article1.jpg")
					},
					{
						"have-img":1,
						author : "北海源",
						time: "1天之前",
						title: "处世观",
						read: "阅读 1249",
						comments:" · 评论 109",
						like:" · 喜欢 68",
						reward :" · 打赏4",
						img: require("../assets/article2.jpeg")
					},
					{
						author : "素衣爱",
						time: "大约21小时之前",
						title: "一个二流大学生的自白",
						read: "阅读 5429",
						comments:" · 评论 122",
						like:" · 喜欢 214",
						reward :" · 打赏2",
					},
					{
						"have-img":1,
						author : "怀左同学",
						time: "大约4小时之前",
						title: "悟空：我要这天，再遮不住我的眼",
						read: "阅读 2654",
						comments:" · 评论 56",
						like:" · 喜欢 148",
						reward :" · 打赏3",
						img: require("../assets/article3.jpg")
					},
					{
						"have-img":1,
						author : "宋宋的白银时代",
						time: "大约12小时之前",
						title: "女孩如何让自己越来越漂亮",
						read: "阅读 2612",
						comments:" · 评论 12",
						like:" · 喜欢 65",
						img: require("../assets/article4.jpeg")
					},
					{
						"have-img":1,
						author : "wblearn",
						time: "大约16小时之前",
						title: "1024程序员节，向改变世界的程序员致敬",
						read: "阅读 12429",
						comments:" · 评论 104",
						like:" · 喜欢 618",
						reward :" · 打赏3",
						img: require("../assets/article5.png")
					},
					{
						"have-img":1,
						author : "荣誉市民",
						time: "3天之前",
						title: "为什么写文章会这么难？",
						read: "阅读 2571",
						comments:" · 评论 38",
						like:" · 喜欢 187",
						reward :" · 打赏3",
						img: require("../assets/article6.jpg")
					},
					{
						"have-img":1,
						author : "荣誉市民",
						time: "3天之前",
						title: "为什么写文章会这么难？",
						read: "阅读 2571",
						comments:" · 评论 38",
						like:" · 喜欢 187",
						reward :" · 打赏3",
						img: require("../assets/article6.jpg")
					},
					{
						"have-img":1,
						author : "荣誉市民",
						time: "3天之前",
						title: "为什么写文章会这么难？",
						read: "阅读 2571",
						comments:" · 评论 38",
						like:" · 喜欢 187",
						reward :" · 打赏3",
						img: require("../assets/article6.jpg")
					}
				],
				sortNavArr: ["热门", "时事热闻", "小说精选"	, "摄影游记", "漫画手绘", "签约作者", "新上榜", "七日热门", "三十日热门"
, "日报" , "专题精选", "有奖活动", "简书出版", "简书播客"]
			}
		},
		components : {
			LeftSide,
			Search,
			MyFooter
		},
		computed : {
			adaptiveWidth(){
				return "45%";
			}
		},
		methods:{
			changeStyle(event, index){
				Array.prototype.slice.call(event.currentTarget.parentNode.children).forEach(function(item, index){
					item.classList.remove("active");
				});
				event.currentTarget.classList.add("active");
				this.changeArticleSort(index);
			},
			loadMore(){
				this.articleArr = this.articleArr.concat([
						{
						"have-img":1,
						author : "公子小七",
						time: "大约20小时之前",
						title: "别不信，我们最后可能都和这种人在一起",
						read: "阅读 8085",
						comments:" · 评论 89",
						like:" · 喜欢 212",
						img: require("../assets/article1.jpg")
						},
						{
							"have-img":1,
							author : "北海源",
							time: "1天之前",
							title: "处世观",
							read: "阅读 1249",
							comments:" · 评论 109",
							like:" · 喜欢 68",
							reward :" · 打赏4",
							img: require("../assets/article2.jpeg")
						},
						{
							author : "素衣爱",
							time: "大约21小时之前",
							title: "一个二流大学生的自白",
							read: "阅读 5429",
							comments:" · 评论 122",
							like:" · 喜欢 214",
							reward :" · 打赏2",
						}
					]);
			},
			changeArticleSort(sort){
				switch(sort){
					case 0 :  this.articleArr = [
						{
							"have-img":1,
							author : "公子小七",
							time: "大约20小时之前",
							title: "别不信，我们最后可能都和这种人在一起",
							read: "阅读 8085",
							comments:" · 评论 89",
							like:" · 喜欢 212",
							img: require("../assets/article1.jpg")
						},
						{
							"have-img":1,
							author : "北海源",
							time: "1天之前",
							title: "处世观",
							read: "阅读 1249",
							comments:" · 评论 109",
							like:" · 喜欢 68",
							reward :" · 打赏4",
							img: require("../assets/article2.jpeg")
						},
						{
							author : "素衣爱",
							time: "大约21小时之前",
							title: "一个二流大学生的自白",
							read: "阅读 5429",
							comments:" · 评论 122",
							like:" · 喜欢 214",
							reward :" · 打赏2",
						},
						{
							"have-img":1,
							author : "怀左同学",
							time: "大约4小时之前",
							title: "悟空：我要这天，再遮不住我的眼",
							read: "阅读 2654",
							comments:" · 评论 56",
							like:" · 喜欢 148",
							reward :" · 打赏3",
							img: require("../assets/article3.jpg")
						},
						{
							"have-img":1,
							author : "宋宋的白银时代",
							time: "大约12小时之前",
							title: "女孩如何让自己越来越漂亮",
							read: "阅读 2612",
							comments:" · 评论 12",
							like:" · 喜欢 65",
							img: require("../assets/article4.jpeg")
						},
						{
							"have-img":1,
							author : "wblearn",
							time: "大约16小时之前",
							title: "1024程序员节，向改变世界的程序员致敬",
							read: "阅读 12429",
							comments:" · 评论 104",
							like:" · 喜欢 618",
							reward :" · 打赏3",
							img: require("../assets/article5.png")
						},
						{
							"have-img":1,
							author : "荣誉市民",
							time: "3天之前",
							title: "为什么写文章会这么难？",
							read: "阅读 2571",
							comments:" · 评论 38",
							like:" · 喜欢 187",
							reward :" · 打赏3",
							img: require("../assets/article6.jpg")
						},
						{
							"have-img":1,
							author : "荣誉市民",
							time: "3天之前",
							title: "为什么写文章会这么难？",
							read: "阅读 2571",
							comments:" · 评论 38",
							like:" · 喜欢 187",
							reward :" · 打赏3",
							img: require("../assets/article6.jpg")
						},
						{
							"have-img":1,
							author : "荣誉市民",
							time: "3天之前",
							title: "为什么写文章会这么难？",
							read: "阅读 2571",
							comments:" · 评论 38",
							like:" · 喜欢 187",
							reward :" · 打赏3",
							img: require("../assets/article6.jpg")
						}
					];break;
					case 1: this.articleArr = [
						{
							"have-img":1,
							author : "北海源",
							time: "1天之前",
							title: "处世观",
							read: "阅读 1249",
							comments:" · 评论 109",
							like:" · 喜欢 68",
							reward :" · 打赏4",
							img: require("../assets/article2.jpeg")
						}
					];break;
					case 2: this.articleArr = [
						{
							author : "素衣爱",
							time: "大约21小时之前",
							title: "一个二流大学生的自白",
							read: "阅读 5429",
							comments:" · 评论 122",
							like:" · 喜欢 214",
							reward :" · 打赏2",
						}
					];break;
					case 3: this.articleArr = [
						{
							"have-img":1,
							author : "北海源",
							time: "1天之前",
							title: "处世观",
							read: "阅读 1249",
							comments:" · 评论 109",
							like:" · 喜欢 68",
							reward :" · 打赏4",
							img: require("../assets/article2.jpeg")
						}
					];break;
					case 4: this.articleArr = [
						{
							author : "素衣爱",
							time: "大约21小时之前",
							title: "一个二流大学生的自白",
							read: "阅读 5429",
							comments:" · 评论 122",
							like:" · 喜欢 214",
							reward :" · 打赏2",
						}
					];break;
					case 5: this.articleArr = [
						{
							"have-img":1,
							author : "北海源",
							time: "1天之前",
							title: "处世观",
							read: "阅读 1249",
							comments:" · 评论 109",
							like:" · 喜欢 68",
							reward :" · 打赏4",
							img: require("../assets/article2.jpeg")
						}
					];break;
					case 6: this.articleArr = [
						{
							author : "素衣爱",
							time: "大约21小时之前",
							title: "一个二流大学生的自白",
							read: "阅读 5429",
							comments:" · 评论 122",
							like:" · 喜欢 214",
							reward :" · 打赏2",
						}
					];break;
				}
				
			}
		},
		mounted(){
			setWidth();
		}
	}
	onresize = function(){
		setWidth();
	};
	function setWidth(){
		document.getElementsByClassName("list-container")[0].style.width = window.getComputedStyle(document.getElementsByClassName("page-title")[0],null)["width"];
	}
</script>