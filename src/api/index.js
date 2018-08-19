import Vue from 'vue'
import axios from 'axios'
const baseURL = 'http://localhost:8888/api/private/v1/'
axios.defaults.baseURL = baseURL

// 添加一个请求拦截器
axios.interceptors.request.use(function(config) {
    let token = localStorage.getItem('mytoken');
    if (token) {
        config.headers['Authorization'] = token
    }
    return config;
}, function(error) {
    return Promise.reject(error);
});

Vue.use(axios)

// 登陆验证
export const loginPost = form => axios.post('login', form).then(res => res.data)

// 获取用户列表
export const getUserList = params => axios.get('users', params).then(res => res.data)

// 更改用户状态
export const changeUserState = params => axios.put(`users/${params.uid}/state/${params.type}`).then(res => res.data)

// 添加用户
export const addUser = params => axios.post('users', params).then(res => res.data)

// 根据ID获取用户信息
export const getUserById = params => axios.get(`users/${params}`).then(res => res.data)

// 编辑用户提交
export const submitUser = params => axios.put(`users/${params.id}`, params).then(res => res.data)

// 删除用户信息
export const deleteUser = params => axios.delete(`users/${params}`).then(res => res.data)

// 获取角色列表
export const getRoleList = () => axios.get('roles').then(res => res.data)

// 获取角色列表
export const grantUserRole = (params) => axios.put(`users/${params.id}/role`, { id: params.id, rid: params.rid }).then(res => res.data)