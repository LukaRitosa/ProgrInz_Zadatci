import { createRouter, createWebHistory } from 'vue-router'

import QuizListView from '@/views/user/QuizListView.vue'
import QuizView from '@/views/user/QuizView.vue'
import ResultsView from '@/views/user/ResultsView.vue'

import AdminView from '@/views/admin/AdminView.vue'
import AddQuizView from '@/views/admin/AddQuizView.vue'
import EditQuizView from '@/views/admin/EditQuizView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/quiz'
        },
        {
            path: '/quiz',
            name: 'QuizList',
            component: QuizListView
        },
        {
            path: '/quiz/:quizId',
            name: 'Quiz',
            component: QuizView
        },
        {
            path: '/quiz/results',
            name: 'QuizResult',
            component: ResultsView
        },
        {
            path: '/admin',
            name: 'Admin',
            component: AdminView
        },
        {
            path: '/admin/add',
            name: 'AdminAdd',
            component: AddQuizView
        },
        {
            path: '/admin/:quizId/edit',
            name: 'Edit',
            component: EditQuizView
        }
    ],
})

export default router