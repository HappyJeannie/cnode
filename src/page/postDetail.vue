<template>
  <div class="main">
    <div class="container">
      <div class="lf">
        <headtit :topic="headInfo"></headtit>
        <reply></reply>
      </div>
      <div class="rt">
        <sidebar></sidebar>
      </div>
    </div>
  </div>
</template>
<script>
import sidebar from './../components/aside'
import headtit from './../components/postDetail/header'
import reply from './../components/postDetail/reply'
import {getTopicDetail} from './../api/request.js'
export default {
  name: 'postDetail',
  data() {
    return {
      headInfo: {
        title: '',
        username: '',
        time: '',
        good: '',
        tab: '',
        visit_count: '',
        content:'',
        id:''
      },
      replies:[]
    }
  },
  created () {
    this.fetchDetail()
  },
  methods: {
    fetchDetail () {
      getTopicDetail(this.$route.params.id)
        .then((res) => {
          console.log('获取详情页数据')
          console.log(res)
          var data = res.data.data
          this.headInfo.title = data.title
          this.headInfo.username = data.title
          this.headInfo.time = data.time
          this.headInfo.good = data.good
          this.headInfo.tab = data.tab
          this.headInfo.visit_count = data.visit_count
          this.headInfo.content = data.content
          this.headInfo.id = data.id
          this.headInfo.replies = data.replies
        })
    }
  },
  components: {
    sidebar,
    headtit,
    reply
  }
}
</script>
<style lang="less" scoped>
  .main{
    width: 90%;
    margin: 15px auto;
    min-height: 400px;
    .container{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .lf{
        border-radius: 0 0 3px 3px;
        padding-bottom: 20px;
        width: calc(100% - 300px);
      }
      .rt{
        width: 290px;
        margin-left: 15px;
        min-width: 290px;
      }
    }
  }
</style>

