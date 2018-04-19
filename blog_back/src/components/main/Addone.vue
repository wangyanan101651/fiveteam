<template>
    <div>
        <el-form status-icon label-width="100px" class="demo-ruleForm">
           <h3>一级分类列表</h3>
            <el-form-item label="一级中文类名" prop="pass" class="b-arent">
                <el-input type="text" v-model.lazy="onezw.value" v-focus='onezw'  @blur="change(onezw)"></el-input>
                <b class="b">请输入正确的值</b>
            </el-form-item>
            <el-form-item label="一级英文标识" prop="checkPass" class="b-arent">
                <el-input type="text" auto-complete="off" v-model.lazy="oneyw.value" v-focus='oneyw'  @blur="change(oneyw)"></el-input>
                <b class="b">请输入正确的值</b>
            </el-form-item>
            <h3>二级分类列表</h3>
            <el-form-item label="二级中文类名" prop="age" class="b-arent">
                <el-input type='text' v-model.lazy="twozw.value" v-focus='twozw' @blur="change(twozw)"></el-input>
                <b class="b">请输入正确的值</b>
            </el-form-item>
               <el-form-item label="二级英文标识" prop="age" class="b-arent">
                <el-input @change="changeinp(twoyw)" type='text' v-model.lazy="twoyw.value" v-focus='twoyw' @blur="change(twoyw)"></el-input>
                <b class="b">请输入正确的值</b>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click='tijiao'>提交</el-button>
                <el-button @click="chz">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data(){
        return {
            onezw:{
                value:'',
                reg:/^[\u4e00-\u9fa5]{2,6}$/,
                msg:'只能输入中文',
                start: false
            },
            oneyw:{
                value:'',
                reg:/^[a-zA-Z]{2,10}$/,
                msg:'输入正确的英文',
                start: false
            },
            twozw:{
                value:'',
                reg:/^[\u4e00-\u9fa5]{2,5}$/,
                msg:'请输入中文',
                start: false
            },
            twoyw:{
                value:'',
                reg:/^[a-zA-Z]{2,6}$/,
                msg:'输入正确的二级英文',
                start: false
            }
        }
    },
    methods:{
        changeinp(twoyw) {
            twoyw.start = true
        },
        change(data){
           data.state=true
        },
        chz(){
            this.onezw.value='',this.oneyw.value='',this.twozw.value='',this.twoyw.value=''
        },
        tijiao(){
            if(this.oneyw.value&&this.twoyw.value){
                this.axios.post('/api/back/class/addOneClass',{
                    enname_one:this.onezw.value,
                    cnname_one:this.oneyw.value,
                    enname_two:this.twozw.value,
                    cnname_two:this.twoyw.value
                }).then(data=>{
                   if(data.data.code==2001){
                        this.$message({
                            message: '恭喜你，已成功提交',
                            type: 'success'
                        });
                   }
                })
            }
        }
    },
    directives:{
        focus:{
            componentUpdated(el,binding){
            let {value,msg,reg, start}=binding.value;
            if (value && start) {
                if (reg.test(value)) {
                    if (el.nextSibling.nextSibling) {
                        el.nextSibling.nextSibling.style.color = 'green'
                        el.nextSibling.nextSibling.style.display = 'block'
                        el.nextSibling.nextSibling.innerHTML = '格式输入正确 √'
                    }
                } else {
                    if (el.nextSibling.nextSibling) {
                        el.nextSibling.nextSibling.style.color = 'orange'
                        el.nextSibling.nextSibling.style.display = 'block'
                        el.nextSibling.nextSibling.innerHTML = '格式输入错误（请输入2-6字段）'
                    }
                }
            } else {
                if (el.nextSibling.nextSibling) {
                    el.nextSibling.nextSibling.style.color = 'red'
                    el.nextSibling.nextSibling.style.display = 'block'
                    el.nextSibling.nextSibling.innerHTML = '请输入值'
                }
                
            }


            //    let {value,msg,reg,request,state}=binding.value;
            //     let cleap=()=>{//清楚p标签，防止每次操作多次创建p标签
            //         let $p = el.parentNode.getElementsByTagName("p")[0]
            //         if ($p != undefined) {
            //             el.parentNode.removeChild($p)
            //         }
            //     }
            //    let jiaoyan=()=>{//进行正则校验
            //         cleap()
            //        if(!reg.test(value)){
            //            let $p=document.createElement('p');
            //            $p.innerText=msg;
            //            el.parentNode.appendChild($p)
            //        }
            //    }
            //     // 检测value是否为空
            //     let testNull = () => {
            //         if (value != "" && value != undefined && value != null) {//不为空就进行校验
            //             jiaoyan()
            //         } else {//为空就进行看是否是必填项
            //             testRequest()
            //         }
            //     }
            //     let testRequest=()=>{//判断是不是必填项
            //         if(request){
            //             cleap()
            //             let $p=document.createElement('p');
            //             $p.innerText='不能为空';
            //             el.parentNode.appendChild($p)
            //         }else{
            //             cleap()
            //         }
            //     }
            //     if(state){
            //        testNull() 
            //     }
            }
        }
    }
  }
</script>

<style>
  .demo-ruleForm{
    margin-left: 10px;margin-top:10px;
  }
  h3{
    line-height: 45px;
  }
  .el-input__inner{
    height:35px;
  }
  .b-arent{
    position: relative;
  }
  .b-arent .b{
      position: absolute;
      top: 30px;
      display: none;
  }
</style>
