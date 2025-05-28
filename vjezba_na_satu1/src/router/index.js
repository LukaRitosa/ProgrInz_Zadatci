import { createRouter, createWebHistory } from 'vue-router' // učitavanje potrebnih funkcija
import HomeView from '../views/HomeView.vue' // učitavanje komponente
// izrada routera
const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL), // pamćenje navigacije/promjene stranica
 routes: [
 {
 path: '/', // url link stranice
 name: 'home', // naziv stranice
 component: HomeView, // komponenta stranice
 },
 {
 path: '/about',
 name: 'about',
 component: () => import('../views/AboutView.vue'), // 2. način učitavanje komponente
 },
 ],
})
export default router // izvoz routera