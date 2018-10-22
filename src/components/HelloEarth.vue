<template>
  <div>
    <p>{{msg}}</p>
    <p>参数</p>
    <p>{{$route.query.msg}}</p>
  </div>
</template>
<script>
export default {
  name: 'helloEarth',
  data () {
    return {
      msg: 'hello earth'
    }
  }
}
</script>
