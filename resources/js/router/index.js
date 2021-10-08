import { createRouter, createWebHistory } from "vue-router";

import CompanyIndex from '../pages/Company/index.vue'
import CompanyCreate from '../pages/Company/create.vue'
import CompanyEdit from '../pages/Company/edit.vue'

const routes = [

    { path: '/dashboard', name: 'companies.index', component: CompanyIndex },
    { path: '/companies/create', name: 'companies.create', component: CompanyCreate },
    { path: '/companies/:id/edit', name: 'companies.edit', component: CompanyEdit, props: true },
];


export default createRouter({
    history: createWebHistory(),
    routes
})
