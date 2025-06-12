import { defineStore } from 'pinia'
import quizData from '@/data/quizData.js'
import { useRouter } from 'vue-router'

const router=useRouter()


export const useQuizStore = defineStore('quizStore',{
    state: () => ({
        quizzes: quizData.quizzes,
        currentQuiz: null,
        userAnswers: [],
        results: null

    }),
    actions:{
        submitQuiz(o){
             this.userAnswers=o
            // bodovi=0
            // for(i in this.userAnswers){
            //     if(i.value==this.currentQuiz.questions.correct){
            //         bodovi+=1
            //     }
            // }
            // rez=
            console.log(this.userAnswers)
        },

        addQuiz(quiz){
            this.quizzes.push(quiz)
        },

        updateQuiz(quizId, updatedQuiz) {

        },

        deleteQuiz(quizId){
            this.quizzes.splice(quizId,1)
        }
    }
})
