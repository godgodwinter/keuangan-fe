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
                component: () => import("@/views/admin/dashboard/DashboardIndex.vue"),
            },
            {
                path: `${prefix}rekap/bulanan`,
                name: 'AdminRekapBulanan',
                component: () => import("@/views/admin/rekap/RekapBulananIndex.vue"),
            },
            {
                path: `${prefix}rekap/bulanan/kategori/:id/:thn?/:bln?`,
                name: 'AdminRekapBulananPerKategori',
                component: () => import("@/views/admin/rekap/RekapBulananPerKategoriIndex.vue"),
            },
            {
                path: `${prefix}profile`,
                name: 'AdminProfile',
                component: () => import("@/views/admin/profile/ProfileIndex.vue"),
            },
            {
                path: `${prefix}user`,
                name: 'AdminUser',
                component: () => import("@/views/admin/user/UserIndex.vue"),
            },
            {
                path: `${prefix}user/tambah`,
                name: 'AdminUserTambah',
                component: () => import("@/views/admin/user/UserTambah.vue"),
            },
            {
                path: `${prefix}user/edit/:id`,
                name: 'AdminUserEdit',
                component: () => import("@/views/admin/user/UserEdit.vue"),
            },
            {
                path: `${prefix}kategori`,
                name: 'AdminKategori',
                component: () => import("@/views/admin/kategori/KategoriIndex.vue"),
            },
            {
                path: `${prefix}kategori/tambah/:jenis?`,
                name: 'AdminKategoriTambah',
                component: () => import("@/views/admin/kategori/KategoriTambah.vue"),
            },
            {
                path: `${prefix}kategori/edit/:id`,
                name: 'AdminKategoriEdit',
                component: () => import("@/views/admin/kategori/KategoriEdit.vue"),
            },
            {
                path: `${prefix}transaksi`,
                name: 'AdminTransaksi',
                component: () => import("@/views/admin/transaksi/TransaksiIndex.vue"),
            },
            {
                path: `${prefix}transaksi/tambah`,
                name: 'AdminTransaksiTambah',
                component: () => import("@/views/admin/transaksi/TransaksiTambah.vue"),
            },
            {
                path: `${prefix}transaksi/edit/:id`,
                name: 'AdminTransaksiEdit',
                component: () => import("@/views/admin/transaksi/TransaksiEdit.vue"),
            },
        ],
    },
];


// AdminRoutes.push(
//     ...AdminSkillsRoutes,
// );
export default AdminRoutes;