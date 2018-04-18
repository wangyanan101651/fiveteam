<template>
  <div>
      <div class="load">
          <ul>
              <li><h4 id='login'>请登录</h4></li>
              <li>
                  <input type="text" id="user" placeholder="请输入用户名" @blur="userName()" ref="userName">
                  <p v-show="flagU">用户名输入不正确</p>
              </li>
              <li>
                  <input type="text" id="user" placeholder="请输入密码" @blur="passName()" ref="passName">
                  <p v-show="flagP">密码输入不正确</p>
              </li>
              <button>登录</button>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'login',
    data () {
        return {
            flagU:false,
            flagP:false
        }
    },
    methods : {
          //用户名
          userName () {
           const userName = this.$refs.userName.value;
           //用户名正则，4到16位（字母，数字，下划线，减号）
            var uPattern = /^([a-zA-Z0-9_\u4e00-\u9fa5]){3,16}$/;
            //输出 true
            if(uPattern.test(userName)){
              this.flagU = false
            }else{
              this.flagU = true
            }
          },
          //密码
          passName () {
            const passName = this.$refs.passName.value;
            var passwrd = /^[0-9a-zA-Z!@#$^]{6,18}$/;
            if(passwrd.test(passName)){
                this.flagP = false
            }else{
              this.flagP = true
            }
          }
      }
}
</script>

<style>

</style>
