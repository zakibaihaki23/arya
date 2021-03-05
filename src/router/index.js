import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/masterhelper',
        name: 'MasterHelper',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/MasterHelper.vue')
    },
    // {
    //     path: '/daftar',
    //     name: 'DaftarPage',
    //     component: () => import("../views/Daftar.vue")
    // },
    {
        path: '/',
        name: 'LoginPage',
        component: () => import("../views/Login.vue")
    },
    {
        path: '/packing/listpacking',
        name: 'ListPacking',
        component: () => import("../views/Packing/ListPacking.vue")
    },
    {
        path: '/packing/listpackingdetail',
        name: 'ListPackingDetail',
        component: () => import("../views/Packing/ListPackingDetail.vue")
    },
    {
        path: '/packing/packingitem',
        name: 'PackingItem',
        component: () => import("../views/Packing/PackingItem.vue")
    },
    {
        path: '/Picking/ListPicking',
        name: 'ListPicking',
        component: () => import("../views/Picking/ListPicking.vue")
    },
    {
        path: '/Picking/PickingAssignment',
        name: 'PickingAssignment',
        component: () => import("../views/Picking/PickingAssignment.vue")
    },
    {
        path: '/Picking/PickingData',
        name: 'PickingDana',
        component: () => import("../views/Picking/PickingData.vue")
    },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router