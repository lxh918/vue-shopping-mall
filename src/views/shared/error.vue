<template>
  <div class="error-page">
    <h2 class="error text-center">{{title}}</h2>
    <md-result-page
      type="lost"
      subtext="点击屏幕，重新加载"
    >
    </md-result-page>
    <p class="btn-box">
      <router-link to="/home">
        <van-button size="large">返回首页</van-button>
      </router-link>
    </p>
  </div>
</template>

<script>
import { Button } from 'vant';
import { ResultPage } from 'mand-mobile'
export default {
  components:{
    [Button.name]: Button,
    [ResultPage.name]: ResultPage
  },
  data(){
    return {
      title:'未知错误',
      detail: ''
    }
  },
  created(){
    let matched = this.$route.matched
    const first = matched[0]
    this.title = first.meta.title
    this.detail = first.meta.detail
  }
}
</script>

<style slot-scope>
.error-page{
  background: #fff;
  min-height: 100vh;
}
h2.error{
  font-weight: bolder;
  margin: 0;
  padding: 42px 0;
}
._404{
  max-width: 80%;
  margin:0 auto;
}
.btn-box{
  padding: 0.8rem;
}
</style>

