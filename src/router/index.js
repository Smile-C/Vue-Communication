import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "props",
    component: () => import("../views/01_props/Father.vue")
  }, {
    path: "/event",
    name: "event",
    component: () => import("../views/02_custom-event/Even.vue")
  },
  {
    path: "/bus",
    name: "bus",
    component: () => import("../views/03_event_Bus/Father.vue")
  },
  {
    path: "/v-model",
    name: "model",
    component: () => import("../views/04_v-model/Father.vue")
  },
  {
    path: "/useAttrs",
    name: "useAttrs",
    component: () => import("../views/05_useAttrs/Father.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
