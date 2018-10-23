<template>
  <div class="main">
    <div class="container">
      <div class="lf">
        <tab></tab>
        <list :topiclist= 'topicList'></list>
        <page></page>
      </div>
      <div class="rt">
        <side></side>
      </div>
    </div>
  </div>
</template>
<script>
import tab from './../components/postList/tab'
import list from './../components/postList/list'
import side from './../components/aside'
import page from './../components/common/pagination'
import {getTopics} from './../api/request.js'
export default {
  name: 'postList',
  data(){
    return {
      topicList: []
    }
  },
  components: {
    tab,
    list,
    side,
    page
  },
  created () {
    // this.getData()
    getTopics({
      page: 1,
      limit: 10
    })
      .then((res) => {
        console.log('获取数据')
        console.log(res)
        this.topicList = res.data.data
      })
  },
  methods: {
    getData () {
      this.$http.get('https://cnodejs.org/api/v1/topics')
        .then((res) => {
          console.log(res)
        })
    }
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
        flex: 1;
        background: #fff;
        border-radius: 0 0 3px 3px
      }
      .rt{
        width: 290px;
        margin-left: 15px;
      }
    }
  }
</style>
