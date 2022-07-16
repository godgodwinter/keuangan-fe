
const AuthRoutes: Array<any> = [
    {
        path: '/pages/login',
        name: 'AuthLanding',
        component: () => import("@/layouts/LandingLayout.vue"),
        redirect: '/',
        children: [
            {
                path: '/login',
                name: 'LandingLogin',
                component: () => import("@/views/HomeView.vue"),
            },
        ],
    },
];
export default AuthRoutes;