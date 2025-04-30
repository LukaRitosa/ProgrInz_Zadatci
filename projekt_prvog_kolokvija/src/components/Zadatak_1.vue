<script setup>
    import { ref } from 'vue'

    const telefon=ref('')
    const pin=ref('')
    const ponovi_pin=ref('')

    function provjeraTelefona(){
        if(telefon.value[0]!='+'){
            return 1
        }
        else if(telefon[4]!='-'|| telefon[8]!='-'|| telefon.value.length!=12){
            return 2
        }
        else if(telefon[1,2,3]!='091' || telefon[1,2,3]!='092' || telefon[1,2,3]!= '095' || telefon[1,2,3]!= '097' || telefon[1,2,3]!='098' || telefon[1,2,3]!='099'){
            return 3
        }
        else{
            return 4
        } 
    }

    function provjeraPina(){
        if(pin.value.length<=5){
                const odg='Pin mora imati najmanje 6 brojeva!'
            return odg
        }
        else if(pin.value.unique.length<=2){
                const odg='"Pin mora imati barem 3 različita broja!'
            return odg
        }
        else{
                const odg='Pin je validan'
            return odg
        }
    }
</script>

<template>
    <div class="flex-column p-2 gap-2">
        ZADATAK 1
        <div>
            <input type="text" v-model="telefon" class="border" placeholder="Telefon...">
            <p v-if="provjeraTelefona()==1">
                Telefon treba sadržavati "+" simbol na početku!
            </p>
            <p v-else-if="provjeraTelefona()==2">
                Telefon se treba sastojati od pozivnog, regionalnog i korisničkog broja!  
            </p>
            <p v-else-if="provjeraTelefona()==3">
                Pozivni broj nije validan! 
            </p><p v-else-if="provjeraTelefona()==4">
                Telefon je validan!  
            </p>
        </div>

        <div>
            <input type="text" v-model="pin" class="border" placeholder="Pin..">
            <p>{{ provjeraPina() }}</p>
        </div>
        
        <div>
            <input type="text" v-model="ponovi_pin" class="border" placeholder="Ponovi pin...">
            <p v-if="pin!=ponovi_pin">
                pinovi se ne podudaraju
            </p>
            <p v-else>
                pinovi se podudaraju                
            </p>
        </div>
        

    </div>
</template>

<style scoped>

</style>