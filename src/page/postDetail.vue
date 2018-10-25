<template>
  <div class="main">
    <div class="container">
      <div class="lf">
        <div class="panel">
          <div class="header topic_header">
            <span class="topic_full_title">
              <span class="put_top">置顶</span>
                EggJS 10000 Star + 2 years - 阿里 Node 企业级框架 ✨✨✨
            </span>
            <div class="changes">
              <span>发布于 1 个月前</span>
              <span>作者 <a href="/user/atian25">atian25</a></span>
              <span>7072 次浏览</span>
              <span> 来自 分享</span>
            </div>
          </div>
          <div class="topic_content">
            <div class="markdown-text">
              正文
            </div>
          </div>
        </div>
        <div class="panel header">
          <div class="header">
            <span class="col_fade">48 回复</span>
          </div>
          <div class="reply">
            <ul>
              <li>
                <div class="author_content">
                  <a href="#" class="user_avatar">
                    <img src="#" title=""></a>
                    <div class="user_info">
                      <a class="dark reply_author" href="#">CHANGhaoying</a>
                      <a class="reply_time" href="#">44楼•9 天前</a>
                    </div>
                    <div class="user_action">
                      <span>
                        <i></i>
                        <span class="up-count"></span>
                      </span>
                      <span></span>
                    </div>
                  </div>
                  <div class="reply_content from-CHANGhaoying">
                    <div class="markdown-text">
                      <p></p>
                    </div>
                  </div>
                  <div class="clearfix">
                    <div class="reply2_area">
                    </div>
                  </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="rt">
        <sidebar></sidebar>
      </div>
    </div>
  </div>
</template>
<script>
import sidebar from './../components/aside'
import {getTopicDetail} from './../api/request.js'
export default {
  name: 'postDetail',
  created () {
    // this.fetchDetail()
  },
  methods: {
    fetchDetail () {
      getTopicDetail(this.$route.params.id)
        .then((res) => {
          console.log('获取详情页数据')
          console.log(res)
        })
    }
  },
  components: {
    sidebar
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
        .panel{
          .header{
            border-radius: 3px 3px 0 0;
            background: #fff;
            .topic_full_title{
              font-size: 22px;
              font-weight: 700;
              margin: 8px 0;
              display: inline-block;
              vertical-align: bottom;
              width: 75%;
              line-height: 130%;
              .put_top{
                background: #80bd01;
                padding: 2px 4px;
                color: #fff;
                font-size: 12px;
                border-radius: 4px;
              }
            }
            .changes{
              font-size: 12px;
              color: #838383;
              span{
                font-size: 12px;
                &:before{
                  content: "•";
                }
              }
              a{
                color: transparent;
                color: #838383;
              }
            }
          }
          .topic_content{
            padding: 10px;
            border-top: 1px solid #e5e5e5;
          }
        }
      }
      .rt{
        width: 290px;
        margin-left: 15px;
        min-width: 290px;
      }
    }
  }
</style>

