<script setup>
    import { computed, ref, useTemplateRef } from 'vue';

    const props = defineProps({
        opis: String,
        završeno: Boolean,
        prioritet: Number,
    })

    const uređivanje = ref(false);
    const noviOpis = ref("");

    const unos = useTemplateRef('unosRef');

    const emit = defineEmits(['ažurirajOpis', 'ažurirajZavršeno'])

    function uključiUređivanje() {
        if (props.završeno) return;
        uređivanje.value = true;
        noviOpis.value = props.opis;
        unos.value.focus();
    }

    function isključiUređivanje() {
        uređivanje.value = false;
        emit('ažurirajOpis', noviOpis.value);
    }

    const dopuštenoUređivanje = computed(() => uređivanje.value && !props.završeno)
</script>

<template>
    <div class="min-w-96 flex gap-2 items-center rounded-lg bg-stone-900 px-3 py-1 text-stone-100">

        <span>{{ prioritet }}.</span>

        <div @click="$emit('ažurirajZavršeno', !završeno)" class="cursor-pointer">
            <div v-if="!završeno" class="size-4 rounded ring ring-stone-500"></div>
            <div v-else class="size-4 rounded bg-lime-600"></div>
        </div>

        <span v-if="!dopuštenoUređivanje"
            class="w-full h-6"
            :class="{'line-through' : završeno}"
            @dblclick="uključiUređivanje()">
            {{ opis }}
        </span>
        <input
            ref="unosRef"
            class="rounded grow"
            :class="!dopuštenoUređivanje ? 'max-w-0' : 'px-1 ring bg-stone-50/5'"
            type="text" 
            v-model="noviOpis"
            @focusout="isključiUređivanje()">
        
        <slot/>
        
    </div>
</template>