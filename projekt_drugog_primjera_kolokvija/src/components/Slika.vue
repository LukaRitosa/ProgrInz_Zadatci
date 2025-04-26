<script setup>
    import { ref, computed } from 'vue'

    const art = defineProps({
    slikar: String,
    godina: Number, 
    naslov: String,
    slika: String
    })

    function starost() {
        const sada = new Date().getFullYear()
    return sada - art.godina
    }

    const emit = defineEmits(['povecaj'])
    
    function PovecajSliku(a) {
        emit('povecaj', a)
    }
</script>

<template>

    <div class="p-3">
        <p> <b>Slikar:</b>{{ slikar }} </p>
        <p> <b>Godina:</b>{{ godina }} </p>

        <p :class="{ underline: starost()>136 }"> 
            <b>Naslov:</b>{{ naslov }} 
        </p>
        <p> <b>Starost:</b> {{ starost() }} </p>
        <img :src="art.slika" class="h-100 hover:h-101" @click="PovecajSliku(art.slika)">
    </div>    


</template>

<style>
    .underline {
        text-decoration: underline;
    }
</style>