<template>
  <div class="pdl-larger allchecked">
        <van-checkbox v-model="checked" @click="allcheck">全选</van-checkbox>
          <div class="allcount">
              <span>合计:￥{{ammounts}}</span>
              <van-button type="info" class="sub mgl-large">提交</van-button>
        </div>
  </div>
  
</template>
<script>
import {Checkbox,Button} from 'vant'
import Bus from "../Bus.js"
export default {
  name:'allcheck',
  data(){
    return {
        checked:false,
        ammounts:0
    }
  },
  created(){
     Bus.$on("sendResult",val=>{
       this.checked=val
     })
     Bus.$on("sendAmmount",val=>{
       this.ammounts=val
     })
  },
  components:{
      [Checkbox.name]: Checkbox,
      [Button.name]:Button
  },
  methods:{
      allcheck(){
        Bus.$emit('changeChecked',this.checked)
      }
  }
  
}
</script>
<style lang='scss' scoped>
    .allchecked{
        position: fixed;
        bottom:50px;
        left:0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        z-index: 1;
        background-color: rgba(255, 251, 232, 0.8);
        .allcount{
             position:absolute;
             right: 30px;
             top:5px;
             .sub{
                  border-radius: 7px;
                  height: 30px;
                  line-height: 30px;
        }
        }
       
} 
</style>