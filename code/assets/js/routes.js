import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import Admin from './components/Admin';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes:[
        { path:'/', name:'home', component: Home },
        { path:'/admin', name:'admin', component: Admin }
    ]
});

export default router;