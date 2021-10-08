import { createRouter, createWebHistory } from "vue-router";

import CompanyIndex from '../pages/Company/index.vue'
import CompanyCreate from '../pages/Company/create.vue'

const routes = [

    { path: '/dashboard', name: 'companies.index', component: CompanyIndex },
    { path: '/company/create', name: 'companies.create', component: CompanyCreate },
];


export default createRouter({
    history: createWebHistory(),
    routes
})
