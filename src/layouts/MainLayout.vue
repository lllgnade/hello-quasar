<template>
  <q-layout view="lHh Lpr lFf">
    <!-- 헤더 -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Hello World! </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- drawer -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> 메뉴 </q-item-label>

        <!-- 자식 컴포넌트 -->
        <EssentialLink
          v-for="item in menuItems"
          :key="item.title"
          v-bind="item"
        />
      </q-list>
    </q-drawer>
    <!-- 페이지 컨테이너 -->
    <q-page-container>
      <!-- router에서 설정한 children 컴포넌트 : IndexPage.vue 삽입 -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    caption: "홈페이지",
    icon: "favorite",
    //link - default "#"
  },
  {
    title: "Posts",
    caption: "게시물 조회",
    icon: "school",
    link: "/#/post",
  },
  {
    title: "Post-id",
    caption: "게시물 조회(1234)",
    icon: "record_voice_over",
    link: "/#/post/1245",
  },
  {
    title: "Post-username",
    caption: "게시물 조회(lemon)",
    icon: "code",
    link: "/#/post/lemon",
  },
];

// 이 파일 내부에서 쓸 수 있는 데이터들
export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      menuItems: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
