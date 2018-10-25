<template>
  <div class="tab">
    <ul>
      <li v-for="item in tabList" :key="item.name" :class="{current: curTab == item.name}" @click="changeTab(item.name)">
        <a href="javascript:;">
          {{item.tabName}}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tab',
  data () {
    return {
      curTab: 'all',
      tabList: [
        {
          tabName: '全部',
          name: 'all'
        },
        {
          tabName: '精华',
          name: 'good'
        },
        {
          tabName: '分享',
          name: 'share'
        },
        {
          tabName: '问答',
          name: 'ask'
        },
        {
          tabName: '招聘',
          name: 'job'
        }
      ]
    }
  },
  methods: {
    changeTab (type) {
      this.curTab = type
      this.$emit('querydata', {tab: type})
    }
  }
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
