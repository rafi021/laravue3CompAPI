require('./bootstrap');

require('alpinejs');


import { createApp } from 'vue';
import router from './router';


// Create vue app instanace and load on app
createApp({
    components: {
    }
}).use(router).mount('#app');
