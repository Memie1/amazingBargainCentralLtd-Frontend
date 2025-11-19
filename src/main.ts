import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
// import a shipped PrimeVue theme and core styles instead of a missing '@primevue/themes/aura' module
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import router from './router/index.ts'

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.mount('#app');