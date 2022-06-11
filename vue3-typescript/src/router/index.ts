import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("@/views/main/MainPage.vue"),
      children: [
        {
          path: "/dashboard",
          name: "dashBoard",
          component: () => import("@/views/main/dash-board/DashBoardPage.vue"),
        },
      ],
    },
  ],
});

export default router;
