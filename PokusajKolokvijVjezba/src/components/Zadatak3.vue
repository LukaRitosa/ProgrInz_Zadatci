<script setup>
    import { ref } from 'vue'
    import Slike from '@/components/Slike.vue'
    const galerija = [
        {
        slikar: "Pablo Picasso",
        godina: 1903,
        naslov: "The Old Guitarist",
        slika: "https://www.artic.edu/iiif/2/4e7f3081-179a-af18-8abd-7908a7ae8c4e/full/843,/0/default.jpg"
        },
        {
        slikar: "Vincent van Gogh",
        godina: 1886,
        naslov: "Le Moulin de Blute-Fin",
        slika: "https://www.vincentvangogh.org/assets/img/paintings/le-moulin-de-blute-fin.jpg"
        },
        {
        slikar: "Hokusai",
        godina: 1890,
        naslov: "Courtesan Asleep",
        slika: "https://www.meisterdrucke.us/kunstwerke/1260px/KatsushikaHokusai-Courtesanasleep-MeisterDrucke-28715.jpg"
        },
    ];

    const povecana_slika=ref('')

    function PovecajSliku(src){
        povecana_slika.value=src
    }

</script>

<template>
    
    <div class="flex-column">z3
        <div class="flex gap-2">
            <div v-for="p in galerija" class="flex-column">
                

                <Slike :slikar="p.slikar" :godina="p.godina" :naslov="p.naslov" :slika="p.slika" @povecaj="PovecajSliku" />
            </div>
        </div>

      <img :src="povecana_slika" class="h-150 p-4" v-if="povecana_slika">
    </div>
</template>