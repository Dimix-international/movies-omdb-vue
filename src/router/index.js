import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/views/HomePage";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/movie/:id',
        name: 'MovieDetails',
        component: () => import('@/views/MovieDetails.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;