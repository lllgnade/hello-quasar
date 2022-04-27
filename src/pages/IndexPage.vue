<script setup>
import { ref } from "vue";
const fruit = ref("apple");
</script>

<template>
  <q-page class="flex flex-center">
    <h2>Hello Quasar!!</h2>
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    {{ fruit }}
    <h4>{{ query }}</h4>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  props: ["query"],
});
</script>
