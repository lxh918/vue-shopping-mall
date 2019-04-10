import Vue from 'vue'
/** 文本框获取焦点-指令 */
Vue.directive('focus', {
  inserted: function (el) {
      el.focus()
  }
});


/** 产品名称-filter */
Vue.filter('productName',(v)=>{
  return (v || '******').replace(/【+/g,'').replace(/】+/g,'|');
});
/** 价格类金融数字-filter */
Vue.filter('amount',(v,precision /** 精度 */)=>{
  var number = Number(v);
  return  '￥' + number.toFixed(precision || 2);
})
/** 数量大概的范围 */
Vue.filter('prob',(v)=>{
  var number = Number(v);
  if(number > 100000) {
    return '10w+';
  }
  if(number > 100000) {
    return Math.round((number / 1000)) + 'k';
  }
  if(number > 1000) {
    return (number / 1000).toFixed(1) + 'k';
  }
  return number;
})


/*** 组件注册 */
import Hcard from '../assemblies/Hcard.vue';
Vue.component('hcard',Hcard)
