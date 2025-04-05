<script setup>
import {ref, watchEffect, computed} from "vue"

const like = {
    "Jabuka": "https://www.svgrepo.com/show/530203/apple.svg",
    "Mrkva": "https://www.svgrepo.com/show/530216/carrot.svg",
    "Sir": "https://www.svgrepo.com/show/530219/cake.svg",
    "Kruh": "https://www.svgrepo.com/show/530223/bread.svg",
}

const proizvodi = [
    { naziv: "Jabuka", cijena: 0.25 },
    { naziv: "Mrkva", cijena: 0.12 },
    { naziv: "Kruh", cijena: 2.00 },
    { naziv: "Sir", cijena: 4.48 }
]

const korisnik = {
    jeAdmin: true,
    osobni_podaci: {
        ime: "Marko",
        prezime: "Krivić",
        adresa: {
            grad: "Pula",
            ulica: "Veruda",
            broj: 32
        },
        broj_telefona: "+091-123-456"
    },
    kosarica: [
        { naziv: "Jabuka", količina: 4 },
        { naziv: "Mrkva", količina: 12 },
        { naziv: "Sir", količina: 1 },
        { naziv: "Kruh", količina: 3 },
    ]
}

function dohvatiCijenu(naziv){
    let stavkaID=proizvodi.findIndex(p => p.naziv == naziv)
    if(stavkaID!=-1) return proizvodi[stavkaID].cijena
    else return 0
}



</script>

<template>

    <div :class="korisnik.jeAdmin ? 'text-blue-800' : 'text-black'" class="bg-blue-100 border border-gray-400 rounded p-4">
        <div class="text-xl">
            <b>Korisnički podatci </b>
            <hr class="">
        </div>
        <div><b>Ime:</b> {{ korisnik.osobni_podaci.ime }} {{ korisnik.osobni_podaci.prezime }}</div>
        <div><b>Adresa:</b> {{ korisnik.osobni_podaci.adresa.ulica }} {{ korisnik.osobni_podaci.adresa.broj }}, {{ korisnik.osobni_podaci.adresa.grad }}</div>
        <div><b>Telefon:</b> {{ korisnik.osobni_podaci.broj_telefona }}</div>
    </div>

    <div>
        <div class=" bg-blue-100 border border-gray-400 rounded p-4">
            <b class="text-xl">Košarica</b>
            <hr>
            <div class="flex bg-white border border-gray-400 rounded p-4">
                <img :src="like['Jabuka']" class="h-20 ">
                <div class="flex-columns">
                    <div>
                        <b>Jabuka</b>
                    </div>
                    <div>
                        Cijena: {{ dohvatiCijenu("Jabuka") }}€ | Količina:  {{ korisnik.kosarica.find(el => el.naziv == 'Jabuka').količina }} kom
                    </div>     
                    <div>
                        Ukupno: {{ ((dohvatiCijenu("Jabuka"))* (korisnik.kosarica.find(el => el.naziv == 'Jabuka').količina)).toFixed(2) }}€
                    </div>   
                </div>

            </div>
            <div class="flex bg-white border border-gray-400 rounded p-4">
                <img :src="like['Mrkva']" class="h-20 ">
                <div class="flex-columns">
                    <div>
                        <b>Mrkva</b>>
                    </div>
                    <div>
                        Cijena: {{ dohvatiCijenu("Mrkva") }}€ | Količina:  {{ korisnik.kosarica.find(el => el.naziv == 'Mrkva').količina }} kom
                    </div>     
                    <div>
                        Ukupno: {{ ((dohvatiCijenu("Mrkva"))* (korisnik.kosarica.find(el => el.naziv == 'Mrkva').količina)).toFixed(2) }}€
                    </div>   
                </div>

            </div>
            <div class="flex bg-white border border-gray-400 rounded p-4">
                <img :src="like['Kruh']" class="h-20 ">
                <div class="flex-columns">
                    <div>
                        <b>Kruh</b>>
                    </div>
                    <div>
                        Cijena: {{ dohvatiCijenu("Kruh") }}€ | Količina:  {{ korisnik.kosarica.find(el => el.naziv == 'Kruh').količina }} kom
                    </div>     
                    <div>
                        Ukupno: {{ ((dohvatiCijenu("Kruh"))* (korisnik.kosarica.find(el => el.naziv == 'Kruh').količina)).toFixed(2) }}€
                    </div>   
                </div>

            </div>
            <div class="flex bg-white border border-gray-400 rounded p-4">
                <img :src="like['Sir']" class="h-20 ">
                <div class="flex-columns">
                    <div>
                        <b>Sir</b>
                    </div>
                    <div>
                        Cijena: {{ dohvatiCijenu("Sir") }}€ | Količina:  {{ korisnik.kosarica.find(el => el.naziv == 'Sir').količina }} kom
                    </div>     
                    <div>
                        Ukupno: {{ ((dohvatiCijenu("Sir"))* (korisnik.kosarica.find(el => el.naziv == 'Sir').količina)).toFixed(2) }}€
                    </div>   
                </div>

            </div>    
            
            <b>Ukupna cijena:</b>
        </div>         
    </div>

</template>

<style>

</style>
