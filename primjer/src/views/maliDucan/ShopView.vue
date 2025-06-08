<script setup>
    import { useDucanStore } from '@/stores/ducanStore'
    import { RouterLink, useRouter } from 'vue-router'
    import { ref } from 'vue'

    const Shop=useDucanStore()
    const proizvodi=Shop.products


</script>

<template>
    <div class="flex gap-4 p-3">
        <RouterLink to="/admin">
            <u class="text-red-800">
                Admin
            </u>
        </RouterLink>
        <RouterLink to="/cart">
            <u>
                Košarica
            </u>
        </RouterLink>
        <u>
            u Košarici: {{ Shop.cart.length }}
        </u>
    </div>

    <div class="text-4xl p-4">
        Trgovina:
    </div>
    <div class="flex gap-2 justify-items-center">
        <div v-for="proizvod in proizvodi" class="text-center border p-1">
            
            <div>
                <b>{{ proizvod.name }}</b>

            </div>
            <div>
                <b>{{  proizvod.price }}</b> eur
            </div>
            <button class="border bg-green-300 hover:bg-green-100" @click="Shop.addToCart(proizvod)">
                Dodaj u košaricu
            </button>
            <img :src="proizvod.image" >
        </div>
    </div>
    

</template>