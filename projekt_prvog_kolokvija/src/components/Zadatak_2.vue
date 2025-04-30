<script setup>
    import { ref } from 'vue';

    const zanrovi = ['pop', 'city-pop', 'synth-pop', 'jazz', 'jazz-rock', 'rock', 'hard-rock',
                    'metal', 'alternative-indie', 'funk', 'blues', 'rap', 'hip-hop', 'classical', 
                    'soul', 'reggae', 'country', 'bossa nova', 'techno', 'disco'];

    const pjesme = ref([
        {
            naziv: "Bohemian Rhapsody",
            trajanje_sec: 355,
            zanrovi: ['rock', 'progressive-rock', 'hard-rock']
        },
        {
            naziv: "Get Lucky",
            trajanje_sec: 554,
            zanrovi: ['funk', 'pop', 'disco']
        },
        {
            naziv: "Gymnopédie No.1",
            trajanje_sec: 198,
            zanrovi: ['classical']
        },
        {
            naziv: "Never Gonna Give You Up",
            trajanje_sec: 213,
            zanrovi: ['dance-pop', 'synth-pop', 'pop']
        },
    ])

    function trajanjePjesme(pjesma){
        const min=(pjesma.trajanje_sec /60).toFixed(0)
        const sek=Math.abs(pjesma.trajanje_sec-(min*60))
        return min.concat(':',sek)
    }
    const novoTrajanje=ref(0)

    function azurirajTrajanje(indexPjesme){
        pjesme.value[indexPjesme].trajanje=novoTrajanje.value
        novoTrajanje.value=0
        trajanjePjesme(pjesme[indexPjesme])
    }

    function provjeriZanr(zan){       
        if(zanrovi.includes(zan)){
            return '✅'
        }
        else{
            return '❌'}
    }
    function sortiraj_po_br_zanrova() {
        pjesme.value.sort((a, b) => b.zanrovi.length - a.zanrovi.length)
    }

    sortiraj_po_br_zanrova()
</script>

<template>
    <div>
        ZADATAK 2
        <input type="number" v-model="novoTrajanje" class="border">
        <div v-for="(pjesma, index) in pjesme" class="border">

            <hr>

            <p>
                <span v-if="pjesma.zanrovi.includes('rock')">
                    <b>gitara</b>
                </span>
                <span v-else-if="pjesma.zanrovi.includes('disco')">
                    <b>disko lopta</b>
                </span>
                <span v-else-if="pjesma.zanrovi.includes('classical')">
                    <b>violina</b>
                </span>
                <span v-else>
                    <b>note</b>                  
                </span>
                {{ pjesma.naziv }}
            </p>
            <p>
                <b>trejanje: </b>
                {{ trajanjePjesme(pjesma) }}
                <button class="border hover:bg-gray-100" @click="azurirajTrajanje(index)">Ažuriraj</button>
            </p>
            <li v-for="zanr in pjesma.zanrovi">
                {{ zanr }} 
                
                <button class="border" @click="provjeriZanr(zanr)">
                    Provjeri
                </button>
                <span>
                    {{provjeriZanr(zanr)}}
                </span>
            </li>
        </div>
    </div>
</template>

<style scoped>

</style>