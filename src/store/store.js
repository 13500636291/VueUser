import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    username: ''
}
const mutations = {
    setUsername(state, username) {
        state.username = username
        localStorage.setItem("username", username)
    }
}
const getters = {
    username() {
        return localStorage.getItem("username")
    }
}

const action = {}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    action
})