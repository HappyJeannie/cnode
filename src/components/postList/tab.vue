<template>
  <div class="tab">
    <ul>
      <li class="current"><a href="#">全部</a></li>
      <li><a href="#">精华</a></li>
      <li><a href="#">分享</a></li>
      <li><a href="#">问答</a></li>
      <li><a href="#">招聘</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tab'
}
</script>
<style lang="less" scoped>
  .tab{
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    ul{
      display: inline-flex;
      flex-direction: row;
      li{
        color: #80bd01;
        padding: 3px 4px;
        border-radius: 3px;
        margin: 0 10px;
        a{
          color: #80bd01;
          font-size: 14px;
          &:hover{
            color: #005580;
          }
        }
        &.current{
          background-color: #80bd01;
          a{
            color: #fff;
          }
        }
      }
    }
  }
</style>
