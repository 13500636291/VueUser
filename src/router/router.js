import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '@/view/login.vue'
import home from '@/view/home.vue'
import welcome from '@/view/Welcome/welcome.vue'
import user from '@/view/user/user.vue'
Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        { path: '/login', name: 'login', component: login },
        {
            path: '/',
            name: 'Home',
            component: home,
            redirect: 'welcome',
            children: [{
                    path: 'welcome',
                    name: 'welcome',
                    component: welcome
                },
                {
                    name: 'user',
                    path: 'user',
                    component: user
                }
            ]
        }
    ]
})