const OtherRoutes: Array<any> = [
    {
        path: '/400',
        name: 'OtherLanding',
        component: () => import("@/layouts/LandingLayout.vue"),
        redirect: '/',
        children: [
            {
                path: '/404',
                name: 'NotFound',
                component: () => import('@/views/other/NotFound.vue')
            },
            {
                path: '/locked',
                name: 'Locked',
                component: () => import('@/views/other/LockedPages.vue')
            },
            {
                path: '/maintenance',
                name: 'Maintenance',
                component: () => import('@/views/other/MaintenancePages.vue')
            },
        ],
    },
    {
        path: '/:catchAll(.*)', redirect: '/404',
    },
]

export default OtherRoutes;