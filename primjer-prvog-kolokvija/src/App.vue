<script setup>
import ToDoBody from './components/ToDoBody.vue';
import ToDoFooter from './components/ToDoFooter.vue';
import ToDoHeader from './components/ToDoHeader.vue';
</script>

<template>
    <div class="h-full flex flex-col ">
        <ToDoHeader>
            To-Do Aplikacija
        </ToDoHeader>

        <ToDoBody/>

        <ToDoFooter>
            Marko Markić
        </ToDoFooter>
    </div>
</template>