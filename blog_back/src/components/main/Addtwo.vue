<template>
  <div>
      <div class='addOneClass'>
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <h3>一级分类列表</h3>
            <el-form-item label="一级中文类名">
                <el-select v-model="formLabelAlign.region" placeholder="请选择" @visible-change='change'>
                    <el-option label="前端" value=""></el-option>
                    <el-option label="运营" value=""></el-option>
                    <!-- <el-option v-for='(item,index) in list' :key='index'>{{item.enname}}<el-option/>    -->
                </el-select>
            </el-form-item>
            <h3>二级分类列表</h3>
            <el-form-item label="二级中文类名">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="二级英文标识">
                <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
  </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        list:null
      }
    },
    methods:{
        change(){
            this.axios.get('/api/back/get/getOnes').then(data=>{
                this.list=data.data
                console.log(this.list)
            })
        }
    }
}
</script>

<style>
    .el-form--label-right{
        margin-left: 20px;margin-right: 50px;
    }
    h3{
        line-height: 45px;
    }
</style>