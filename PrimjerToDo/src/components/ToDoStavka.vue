<script setup>
    import { ref } from 'vue';

    const info= defineProps({
        opis: String,
        završeno: Boolean,
        prioritet:Number});

    
    const unos=ref('')

    const emit=defineEmits(['updateOpis, updateZavršeno'])

    function ažurirajOpis(a) {
        emit('updateOpis', a)
    }

    function ažurirajZavršeno(zavr) {
        emit('updateZavršeno', !zavr)
    }
</script>

<template>
    <div class="flex gap-2 p-2 text-center bg-gray-100">
        <hr>

        <div
        :class="završeno ? 'text-black' : 'underline'">
            {{ opis }}
        </div>
        
        <div
            :class="završeno ? 'bg-green-500 border-2 border-green-700' : 'border-2 border-gray-400'"
            class="w-6 h-6 rounded" @click="ažurirajZavršeno(info.završeno)"></div>/>
        
        <input type="text" v-model="unos" class="border">
    </div>

</template>