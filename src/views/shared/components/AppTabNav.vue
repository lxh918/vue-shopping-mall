<template>
  <van-tabbar v-model="activeTabNav" active-color="#4963ef">
    <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="wap-nav" to="/category">分类</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/user">我</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  components:{
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem
  },
  props:{
    activeTab: {
      type:Number,
      default: 0
    }
  },
  computed:{
    activeTabNav: {
      get(){
        return this.activeTab;
      },
      set(){

      }
    }
  },
  data(){
    return {

    }
  }
}
</script>
