<script setup>
    const art= defineProps(
        {
            slikar: String,
            godina: Number, 
            naslov: String,
            slika: String
        }
    )

    function starost(){
        const sada = new Date().getFullYear()
    return sada - art.godina
    }

    const emit = defineEmits(['povecaj'])
    
    function PovecajSliku(a) {
        emit('povecaj', a)
    }
</script>

<template>
    
    <div class="flex">
        <div class="flex-column">
            <p>
                {{ slikar }}
            </p>
            <p>
                {{ godina }}
            </p>
            <p>
                Starost: {{ starost() }}
            </p>
            <p :class="{underline: starost()>136 }">
                {{ naslov }}
            </p>
            <img :src="slika" class="h-50 hover:h-51" @click="PovecajSliku(art.slika) ">

        </div>
    </div>
</template>

<style>
    .underline {
        text-decoration: underline;
    }
</style>