<style lang="stylus">
	*
		margin 0
		padding 0
	a
		text-decoration none
		color #555
	ul
	ol
		list-style none
	i
	em
		font-style normal
	img
		max-width 100%
		height auto
		border 0
		vertical-align middle
	h1
	h2
	h3
	h4
	h5
	h6
		margin 10px 0
		font-weight bold
		text-rendering optimizelegibility
		line-height 20px
	h1
	h2
	h3
		line-height 40px
	h1
		font-size 38.5px
	h3
		font-size 24.5px
	h5
		font-size 14px
	input
	button
		outline none
	body
		font-size 14px
		line-height 1
		color #555
		font-family Microsoft Yahei
	.blue-link
		color #4094c7
	.btn
		display inline-block
		border-radius 4px
		border 1px solid #555
		border-color #d5d5d5
		vertical-align middle
		cursor pointer
</style>
<template>
  <div id="app">
  	<nav-bar :activeIndex="0"></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
	import NavBar from "./components/NavBar"
	import Home from "./pages/Home"
	export default {
	  name: 'app',
	  data(){
	  	return {
	  	}
	  },
	  components: {
	  	NavBar,
	  	Home
	  }
	}
</script>

