<template>
    <div class>
        <h3>增加文章</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <!-- 文章标题 -->
            <el-form-item label="文章标题" prop="article_name">
                <el-input v-model="ruleForm.article_name"></el-input>
            </el-form-item>
            <!-- 一级类名 -->
            <el-form-item label="一级类名" prop="oneId" >
                <el-select v-model="ruleForm.oneId" placeholder="请选择" @change = 'changeClassOne'>
                    <el-option v-for="item in oneClass" :key='item.id' :label='item.cnname' :value='item.id'></el-option>
                </el-select>
            </el-form-item>
            <!-- 二级类名 -->
            <el-form-item label="二级类名" prop="twoId">
                <el-select v-model="ruleForm.twoId" placeholder="请选择">
                    <el-option v-for="item in twoClass" :key='item.id' :label='item.cnname' :value='item.id'></el-option>
                </el-select>
            </el-form-item>
            <!-- 是否显示 -->
            <el-form-item label="是否显示" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <!-- 是否推荐 -->
            <el-form-item label="是否推荐" prop="resource1">
                <el-radio-group v-model="ruleForm.resource1">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <!-- 作者 -->
            <el-form-item label="作者" prop="author">
                <el-input v-model="ruleForm.author"></el-input>
            </el-form-item>
            <!-- 导读 -->
            <el-form-item label="导读" >
                <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入内容" ></el-input>
            </el-form-item>
            <!-- 时间 -->
            <el-form-item label="时间" >
                <el-date-picker
                    v-model="value1"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
            </el-form-item>
            <!-- 富文本的承载容器 -->
            <!-- <el-from-item lebel='内容'>
                <div id="editor">

                </div>
            </el-from-item> -->
            <!-- 提交、重置 -->
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>

    export default{
      data() {
        return {
            oldlist:[],
            oneClass:[],
            twoClass:[],
            editor:null,
            ruleForm: {
                oneId:"",
                twoId:"",
                enname_one:'',
                name: '', //文章标题
                regionOne:"",
                regionTwo: "",
                author:'', //作者
                date1: '',  //时间
                date2: '',  //时间
                delivery: false, // ???????
                resource: '',   //是否显示
                resource1:'',  //是否推荐
                desc: ''
                },
                rules: {
                name: [
                    { required: true, message: '请输入文章名称', trigger: 'blur' }
                ],
                regionOne: [
                    { required: true,message: '请输入一级列表', trigger: 'blur' }
                ],
                regionTwo: [
                    { required: true,message: '请输入二级列表', trigger: 'blur' }
                ],
                author: [
                    { required: true, message: '请输入作者', trigger: 'blur' }
                ],
                resource: [
                    {  trigger: 'change' }
                ],
                resource1: [
                    {  trigger: 'change' }
                ],
                date1: [
                    { type: 'date', message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                desc: [
                    { required: true, trigger: 'blur' }
                ]
            },
            //时间
            pickerOptions1: {
                shortcuts: [
                    {
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, 
                    {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, 
                    {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }
                ]
            },
            value1: ''
        };
    },
    mounted (){
        this.editor = UE.getEditor('editor');
        console.log(this)
    },
    methods: {
        submitForm(formName) {

            this.$refs[formName].validate((valid) => {
                this.axios.post("/api/back/article/upArticle",this.ruleForm).then((data) => {
                    if(data.data.code == '3011'){
                        this.$message({
                            type:'success',
                            message:data.data.msg
                        })
                    }else{
                        this.$message({
                            type:'error',
                            message:data.data.msg
                        })
                    }
                }) 
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
            this.value1 = ''
        }
    }
}
    
</script>