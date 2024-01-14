import { createRouter, createWebHashHistory } from 'vue-router'
import { HomeView, BooksView } from '@/views'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/books', name: 'books', component: BooksView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router