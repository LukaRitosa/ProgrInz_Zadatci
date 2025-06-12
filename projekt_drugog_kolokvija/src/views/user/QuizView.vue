<script setup>
    import { ref } from 'vue'
    import { useQuizStore } from '@/stores/quizStore';
    import { RouterLink, useRouter } from 'vue-router'

    const QuizStore=useQuizStore()
    const router=useRouter()


    const quiz=QuizStore.currentQuiz

    const odg=ref([])

</script>

<template>
    <div>
        <div v-for="q in quiz.questions">
            {{ q.question }}
            <input type="text" class="border" placeholder="aaaa" v-model="odg">
        </div>
        <button @click="QuizStore.submitQuiz(odg.value)">
            Pošalji quiz
        </button>
    </div>

</template>

<style scoped>

</style>