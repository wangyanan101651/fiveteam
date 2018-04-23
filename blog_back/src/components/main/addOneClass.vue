<template>
  <div class="wrap_add">
    <el-form :model="ruleForm1" status-icon :rules="rules1" label-width="100px" class="demo-ruleForm addownclass">
        <div class="h3">
          <h3>一级分类列表</h3>
      </div>
      <el-form-item label="一级中文类名" prop="text1">
        <el-input placeholder="请输入内容" v-model.number="ruleForm1.text1"></el-input>
      </el-form-item>
        <el-form-item label="一级英文类名" prop="age1">
            <el-input placeholder="请输入内容" v-model.number="ruleForm1.age1"></el-input>
        </el-form-item>
    </el-form>

    <el-form :model="ruleForm2" status-icon :rules="rules2" label-width="100px" class="demo-ruleForm addownclass">
    <div class="h3">
          <h3>二级分类列表</h3>
      </div>
      <el-form-item label="二级中文类名" prop="text2">
        <el-input placeholder="请输入内容" v-model.number="ruleForm2.text2"></el-input>
      </el-form-item>
       <el-form-item label="二级英文类名" prop="age2">
            <el-input placeholder="请输入内容" v-model.number="ruleForm2.age2"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  name: 'addownclass',
  data () {
        var checkAge1 = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('不能为空'));
        }else{
             let reg = /^[a-zA-Z]{2,6}$/
            if (reg.test(value)) {
                callback();
            } else {
                callback(new Error('请输纯英文（2-6个字段）'));
            }
        }
        };
        var checkAge2 = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('不能为空'));
        }else{
                let reg = /^[a-zA-Z]{2,6}$/
                if (reg.test(value)) {
                    callback();
                } else {
                    callback(new Error('请输纯英文（2-6个字段）'));
                }
        }
        };
        var checkAge11 = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('不能为空'));
        }else{
                callback();
        }
        };
        var checkAge22 = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('不能为空'));
        }else{
            callback();
        }
        };
        return {
            ruleForm2: {
            age2: '',
            text2: ''
        },
        ruleForm1: {
            age1: '',
            text1: ''
        },
        rules2: {
            age2: [
            { validator: checkAge2, trigger: 'blur' }
            ],
            text2: [
            { validator: checkAge22, trigger: 'blur' }
            ],
        },
        rules1: {
            age1: [
            { validator: checkAge1, trigger: 'blur' }
            ],
            text1: [
            { validator: checkAge11, trigger: 'blur' }
            ],
        }
        }
        },
  methods: {
    submitForm () {
      // 提交
      const { text1, age1 } =this.ruleForm1 ;
      const { text2, age2 }=this.ruleForm2;
      if(text1&&age1&&text2&&age2){
          this.axios.post('/api/back/class/insertOneClass',{
              enname_one:age1,
              cnname_one:text1,
              enname_two:age2,
              cnname_two:text2
          }).then(data=>{
              if(data.data.code==2001){
                this.$message({
                    message: data.data.msg,
                    type: 'success',
                    showClose:true
                });
              }else{
                     this.$message({
                    message: data.data.msg,
                    type: 'error',
                    showClose:true
                });
              }
          })
      }

    },
    resetForm () {
      // 重置
        this.ruleForm1.text1='',
        this.ruleForm1.age1='',
        this.ruleForm2.text2='',
        this.ruleForm2.age2=''
    }
  },
  directives: {
    //   focus : {
    //     componentUpdate (el, binding) {
    //         console.log(el)
    //         console.log(binding)
    //     }
    //   }
  }
}
</script>

<style>
  .addownclass{
    width: 300px;
  }
  .addownclass .h3{
      width: 100%;
  }
   .addownclass .h3 h3{
    height: 60px;
    line-height: 60px;
  } 
  .addownclass>div{
    padding-left: 20px;
  }
</style>
