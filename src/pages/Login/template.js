import { mapActions } from 'vuex'

export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },

    methods: {
      ...mapActions(['login']),

      // 根据双向绑定可以拿到用户输入的数据，经过后端提供的接口验证后，假如成功就跳转到首页！
      onLogin() {
        this.login({ username: this.username, password: this.password })
          .then(() => {
            this.$router.push({ path: this.$route.query.redirect || '/' })
          })
      }
    }
}