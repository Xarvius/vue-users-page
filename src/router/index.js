import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import UsersPage from "../views/UsersPage.vue"
import UserPage from "../views/UserPage.vue"

Vue.use(VueRouter)

const routes = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'Strona główna', component: Home},
    { path: '/users', name: 'Lista', component: UsersPage, children: [
       { path: '/:name', component: UserPage, props: true},
    ]},
    // { path: '/:name', name: 'O mnie', component: About, props: true},
  ]
})

export default routes