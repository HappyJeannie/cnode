<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link :to="{name:'HelloWorld',params:{msg:'你好世界'}}">world</router-link>
    <router-link :to="{path:'/helloearth',query:{msg:'你好地球'}}">earth</router-link>
  </div>
</template>
<script>
export default {
  name: 'headnav'
}
</script>
