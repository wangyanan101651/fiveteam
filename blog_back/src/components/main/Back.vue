<template>
  <div >
    <Heads></Heads>
    <div class="main">
      <Left class="left"></Left>
      <router-view class="right"></router-view>
    </div>
  </div>
</template>
<script>
import Left from '../common/Left'
import Heads from '../common/Heads'
export default {
    data(){
        return {

        }
    },
    components:{
        Left,
        Heads
    }
}
</script>

<style scoped>
.main{
  overflow: hidden
}
.main .left{
  float: left

}
.main .right{
  float: left;
  width: calc(100% - 200px);
}
</style>
