import { createRouter, createWebHistory } from 'vue-router'
import MyCourses from "../views/MyCourses.vue";
import AboutView from "../views/AboutView.vue";


const routes = [{
        path: "/",
        name: "MyCourses",
        component: MyCourses,
    }, {
        path: '/about',
        name: 'AboutView',
        component: AboutView,
    },
    { //will route to AllPosts view if none of the previous routes apply
        path: "/:catchAll(.*)",
        name: "MyCourses",
        component: MyCourses,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router