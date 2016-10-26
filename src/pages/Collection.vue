<style scoped lang="stylus">
	.collection
		margin-left 170px
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
				width 42%
				height 52px
			.list-container
				padding-top 52px
				.sort-nav
					padding 9px 0 0 35px
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
					padding-left 35px
					li
						position relative
						line-height 20px
						padding 15px 0 10px
						border-bottom 1px dashed #d9d9d9
						> a
							float left
							width 40px
							height 40px
							border-radius 50%
							img
								border-radius 50%
						.collection-info
							position relative
							margin-left 55px
						h5
							margin 0 0 3px
						.btn
							position absolute
						p
							color #999
							font-size 11px
						.desc
							padding-right 120px
							margin-bottom 3px
							font-size 12px
			
</style>
<template>
	<div class="collection">
		<leftSide :options="leftSideOptions"></leftSide>
		<div class="main-con">
			<div class="page-title">
				<search :wrapBoxHeight="pageTitHeight"></search>

			</div>
			<div class="list-container">
				<div class="sort-nav">
						<a :class="{active: index == 0}" v-for="(item, index) of sortNavArr" v-text="item" @click="changeStyle($event)"></a>
				</div>
				<ul class="article-list">
					<li v-for="item of articleArr">
						<a><img :src="item.avatar"></a>
						<div class="collection-info">
							<h5>
								<a v-text="item.title"></a>
							</h5>
							<div class="btn"></div>
							<p class="desc" v-text="item.desc"></p>
							<p>
								<a class="blue-link" v-text="item.articles"></a><span v-text="item.follower"></span>
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import LeftSide from '../components/LeftSide'
	import Search from '../components/Search'
	export default {
		data(){
			return {
				pageTitHeight: 50,
				leftSideOptions: {
					title : "专题",
					subTit : "让思想汇聚、流传",
					desc : "专题的内容由多位写作者提供",
					btnName : "新建专题",
					img : require("../assets/dailyImg2.jpg")
				},
				sortNavArr: ["热门", "推荐", "城市"],
				articleArr: [
					{
						avatar: require("../assets/collection1.png"),
						title: "首页投稿",
						desc: "玩转简书的第一步，从这个专题开始。想上首页热门榜么？好内容想被更多人看到么？来投稿吧！如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。投稿必须原创。如果发现有非...",
						articles: "110957篇文章",
						follower: " · 136.2K人关注"
					},
					{
						avatar: require("../assets/collection1.png"),
						title: "首页投稿",
						desc: "玩转简书的第一步，从这个专题开始。想上首页热门榜么？好内容想被更多人看到么？来投稿吧！如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。投稿必须原创。如果发现有非...",
						articles: "110957篇文章",
						follower: " · 136.2K人关注"
					},
					{
						avatar: require("../assets/collection1.png"),
						title: "首页投稿",
						desc: "玩转简书的第一步，从这个专题开始。想上首页热门榜么？好内容想被更多人看到么？来投稿吧！如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。投稿必须原创。如果发现有非...",
						articles: "110957篇文章",
						follower: " · 136.2K人关注"
					},
					{
						avatar: require("../assets/collection1.png"),
						title: "首页投稿",
						desc: "玩转简书的第一步，从这个专题开始。想上首页热门榜么？好内容想被更多人看到么？来投稿吧！如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。投稿必须原创。如果发现有非...",
						articles: "110957篇文章",
						follower: " · 136.2K人关注"
					},
					{
						avatar: require("../assets/collection1.png"),
						title: "首页投稿",
						desc: "玩转简书的第一步，从这个专题开始。想上首页热门榜么？好内容想被更多人看到么？来投稿吧！如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。投稿必须原创。如果发现有非...",
						articles: "110957篇文章",
						follower: " · 136.2K人关注"
					},
					{
						avatar: require("../assets/collection1.png"),
						title: "首页投稿",
						desc: "玩转简书的第一步，从这个专题开始。想上首页热门榜么？好内容想被更多人看到么？来投稿吧！如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。投稿必须原创。如果发现有非...",
						articles: "110957篇文章",
						follower: " · 136.2K人关注"
					},
					{
						avatar: require("../assets/collection1.png"),
						title: "首页投稿",
						desc: "玩转简书的第一步，从这个专题开始。想上首页热门榜么？好内容想被更多人看到么？来投稿吧！如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。投稿必须原创。如果发现有非...",
						articles: "110957篇文章",
						follower: " · 136.2K人关注"
					},
					{
						avatar: require("../assets/collection1.png"),
						title: "首页投稿",
						desc: "玩转简书的第一步，从这个专题开始。想上首页热门榜么？好内容想被更多人看到么？来投稿吧！如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。投稿必须原创。如果发现有非...",
						articles: "110957篇文章",
						follower: " · 136.2K人关注"
					},
					{
						avatar: require("../assets/collection1.png"),
						title: "首页投稿",
						desc: "玩转简书的第一步，从这个专题开始。想上首页热门榜么？好内容想被更多人看到么？来投稿吧！如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。投稿必须原创。如果发现有非...",
						articles: "110957篇文章",
						follower: " · 136.2K人关注"
					}
				]
			}
		},
		components : {
			LeftSide,
			Search,
		},
		computed : {
			adaptiveWidth(){
				return "45%";
			}
		},
		methods:{
			changeStyle(event){
				Array.prototype.slice.call(event.currentTarget.parentNode.children).forEach(function(item, index){
					item.classList.remove("active");
				});
				event.currentTarget.classList.add("active");
			},
			loadMore(newArticlesArr){
				this.articleArr = this.articleArr.concat([
						{
							avatar: require("../assets/collection1.png"),
							title: "首页投稿",
							desc: "玩转简书的第一步，从这个专题开始。想上首页热门榜么？好内容想被更多人看到么？来投稿吧！如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。投稿必须原创。如果发现有非...",
							articles: "110957篇文章",
							follower: " · 136.2K人关注1221"
						}
					]);
			}
		},
		mounted(){
			setWidth();
			this.loadMore();
			window.onscroll= ()=>{
			    setTimeout(() =>{
			      this.loadMore();
			    }, 100);
			  }
		}
	}
	onresize = function(){
		setWidth();
	};
	function setWidth(){
		document.getElementsByClassName("list-container")[0].style.width = window.getComputedStyle(document.getElementsByClassName("page-title")[0],null)["width"];
	}
	
</script>