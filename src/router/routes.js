const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        // props - 함수를 통해 쿼리 값을 컴포넌트에 넘기기
        // Try to keep the props function stateless??
        props: (route) => ({ query: route.query.q }),
        alias: "home",
      },
      {
        path: "post",
        name: "posts",
        component: () => import("pages/PostPage.vue"),
        // props - 파라미터가 아닌, object로 정적인 값을 바로 컴포넌트에 넘기는 방법
        props: { isSelectAll: true },
      },
      {
        //  '/' 안 붙이면 자동으로 하위 경로로 설정           (/post/1532211)
        path: "post/:id(\\d+)", //id가 파라미터, 반드시 숫자 형식(정규표현식. \d 앞에 \를 하나 더 붙여서 자바스크립트가 인식할 수 있게 함.)
        name: "postById",
        components: {
          default: () => import("pages/PostPage.vue"),
          subPage: () => import("pages/CommentPage.vue"),
        },
        //  props(파라미터) - 컴포넌트에서 props를 받아주지 않는데 true로 설정하면, 서식이 사라지는 등 오류가 발생. 각각의 컴포넌트마다 true/false를 지정.
        props: {
          default: true,
          subPage: false,
        },
      },
      {
        // Children도 '/'부터 시작하면 루트 경로부터 설정됨. (/dhlee/post)
        path: "/:userName/post", //userName 파라미터.
        name: "postByUserName",
        component: () => import("pages/PostPage.vue"),
        // props(파라미터)
        props: true,
      },
      {
        path: "post/:userName", //post 하위 경로에 숫자 형식이 아닌 값을 입력할 경우 이 경로로 들어옴.
        redirect: { name: "postByUserName" },
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
