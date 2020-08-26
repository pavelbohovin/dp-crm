import '../css/app.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import Routes from './routes.js';
import App from './views/App';
import Axios from 'axios'

Vue.prototype.$axios = Axios;
Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    vuetify : new Vuetify(),
    router: Routes,
    render: h => h(App),
});

export default app;