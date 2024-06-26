import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        redirect: 'index',
    },
    {
        path: '/index',
        name: 'Home',
        component: () => import('@/views/home/index.vue')
    },
    {
        path: '/about',
        name: 'About',
        //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
        component: () => import('@/views/about/index.vue')
    },
    //{
    //配置404页面
    //path: '/:catchAll(.*)',
    //name: '404',
    //component: () => import(''),
    //}
]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
// 导出
export default router
