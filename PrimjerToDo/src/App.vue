<script setup>
import Header from '@/components/ToDoHeader.vue'
import Body from '@/components/ToDoBody.vue'
import Footer from '@/components/ToDoFooter.vue'


</script>

<template>
<div class=" flex-column border rounded p-2 text-center">
  
  <div>
    <Header/>
  </div>

  <div class="text-center">
    <Body />
  </div>

  <div>
    <Footer/>
  </div>
  

</div>
</template>

<style scoped>

</style>
