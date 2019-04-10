<template>
  <div class="ShopCar">
    <header class="m-card">
      <div class="m-card-title mgb">
        购物车
        <em class="mgl counter">共{{cartList.length}}件宝贝</em>
        <span class="manage mgr-larger" @click="manage">{{manages}}</span>
      </div>
    </header>
    <!-- 当购物车不为空时 -->
    <content v-if="cartList&&cartList.length>0" class="cards">
      <van-checkbox-group v-model="result" >
        <van-checkbox v-for="(item, index) in cartList" :key="index" :name="index"  class="card-list pdlr pdtb mgt mglr-large" :label-disabled='true'>
          <img :src="item.image" alt="">
          <div class="cart-des mgl van-ellipsis">
              <span>{{ item.title }}</span> 
              <p class="des nmgt">{{item.des}}</p>
              <p class="price">￥{{item.price}}</p>
          </div>
           <van-stepper v-model="item.num"/>  
           <van-icon v-show="ifdelete" name="delete" class="delete" size="20px" color="#fff" @click="deletes(index)"/>
        </van-checkbox>
      </van-checkbox-group>
    </content>
    <!-- 当购物车为空时 -->
    <content v-if="cartList.length==0">
      <div
        class="md-example-child md-example-child-result-page md-example-child-result-page-3 mgt-larger"
      >
        <md-result-page
          class="customized"
          img-url="http://hbimg.b0.upaiyun.com/e1b1467beea0a9c7d6a56b32bac6d7e5dcd914f7c3e6-YTwUd6_fw658"
          text="购物车竟然是空的..."
          subtext
        ></md-result-page>
      </div>
    </content>
    
  </div>
</template>
<script>
import { ResultPage } from "mand-mobile";
import { Checkbox, CheckboxGroup,Stepper,Icon ,Button,Dialog} from "vant";
import Bus from '../../Bus.js'
export default {
  name: "ShopCar",
  data() {
    return {
      checked:false,
      ifdelete:false,
      manages:"管理",
      cartList: [
        {
          id:1,
          title: "初见家具装饰摆件初见家具装饰摆件",
          des:"标准版",
          image:
            "https://img.alicdn.com/bao/uploaded/i4/1950270391/TB1k2sZaY_I8KJjy1XaXXbsxpXa_!!0-item_pic.jpg",
            price:20,
            num:1
        },
        {
          id:2,
          title:'简约酒柜装饰品',
          des:"标准版",
          image:'https://img.alicdn.com/bao/uploaded/i2/755566583/O1CN0139jeCT1yV3mxp8B0h_!!0-item_pic.jpg',
           price:10,
           num:1
        },
        { 
          id:3,
          title:'天鹅家具装饰品',
          des:"标准版",
          image:'https://img.alicdn.com/bao/uploaded/i3/2246838967/TB1dh9Puv1TBuNjy0FjXXajyXXa_!!0-item_pic.jpg',
           price:10,
           num:1
        },
        {
          id:4,
          title:'天鹅家具装饰品',
          des:"标准版",
          image:'https://img.alicdn.com/bao/uploaded/i3/2246838967/TB1dh9Puv1TBuNjy0FjXXajyXXa_!!0-item_pic.jpg',
           price:10,
           num:1
        },
        {
          id:5,
          title:'天鹅家具装饰品',
          des:"标准版",
          image:'https://img.alicdn.com/bao/uploaded/i3/2246838967/TB1dh9Puv1TBuNjy0FjXXajyXXa_!!0-item_pic.jpg',
           price:10,
           num:1
        },{
          id:6,
          title:'天鹅家具装饰品',
          des:"标准版",
          image:'https://img.alicdn.com/bao/uploaded/i3/2246838967/TB1dh9Puv1TBuNjy0FjXXajyXXa_!!0-item_pic.jpg',
           price:69.7,
           num:1
        },
        {
          id:7,
          title:'天鹅家具装饰品',
          des:"标准版",
          image:'https://img.alicdn.com/bao/uploaded/i3/2246838967/TB1dh9Puv1TBuNjy0FjXXajyXXa_!!0-item_pic.jpg',
           price:10.5,
           num:1
        }

      ],
      result:[],
      counter:0
    };
  },
  components: {
    [ResultPage.name]: ResultPage,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Stepper.name]:Stepper,
    [Icon.name]:Icon,
    [Button.name]:Button,
    [Dialog.name]:Dialog,
  },
  created(){
      Bus.$on("changeChecked",val=>{
            this.checked=val
            this.allcheck();
      })
  },
  watch:{
      result(){
        if(this.result.length==0){
            this.checked=false;
        } 
        if(this.result.length==this.cartList.length){
            this.checked=true
        }else{
           this.checked=false;
        }
        Bus.$emit("sendResult",this.checked)
      },
      ammounts(){
         Bus.$emit("sendAmmount",this.counter)
      },
      cartList(){
        if(this.cartList.length==0){
          this.manages="管理"
        }
      }
  },
  computed:{
      ammounts(){
         this.counter=0;
          this.result.forEach((item)=>{
               this.counter+= Math.floor((this.cartList[item].price*this.cartList[item].num)*10)/10
               
          })
          return this.counter;
      }
  },
  methods:{
    // 管理
    manage(){
      if(this.manages=="管理"){
          this.ifdelete=true;
          this.manages="完成"
      }else{
        this.ifdelete=false;
        this.manages="管理"
      }
    },
    // 删除
    deletes(index){
      this.result=[];
        Dialog.confirm({
        message: '确定删除吗?'
      }).then(() => {
        this.cartList.splice(index,1);
      }).catch(() => {
        // on cancel
      });
      },
    allcheck(){
        if(this.checked==true){
           this.result.length=0;
          this.cartList.forEach((item,index)=>{
                this.result.push(index)
          })
          if(this.manages=="完成"){
              
          }
        }
        if(this.checked==false){
            this.result=[];
        } 
    }
     
  }
}
</script>
<style lang='scss' scoped>
.ShopCar{
header {
  width: 100%;
  height: 150px;
  background-image: linear-gradient(135deg, #736efe 10%, #5efce8 100%);
  .counter {
    font-weight: normal;
    font-size: 12px;
  }
  .manage{
    float:right;
  }
}
.cards {
  position: relative;
  top: -120px;
  .card-list {
   background-image: linear-gradient(135deg, #adabf0 10%, #91e4d9 100%);
    border-radius: 17px;
    position: relative;
    font-size: 13px;
    img{
      width: 60px;
      height: 60px;
      border-radius: 5px;
      vertical-align: top;
    }
    .cart-des{
      width: 100px;
      position: absolute;
      top: 10px;
      left: 95px;
      .price{
        color: #f40;
        font-weight: 700;
        margin-top:-5px;
      }
      .des{
        color: #dedede;
      }
    }
    .van-stepper{
      position: absolute;
      right: 20px;
      top:10px;
    }
    .delete{
        position: absolute;
        right: 15px;
        bottom:10px;
    }
  }
 
}

}
</style>