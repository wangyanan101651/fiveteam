<template>
  <div>
      index进行显示内容
  </div>
</template>

<script>
import axios from 'axios'
import {mapActions,mapState} from 'vuex'
export default {
    data(){
        return {

        }
    },
    created(){
      if(!this.lists){
         this.$router.push({path:'/loading',query:{state:2}})
      }
    },
    computed: {
        ...mapState(['lists'])
    }
}
</script>

<style>

</style>
