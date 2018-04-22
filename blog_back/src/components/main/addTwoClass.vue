<template>
  <div>

      <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="150px" class="demo-ruleForm">
        <h3>一级分类列表</h3>
        <el-form-item label="一级中文类名" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择">
            <el-option :value='item.id' v-for="(item,index) in ruleForm.list" :key='index' :label='item.cnname'></el-option>
            </el-select>
        </el-form-item>

        <h3>二级分类列表</h3>
        <el-form-item label="二级中文类名" prop="cnname_two" :rules = "[{required:true,message:'不能为空'}]">
            <el-input type="text" v-model="ruleForm.cnname_two" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="二级英文标识" prop="enname_two">
            <el-input type="text" v-model="ruleForm.enname_two" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
    data() {
      var validateEnname_one = (rule, value, callback) => {
          if (value === '') {console.log(value)
            callback(new Error('不能为空'));
          }else if (!/^[a-zA-Z]{4,10}$/.test(value)) {
              callback(new Error('您输入的格式不对'));
          }else{
            callback()
          }
      };
      return {
        ruleForm: {
          list: [],
          cnname_two: '',
          enname_two: '',
          region:''
        },
        rules2: {
          cnname_two: [{trigger: 'blur'}],
          enname_two: [
            { validator: validateEnname_one, trigger: 'blur' }
          ]
        }
      };
    },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          
          if (valid) {
            this.axios.post("/api/back/class/insertTwoClass",{
              oneId: this.ruleForm.region,
              enname_two: this.ruleForm.enname_two,
              cnname_two: this.ruleForm.cnname_two
            }).then((data) => {
                console.log(data)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },

    created(){
        this.axios.get("/api/back/class/getOneClass").then((data) => {
            if (data.data.code == 2021) {
                this.ruleForm.list = data.data.data
                console.log(this.ruleForm.list)
            }
            
        })
    }
}
</script>

<style>

</style>
