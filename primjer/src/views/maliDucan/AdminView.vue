<script setup>
    import { useDucanStore } from '@/stores/ducanStore'
    import { RouterLink, useRouter } from 'vue-router'
    import { ref } from 'vue'

    const Shop=useDucanStore()
    const proizvodi=Shop.products


</script>

<template>
    <div class="flex gap-4 p-3 ">
        <RouterLink to="/shop">
            <u>
                Trgovina
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

    <div class="text-4xl p-4 bg-red-100">
        Admin:
    
    <RouterLink to="/admin/add">
        <u class="text-red-800">
            Dodavanje proizvoda
        </u>
    </RouterLink>
    </div>
    <div class="flex gap-2 justify-items-center bg-red-100">
        <div v-for="(proizvod, index) in proizvodi" class="text-center border p-1">
            
            <div>
                <b>{{ proizvod.name }}</b>

            </div>
            <div>
                <b>{{  proizvod.price }}</b> eur
            </div>
            <button class="border text-white bg-black hover:bg-red-800 p-1" @click="Shop.removeProduct(index)">
                Obriši
            </button>
            <img :src="proizvod.image" >
        </div>
    </div>
    

</template>