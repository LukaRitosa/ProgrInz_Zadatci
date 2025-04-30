<script setup lang="ts">
    import { useBrojačStavki } from '@/composables/useBrojačStavki';
    import { ref, watch } from 'vue';
    import ToDoStavka from './ToDoStavka.vue';

    const stavke = ref([
        {
            opis: 'Implementirati uklanjanje',
            završeno: false,
            prioritet: 5,
        },
        {
            opis: 'Dodati text edit',
            završeno: true,
            prioritet: 2,
        },
        {
            opis: 'Implementirati pomicanje',
            završeno: false,
            prioritet: 4,
        }, 
        {
            opis: 'Dodati date',
            završeno: false,
            prioritet: 6,
        },
        {
            opis: 'Implementirati priority',
            završeno: false,
            prioritet: 3,
        }
    ])
    watch(stavke, () => {
        useBrojačStavki().postavi(stavke.value.length);
    }, { immediate: true, deep: true })
</script>

<template>
    <div class="flex justify-center p-8 grow bg-stone-100">
        
        <div class="flex flex-col gap-1 p-2 rounded h-fit">

            <TransitionGroup name="list">
                <ToDoStavka v-for="stavka, i in stavke.sort((a,b) => b.prioritet > a.prioritet)" :key="stavka.opis"
                    :opis="stavka.opis"
                    :završeno="stavka.završeno"
                    :prioritet="stavka.prioritet"
                    @ažurirajZavršeno="(završeno) => stavka.završeno = završeno"
                    @ažurirajOpis="(opis) => stavka.opis = opis">

                    <button class="flex items-center justify-center cursor-pointer rounded bg-sky-600/50 min-w-4 h-4 hover:bg-sky-500/75"
                        @click="stavka.prioritet++">
                        <span class="mb-0.5 text-sky-100">+</span>
                    </button>
                    <button class="flex items-center justify-center cursor-pointer rounded bg-sky-600/50 min-w-4 h-4 hover:bg-sky-500/75"
                        @click="stavka.prioritet--">
                        <span class="mb-0.5 text-sky-100">-</span>
                    </button>            
                    <button class="flex items-center justify-center cursor-pointer rounded bg-rose-700/25 min-w-4 h-4 hover:bg-rose-600/50"
                        @click="stavke.splice(i, 1)">
                        <span class="mb-1 text-rose-300">x</span>
                    </button>

                </ToDoStavka>
            </TransitionGroup>

            <button class="flex gap-2 items-center justify-center rounded-lg bg-stone-700/75
                px-3 text-stone-100 py-1 font-bold hover:bg-stone-800/75 cursor-pointer"
                @click="stavke.push({
                    opis: 'Napiši opis...',
                    završeno: false,
                    prioritet: 0,
                })">
                Dodaj novu stavku
            </button>

        </div>

    </div>    
</template>

<style scoped>
    .list-enter-active,
    .list-leave-active {
        transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>