<template>
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="标题" :rules="[{required:true,message:'不能为空'}]">
    <el-input v-model="form.title" ></el-input>
  </el-form-item>
   <el-form-item label="接口地址" :rules="[{required:true,message:'不能为空'}]">
    <el-input v-model="form.url" ></el-input>
  </el-form-item>
   <el-form-item label="类型" :rules="[{required:true,message:'不能为空'}]">
    <el-select v-model="form.region" placeholder="请选择活动区域">
       <el-option label='前台接口' value='font'></el-option> 
        <el-option label='后台接口' value='back'></el-option>  
    </el-select>
  </el-form-item> 
       <el-form-item label="请求类型" :rules="[{required:true,message:'不能为空'}]">
       <el-select v-model="form.region2" placeholder="请选择活动区域">
        <el-option label='post' value='post'></el-option> 
        <el-option label='get' value='get'></el-option> 
        <el-option label='formdata' value='formdata'></el-option>   
    </el-select>  
   </el-form-item>  
  <el-form-item label="请求参数" :rules="[{required:true,message:'不能为空'}]">
    <el-input type="textarea" v-model="form.canshu"></el-input>
  </el-form-item>
   <el-form-item label="响应数据" :rules="[{required:true,message:'不能为空'}]">
    <el-input type="textarea" v-model="form.shuju"></el-input>
  </el-form-item>
 
  <el-form-item>
    <el-button type="primary" @click="onSubmit">提交</el-button>
    <el-button>重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          title: '',
          url:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          canshu: '',
          region2:'',
          shuju:''
        }
      }
    },
    methods: {
      onSubmit() {
          //let {title,url,type,sendParams,getParams,backorfont}=req.body;
        let {title,url,region,region2,canshu,shuju}=this.form;
        this.axios.post('/api/jiekou/add/addJiekou',{
            title,
            url,
            type:region2,
            sendParams:canshu,
            getParams:shuju,
            backorfont:region
        }).then(data=>{
            if(data.data.code=='4021'){
                   this.$message({
                    message: data.data.msg,
                    type: 'success',
                    showClose:true
                });
            }
        })
      }
    }
  }
</script>
