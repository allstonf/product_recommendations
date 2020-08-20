import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../Views/HomeView.vue'
import Preview from '../Views/Preview.vue'

Vue.use(VueRouter)

export const routes: Array<RouteConfig> = [
    {
        path: '/preview',
        name: 'Preview',
        component: Preview
    },
    {
        path: '/',
        name: 'Home',
        children: [{
          path: ':channelId'
        }],
        component: HomeView
    }
]
const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
})

export default router
