<script setup>

    import { ref } from 'vue'

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

    function dodaj_natjecanje(sportasIndex){
        sportasi.value[sportasIndex].natjecanja.push(novo_natjecanje.value)
        novo_natjecanje.value=''
        sortiraj()

    }
    function obriši_natjecanje(sportasIndex, natjecanjeIndex){
        sportasi.value[sportasIndex].natjecanja.splice(natjecanjeIndex, 1) 
        sortiraj()
   
    }
    function sortiraj(){
        sportasi.value.sort((a,b )=> b.natjecanja.length - a.natjecanja.length)
    }
    sortiraj()
</script>

<template>
    <div class="flex-column">
        <p>z2</p>
        <input type="text" v-model="novo_natjecanje" class="border p-2">
        <div v-for="(sportas, index) in sportasi" class=" border">

            <div>
                <span v-if="index==0">🥇</span>
                <span v-if="index==1">🥈</span>
                <span v-if="index==2">🥉</span>
                <b>Ime:</b> {{ sportas.ime }}
            </div>
            <div>
                <b>Disciplina:</b> {{ sportas.disciplina }}

            </div>
            <div>
                <b>Dob:</b>{{ sportas.godine }}     
            </div>            
            <b>Natjecanja:</b>
            
            <button class="border" @click="dodaj_natjecanje(index)">+</button>

            <li v-for="(natj, i) in sportas.natjecanja">
                {{ natj }}
                <button class="border" @click="obriši_natjecanje(index, i)">-</button>

            </li>


        </div>
    </div>

    
</template>