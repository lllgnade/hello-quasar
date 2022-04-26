<!-- App.vue : 최상위 컴포넌트 -->
<template>
  <!-- 사용자가 요청한 주소에 따라 App.vue의 router-view 가 바뀜. -->
  <!-- /(루트 경로)일 때 : layouts/MainLayout.vue 를 불러옴 ( 안에 pages/IndexPage.vue 컴포넌트를 내장함) -->
  <!-- 기타 페이지 요청할 때 : pages/ErrorNotFound.vue 를 불러옴 -->
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
