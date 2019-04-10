<!-- 新品上架:后台添加商品的时候，选择添加到新品上架 -->
<template>
  <div class="new-arrivals m-card mgt" v-if="newArrivals && newArrivals.length > 0">
      <div class="m-card-title mgb">
        新品上架<em class="mgl-small">NEWARRIVALS</em>
      </div> 
      <van-row>
        <van-col span="8">
          <router-link class="new-arrivals-left" :style="{backgroundImage: 'url(' + newArrivals[0].image + ')'}" tag="div" :to="newArrivals[0].link">
            <span class="van-ellipsis product-name">
              {{newArrivals[0].title}}
            </span>
          </router-link>
        </van-col>
        <van-col span="16" class="new-arrivals-right-box pdl">
          <router-link class="new-arrivals-right" :style="{backgroundImage: 'url(' + newArrivals[1].image + ')'}" tag="div" :to="newArrivals[1].link">
            <span class="van-ellipsis product-name">
              {{newArrivals[1].title}}
            </span>
          </router-link>
          <router-link class="new-arrivals-right" :style="{backgroundImage: 'url(' + newArrivals[2].image + ')'}" tag="div" :to="newArrivals[2].link">
            <span class="van-ellipsis product-name">
              {{newArrivals[2].title}}
            </span>
          </router-link>
        </van-col>
      </van-row>
    </div>
</template>

<script>
import {Row, Col,Icon} from 'vant';
export default {
  name:'NewArrivals',
  components:{
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon
  },
  data(){
    return {
      newArrivals:[],
    }
  },
  created(){
    this.getNewArrivals();
  },
  methods:{
    getNewArrivals(){
      this.newArrivals = [
        {
          title:'初见家具装饰摆件',
          image:'https://img.alicdn.com/bao/uploaded/i4/1950270391/TB1k2sZaY_I8KJjy1XaXXbsxpXa_!!0-item_pic.jpg',
          link:'/items/1'
        },
        {
          title:'天鹅家具装饰品',
          image:'https://img.alicdn.com/bao/uploaded/i3/2246838967/TB1dh9Puv1TBuNjy0FjXXajyXXa_!!0-item_pic.jpg',
          link:'/items/2'
        },
        {
          title:'简约酒柜装饰品',
          image:'https://img.alicdn.com/bao/uploaded/i2/755566583/O1CN0139jeCT1yV3mxp8B0h_!!0-item_pic.jpg',
          link:'/items/3'
        }
      ];
    }
  }
}
</script>

<style lang="scss" scoped>
.new-arrivals{
  background-image: linear-gradient( 135deg, #736EFE 10%, #5EFCE8 100%);
  .m-card-title{
    em{
      font-style: normal;
      font-weight: normal;
      color:#0de1c6;
    }
  }
  .new-arrivals-left{
    width:100%;
    height:200px;
    background-position: center center;
    background-size: auto 100% ;
    background-repeat: no-repeat;
    background-color: #fff;
    border-radius: 5px;
    position:relative;
  }
  .new-arrivals-right{
    width:100%;
    height:94px;
    background-position: center center;
    background-size: 100%  auto;
    background-repeat: no-repeat;
    background-color: #fff;
    border-radius: 5px;
    position:relative;
    &:first-child{
      margin-bottom: 12px;
    }
  }
  .product-name{
    position: absolute;
    left:0;
    bottom: 0;
    width:100%;
    line-height: 20px;
    font-size:14px;
    padding:2px 8px;
    text-align: left;
    color:#fff;
    box-sizing: border-box;
  }
}
</style>
