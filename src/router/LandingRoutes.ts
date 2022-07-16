
const LandingRoutes: Array<any> = [
    {
        path: '/',
        name: 'Landing',
        component: () => import("@/layouts/LandingLayout.vue"),
        redirect: '/',
        children: [
            {
                path: "/",
                name: "home",
                component: () => import("@/views/HomeView.vue"),
            },
            {
                path: "/home",
                name: "LandingIndex",
                component: () => import("@/views/HomeView.vue"),
            },
            {
                path: "/template",
                name: "template",
                component: () => import("@/views/examples/BaseTemplate.vue"),
            },
        ]
    },
];
export default LandingRoutes;