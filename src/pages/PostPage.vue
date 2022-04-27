<script setup>
import PostComp from "components/PostComp.vue";
</script>

<template>
  <div class="hello">
    <h2 v-if="isSelectAll">Select All Posts</h2>
    <PostComp v-else msg="Hello Post!!" :id="id" :userName="userName" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["id", "userName", "isSelectAll"], // route에서 넘겨지는 파라미터 (props: true) / 정적 값 (props: {mode : "allPost"})
  setup() {},
});
</script>
