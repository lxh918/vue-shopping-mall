<template>
  <div class="app-wapper">
    <div class="app-header" v-if="!withoutHeader">
      <app-bar>
        <template slot="left">
          <van-icon name="wap-nav" @click="menuHandler" />
        </template>
         <template slot="right">
          <van-icon name="search" @click="searchHandler" />
        </template>
      </app-bar>
    </div>
    <div class="app-content" ref="appContent">
      <app-main />
    </div>
    <div class="app-footer">
      <app-tab-nav :active-tab="activeTab" />
    </div>
  </div>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import AppMain from "./components/AppMain.vue";
import AppTabNav from "./components/AppTabNav.vue";
import { Icon  } from 'vant';
export default {
  data()
  {
    return {
      withHeader: true,
      activeTab: 0
    }
  },
  watch: {
    $route() {
      this.tabAvtive();
    }
  },
  components: {
    AppBar,
    AppMain,
    AppTabNav,
    [Icon.name]: Icon
  },
  created(){
    this.tabAvtive();
  },
  methods:{
    tabAvtive(){
      let matched = this.$route.matched;
      const route = matched[matched.length - 1]
      const meta = (route.meta || {
        tabnav: 1,
        withoutHeader: false
      });
      this.activeTab = meta.tabnav - 1;
      this.withoutHeader = meta.withoutHeader;
    },
    menuHandler(){
      console.info('menu')
    },
    searchHandler(){
      this.$router.push({
        path:'/search'
      })
    }
  }
}
</script>

<style>
.app-header{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 46px;
  z-index: 999;
}
.app-content{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 46px;
}
.app-header~.app-content{
  top: 46px;
}
.app-footer{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  z-index: 998;
}
</style>
