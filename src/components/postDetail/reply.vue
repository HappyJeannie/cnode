<template>
  <div class="panel">
    <div class="header">
      <span class="col_fade">48 回复</span>
    </div>
    <div class="reply">
      <ul>
        <li>
          <div class="avatar">
            <a href="">
              <img src="" alt="">
            </a>
          </div>
          <div class="info">
            <div class="user_info">
              <a href="" class="name">用户名</a>
              <a href="" class="time">44楼 • 9 天前</a>
            </div>
            <div class="msg">
              <p>dsfdsfdsf</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'reply'
}
</script>
<style lang="less" scoped>
.panel{
  padding: 0px;
  .reply{
    ul{
      li{
        display: flex;
        flex-direction: row;
        padding: 10px;
        background: #fff;
        border-top: 1px solid #f0f0f0;
        .avatar{
          width: 30px;
          height: 30px;
          margin-right: 10px;
          a{
            display: block;
            width: 30px;
            height: 30px;
            img{
              width: 30px;
              height: 30px;
              border-radius: 3px;
            }
          }
        }
        .info{
          flex: 1;
          .user_info{
            font-size: 12px;
            font-weight: 700;
            line-height: 30px;
            .name{
              color: #666;
              text-decoration: none;
            }
            .time{
              color: #08c;
              text-decoration: none;
            }
          }
          .msg{
            p{
              font-size: 15px;
              line-height: 1.7em;
              overflow: auto;
            }
          }
        }
      }
    }
  }
}
</style>
