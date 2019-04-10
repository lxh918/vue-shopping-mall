<template>
  <div class="hcard">
    <div :class="['hcard-title',titleClass]" v-if="title">
      {{title}}
    </div>
    <div :class="['hcard-content',contentClass]" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'hcard',
  props:{
    title:{
      type:String
    },
    titleClass:{
      type:String
    },
    contentClass:{
      type:String
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.hcard{
  .hcard-title{
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    color: rgba(69,90,100,.6);
    padding: #{$size-larger-px} $size-normal-px $size-half-px;
  }
  .hcard-content{
    background: #fff;
    padding: $size-half-px $size-normal-px $size-normal-px $size-normal-px;
  }
}
</style>

