<script setup>
    import { useDucanStore } from '@/stores/ducanStore'
    import { RouterLink, useRouter } from 'vue-router'
    import { computed } from 'vue'

    const Shop=useDucanStore()
    const Cart=Shop.cart

    const cijene= computed(() => {
        let sum = 0
        for (const proizvod of Shop.cart) {
            sum += proizvod.price
        }
        return sum.toFixed(2)
        })
    

</script>

<template>

    <div class="flex p-3">
        <RouterLink to="/shop">
            <u>
                Trgovina
            </u>
        </RouterLink>
    </div>
    

    <div v-if="Cart.length>0">
        <div class="text-4xl p-4 justify-items-center">
            Košarica:
        </div>
        <div class="flex gap-2  " >
            <div v-for="(proizvod, index) in Cart" class="text-center border p-1 ">
                
                <div>
                    {{ proizvod.name }}
                </div>
                <div>
                    <b>{{  proizvod.price }}</b> eur
                </div>
                <button class="border bg-red-500 hover:bg-red-300 text-white" @click="Shop.removeFromCart(index)">
                    Ukloni
                </button>
                <img :src="proizvod.image" >
            </div>
        </div>
        <div class="text-2xl p-3">
            Ukupno: <b>{{ cijene }}</b> eur
        </div>
    </div>
        
    
    <div v-else>
        <div class="text-4xl p-4">
            Košarica: je prazna
        </div>
    </div>

</template>