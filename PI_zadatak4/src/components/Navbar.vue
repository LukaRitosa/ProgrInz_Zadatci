<script setup>
    import { defineProps, defineEmits } from 'vue'

    const props = defineProps({
        activeLink: String,
        links: Array
    })

    const emit = defineEmits(['updateActiveLink'])

    function setActive(linkName) {
        emit('updateActiveLink', linkName)
    }
</script>

<template>
  <nav class="sticky top-0 w-full flex gap-4 flex-wrap items-center justify-around bg-[#070F2B]/25 backdrop-blur-sm py-2 px-8 rounded-lg">
    <div
      v-for="link in links" :key="link.name" class="text-sm z-10 relative transition" 
      @click="setActive(link.name)"
      :class="[link.name == activeLink ? 'underline text-purple-100' : 'cursor-pointer text-indigo-300 text-sm hover:text-indigo-200 hover:scale-105',  link.active ? '' : 'text-indigo-500/50 text-sm pointer-events-none font line-through']">
      
      {{ link.name }}
      
      <b v-if="link.name == activeLink" class="text-purple-400 -z-[5] absolute -left-0.5 blur-sm">
        {{ link.name }}
      </b>

    </div>
  </nav>
</template>

