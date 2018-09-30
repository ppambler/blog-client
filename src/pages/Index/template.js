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
