<template>
  <div class="tab">
    <ul>
      <li v-for="item in list" :key="item.id">
        <div class="avatar">
          <router-link :to="{path: '/user/'+item.author.loginname}">
            <img :src="item.author.avatar_url" alt="">
          </router-link>
        </div>
        <div class="reply">
          <span class="relpies">{{item.reply_count}}</span>
          <span>/</span>
          <span class="clicked">{{item.visit_count}}</span>
        </div>
        <div class="title">
          <span :class="[{active:item.top}, 'type']">{{item.tabName}}</span>
          <router-link :to="{path: '/topic/'+item.id}">{{item.title}}</router-link>
        </div>
        <div class="recent">
          <router-link :to="{path: '/topic/'+ item.id}">
            <img :src="item.author.avatar_url" alt="">
            <span class="time">{{item.last_reply_at}}</span>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {formatDate, getTab} from './../../utils/util.js'
export default {
  name: 'list',
  props: ['topiclist'],
  data: function () {
    return {}
  },
  computed: {
    list: function () {
      this.topiclist.map((item) => {
        item.last_reply_at = formatDate(item.last_reply_at)
        item.tabName = getTab(item.tab)
      })
      return this.topiclist
    }
  }
}
</script>
<style lang="less" scoped>
  .tab{
    ul{
      li{
        position: relative;
        padding: 10px 0 10px 10px;
        font-size: 14px;
        border-top: 1px solid #f0f0f0;
        display: flex;
        flex-direction: row;
        height: 50px;
        &:first-child{
          border: none;
        }
        .avatar{
          width: 30px;
          height: 30px;
          border-radius: 3px;
          overflow: hidden;
          a,img{
            width: 30px;
            height: 30px;
            display: block;
          }
        }
        .reply{
          width: 70px;
          text-align: center;
          line-height: 30px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          span{
            font-size: 10px;
          }
          .clicked{
            font-size: 10px;
            color: #b4b4b4;
          }
          .relpies{
            color: #9e78c0;
            font-size: 14px;
          }
        }
        .title{
          white-space: nowrap;
          vertical-align: middle;
          font-size: 16px;
          line-height: 30px;
          flex: 1;
          flex-direction: row;
          display: flex;
          align-items: center;
          .type{
            background-color: #e5e5e5;
            color: #999;
            padding: 0px 4px;
            border-radius: 3px;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            -o-border-radius: 3px;
            font-size: 12px;
            line-height: 20px;
            height: 20px;
            margin-right: 2px;
            &.active{
              background: #80bd01;
              color: #fff;
            }
          }
          a{
            overflow: hidden;
            // text-overflow: ellipsis;
            // white-space: nowrap;
            display: block;
           // max-width: 480px;
          }
        }
        .recent{
          width: 100px;
          margin-left: 10px;
          a{
            display: block;
            width: 100%;
            height: 30px;
            line-height: 30px;
            img{
              height: 18px;
              width: 18px;
              vertical-align: middle;
              border-radius: 3px;
            }
            span{
              text-align: right;
              min-width: 50px;
              display: inline-block;
              white-space: nowrap;
              color: #778087;
              font-size: 11px;
            }
          }
        }
      }
    }
  }
</style>
