<script setup>
 import { ref } from "vue";
 const lozinka = ref("")


</script>

<template>
 
 
 <b>Lozinka:</b> <input type="text" v-model="lozinka" class="border p-1 rounded">

 <div class="text-red-600">
  <div v-if="lozinka.length<8">
    Lozinka pre kratka
  </div>
  <div v-if="!/[A-Z]/.test(lozinka)">
    Lozinka nema veliko slovo
  </div>
  <div v-if="!/[!@#$%^&*(),.?:{}|<>]/.test(lozinka)">
    Lozinka nema poseban znak
  </div>
  <div v-if="!/[0-9]/.test(lozinka)">
    Lozinka nema broj
  </div>
</div>

 <div v-if="/[A-Z]/.test(lozinka) && /[!@#$%^&*(),.?:{}|<>]/.test(lozinka) && /[0-9]/.test(lozinka) && lozinka.length>=8" 
  class="text-green-600">
  Lozinka sigurna
 </div>
</template>

<style scoped>


</style>
