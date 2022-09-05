import abilities from '@/admin/stub/abilities'

const Login = () => import('@/admin/views/auth/Login.vue')
const LayoutBasic = () => import('@/admin/layouts/LayoutBasic.vue')
const LayoutLogin = () => import('@/admin/layouts/LayoutLogin.vue')
// const ResetPassword = () =>
//   import('@/scripts/admin/views/auth/ResetPassword.vue')
const ForgotPassword = () =>
  import('@/admin/views/auth/ForgotPassword.vue')

// Dashboard
const Dashboard = () => import("@/admin/views/dashboard/Dashboard.vue");

export default [
    {
        path: '/',
        component: LayoutLogin,
        meta: { requiresAuth: false, redirectIfAuthenticated: true },
        children: [
          {
            path: '',
            component: Login,
          },
          {
            path: 'login',
            name: 'login',
            component: Login,
          },
          {
            path: 'forgot-password',
            name: 'forgot-password',
            component: ForgotPassword,
          }
        ],
    },
    {
        path: '/admin',
        component: LayoutBasic,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                component: Dashboard
            },
            {
                path: 'dashboard',
                name: 'dashboard',
                meta: { ability: abilities.DASHBOARD },
                component: Dashboard,
            }
        ]
    }
];
