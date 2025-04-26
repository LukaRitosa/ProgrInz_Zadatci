<script setup>
    import { ref } from 'vue';

    const sportasi = ref([
        {
            ime: 'Ivan', 
            disciplina: 'plivanje', 
            godine: 25, 
            natjecanja: ['Olimpijske igre', 'Svjetsko prvenstvo']
        },
        {
            ime: 'Ana', 
            disciplina: 'atletika', 
            godine: 30, 
            natjecanja: ['Svjetsko prvenstvo', 'Europsko prvenstvo', 'Olimpijske igre']
        },
        {
            ime: 'Marko', 
            disciplina: 'odbojka', 
            godine: 22, 
            natjecanja: ['Europsko prvenstvo']
        }
    ])

    const novo_natjecanje=ref('')

    function dodaj_natjecanje(sportas_index){
        sportasi.value[sportas_index].natjecanja.push(novo_natjecanje.value)
        novo_natjecanje.value=''
        sortiraj_po_broju_natjecanja()
    }

    function ukloni_natjecanje(sportasIndex, natjecanjeIndex){
        sportasi.value[sportasIndex].natjecanja.splice(natjecanjeIndex, 1)
        sortiraj_po_broju_natjecanja()
    } 

    function sortiraj_po_broju_natjecanja() {
        sportasi.value.sort((a, b) => b.natjecanja.length - a.natjecanja.length)
    }

    sortiraj_po_broju_natjecanja()

</script>

<template>
    <div class="flex-column border rounded justify-cener text-center items-center p6 text-blue-900">
        ZADATAK 2:
        <b>Sportaši</b>
        <input type="text" v-model="novo_natjecanje" class="border text-black">
        <div v-for="(sportas, index) in sportasi">
            <hr/> 
            <p>
                <b>Ime:</b>{{ sportas.ime }}
                <span v-if="index==0">🥇</span>
                <span v-if="index==1">🥈</span>
                <span v-if="index==2">🥉</span>
            </p>
            <p>
                <b>Disciplina:</b>{{ sportas.disciplina }}
            </p>
            <p>
                <b>Godine:</b>{{ sportas.godine }}
            </p>
            <b>Natjecanja</b> 
            <button @click="dodaj_natjecanje(index)" class="border hover:bg-white hover:text-black">+</button>
            <TransitionGroup name="list" tag="ul">
                <li v-for="(ime, i) in sportas.natjecanja">
                    <button @click="ukloni_natjecanje(index, i)" class="border hover:bg-white hover:text-black">-</button>
                    {{ ime }}
                </li>
            </TransitionGroup>        
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
    transform: translateX(30px);
    }
</style>