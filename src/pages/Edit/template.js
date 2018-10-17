import blog from '@/api/blog'

export default {
    data () {
      return {
        blogId: null,
        title: '',
        description: '',
        content: '',
        atIndex: false,
      }
    },

    created() {
        this.blogId = this.$route.params.blogId
        blog.getDetail({ blogId: this.blogId }).then(res => {
        this.title = res.data.title
        this.description = res.data.description
        this.content = res.data.content
        this.atIndex = res.data.atIndex
      }) 
    },

    methods: {
      onEdit() {
        blog.updateBlog({ blogId: this.blogId }, { title: this.title, content: this.content, description: this.description, atIndex: this.atIndex})
          .then(res => {
            this.$message.success(res.msg)
            this.$router.push({ path: `/detail/${res.data.id}`})
          })
      },
      onInputTitle() {
        let titleNum = parseInt(this.title.length)
        if(titleNum === 30 ) {
          this.$refs.titleStr.$el.children[0].classList.add('strStyle')
        } else {
          this.$refs.titleStr.$el.children[0].classList.remove('strStyle')
        }
      },
      onInputDescription() {
        let descriptionNum = parseInt(this.description.length)
        if( descriptionNum === 300 ) {
          this.$refs.descriptionStr.$el.children[0].classList.add('strStyle')
        } else {
          this.$refs.descriptionStr.$el.children[0].classList.remove('strStyle')
        }
      },
      onInputContent() {
        let contentNum = parseInt(this.content.length)
        if(contentNum === 6000 ) {
          this.$refs.contentStr.$el.children[0].classList.add('strStyle')
        } else {
          this.$refs.contentStr.$el.children[0].classList.remove('strStyle')
        }
      }

    }
}