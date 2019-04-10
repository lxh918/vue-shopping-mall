<template>
  <div class="product-card">
    <router-link tag="div" :to="'/item/' + product.id" class="product-card-content">
      <div class="product-img">
        <img :src="product.image" />
      </div>
      <div class="product-detail pd-half">
        <div class="product-name">
          {{product.name | productName}}
        </div>
        <div class="product-tags mgt-mini">
          <van-tag class="mgr-mini" color="#F55555" plain>满减优惠</van-tag>
          <van-tag class="mgr-mini" color="#F55555" plain>美国品牌</van-tag>
        </div>
        <div class="product-sale mgt-half ">
          <van-row>
            <van-col span="10" class="text-left">
              <div class="price">{{product.price | amount}}</div>
            </van-col>
            <van-col span="12" offset="2" class="text-right">
              <div class="sold">{{product.sold | prob}}人购买</div>
            </van-col>
          </van-row>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { Row, Col, Tag  } from 'vant';
export default {
  name:'Product',
  components:{
    [Row.name]:Row,
    [Col.name]:Col,
    [Tag.name]:Tag
  },
  data(){
    return {
      product:this.model
    }
  },
  props:{
    model:{
      type:Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card{
  width:50%;
  float:left;
  position: relative;
  box-sizing: border-box;
  .product-card-content{
    background:#fff;
    // box-shadow: 0 2px 1px -1px rgba(0,0,0,.1), 0 1px 1px 0 rgba(0,0,0,.06), 0 1px 3px 0 rgba(0,0,0,.04);
    .product-img{
      width: 100%;
      padding-top: 100%;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
        margin-top: -100%;
        display: block;
      }
    }
    .product-detail{
      .product-name{
        line-height: 20px;
        text-align: left;
        font-size: 15px;
        height: 40px;
        word-break: break-all;
        overflow: hidden;
      }
      .product-tags{
        text-align: left;
      }
      .product-sale{
        line-height: 24px;
        .price{
          font-size:18px;
          color: #ff0000;
          font-weight: 800;
          font-family: "PingFang SC",miui,system-ui,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,sans-serif;
        }
        .sold{
          color:#a4a4a4;
        }
      }
    }
  }
}

</style>
