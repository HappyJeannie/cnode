<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="logo">
        <img src="./../assets/img/logo.svg" alt="logo">
      </div>
      <nav>
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">新手入门</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">关于</a></li>
          <li><a href="#">登录</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'headnav'
}
</script>
<style lang="less" scoped>
  .navbar{
    width: 100%;
    background: #444;
    font-size: 13px;
    .navbar-inner{
      width: 90%;
      margin: auto;
      line-height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .logo{
        width: 120px;
        padding: 6px 20px 0px 0px;
        height: 34px;
        line-height: 34px;
        color: #ccc;
        font-weight: 700;
        display: block;
        margin-top: 0px;
      }
      nav{
        vertical-align: top;
        ul{
          display: flex;
          flex-direction: row;
        }
        li{
          float: left;
          a{
            text-shadow: none;
            color: #ccc;
            padding: 0px 15px;
            &:hover{
              color: #fff;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    .navbar{
      .navbar-inner{
        display: block;
        nav{
          ul{
            justify-content: flex-end;
          }
        }
      }
    }
  }
</style>
