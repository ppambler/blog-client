import auth from '@/api/auth'

const state = {
    user: null,
    isLogin: false
}

const getters = {
    user: state => state.user,
    isLogin: state => state.isLogin
}

const mutations = {
    setUser(state, payload) {
        state.user = payload.user
    },
    
    setLogin(state, payload) {
        state.isLogin = payload.isLogin
    }
}

const actions = {
    login({ commit },{ username, password }) {
        return auth.login({ username, password })
            .then(res => {
                commit('setUser', { user: res.data})
                commit('setLogin', { isLogin: true})
            })
    },
    // 这是一个异步任务，因为需要发送请求，由于有个「await」,所以不会去执行commit,而是
    // 等它的结果回来才行，总之就是把这个异步请求当作是同步请求了！
    async register({ commit }, { username, password }) {
        let res = await auth.register({ username, password })
        commit('setUser', { user: res.data })
        commit('setLogin', { isLogin: true })
        return res.data
    },
    async logout({ commit }) {
        await auth.logout()
        commit('setUser', { user:null })
        commit('setLogin', { isLogin: false})
    },
    // **？：**这段就没有看懂了！
    async checkLogin({ commit, state}) {
        if(state.isLogin) return true
        let res = await auth.getInfo()
        commit('setLogin', { isLogin: res.isLogin })
        if(!res.isLogin) return false
        commit('setUser', { user: res.data })
        return true
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}