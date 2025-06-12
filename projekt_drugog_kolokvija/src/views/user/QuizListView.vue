<script setup>
    import { useQuizStore } from '@/stores/quizStore';
    import { RouterLink, useRouter } from 'vue-router'


    const QuizStore=useQuizStore()
    const router=useRouter()


    const quizevi=QuizStore.quizzes

    function promijeni(i){
        QuizStore.currentQuiz=quizevi.find(p=> p.id==i)
        router.push(`/quiz/${i}`)
    }

</script>

<template>
        <RouterLink to="/quiz/results">
            <u>
                Rezultati
            </u>
        </RouterLink>
        
        <RouterLink to="/admin">
            <u>
                Admin
            </u>
        </RouterLink>

    <div>
        <h1 class="text-2xl">
            Quiz List
        </h1>
        <div class="flex gap-2">
            <div v-for="(quiz) in quizevi" class="border">

                <div>
                    {{ quiz.title }}
                </div>
                <button @click="promijeni(quiz.id)" class="border">
                    Započni
                </button>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>