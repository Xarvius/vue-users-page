import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Publications from "../views/Publications.vue"
import About from "../views/About.vue"

Vue.use(VueRouter)

const routes = new VueRouter({
  routes: [
    { path: '/', name: 'Strona główna', component: Home },
    { path: '/publications', name: 'Publikacje', component: Publications },
    { path: '/about', name: 'O mnie', component: About },
  ]
})

  
  export default routes