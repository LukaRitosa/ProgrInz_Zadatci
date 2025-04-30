<script setup>
    import { useBrojačStavki } from '@/composables/useBrojačStavki';
</script>
<template>
    <div class="flex items-center justify-center w-full py-4
        bg-stone-300 text-3xl shadow">
        <b>
            <slot/>
            | Broj stavki: {{ useBrojačStavki().brojač }}
        </b>
    </div>
</template>