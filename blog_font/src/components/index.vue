<template>
  <div class='big'>
      <headss></headss>
      <div>首页</div>
      <home></home>
  </div>
</template>

<script>
import headss from './header.vue'
import home from './home.vue'

export default {
  data(){
    return{

    }
  },
  components:{
    headss,
    home
  }
}
</script>

<style>
  .big{
    padding: 0px 50px;
  }
</style>
