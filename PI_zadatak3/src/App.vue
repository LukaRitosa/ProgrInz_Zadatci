<script setup>
    import { ref } from "vue"
    
    const kosarica = ref([])

    const naziv_pr=ref("")
    const cijena_pr=ref(null)

    function dodaj_proizvod(){
        const ime = naziv_pr.value

        const postoji = kosarica.value.find(p => p.naziv.toLowerCase() === ime.toLowerCase())

        

        if (postoji) {
            postoji.kolicina += 1
        }
        else if (cijena_pr.value < 0 || isNaN(cijena_pr.value)) {

            return
        }
        else {
            kosarica.value.push({
                naziv: naziv_pr.value,
                cijena: cijena_pr.value.toFixed(2),
                kolicina: 1
            })
        }
        naziv_pr.value = ""
        cijena_pr.value = null
        
    }

    function ukupno_proizv(proizv) {
        return (proizv.cijena * proizv.kolicina).toFixed(2)
    }
    
    function kolicina_plus(proizv){
        return proizv.kolicina+=1
    }

    function kolicina_minus(proizv){
        return proizv.kolicina-=1
    }

    function ukloni_proizv(proizv){
        kosarica.value = kosarica.value.filter(p => p !== proizv)
    }

    function ukupno_kosarica(){
        let suma = 0;
        for (let proizv of kosarica.value) {
            suma += parseFloat(ukupno_proizv(proizv))
        }
    return suma.toFixed(2)
}

    

</script>
<template>

    <div class="flex h-full flex-col justify-center items-center gap-2">
        <b class="text-2xl">
            Košarica
        </b>
        
        <div class="flex flex-col border shadow rounded gap-3 p-4 ">

            <div class="flex gap-4">

                <div class=" w-full">
                Naziv proizvoda:
                <input type="text" v-model="naziv_pr" placeholder="Upiši proizvod..." class="border rounded shadow p-3">
                </div>
                
                <div class=" w-full">
                Cijena proizvoda:                
                    <input type="number" v-model="cijena_pr"  placeholder="Upiši cijenu..." class="border rounded shadow p-3">
                </div>

                <button @click="dodaj_proizvod()" :disabled="!naziv_pr"
                :class="['border rounded p-2', !naziv_pr ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-800 text-white hover:bg-gray-100 hover:text-green-800']">
                Dodaj proizvod</button>
            </div>

            <hr>

            <div v-if="kosarica.length>0">
                <div class="flex gap-35 ">
                    <p>
                        Naziv:
                    </p>
                    <p>
                        Cijena:
                    </p>
                    <p>
                        Količina:
                    </p>
                    <p>
                        Ukupno:
                    </p>
                </div>
                <div v-for="proizv in kosarica" class="flex gap-40  border rounded shadow p-4 bg-green-100">
                    <b>
                        {{ proizv.naziv }}
                    </b>
                    <b>
                        {{ proizv.cijena }} € 
                    </b>
                    <b>
                        <button @click="kolicina_minus(proizv)" :disabled="proizv.kolicina === 0">-</button> 
                            {{ proizv.kolicina }} 
                        <button @click="kolicina_plus(proizv)">+</button>
                    </b>
                    
                    <b>
                        {{ ukupno_proizv(proizv) }} € 
                    </b>
                    <button @click="ukloni_proizv(proizv)" class="text-red-600 hover:text-red-900">Ukloni</button>
                </div>
                
                

                <div class="p-4">
                    Ukupno: {{ ukupno_kosarica() }} € 
                </div>

            </div>
            <div v-else class="text-center text-3xl text-gray-500">
                Košarica je prazna
            </div>    
        </div>    
    </div>   
</template>


<style scoped>


</style>
