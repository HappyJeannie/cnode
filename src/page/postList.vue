<template>
  <div class="main">
    <div class="container">
      <div class="lf">
        <tab @querydata="changeData"></tab>
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
  data () {
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
    this.queryData({})
  },
  methods: {
    changeData(type){
      this.queryData(type)
    },
    queryData(para){
      getTopics(para)
      .then((res) => {
        this.topicList = res.data.data
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
        background: #fff;
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
