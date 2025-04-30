<script setup>
    import Zadatak_1 from './components/Zadatak1.vue';
    import Zadatak_2 from './components/Zadatak2.vue';
    import Zadatak_3 from './components/Zadatak3.vue';
</script>

<template>
    <div class="flex gap-3">  
        <!--Zadaci se rješavaju unutar komponenti-->
        <!--Za biranje zadataka treba mjenjati true/false-->
        <Zadatak_1 v-if="true"/>
        <Zadatak_2 v-if="true"/>
        <Zadatak_3 v-if="true"/>
      </div>
</template>

<style scoped>


</style>
