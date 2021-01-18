import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Register2 from '../views/Register2.vue';
import FinishRegister from '../views/FinishRegister.vue';
import Aprenda from '../views/Aprenda.vue';
import Aprenda_aula from '../views/Aprenda_aula.vue';
import Empregos from '../views/Empregos.vue';
import SharedInput from "../components/SharedInput.vue";
import SharedButton from "../components/SharedButton.vue";
import SharedInputDivider from "../components/SharedInputDivider.vue";


Vue.use(VueRouter)
Vue.component("SharedInput", SharedInput);
Vue.component("SharedButton", SharedButton);
Vue.component("SharedInputDivider", SharedInputDivider)


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/register2',
    name: 'Register2',
    component: Register2
  },
  {
    path: '/finish',
    name: 'FinishRegister',
    component: FinishRegister
  },
  {
    path: '/aprenda',
    name: 'Aprenda',
    component: Aprenda
  },
  {
    path: '/aprenda_aula',
    name: 'Aprenda_aula',
    component: Aprenda_aula
  },
  {
    path: '/empregos',
    name: 'Empregos',
    component: Empregos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
