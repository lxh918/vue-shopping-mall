<template>
  <div class="user-center">
    <!-- 用户信息 -->
    <van-row class="user-info pd">
      <van-col span="7">
        <div class="user-avatar">
          <img :src="user.avatar" />
        </div>
      </van-col>
      <van-col span="14">
        <p class="user-name">
          {{user.nickName}}
          <van-icon name="search" />
          </p>
        <p class="user-intro">{{user.intro}}</p>
      </van-col>
      <van-col span="3" class="user-setting text-center">
        <van-icon name="setting-o" />
      </van-col>
    </van-row>
    <!-- 订单信息 -->
    <div class="order-info cart pdlr">
      <!-- 头部标题 -->
         <header class="pd">
           <span class="h-left">我的订单</span>
           <router-link to="/"><span class="h-right clearfix">查看全部订单></span></router-link>
         </header> 
         <!-- order图标问题 -->
         <van-row type="flex" justify="center" class='order-list mgt'>
            <van-col span="6" v-for="(item,index) in orders" :key="index" class="pdt">
               <router-link to='/'>
                  <img :src="item.image" alt="">
                  <p>{{item.title}}</p>
                   </router-link>
            </van-col>
         </van-row>
         <!-- 最新物流 -->
         <div class="newlgs">
            <header class="pd">
                <span>最新物流</span>
            </header> 
            <van-swipe :autoplay="3000" class="new-msg pdl"  loop :show-indicators='false'>
              <van-swipe-item  v-for="(item,index) in  news" :key="index">
                  <img :src="item.image" alt="">
                  <span class="mgl">您购买的{{item.title}}已到达<span class="towhere mgl">{{item.Towhere}}</span></span>
                  <span class="mgl state">{{item.state}}</span>
              </van-swipe-item>
          </van-swipe>
         </div>
    </div>
      <!-- 收藏信息 -->
    <div class="collection-info cart pdlr">
      <!-- 头部标题 -->
         <header class="pd">
           <span class="h-left">我的收藏</span>
           <router-link to="/"><span class="h-right clearfix">查看全部收藏></span></router-link>
         </header> 
         <!-- order图标问题 -->
         <van-row type="flex" justify="center" class='order-list mgt'>
            <van-col span="6" v-for="(item,index) in orders" :key="index" class="pdt">
               <router-link to='/'>
                  <img :src="item.image" alt="">
                  <p>{{item.title}}</p>
                   </router-link>
            </van-col>
         </van-row>
           
    </div>
    <!-- 必備工具 -->
    <div class="tool-info cart pdlr">
      <!-- 头部标题 -->
         <header class="pd">
           <span class="h-left">必备工具</span>
           <router-link to="/"><span class="h-right clearfix">查看全部工具></span></router-link>
         </header> 
         <!-- order图标问题 -->
         <van-row type="flex" justify="center" class='order-list mgt'>
            <van-col span="6" v-for="(item,index) in orders" :key="index" class="pdt">
               <router-link to='/'>
                  <img :src="item.image" alt="">
                  <p>{{item.title}}</p>
                   </router-link>
            </van-col>
         </van-row>
          <van-row type="flex" justify="center" class='order-list mgt'>
            <van-col span="6" v-for="(item,index) in orders" :key="index" class="pdt">
               <router-link to='/'>
                  <img :src="item.image" alt="">
                  <p>{{item.title}}</p>
                   </router-link>
            </van-col>
         </van-row>
          
    </div>
    <!-- 其他 -->
    <!-- 底部 -->
    <footer class="pd text-center">
         <img src="../../assets/logo2.png" />
    </footer>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup, Swipe, SwipeItem } from 'vant';
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem
  },
  data(){
    return {
      user:{
        avatar: 'https://goss.vcg.com/cms/image/image/e30090af997440de88122328eb5daf0f.jpg',
        nickName: 'MHalo',
        intro: '春眠不觉晓，处处闻啼鸟',
        age: 18,
        gender: 1
      },
      orders:[
          {
            title:"代付款",
            image:require("../../assets/user/代付款.png")
          },
          {
              title:"代发货",
              image:require("../../assets/user/代发货.png")
          },
          {
              title:"代收货",
              image:require("../../assets/user/待收货.png")
          },
          {
              title:"售后",
              image:require("../../assets/user/售后.png")
          }

      ],
      // 轮播信息
      news:[
        {
          image:"https://img.alicdn.com/bao/uploaded/i4/1950270391/TB1k2sZaY_I8KJjy1XaXXbsxpXa_!!0-item_pic.jpg",
          title:"初见家具装饰摆件",
          Towhere:"郑州市",
          state:"正在派件"
        },
        {
          image:"https://img.alicdn.com/bao/uploaded/i4/1950270391/TB1k2sZaY_I8KJjy1XaXXbsxpXa_!!0-item_pic.jpg",
          title:"初见家具装饰摆件",
          Towhere:"郑州市",
          state:"运输中"
        },
        {
          image:"https://img.alicdn.com/bao/uploaded/i4/1950270391/TB1k2sZaY_I8KJjy1XaXXbsxpXa_!!0-item_pic.jpg",
          title:"初见家具装饰摆件",
          Towhere:"郑州市",
          state:"正在派件"
        },
        {
          image:"https://img.alicdn.com/bao/uploaded/i4/1950270391/TB1k2sZaY_I8KJjy1XaXXbsxpXa_!!0-item_pic.jpg",
          title:"初见家具装饰摆件",
          Towhere:"郑州市",
          state:"运输中"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.user-center{
  .user-info{
    background: #fff;
    height: 88px;
    text-align: left;
    .user-avatar{
      img{
        width: 72px;
        height: 72px;
        border: 8px solid #eee;
        border-radius: 100%;
      }
    }
    .user-name{
      font-weight: bolder;
      font-size: 18px;
      margin:0;
      line-height: 44px;
    }
    .user-intro{
      font-size:12px;
      margin:0;
      line-height: 44px;
    }
    .user-setting{
      font-size:28px;
      line-height: 88px;
    }
  }
  }
  .cart{
    header{
      font-weight: 700;
      font-size: 12px;
      border-bottom: 1px solid #dedede;
      .h-right{
        float: right;
        color: #a19d9d;
      }
    }
    .order-list{
        text-align: center;  
        img{
          width: 20px;
          height: 20px;
        }
    }
    
  }
  .order-info{
      // 最新物流
    .newlgs{
      height: 70px;
      background-color: #dedede;
      border-radius: 7px;
      overflow: hidden;
      .new-msg{
             img{
                width: 25px;
                height: 25px;
                border-radius: 5px;
                vertical-align: middle;
              }
              .towhere{
                color: #f10125;
                font-size: 15px;
                font-weight: 700;
              }   
              .state{
                font-weight: bolder;
              }
      }

    }
  }
  footer{
    img{
      width: 100px;
      height: 30px;
    }
  }
</style>

