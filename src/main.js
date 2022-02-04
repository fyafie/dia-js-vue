import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/Header.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import mixins from './mixins';
import router from './router';
import store from './store';
import moshaToast from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

const app = createApp(App);

app.component('header-component', Header);
app.mixin(mixins);
app.use(router);
app.use(store);
axios.defaults.baseURL = 'https://api.steinhq.com/v1/storages/61fb5da3c582292380c8b041';
app.use(VueAxios, axios);
app.use(moshaToast);
app.mount('#app');
