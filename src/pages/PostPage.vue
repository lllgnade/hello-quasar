<script setup>
import PostComp from "components/PostComp.vue";
</script>

<template>
  <div class="hello">
    <PostComp msg="Hello Post!!" />
  </div>
  <!--라우터에서 설정한 Children Component-->
  <router-view></router-view>
</template>
