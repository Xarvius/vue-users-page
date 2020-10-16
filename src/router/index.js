import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"

Vue.use(VueRouter)

const routes = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'Strona główna', component: Home, children: [
       { path: '/:name', name: 'O mnie', component: About, props: true},
    ]},
    // { path: '/:name', name: 'O mnie', component: About, props: true},
  ]
})

export default routes