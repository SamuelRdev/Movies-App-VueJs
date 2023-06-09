import ListingFilms from '@/view/ListingFilms.vue'
import DetailsFilm from '@/view/DetailsFilm.vue'
import HomePage from '@/view/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/movie',
    name: 'ListeFilms',
    component: ListingFilms
  },
  {
    path: '/movie/:id',
    name: 'DetailsFilm',
    component: DetailsFilm
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
