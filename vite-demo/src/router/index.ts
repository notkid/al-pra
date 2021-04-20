import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '../views/index.vue'
import User from '../views/user.vue'

const constantRoutes = [
    {
        path: '/',
        title: '首页',
        component: HelloWorld
    },
    {
        path: '/user', component: User, title: '用户',
        children: [
            {
                path: 'demo1',
                title: '用户子菜单',
                name: 'demo1',
                component: () => import('../views/user-children-1.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})

export {
    router,
    constantRoutes
}