<script setup>

    const props = defineProps({
        naziv: String,
        naslovnica: String
        })
    
        const emit= defineEmits(['prije', 'poslje'])
    function promjeni(a){
        if(a==-1){
            emit('prije', a)
        }
        else{
            emit('poslje',a)
        }
    }
</script>

<template>

    <div>
        <p> 
            <slot>
            </slot>
            {{ naziv }} 
        </p>
        <button class="border" @click="promjeni(-1)">prethodna</button>
        <button class="border" @click="promjeni(1)">sljedeća</button>
        <img :src="props.naslovnica" class="h-[300px]">
    </div>
    
</template>