require('./bootstrap');

require('alpinejs');


import { createApp } from 'vue';
import router from './router';
import CompanyIndex from './pages/Company/index.vue'

// Create vue app instanace and load on app
createApp({
    components: {
        CompanyIndex
    }
}).use(router).mount('#app');
