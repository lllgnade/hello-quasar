const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "post",
        name: "posts",
        component: () => import("pages/PostPage.vue"),
      },
      {
        // Children도 '/'부터 시작하면 루트 경로부터 설정됨. (/dhlee/post)
        path: "/:userName/post", //userName 파라미터.
        name: "postByUserName",
        component: () => import("pages/PostPage.vue"),
      },
      {
        //  '/' 안 붙이면 자동으로 하위 경로로 설정           (/post/1532211)
        path: "post/:id(\\d+)", //id가 파라미터, 반드시 숫자 형식(정규표현식. \d 앞에 \를 하나 더 붙여서 자바스크립트가 인식할 수 있게 함.)
        name: "postById",
        components: {
          default: () => import("pages/PostPage.vue"),
          subPage: () => import("pages/CommentPage.vue"),
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
