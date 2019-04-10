<template>
  <div class="detail">
    <md-scroll-view class="main-scroller" :auto-reflow="true" :scrolling-x="false" style="height:100%">
         <img :src="pDetail.image" alt="">
         <!-- 返回按钮 -->
         <div @click="back" class="back text-center">
           <van-icon name="arrow-left" size="15px"/>
         </div>
         <p class="price pdl-small">￥{{pDetail.price}}</p>
         <p class="title pdl-small">{{pDetail.name}}</p>
         <van-row class="little-msg pdl-small"  type="flex" justify="space-between">
            <van-col span="8">月销: {{pDetail.sold}}+</van-col>
            <van-col span="8">快递: 0.00</van-col>
            <van-col span="8">江苏苏州</van-col>
          </van-row> 
          <!-- 优惠券-->
           <van-cell value="领券" icon="balance-pay" is-link class='mgt' @click="ifShowpop">
            <template slot="title">
              <span class="custom-text">优惠券</span>
            </template>
          </van-cell>
          <!-- 弹框 -->
          <van-popup v-model="show" position="bottom" class="popup"> 
               <ul class="pd">
                 <li v-for="(item,index) in Coupon" :key="index" class="coupon mgt pd">
                      <p><span>￥{{item.price}}</span>店铺优惠券</p>
                      <p>满{{item.full}}使用</p>
                      <p>有效期{{item.time}}</p>
                      <div class="rush text-right">立即抢购</div>
                 </li>
               </ul>
          </van-popup>
          <!-- 服务 -->
           <van-collapse v-model="activeNames">
             <van-collapse-item title="服务" name="1">
            破损包退~正品保证~七天无理由退换~极速退款~赠运费险
          </van-collapse-item>
           </van-collapse>
           <!-- 选择 -->
            <van-cell value="" is-link class='mgt' @click="ifShowChance">
            <template slot="title">
              <span class="custom-text">选择</span>
            </template>
          </van-cell>
          <van-popup v-model="showChance" position="bottom" class="popup chance pdt pdl-larger"> 
               <img :src="pDetail.image" alt="">
               <div class="chanceMsg pdl">
                     <p class="c-price">￥{{pDetail.price}}</p>
                      <p>配送至:河南省</p>
               </div>
               <div class="clearfix"></div>
               <div>
                 <p>尺寸</p>
                  <van-button plain type="danger" size="small" >37</van-button>
                  <van-button plain type="danger" size="small" class="mgl">38</van-button>
                   <van-button plain type="danger" size="small" class="mgl">39</van-button>
                    <van-button plain type="danger" size="small" class="mgl">40</van-button>
               </div>
               <div>
                 <p>颜色</p>
                  <van-button plain type="danger" size="small" >红色</van-button>
                  <van-button plain type="info" size="small" class="mgl">蓝色</van-button>
                   <van-button plain type="primary" size="small" class="mgl">绿色</van-button>
               </div>
               <div>
                 <p>购买数量</p>
                  <van-stepper v-model="value" class="c-step"/>
               </div>
          </van-popup>
           </md-scroll-view>
          <!-- 底部 -->
           <van-goods-action>
              <van-goods-action-mini-btn
                icon="chat-o"
                text="客服"
                @click="onClickserve"
              />
              <van-goods-action-mini-btn
                icon="cart-o"
                text="购物车"
                @click="onClickCar"
              />
              <van-goods-action-big-btn
                text="加入购物车"
                @click="onClickBigBtn"
              />
              <van-goods-action-big-btn
                primary
                text="立即购买"
                @click="onClickBigBtn"
              />
            </van-goods-action>
         
  
  
  </div>
  
</template>
<script>
import { Row, Col, GoodsAction,GoodsActionBigBtn, GoodsActionMiniBtn,Cell,Popup, Collapse, CollapseItem , Button,Stepper,Icon} from 'vant';
import { ScrollView } from 'mand-mobile';
export default {
  name:'detail',
  data(){
    return {
        pDetail:{},
        guessUlike:[],
        show: false,
        showChance:false,
        Coupon:[
          {
            price:"5",
            full:99,
            time:"2019.04.01-2019.04.30"
          },
          {
            price:"10",
            full:199,
            time:"2019.04.01-2019.04.16"
          },
          {
            price:"20",
            full:299,
            time:"2019.04.01-2019.04.22"
          },
        ],
        activeNames: ['2'],
        value:1
    }
  },
  created() {
     this.getDetail();
  },
  components:{
      [Row.name]:Row,
      [Col.name]:Col,
      [GoodsAction.name]:GoodsAction,
      [GoodsActionBigBtn.name]:GoodsActionBigBtn,
      [GoodsActionMiniBtn.name]:GoodsActionMiniBtn,
      [Cell.name]:Cell,
      [Popup.name]:Popup ,
      [Collapse.name]:Collapse,
      [CollapseItem.name]:CollapseItem,
      [Button.name]: Button,
      [Stepper.name]:Stepper,
      [Icon.name]:Icon,
      [ScrollView.name]: ScrollView,
  },
  methods: {
      getDetail(){

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
      this.guessUlike.forEach((item,index) => {
            if(item.id==this.$route.params.id){
                  this.pDetail=item
            }
      });
      },
      onClickCar() {
           this.$router.push("/cart")
      },
      onClickserve(){

      },
      onClickBigBtn() {
        Toast('点击按钮');
      },
      ifShowpop(){
          this.show=true
      },
      ifShowChance(){
           this.showChance=true
      },
      back(){
        this.$router.go(-1);
      }
  },
  
}
</script>
<style lang='scss' scoped>
  .detail{
      img{
        width: 100%;
        height: 350px;
      }
      .back{
        width: 30px;
        height: 30px;
       background-color:  rgba(0,0,0, 0.4);
       position:fixed;
       top: 20px;
       left: 10px;
       line-height: 35px;
       border-radius: 50%;
       color: #fff;
      }
      .price{
        font-size: 15px;
        color: #f10125;
      }
      .title{
        font-size: 16px;
        font-weight: 700;
         
      }
      .little-msg{
          color:#a39d9d;
          font-weight: 700;
      }
      .popup{
        height: 500px;
        background-color: #fff;
        .coupon{
            background-color: rgb(240, 115, 70);
            border-radius: 17px;
            color: #fff;
            font-size: 12px;
            .rush{
              color: rgb(230, 230, 223);
              font-size: 15px;
              font-weight: 700;
            }
        }
      }
      .chance{
        height: 400px;
        img{
          width: 60px;
          height: 60px;
          float: left;
        }
        .chanceMsg{
            float:left;
            .c-price{
              color: #f10125;
              font-size: 15px;
            }
           
        }
       
      }
  }
</style>