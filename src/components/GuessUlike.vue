<template>
  <div class="guess-ulike full-width m-card mgt" v-if="guessUlike && guessUlike.length > 0">
    <div class="m-card-title mgb">
        猜你喜欢<em class="mgl-small">GUESSULIKE</em>
    </div>
    <product :class="['product-card','mgt', index % 2 == 0 ? 'pdr-half' : 'pdl-half']" v-for="(item,index) in guessUlike" :key="item.id" :model="item" />
    <div class="clearfix"></div>
    <slot name="bottom" />
  </div>
</template>

<script>
import Product from "./Product.vue"
export default {
  name: 'GuessUlike',
  components:{
    Product
  },
  data(){
    return {
      guessUlike:[]
    }
  },
  created(){
    this.getGuessUlike();
  },
  methods:{
    getGuessUlike(){
      this.guessUlike = [
        {
          id:1,
          name:'冬季百搭韩版加绒帆布鞋',
          image:'//img.alicdn.com/bao/uploaded/i2/3423947328/O1CN01ZH8Y25240GrFjElQJ_!!3423947328.jpg',
          price:'158.00',
          sold:254
        },
        {
          id:2,
          name:'【年货】Vans 范斯官方女款侧边条纹板鞋|VN0A3MW91WX',
          image:'//img.alicdn.com/bao/uploaded/i4/746866993/O1CN01Jb5nzu21WqBEzeSKL_!!0-item_pic.jpg',
          price:'465.00',
          sold:1438
        },
        {
          id:3,
          name:'冬季秋季男士运动休闲鞋',
          image:'//img.alicdn.com/bao/uploaded/i1/3432882180/O1CN011RyTtFgwG4l5Mx3_!!3432882180.jpg',
          price:'68.00',
          sold:3785
        },
        {
          id:4,
          name:'男鞋冬季白色运动休闲鞋男生鞋子男2018新款帆布鞋男潮鞋小白鞋男',
          image:'//img.alicdn.com/bao/uploaded/i3/3432882180/O1CN01pb4GDQ1RyTttw2wol_!!3432882180.jpg',
          price:'628.00',
          sold:31785
        },
        {
          id:5,
          name:'男士冬季保暖加绒帆布鞋',
          image:'//img.alicdn.com/bao/uploaded/i1/3432882180/O1CN011RyTtDk7X9P73bb_!!3432882180.jpg',
          price:'79.00',
          sold:385
        },
        {
          id:6,
          name:'运动鞋女秋2018新款ins超火的鞋子韩版百搭厚底松糕网红休闲女鞋',
          image:'//img.alicdn.com/bao/uploaded/i3/2258732444/TB2MuU_kY_I8KJjy1XaXXbsxpXa_!!2258732444.jpg',
          price:'148.00',
          sold:2297
        },
        {
          id:7,
          name:'公猴真皮春季韩版平底学生板鞋',
          image:'//img.alicdn.com/bao/uploaded/i2/757742771/O1CN01lgeBsc1WL9zURskyR_!!757742771.jpg',
          price:'99.00',
          sold:1358
        },
        {
          id:8,
          name:'ulzzang鞋子男运动休闲鞋男原宿风冬季男鞋秋季男生帆布鞋男潮鞋',
          image:'//img.alicdn.com/bao/uploaded/i2/3432882180/TB288D0dCzqK1RjSZPxXXc4tVXa_!!3432882180.jpg',
          price:'69.00',
          sold:22
        }
      ];
    }
  }
}
</script>

<style lang="scss" scoped>
.guess-ulike{
  position: relative;
  overflow: hidden;
  min-height: 300px;
  background:transparent;
  &.full-width {
    padding-left:0!important;
    padding-right:0!important;
    &::before{
      width:100%;
      height:48px;
      background-image: linear-gradient( 135deg, #F55555 10%, #FCCF31 100%);
      background-image: linear-gradient( 135deg, #28C76F 10%, #81FBB8 100%);
      transform: unset;
      border-radius: unset;
    }
    .m-card-title{
      position: relative;
      text-align:left;
      padding-left:12px;
      em{
        font-style: normal;
        font-weight: normal;
        color:#027a38;
      }
    }
  }
  z-index: 1;
  &::before{
    content:'';
    position: absolute;
    width: 750px;
    height: 750px;
    border-radius: 100%;
    background-image: radial-gradient(circle,#FCCF31, #F55555);
    top: 0;
    left:0;
    transform: translate(-187.5px,-699.76px);
    z-index: -1;
  }
  .m-card-title{
    position: relative;
    text-align:center;
    em{
      font-style: normal;
      font-weight: normal;
      color:#DE4313;
    }
  }

}
</style>


