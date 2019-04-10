<template>
  <div class="search-box">
    <form action="/">
      <van-search
        v-model="searchKey"
        placeholder="请输入搜索关键词"
        show-action
        @search="searchHandler"
        @cancel="cancelHandler"
      />
    </form>
    <hcard content-class="nbg" title="历史搜索" v-if="historySearch && historySearch.length > 0">
      <router-link v-for="(item,index) in historySearch" :key="index" :to="'/search_product?key=' + item">
        <van-tag color="#d6d6d6" text-color="#333" >{{item}}</van-tag>
      </router-link>
    </hcard>
    <hcard content-class="nbg" class="mgt" title="热门搜索" v-if="hotSearch && hotSearch.length > 0">
      <router-link v-for="(item,index) in hotSearch" :key="index" :to="'/search_product?key=' + item">
        <van-tag color="#d6d6d6" text-color="#333" >{{item}}</van-tag>
      </router-link>
    </hcard>
  </div>
</template>

<script>
import { Search,Tag   } from 'vant';
export default {
  name:'Search',
  components:{
    [Search.name]:Search,
    [Tag.name]:Tag
  },
  data(){
    return {
      searchKey:'',
      hotSearch:['阿里巴巴', '百度', '腾讯','facebook','谷歌','亚马逊'],
      historySearch:['阿里巴巴', '百度', '腾讯', '美团']
    }
  },
  created(){

  },
  methods:{
    searchHandler(){
      this.$router.push('/search_product?key=' + this.searchKey)
    },
    cancelHandler(){
      if (this.$route.query.goindex === 'true') {
        this.$router.push('/')
      } else {
        this.$router.back(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.search-box{
  .van-tag{
    padding: 6px 12px;
    margin: 0 $size-large-px $size-normal-px 0;
    font-size:12px;
  }
}
</style>

