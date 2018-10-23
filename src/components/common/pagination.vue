<template>
  <div class="page">
    <ul>
      <li>&lt;</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>&gt;</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'page'
}
</script>
<style lang="less" scoped>
  .page{
    margin-top: 10px;
    ul{
      display: flex;
      flex-direction: row;
      justify-content: center;
      li{
        padding: 4px 12px;
        line-height: 20px;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid #ddd;
        border-left-width: 0;
        cursor: pointer;
        &:first-child{
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          border-left-width: 1px;
        }
        &:last-child{
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }
    }
  }
</style>
