<template>
  <section class="app-main">
    <!-- 通知栏 -->
    <global-notice />
    <md-scroll-view class="main-scroller" :auto-reflow="true" :scrolling-x="false" >
      <transition name="fade-transform" mode="out-in">
        <router-view/>
      </transition>
    </md-scroll-view>
    <all-check v-if="$route.path==='/cart'"/>
  </section>
</template>

<script>
import GlobalNotice from "../../../components/GlobalNotice";
import { ScrollView } from 'mand-mobile';
import AllCheck from "../../../components/Allcheck"
export default {
  name: 'AppMain',
  components: {
    GlobalNotice,
    [ScrollView.name]: ScrollView,
     AllCheck
  },
  data(){
    return {

    }
  },
  methods:{
    reflowScroller(){
      console.log("llll");
    }
  }
}
</script>

<style scoped lang="scss">
.app-main {
  max-height: 100%;
  height: 100%;
  .main-scroller{
    max-height: 100%;
    height: 100%;
    background: #f5f7f9;
  }
}
</style>
