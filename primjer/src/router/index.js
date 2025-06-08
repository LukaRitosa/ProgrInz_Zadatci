import { createRouter, createWebHistory } from 'vue-router'


// Zadatak 1 - SolarSystem
import SolarSystemView from '@/views/solarSystem/SolarSystemView.vue'
import PlanetView from '@/views/solarSystem/PlanetView.vue'
import MoonView from '@/views/solarSystem/MoonView.vue'

const router_zadatak_1 = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/solarsystem'
        },
        {
            path: '/solarsystem',
            name: 'SolarSystem',
            component: SolarSystemView
        },
        {
            path: '/solarsystem/:planet',
            name: 'PlanetDetails',
            component: PlanetView,
            props: true
        },
        {
            path: '/solarsystem/:planet/:satellite',
            name: 'SatelliteDetails',
            component: MoonView,
            props: true
        }
        
    ]
})


// Zadatak 2 - MaliDucan
import ShopView from '@/views/maliDucan/ShopView.vue'
import CartView from '@/views/maliDucan/CartView.vue'
import AdminView from '@/views/maliDucan/AdminView.vue'
import AddProductView from '@/views/maliDucan/AddProductView.vue'

const router_zadatak_2 = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        
        {
            path: '/',
            redirect: '/shop'
        },
        {
            path: '/shop',
            name: 'Shop',
            component: ShopView
        },
        {
            path: '/cart',
            name: 'Cart',
            component: CartView
        },
        {
            path: '/admin',
            name: 'Admin',
            component: AdminView
        },
        {
            path: '/admin/add',
            name: 'AddProduct',
            component: AddProductView
        },
    ]
})

// birate koji router koristite
// export default router_zadatak_1
export default router_zadatak_2