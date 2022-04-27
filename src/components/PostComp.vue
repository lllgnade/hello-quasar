<script setup>
import { ref, reactive, computed, watch, onMounted } from "vue";
import ChildComp from "components/ChildComp.vue";

const todoId = ref(1);
const todoData = ref(null);

// Ajax(fetch) 통신
async function fetchData() {
  todoData.value = null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  todoData.value = await res.json();
}

/*
fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then((response) => {
                    if(response.ok){
                        return response.json();
                    }
                    throw new Error('Network response was not ok');
                })
                .then((json) => {
                    this.posts.push({
                        userId: json.userId,
                        title: json.title,
                        body: json.body
                    });
                })
                .catch((error) => {
                    console.log(error);
                })
*/

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  msg: String,
  id: Number,
  userName: String,
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <p v-if="id">
    {{ "포스트 번호 : " + id }}
  </p>
  <p v-if="userName">
    {{ "유저 네임 : " + userName }}
  </p>
  <hr />
  <ChildComp msg="child"> Parent에서 보낸 슬롯! </ChildComp>
</template>
