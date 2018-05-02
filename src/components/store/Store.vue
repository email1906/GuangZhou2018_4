<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "./common/Header";
import appFooter from "./common/Footer";

export default {
    // 注册子组件,es6语法简写
    components: {
        appHeader,
        appFooter
    }
};
</script>

<style scoped>

</style>