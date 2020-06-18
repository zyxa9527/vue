<template>
  <div>
    <div class="my-nav">
      <router-link :to="{ path: '/hello' }">Hello</router-link>
      <router-link :to="{ name: 'ctof' }">CtoF</router-link>
      <router-link :to="{ name: 'learnComponent' }">learnComponent</router-link>
      <router-link :to="{ name: 'count' }">count</router-link>
    </div>

    <!-- 轉跳後所載入的 component 最後會顯示在此 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.my-nav {
  position: fixed;
  top: 60px;
  padding: 0 10px;
}
.my-nav a {
  display: block;
  margin-bottom: 10px;
}
</style>
