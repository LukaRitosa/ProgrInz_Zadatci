<script setup>
    import { useCounterStore } from "@/stores/counterStore.js"
    const counterStore = useCounterStore();
</script>

<template>
    <div>
        Count: {{ counterStore.count }}
        <button @click="counterStore.increment()" class="border">Increment</button>
        <br> DoubleCount: {{ counterStore.doubleCount }}
    </div>
</template>