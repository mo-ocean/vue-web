<template>
  <div id="app">
    <mt-header fixed title="嘿🐷🐷🐷嘿"></mt-header>
    <!-- 设置动画，name时动画前缀，mode是指动画状态，先进入还是先离开 ,appear 动画默认执行一次-->
    <transition name="tabanimate" mode="out-in" appear>
      <router-view/>
    </transition>
    
    <nav class="mui-bar mui-bar-tab">
			<router-link  class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member"> 
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shop"> 
				<span class="mui-icon fa fa-shopping-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search"> 
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  padding: 40px 0 50px 0;
}
.tabanimate-enter {
  transform: translateX(100%);
}
.tabanimate-enter-active {
  transition: all .3s linear;
}
.tabanimate-enter-to {
  transform: translateX(0);
}
.tabanimate-leave {
  transform: translateX(0);
}
.tabanimate-leave-active {
  transition: all .3s linear;
}
.tabanimate-leava-to {
  transform: translateX(-100%);
}
</style>
