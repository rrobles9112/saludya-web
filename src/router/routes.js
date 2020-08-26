import VueRouter from 'vue-router';

const routes = [
    { path: '/datos', name: 'datos', component: () => import('../views/Datos/Datos.vue') },
    { path: '/suscribete', name: 'suscribete', component: () => import('../views/Suscribete/Suscribete.vue') },
    { path: '/', name: 'home', component: () => import('../views/home/Home.vue') }
]
const router = new VueRouter({
    history: true, mode: 'history', routes
})

export default router;
