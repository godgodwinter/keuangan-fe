// import AdminSkillsRoutes from "./admin/AdminSkillsRoutes";

const prefix = '/pages/admin/';

const AdminRoutes: Array<any> = [
    {
        path: `${prefix}dashboard`,
        name: 'AdminDashboard',
        component: () => import("@/layouts/AdminLayout.vue"),
        redirect: `${prefix}dashboard/index`,
        children: [
            {
                path: `${prefix}dashboard/index`,
                name: 'AdminDashboardIndex',
                component: () => import("@/views/admin/DashboardIndex.vue"),
            },
        ],
    },
];


// AdminRoutes.push(
//     ...AdminSkillsRoutes,
// );
export default AdminRoutes;