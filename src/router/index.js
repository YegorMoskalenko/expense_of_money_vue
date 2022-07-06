import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import ExpensesListPage from "@/pages/ExpensesListPage";
import AddExpenseFormPage from "@/pages/AddExpenseFormPage";

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/list',
    component: ExpensesListPage
  },
  {
    path: '/add',
    component: AddExpenseFormPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
