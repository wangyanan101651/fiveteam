<template>
  <div>
      <ul>
          <li>
              用户名: <input type="text" placeholder="请输入用户名"  ref='user' v-focus="'use'"> 
              <p v-show='usernames.flag'>您输入的用户名不正确</p>        
          </li>
          <li>
              密码:  <input type="password" placeholder='请输入密码'  ref='paw' v-focus="'pas'"> 
              <p v-show='passwords.flag'>您输入的密码不正确</p>
          </li>
          <li>
              <button @click="denglu">登录</button>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
    data(){
        return {
           usernames:{
                vaule:'',
                flag:false,
                reg:/^[a-zA-Z]{3,6}$/
           },
           passwords:{
               vaule:2,
               flag:false,
               reg:/^[a-zA-Z0-9]{3,9}$/
           }
        }   
    },
    methods:{
        denglu(){
            this.$router.push()
        }
        // username(){
        //     this.usernames.value=this.$refs.user.value
        // },
        // pass(){
        //      this.passwords.value=this.$refs.paw.value
        // }
    },
    directives:{
        focus:{
            bind(el,binding){
                let reg1=/^[a-zA-Z]{3,6}$/
                let reg2=/^[a-zA-Z0-9]{3,9}$/
                el.onblur=function(){
                    if(binding.expression==`'use'`){
                      let p1=this.parentNode.lastChild
                         if(reg1.test(this.value)){
                             p1.style.display='none'
                         }else{
                             p1.style.display='block'
                         }
                    }else if(binding.expression==`'pas'`){
                        let p1=this.parentNode.lastChild
                          if(reg2.test(this.value)){
                             p1.style.display='none'
                         }else{
                             p1.style.display='block'
                         }
                    }
                }
            }
        }
    }
}
</script>

<style>

</style>
