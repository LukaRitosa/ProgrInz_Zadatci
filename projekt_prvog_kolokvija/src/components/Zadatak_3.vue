<script setup>
    import Igre from '@/components/Igre.vue'
    import { ref } from 'vue'

    const trenutnaIgra=ref(0)


    const igre = [    
        {
            naziv: "Xenoblade Chronicles",
            godina: 2010,
            developer: "Monolith Soft",
            opis: `Xenoblade Chronicles is a series of action role-playing 
                games developed by Monolith Soft and published by Nintendo. 
                The series began with the original Xenoblade Chronicles 
                game, published for the Wii in 2010 in Japan, and released 
                in Europe and Oceania the following year.`,
            naslovnica: "/src/assets/slike/Xenoblade.jpg"
        },
        {
            naziv: "The Witcher 3: Wild Hunt",
            godina: 2015,
            opis: `The Witcher 3: Wild Hunt is a 2015 action role-playing 
                game developed and published by CD Projekt. It is the sequel 
                to the 2011 game The Witcher 2: Assassins of Kings and the 
                third game in The Witcher video game series, played in an 
                open world with a third-person perspective.`,
            developer: "CD Projekt",
            naslovnica: "/src/assets/slike/Witcher3.jpg"
        },
        {
            naziv: "Celeste",
            godina: 2018,
            opis: `Celeste is a 2018 platformer video game developed and 
                published by indie studio Maddy Makes Games. It stars the player 
                character Madeline, a young woman with anxiety and depression 
                who endeavors to climb Celeste Mountain.`,
            developer: "Maddy Makes Games",
            naslovnica: "/src/assets/slike/Celeste.jpg"
        },
    ];
    function promjeni(a){
        trenutnaIgra.value+=a
        if(trenutnaIgra.value==-1){
            trenutnaIgra.value=2
        }
        else if(trenutnaIgra.value==3){
            trenutnaIgra.value=0
        }
    }
</script>

<template>
    z3
    <div v-for="(igra, index) in igre" class="border">
        <Igre :naslovnica="igra.naslovnica" :naziv="igra.naziv" v-if="index==trenutnaIgra"
        @prije="promjeni" @poslje="promjeni"/>
        <div v-if="index==trenutnaIgra">
            <div>
                <b>Godina:</b>{{ igra.godina }}
            </div>
            <div>
                <b>Dev:</b>{{ igra.developer }}
            </div>
            <b>Opis:</b>
            <hr>
            <div>
                {{ igra.opis }}
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>