<script setup>
    import { ref } from 'vue'
    import Slike from "@/components/Slika.vue"

    const galerija = [    
        {
            slikar: "Pablo Picasso",
            godina: 1903,
            naslov: "The Old Guitarist",
            slika: "/src/assets/slike/The Old Guitarist.png"
        },
        {
            slikar: "Vincent van Gogh",
            godina: 1886,
            naslov: "Le Moulin de Blute-Fin",
            slika: "/src/assets/slike/Le Moulin de Blute-Fin.png"
        },
        {
            slikar: "Hokusai",
            godina: 1890,
            naslov: "Courtesan Asleep",
            slika: "/src/assets/slike/Courtesan Asleep.png"
        },
    ];

    const povecana_slika=ref('')

    function PovecajSliku(src){
        povecana_slika.value=src
    }
</script>

<template>
    <div class="flex-column text-yellow-900 border rounded">
        
        <p class="text-center">
            ZADATAK 3: <b>Galerija slike</b>
        </p>

        <div class="flex justify-center">
            <Slike v-for="slik in galerija"
            :slikar="slik.slikar"
            :godina="slik.godina"
            :naslov="slik.naslov"
            :slika="slik.slika"
            @povecaj="PovecajSliku"/>
        </div>
    <img :src="povecana_slika" class="h-150 p-4" v-if="povecana_slika">
    </div>
</template>

<style scoped>

</style>