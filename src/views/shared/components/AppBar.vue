<template>
  <div>
    <van-nav-bar :border="false">
      <template slot="title">
        <slot name="title">
          <span v-if="bar.title">{{bar.title}}</span>
          <span v-else>
            <img class="app-logo" src="../../../assets/logo.png">
          </span>
        </slot>
      </template>
      <template slot="left">
        <slot name="left">

        </slot>
      </template>
      <template slot="right">
        <slot name="right">

        </slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { NavBar,Icon } from 'vant';
export default {
  name: 'AppBar',
  data(){
    return {
      bar:null,
      searchKey:'',
      searchOpen:false
    }
  },
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  },
  watch: {
    $route() {
      this.getBar()
    }
  },
  created() {
    this.getBar()
  },
  methods:{
    getBar(){
      let matched = this.$route.matched;
      const route = matched[matched.length - 1]
      this.bar = route.meta || {
        tabnav: 1,
        withoutHeader: 1
      }
    }
  }
}
</script>


<style lang="scss">
.van-nav-bar{
  background: #4963ef;
  .van-icon{
    color: #fff;
    font-size: 18px;
  }
  .van-nav-bar__title{
    color: #fff;
  }
}
.app-logo{
  max-width: 26vw;
  max-height: 42px;
  vertical-align: middle;
}
</style>
