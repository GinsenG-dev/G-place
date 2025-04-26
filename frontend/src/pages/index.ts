import { createRouter, createWebHistory } from 'vue-router'
import {getHomeRouter} from './home'
 
 const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
    ...getHomeRouter()
  ],
 })
 
 export default router
