<template>
  <div class="home-wapper pdb">
    <!-- 轮播图 -->
    <div class="carousel-figures-wapper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in carouselFigures" :key="index" >
          <img class="carousel-img" :src="image"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 分类/栏目分发入口 -->
    <div class="entry-branch-wapper m-card full-width">
      <van-row type="flex" justify="space-around">
        <van-col v-for="(branch,index) in entryBranch" :key="index">
          <router-link :to="branch.link" tag="div" class="_branch">
            <p class="_branch_icon">
              <van-icon :name="branch.icon" />
            </p>
            <p class="_branch_text">
              {{ branch.title }}
            </p>
          </router-link>
        </van-col>
      </van-row>
    </div>
    <!-- 预留的灵活空间 -->
    <div class="reserve-flexible m-card mgt" v-if="false">
    </div>
    <!-- 限时抢购 -->
    <div class="time-limit-sale m-card mgt" v-if="false"></div>
    <!-- 新品上架:后台添加商品的时候，选择添加到新品上架 -->
    <new-arrivals />
    <!-- 精选推荐 -->
    <culling-recomm />
    <!-- 猜你喜欢 -->
    <guess-ulike>
      <template slot="bottom">
        <div class="guess-ulike-bottom mgt-half text-center">
          <span class="text">
            <em><i></i>到底了，再拉裤子都掉啦</em>
          </span>
        </div>
      </template>
    </guess-ulike>
    <!-- 品牌介绍 -->
    <div class="mall-brand pdtb" >
      <van-row>
        <van-col class="brand pdr van-hairline--right" span="12">
          <h1 class="text-right">河南叮当互动</h1>
          <p class="text-right">为技术，为创意</p>
        </van-col>
        <van-col class="pdl" span="12">
          <p class="logo text-left">
            <img src="../../assets/logo2.png" />
          </p>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import NewArrivals from "../../components/NewArrivals";
import CullingRecomm from "../../components/CullingRecomm";
import GuessUlike from "../../components/GuessUlike";
import {Swipe, SwipeItem,Lazyload,Row, Col,Icon} from 'vant';
export default {
  name: 'Home',
  components: {
    NewArrivals,
    CullingRecomm,
    GuessUlike,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon
  },
  data(){
    return {
      carouselFigures:[
        'http://img.henandingdang.com/uploadfiles/images/201711/29/14_568026_25.jpg',
        'http://img.henandingdang.com/uploadfiles/images/201711/29/14_af354c_23.jpg',
        'http://img.henandingdang.com/uploadfiles/images/201810/26/11_1ac7b1_14.jpg'
      ],
      entryBranch:[
        {
          title:'推荐商品',icon:'//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg',link:'/home'
        },
        {
          title:'优惠兑换',icon:'//img.alicdn.com/tfs/TB1faWZqhGYBuNjy0FnXXX5lpXa-100-100.png',link:'/home'
        },
        {
          title:'新年大礼',icon:'//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg',link:'/home'
        },
        {
          title:'邀请好友',icon:'//img.alicdn.com/tfs/TB1EMREqbSYBuNjSspiXXXNzpXa-100-100.png',link:'/user'
        }
      ],
      timeLimitSale:[],
      guessUlike:[],
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-figures-wapper{
  .van-swipe{
    height:180px;
  }
  &.boxed{
    padding:12px;
    .van-swipe{
      box-shadow: 0 3px 5px -1px rgba(73, 99, 239, 0.24), 0 5px 8px 0 rgba(73, 99, 239, 0.2), 0 1px 14px 0 rgba(73, 99, 239, 0.16);
      border-radius: 8px;
      overflow: hidden;
    }
  }
}
.entry-branch-wapper{
  ._branch{
    p{
      margin:0;
    }
    ._branch_icon{
      font-size:36px;
      line-height: 42px;
    }
    ._branch_text{
      font-size:12px;
      color:#888;
    }
  }
}
.carousel-img{
  width: 100vw;
  min-height: 100%;
}

.guess-ulike-bottom{
  line-height: 30px;
  span.text{
    padding: 0 12px;
    box-sizing: border-box;
    margin: 0 auto;
    position: relative;
    z-index: 0;
    &::before{
      content:'';
      position: absolute;
      width:100%;
      height:1px;
      top:50%;
      left:0;
      transform: scaleY(0.5);
      background-color: #888;
      z-index: -1;
    }
    i{
      display: inline-block;
      width: 24px;
      height: 12px;
      overflow: hidden;
      background: url("../../assets/icon_smile.png") center center no-repeat;
      background-size: contain;
      vertical-align: middle;
    }
    em{
      background-color: #f5f7f9;
      display: inline-block;
      padding:0 3px;
    }
  }
}

.mall-brand{
  width: 100%;
  line-height: 18px;
  background: #fff;
  margin-bottom: -12px;
  .van-cell{
    background-color: transparent;
  }
  h1{
    font-size:14px;
    color:#f18916;
    margin:0;
  }
  p{
    color:#fbc311;
    margin:0;
    &.logo{
      img{
        max-height:32px;
      }
    }
  }
}
</style>
