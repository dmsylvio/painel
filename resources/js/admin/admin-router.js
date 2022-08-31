import abilities from '@/admin/stub/abilities'
import Home from "@/components/Home.vue"
import About from "@/components/About.vue"

export default [
    // {
    //     path: '/',
    //     component: LayoutLogin,
    //     meta: { requiresAuth: false, redirectIfAuthenticated: true },
    //     children: [
    //         {
    //             path: '',
    //             component: Login,
    //         },
    //         {
    //             path: 'login',
    //             name: 'login',
    //             component: Login
    //         }
    //     ]
    // }
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
];
