import request from '@/helpers/request'

const URL = {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    GET_INFO: '/auth'
}

export default {
    //**？：** 这个解析赋值需要看一下才行
    register({username, password}) {
        return request(URL.REGISTER, 'POST', { username, password})
    },
    login({username, password}) {
        return request(URL.LOGIN, 'POST', { username, password})
    },
    logout() {
        return request(URL.LOGOUT)
    },
    getInfo() {
        return request(URL.GET_INFO)
    }
}