
<!-- 精选推荐 -->
<template>
  <div class="culling-recomm m-card mgt" v-if="cullingRecomm && cullingRecomm.length > 0">
    <div class="m-card-title mgb">
        精选推荐<em class="mgl-small">CULLINGRECOMM</em>
    </div>
    <van-row type="flex" justify="space-around">
      <van-col class="pdr-half" span="12">
        <router-link class="recomm-top pd-half" tag="div" :to="cullingRecomm[0].link">
          <p class="van-ellipsis product-name">
            {{cullingRecomm[0].title}}
          </p>
          <p class="van-ellipsis product-desc">
            {{cullingRecomm[0].desc}}
          </p>
          <img class="product-img" :src="cullingRecomm[0].image">
        </router-link>
      </van-col>
      <van-col class="pdl-half" span="12">
        <router-link class="recomm-top pd-half" tag="div" :to="cullingRecomm[1].link">
          <p class="van-ellipsis product-name">
            {{cullingRecomm[1].title}}
          </p>
          <p class="van-ellipsis product-desc">
            {{cullingRecomm[1].desc}}
          </p>
          <img class="product-img" :src="cullingRecomm[1].image">
        </router-link>
      </van-col>
    </van-row>
    <van-row class="mgt" type="flex" justify="space-around">
      <van-col :class="index==2?'':'pdr-half'" span="8" v-for="(item,index) in cullingRecomm.slice(2,5)" :key="index">
        <router-link class="recomm-bottom pd-half" :style="{backgroundImage: 'url(' + item.image + ')'}" tag="div" :to="item.link">
          <img class="product-img" :src="item.image">
          <p class="van-ellipsis product-name">
            {{item.title}}
          </p>
        </router-link>
      </van-col>

    </van-row>
  </div>
</template>

<script>
import {Row, Col,Icon} from 'vant';
export default {
  name:'CullingRecomm',
  components:{
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon
  },
  data(){
    return {
      cullingRecomm:[
        1
      ],
    }
  },
  created(){
    this.getCullingRecomm();
  },
  methods:{
    getCullingRecomm(){
      this.cullingRecomm = [
        {
          title:'空气清新剂',
          desc:'好货不贵',
          image:'//img.alicdn.com/tfs/TB1rGnjA6DpK1RjSZFrXXa78VXa-345-345.png',
          link:'/items/1'
        },
        {
          title:'洗发好物',
          desc:'丝丝顺滑',
          image:'//img.alicdn.com/bao/uploaded/i4/725677994/O1CN01sfIFlp28vIdjWHnfl_!!725677994.jpg',
          link:'/items/2'
        },
        {
          title:'特仑苏纯奶',
          desc:'纯甄纯正',
          image:'//img.alicdn.com/imgextra/i1/725677994/TB2WbiJb25TBuNjSspcXXbnGFXa_!!725677994.jpg',
          link:'/items/3'
        },
        {
          title:'纯甄酸奶',
          desc:'风味口感',
          image:'//img.alicdn.com/imgextra/i2/6000000003809/O1CN01EHyYHI1e0Z6baEJr8_!!6000000003809-0-at.jpg',
          link:'/items/3'
        },
        {
          title:'恒大矿泉水',
          desc:'自然健康',
          image:'//img.alicdn.com/imgextra/i2/6000000002331/TB2RrsiFb1YBuNjSszhXXcUsFXa_!!6000000002331-0-at.jpg',
          link:'/items/3'
        }
      ];
    }
  }
}
</script>

<style lang="scss" scoped>
.culling-recomm{
  background-image: linear-gradient( 135deg, #FD6585 10%, #FFD3A5 100%);
  .m-card-title{
    em{
      font-style: normal;
      font-weight: normal;
      color:#b25007;
    }
  }
  .recomm-top{
    width:100%;
    height:80px;
    // background-position: center center;
    // background-size: auto 100% ;
    // background-repeat: no-repeat;
    background-color: #fff;
    border-radius: 5px;
    position:relative;
    box-sizing: border-box;
    .product-name,.product-desc{
      float:left;
      width:80px;
      text-align:left;
      line-height:20px;
      margin-top:4px;
    }
  }
  .recomm-bottom{
    width:100%;
    background-color: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    .product-img{
      max-height:72px;
    }
    .product-name,.product-desc{
      width:100%;
      text-align:center;
      line-height:20px;
      color:#fe9a94;
      font-weight: normal;
      font-size:12px;
    }
  }
  .product-img{
    max-height:100%;
  }
  .product-name{
    font-size:14px;
    font-weight: bolder;
    color:#333;
    margin:0;
  }
  .product-desc{
    color:#888;
  }
}
</style>
