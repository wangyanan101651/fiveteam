<template>
  <div>
      加载中。。
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
  created(){
    let a=this.$route.query.state
    if(a==1){
      this.axios.get('/api/front/article/getArticleAll').then(data=>{
          this.getList(data)
            this.$router.push('/index')
      })
    }else{
        this.axios.get('/api/front/article/getArticleAll').then(data=>{
          this.getTwo(data)
            this.$router.push('/index2')
      })
    }
    
  },
  methods:{
    ...mapActions([
      'getList',
      'getTwo'
    ])
  },
  // computed:{
  //   ...mapState([
  //     'data'
  //   ])
  // }
}
</script>

<style>

</style>
