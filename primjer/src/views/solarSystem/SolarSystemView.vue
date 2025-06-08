<script setup>
    import { useSolarSystemStore } from '@/stores/solarSystemStore'
    import { RouterLink, useRouter } from 'vue-router'
    import { ref } from 'vue'

    const router=useRouter()
    const solarSystemStore=useSolarSystemStore()
    const planeti=solarSystemStore.getPlanets()

</script>

<template>
    <div class="bg-gray-900 justify-items-center text-white">
        <h1 class="text-3xl ">
            <b>Solar System</b>
        </h1>
        <div class="flex gap-5 p-10 text-center">
            <div v-for="planet in planeti" class="gap-3">
                <img :src="planet.image" class="h-30">
                <RouterLink  :to="`/solarsystem/${planet.name.toLowerCase()}`" class=" hover:text-blue-500" 
                @click="solarSystemStore.getPlanet(planet.name)">
                    {{ planet.name }}
                </RouterLink>
            </div>
        </div>
    </div>
    

</template>