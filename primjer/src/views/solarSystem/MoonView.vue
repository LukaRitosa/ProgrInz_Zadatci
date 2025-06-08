<script setup>
    import { useSolarSystemStore } from '@/stores/solarSystemStore'
    import { RouterLink, useRouter } from 'vue-router'
    import { ref } from 'vue'

    const router=useRouter()
    const solarSystemStore=useSolarSystemStore()
    const satelit=solarSystemStore.currentSatellite

    const goBack = () => {
    router.back()
    }
</script>

<template>

    <button @click="goBack" class="hover:text-gray-400">
        Idi nazad
    </button>
    
    <div v-if="satelit" class="flex-column justify-items-center bg-gray-900 text-white">
        <div class="text-5xl">
            {{ satelit.name }}
        </div>
        
        <img :src="satelit.image" class="h-100 p-4">

        <i class="text-xl">
            {{ satelit.description }}
        </i>

    </div>

    <div v-else class="bg-gray-900 text-white">
        o o idi nazad
    </div>
    
    

</template>