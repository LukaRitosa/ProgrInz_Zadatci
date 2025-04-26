<script setup>
    import { ref, computed } from 'vue'

    const broj1=ref(0)
    const broj2=ref(0)
    const operacija=ref("")

    /*
    function provjeraOperacije(Oper){
        if(Oper== "zbrajanje" ||Oper== "oduzimanje" ||Oper== "množenje" || Oper== "dijeljenje"){
            return true
        }
        else{
            return false
        }
    }
    */

    const provjeraOperacije = computed(()=>{
        return operacija.value==="zbrajanje" || operacija.value==="oduzimanje" || operacija.value==="množenje" || operacija.value==="dijeljenje"
    })

    /*
        Razlika je da obična funkcija opet izvršava kad se pozove a computed pamti (cache-a) rezultat i izračunava se samo 
        kada se (u ovom slučaju operacije) promjene
    */

</script>

<template>
    
    <div class="flex-column border rounded justify-cener text-center items-center p6 text-red-800">
        Zadak 1: 
        <b>SimpleCalculator</b>
        <div class="text-black">
            <input type="number" v-model="broj1" class="border">
            <input type="number" v-model="broj2" class="border">
            <input type="text" v-model="operacija" class="border">
        </div>
        
        <!--div v-if="provjeraOperacije(operacija)==true"> -->
        <div v-if="provjeraOperacije">
            <div v-if='operacija=="zbrajanje"'>
                {{ broj1 + broj2 }}
            </div>
            <div v-else-if='operacija=="oduzimanje"'>
                {{ broj1 - broj2 }}
            </div>
            <div v-else-if='operacija=="množenje"'>
                {{ broj1 * broj2 }}
            </div>
            <div v-else-if='operacija=="dijeljenje"'>
                <div v-if="broj2!=0">
                    {{ broj1 / broj2 }}
                </div>
                <div v-else>
                    dijeljenje sa nulom nije moguće
                </div>
            </div>   
        </div>
        <div v-else>
            Nepoznata operacija
        </div> 
    </div>

</template>

<style scoped>

</style>