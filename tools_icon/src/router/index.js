import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Eicon',
    component: () => import( /* webpackChunkName: "e_tool_icons" */ '../components/Eicon'),
}]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})
export default router