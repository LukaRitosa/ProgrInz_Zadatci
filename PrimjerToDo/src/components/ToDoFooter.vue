<script setup>

    import { ref } from 'vue'
    const sada=ref( new Date().getFullYear()  )

</script>

<template>
    <slot>
    
        Luka Ritoša-{{ sada }}


    </slot>
</template>

<style scoped>

</style>
