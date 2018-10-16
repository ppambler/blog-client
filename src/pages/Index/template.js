import request from '@/helpers/request.js'
import auth from '@/api/auth.js'
import blog from '@/api/blog.js'

// 方便测试接口，定义一个全局变量并初始化为底层的那个request函数
window.request = request
window.auth = auth
window.blog = blog

export default {
    data () {
      return {
        blogs: [],
        total: 0,
        page: 1
      }
    },
    // 有种初始化的味道，这是在模板还未渲染好之前发送请求获取数据
    created() {
      this.page = parseInt(this.$route.query.page) || 1
      blog.getIndexBlogs({ page: this.page }).then(res => {
        console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
      })
    },
    methods: {
     onPageChange(newPage) {
       console.log(newPage)
       blog.getIndexBlogs({ page: newPage }).then(res => {
         console.log(res)
         this.blogs = res.data
         this.total = res.total
         this.page = res.page
         this.$router.push({ path: '/', query: { page: newPage }})
       })
     }
      
    }
}
