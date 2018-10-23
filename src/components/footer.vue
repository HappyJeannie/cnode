<template>
  <footer>
    <div class="footer_main">
      欢迎访问我的 <a href="https://github.com/HappyJeannie/cnode"> Github</a>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'footbar'
}
</script>
<style lang="less" scoped>
  footer{
    color: #333;
    background: #fff;
    text-align: center;
    height: 40px;
    line-height: 40px;
    .footer_main{
      width: 90%;
      max-width: 1400px;
      min-width: 960px;
      margin: 0 auto;
      font-size: 13px;
      line-height: 40px;
      a{
        color: #666;
      }
    }
  }
</style>
