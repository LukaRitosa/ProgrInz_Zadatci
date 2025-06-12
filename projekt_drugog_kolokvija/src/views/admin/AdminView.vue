<script setup>
    import { useQuizStore } from '@/stores/quizStore';
    import { RouterLink, useRouter } from 'vue-router'


    const QuizStore=useQuizStore()
    const router=useRouter()


    const quizevi=QuizStore.quizzes

    function edit(i){
        QuizStore.currentQuiz=quizevi.find(p=> p.id==i)
        router.push(`/quiz/${i}/edit`)
    }
</script>

<template>
    <RouterLink to="/quiz">
            <u>
                Nazad
            </u>
    </RouterLink>
    <div>
        <h1 class="text-2xl">
            Admin
        </h1>
        <div class="flex gap-2">
            <div v-for="(quiz) in quizevi" class="border">

                <div>
                    {{ quiz.title }}
                </div>
                <div>
                    broj pitanja: {{ quiz.questions.length }}
                </div>
                <button @click="QuizStore.deleteQuiz()" class="border bg-red-300 hover:bg-red-50">
                    Obriši
                </button>
                <button @click="edit(quiz.id)" class="border bg-blue-300 hover:bg-blue-50">
                    Uredi
                </button>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>