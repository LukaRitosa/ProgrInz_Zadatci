<script setup>
    import { ref } from 'vue'

    defineProps(["text"])

</script>

<template>

    <p>
        {{ text }}
    </p>

</template>