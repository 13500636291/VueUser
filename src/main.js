import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'


import { router } from './router/router'
import store from './store/store.js'
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('mytoken')
    if (token) {
        next()
    } else {
        if (to.path == '/login') {
            next()
        } else {
            next({ path: '/login' })
        }
    }
})
import './styles/index.scss'
import './styles/icon.scss'
import './styles/element.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')