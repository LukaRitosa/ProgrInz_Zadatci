<script setup>
    import { useDucanStore } from '@/stores/ducanStore'
    import { RouterLink, useRouter } from 'vue-router'
    import { computed, ref } from 'vue'

    const naziv = ref('')
    const cijena = ref('')
    const slika = ref('')

    const Shop=useDucanStore()


    function dodajProizvod(){
        if(!naziv || !cijena || !slika){
            console.log("Greška")
            return
        }
        const proizv={
            name: naziv.value,
            price: cijena.value,
            image: slika.value
        }
        Shop.addProduct(proizv)

        naziv.value=""
        cijena.value=""
        slika.value=""
    }
</script>

<template>

    <div class="flex gap-4 p-3">
        <RouterLink to="/admin">
            <u class="text-red-800">
                Admin
            </u>
        </RouterLink>
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

    <div class="flex-column gap-5 border p-2">
        <div class="border p-2">
            Naziv: <input type="text" placeholder="Upiši naziv..." v-model="naziv" class="px-2">
        </div>
        <div class="border p-2">
            Cijena: <input type="number" step="0.01" placeholder="Upiši cijenu..." v-model="cijena">
        </div>
        <div class="border p-2">
            Slika: <input type="text" placeholder="Upiši url..." v-model="slika">
        </div>
        <img :src="slika" v-if="slika">
        <button class="border p-2 bg-purple-800 text-white hover:bg-purple-500" @click="dodajProizvod">
            Dodaj proizvod
        </button>
    </div>



</template>