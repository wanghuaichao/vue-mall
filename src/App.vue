<template>
  <div id="app">
    <tab-bar></tab-bar>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
<script>
import TabBar from "./components/TabBar/TabBar";
export default {
  name: "app",
  data() {
    return {};
  },
  mounted() {
    
  },
  computed: {},
  components: {
    TabBar
  }
};
</script>
<style lang="less">
@import "./assets/css/less/_mixins.less";
#app {
  width: 100%;
  height: 100%;
  .fade-enter-active {
    position: absolute;
    .animation(anim 0.6s);
  }
}
@keyframes anim {
  from {
    .transform2(translateX(16px));
    opacity: 0;
  }

  to {
    .transform2(translateX(0));
    opacity: 1;
  }
}

@-webkit-keyframes anim {
  from {
    .transform2(translateX(16px));
    opacity: 0;
  }

  to {
    .transform2(translateX(0));
    opacity: 1;
  }
}
</style>
