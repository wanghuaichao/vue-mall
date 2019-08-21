<template>
  <div class="tabbar_box">
    <router-link :to="item.link"  class="item" v-for="(item,index) in tabbarData" :key="index" active-class="active">
      <p class="icon">
        <i class="iconfont" :class="item.icon"></i>
      </p>
      <p class="title">{{item.title}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      tabbarData: [
        { icon: "icon-shouye", title: "首页", link:'/index'},
        { icon: "icon-fenleiguanli", title: "分类",link:'/classify' },
        { icon: "icon-gouwuche", title: "购物车",link:'/cart' },
        { icon: "icon-04", title: "个人中心",link:'/user' }
      ]
    };
  },
  created() {},
  mounted() {},
  components: {}
};
</script>

<style scoped lang="less">
@import "../../assets/css/less/_mixins.less";
.tabbar_box {
  .display-flex();
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #f5f5f5;
  align-items: center;
  overflow: hidden;
  z-index:999;
  .item {
    height: 50px;
    flex: 1;
    color: #666;
    text-align: center;
    .icon{
       padding-top:2px;
    }
  }
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    content: "";
    width: 200%;
    border-top: 1px solid #d5d5d5;
    .transform2(scale(0.5) translateX(-50%));
    overflow: hidden;
    z-index:999;
  }
  .active{
     color:red;
  }
}
</style>
