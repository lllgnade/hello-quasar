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
      <!-- router : 경로 컴포넌트 -->
      <!-- 라우터에서 설정한 경로에 따라 다른 컴포넌트가 들어감 -->
      <router-view />
      <router-view name="subPage" />
      <Footer />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import Footer from "components/FooterComp.vue";

const linksList = [
  {
    title: "Home",
    caption: "홈페이지",
    icon: "favorite",
    link: "/home", // /home은 /의 alias.
  },
  {
    title: "Posts",
    caption: "게시물 조회",
    icon: "school",
    link: "/post",
  },
  {
    title: "Post-username",
    caption: "게시물 조회(lemon)",
    icon: "code",
    link: "/post/lemon", // /lemon/post로 리다이렉트.
  },
  {
    title: "Post-id",
    caption: "게시물 조회(1234)",
    icon: "record_voice_over",
    link: "/post/1245",
  },
];

// 이 파일 내부에서 쓸 수 있는 데이터들
export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    Footer,
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
