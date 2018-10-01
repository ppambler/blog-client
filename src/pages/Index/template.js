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
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      },
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message.success('你点了确定哦！');
            console.log(action)
          }
        });
      }
    }
}
