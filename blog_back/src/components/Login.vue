<template>
    <div class="load">
        <ul id="from">
            <li>
                <h4 id="pleaselogin">请登陆</h4>
            </li>
            <li>
                <input type="text" id="user" v-model.lazy="username.value" placeholder="请输入用户名" v-focus="username">
            </li>
            <li>
                <input type="password" id="psw" v-model.lazy="password.value" placeholder="请输入密码" v-focus="password" @blur="change(password)">
            </li>
            <el-button type="success" id="log" @click="submit">登陆</el-button>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: {
                value: "",
                reg: /^[a-zA-Z]{4,12}$/,
                msg: "您输入的用户名格式不对",
                state: false
            },
            password: {
                value: "",
                reg: /^[a-zA-Z0-9]{6,12}$/,
                msg: "您输入的密码格式不对",
                request: true,
                state: false
            }
        }
    },
    methods: {
        change(data) {
            data.state = true
        },
        submit() {
            if (this.username.value && this.password.value) {
                this.axios.post("/api/back/user/login", {
                    username: this.username.value,
                    password: this.password.value
                }).then((data) => {
                    switch (data.data.code) {
                        case "1001": {
                            this.$message({
                                message: '恭喜你，登录成功',
                                type: 'success'
                            });
                            sessionStorage.setItem("userId", data.data.data.id)
                            sessionStorage.setItem("userName", data.data.data.name)
                            this.$router.push("/back/main")
                        } break;
                        default: {
                            this.$message({
                                message: data.data.msg,
                                type: 'error'
                            });
                        }
                    }
                })
            } else {
                alert("填写")
            }
        }
    },
    directives: {
        focus: {
            componentUpdated(el, binding) {
                var { value, msg, reg, request, state } = binding.value//进行解析自定义指令传的值
                //清空提示p标签
                let clearP = () => {
                    let $p = el.parentNode.getElementsByTagName("p")[0]
                    if ($p != undefined) {
                        el.parentNode.removeChild($p)
                    }
                }
                // 检测value是否为空
                let testNull = () => {
                    if (value != "" && value != undefined && value != null) {//不为空就进行校验
                        testHandle()
                    } else {//为空就进行看是否是必填项
                        testRequest()
                    }
                }
                // 检测是否为必填项
                let testRequest = () => {
                    if (request) {//进行判断是不是必填项，为了防止多次创建p标签，在每次判断是不是必填时都要把p标签进行
                        clearP()
                        let $p = document.createElement("p")
                        //$p.setAttribute("class", "p")
                        $p.innerHTML = "此项不能为空"
                        $p.className='pp'
                        el.parentNode.appendChild($p)
                    } else {//如果不是必填项，也要把p标签进行清空
                        clearP()
                    }
                }
                // 正则校验
                let testHandle = () => {
                    clearP()
                    if (!reg.test(value)) {//如果不匹配，创建p标签进行提示错误信息
                        // el.parentNode
                        let $p = document.createElement("p")
                        $p.setAttribute("class", "p")
                        $p.innerHTML = msg
                        el.parentNode.appendChild($p)
                    }
                }
                if (state) {
                    testNull()
                }
            }
        }
    }
}
</script>

<style scoped>
#from {
    width: 400px;
    height: 300px;
    border: 1px solid #ccc;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
}

h4 {
    font-weight: normal;
    text-align: center;
    font-size: 24px;
    padding: 10px 0;
    margin: 0;
}

input {
    width: 80%;
    height: 40px;
    display: block;
    margin: 0 auto;
    border-radius: 15px;
    border: none;
    box-sizing: border-box;
    padding: 0 10px;
    outline: none;
    border: 1px solid #ccc;
}

li {
    margin: 15px;
}
 .p {
    width: 70%;
    margin: 3px auto;
    height: 20px;
    line-height: 20px;
    color: #f00;
}

#log {
    width: 80%;
    display: block;
    margin: 20px auto;
    background: orange;
    border: 0;
    outline: none;
}

#pleaselogin {
    padding: 20px 0;
}
</style>


