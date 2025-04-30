<script setup>
    import { ref } from 'vue';
    import Stavka from '@/components/ToDoStavka.vue'


    const stavke =ref( [
    {
    opis: 'Implementirati uklanjanje',
    završeno: false,
    prioritet: 1,
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
    prioritet: 5,
    },
    {
    opis: 'Implementirati promjenu boje',
    završeno: false,
    prioritet: 6,
    }
    ])

    function ažurirajZavršeno(a) {
        završeno=a
    }

    /*
    function ažurirajOpis(a) {
        emit('updateOpis', a)
    }
    */
</script>

<template>
  
    <div class=" gap-2">
        <hr>
        <div class="border" v-for="stavka in stavke">
            <Stavka :opis="stavka.opis" :završeno="stavka.završeno" @updateZavršeno="ažurirajZavršeno"/>
        </div>
    </div>

</template>

<style scoped>

</style>
