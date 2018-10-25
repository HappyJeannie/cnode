<template>
  <div class="panel">
    <div class="header topic_header">
      <span class="topic_full_title">
        <span class="put_top">置顶</span>
          {{topic.title}}
      </span>
      <div class="changes">
        <span>发布于 1 个月前</span>
        <span>作者 <a href="/user/atian25">{{topic.name}}</a></span>
        <span>{{topic.visit_count}}次浏览</span>
        <span> 来自 分享</span>
      </div>
    </div>
    <div class="topic_content">
      <div class="markdown-text" v-html="topic.content">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detailheader',
  props: ['topic']
}
</script>
<style lang="less" scoped>
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
</style>
