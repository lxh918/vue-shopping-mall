<template>
    <van-notice-bar v-if="showNotice" class="app-notice" :text="noticeHeader.content" :left-icon="noticeHeader.icon" :mode="noticeHeader.mode" @click.native="noticeClickHandler" />
</template>

<script>
import { NoticeBar  } from 'vant';
export default {
  name: 'GlobalNotice',
  components: {
    [NoticeBar.name]: NoticeBar
  },
  data(){
    return {
      showNotice:false,
      noticeHeader:{
        content:'足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。',
        icon:'volume-o',
        link:'/notice',
        mode:'closeable'
      }
    }
  },
  watch: {
    $route() {
      this.getSate()
    }
  },
  created() {
    this.getSate()
  },
  methods:{
    getSate(){
      let matched = this.$route.matched;
      const route = matched[matched.length - 1]
      this.showNotice = (route.meta || { }).withNotice;
    },
    noticeClickHandler(evt){
      if(evt && evt.target && evt.target.classList.length > 0 && evt.target.classList.contains('van-icon-cross')){
        return
      }
      if(this.noticeHeader && this.noticeHeader.link)
      {
        this.$router.push({
          path: this.noticeHeader.link
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-notice{
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
  background-color: rgba(255, 251, 232, 0.8);
}
</style>
