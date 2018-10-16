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
        blogs: []
      }
    },
    created() {
      blog.getIndexBlogs().then(res => {
        console.log(res)
        this.blogs = res.data
      })
    },
    methods: {
     
      
    }
}
