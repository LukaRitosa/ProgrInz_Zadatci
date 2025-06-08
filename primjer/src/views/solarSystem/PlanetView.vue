<script setup>
    import { useSolarSystemStore } from '@/stores/solarSystemStore'
    import { RouterLink, useRouter } from 'vue-router'
    import { ref } from 'vue'

    const router=useRouter()
    const solarSystemStore=useSolarSystemStore()
    const planet=solarSystemStore.currentPlanet

    const goBack = () => {
    router.back()
    }
</script>

<template>

    <button @click="goBack" class="hover:text-gray-400">
        Idi nazad
    </button>

    <div class="flex-column justify-items-center bg-gray-900 text-white" v-if="planet">
        <h1 class="text-5xl ">
            {{ planet.name }}
        </h1>
        
        <img :src="planet.image" class="h-100 p-4">

        <i class="text-xl">
            {{ planet.description }}
        </i>
    

        <div v-if="planet.satellites.length > 0" class="flex gap-5 p-4 text-center">
            <div v-for="satelit in planet.satellites">
                <div class="gap-3">
                    
                    <img :src="satelit.image" class="h-40">

                    <RouterLink  :to="`/solarsystem/${planet.name.toLowerCase()}/${satelit.name.toLowerCase()}`" 
                    class=" hover:text-blue-500" 
                    @click="solarSystemStore.getSatellite(planet.name, satelit.name)">
                        {{satelit.name}}
                    </RouterLink>

                </div>
            </div>
        </div>

        <div v-else>
            Nema satelita
        </div>
    </div>

    <div v-else class="bg-gray-900 text-white">
        o o idi nazad
    </div>
    
</template>