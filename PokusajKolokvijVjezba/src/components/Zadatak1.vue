<script setup>
    import { ref } from 'vue'

    const broj1=ref(0)
    const broj2=ref(0)
    const operacija=ref('')
    function provjeraOperacije(o){
        if(o=='množenje' || o=='dijeljenje' || o=='zbrajanje' || o=='oduzimanje'){
            return true
        }
        else{
            return false
        }
    }
</script>

<template>
    <div class="border h-20"  >
        z1:<b>kalkulator</b>

        <div>
            <input type="number" v-model="broj1" class="border">
            <input type="number" v-model="broj2" class="border">
            <input type="text" v-model="operacija" class="border">

            <div v-if="provjeraOperacije">
                <div v-if="operacija=='množenje'">
                    {{ broj1 * broj2 }}
                </div>
                <div v-else-if="operacija=='zbrajanje'">
                    {{ broj1 + broj2 }}
                </div>
                <div v-else-if="operacija=='oduzimanje'">
                    {{ broj1 - broj2 }}
                </div>
                <div v-else-if="operacija=='dijeljenje'">
                    <div v-if="broj2===0">
                        Nema dijeljenja sa nulom
                    </div>
                    <div v-else>
                        {{ broj1 / broj2 }}
                    </div>
                </div>
                <div v-else>
                    ne može još
                </div>
            </div>
        </div>
    </div>
</template>