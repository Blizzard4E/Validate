import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import CountryInfo from '../components/CountryInfo.vue'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/info/:country',
            component: CountryInfo
        }
    ]
});