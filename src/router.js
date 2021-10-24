import { createRouter, createWebHistory } from 'vue-router'

import Profissional from "./views/Login.vue";


const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;