import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './view/HomeView.vue';


const routes = [
    { path: '/', name: 'Home', component: HomeView },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;