import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import './assets/css/tailwind.css';
import router from './router';

createApp(App).use(router).mount('#app')
