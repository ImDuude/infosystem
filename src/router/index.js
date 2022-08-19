import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bauelemente from '../views/Bauelemente.vue'
import Baugruppe from '../views/Baugruppe.vue'
import BaugruppeHilfstabelle from '../views/BaugruppeHilfstabelle.vue'
import Maschine from '../views/Maschine.vue'
// import DataTable from '../views/DataTable.vue'
import "bootstrap/dist/css/bootstrap.min.css";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Bauelemente',
    name: 'Bauelemente',
    component: Bauelemente
  },
  {
    path: '/Baugruppe',
    name: 'Baugruppe',
    component: Baugruppe
  },
  {
    path: '/Maschine',
    name: 'Maschine',
    component: Maschine
  },
  {
    path: '/BaugruppeHilfstabelle',
    name: 'BaugruppeHilfstabelle',
    component: BaugruppeHilfstabelle
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
