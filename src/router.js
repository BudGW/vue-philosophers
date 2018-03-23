import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import PhilosophersPage from './views/PhilosophersPage.vue'
import PhilosopherDetail from './views/PhilosopherDetail.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/philosophers',
            name: 'philosophers',
            component: PhilosophersPage
        },
        {
            path: '/philosopher/:philosopherId',
            name: 'philosopher',
            component: PhilosopherDetail,
            props: true
        }
    ]
})
