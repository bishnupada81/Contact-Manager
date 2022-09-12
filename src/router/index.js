import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import contactManager from '../views/contactManager'
import addContact from '../views/addContact'
import editContact from '../views/editContact'
import viewContact from '../views/viewContact'
import pageNotFound from '../views/pageNotFound'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect : 'contact'
  },
  {
    path: '/contact',
    name: 'contactManager',
    component : contactManager
  },
  {
    path: '/contact/add',
    name: 'addContact',
    component : addContact
  },
  {
    path: '/contact/edit/:contactId',
    name: 'editContact',
    component : editContact
  },
  {
    path: '/contact/view/:contactId',
    name: 'viewContact',
    component : viewContact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'pageNotFound',
    component : pageNotFound
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
