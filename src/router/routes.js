const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/post",
    name: "post",
    component: () => import("pages/PostPage.vue"),
  },
  {
    path: "/post/:id(\\d+)", //id가 파라미터, 반드시 숫자 형식(정규표현식. \d 앞에 \를 하나 더 붙여서 자바스크립트가 인식할 수 있게 함.) (/post/1532211)
    name: "detailPost",
    component: () => import("pages/PostPage.vue"),
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/comments is matched
        name: "comments",
        path: "comments",
        component: () => import("components/CommentComp.vue"),
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id is matched
        path: "",
        component: () => import("components/CommentComp.vue"),
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /comments is matched
        // '/' 를 붙일 경우 중첩하지 않고 루트 경로부터 요청할 수 있음. /comments를 요청하면 ParentComponent까지 다 나옴. (위 경로들과 결과가 같음)
        path: "/comments",
        component: () => import("components/CommentComp.vue"),
      },
    ],
  },
  {
    path: "/post/:userName", //userName 파라미터. 숫자 형식이 아닐 때 (/post/dhlee)
    component: () => import("pages/PostPage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
