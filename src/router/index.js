import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home'),
        },
        {
            name: 'login',
            path: '/login',
            component: () => import('@/views/Login')
        },
        {
            name: 'info',
            path: '/info',
            component: () => import('@/views/Account')
        }
    ]
})
