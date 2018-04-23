<template>
    <div class="wrap_add">

        <el-form :model="ruleForm1" status-icon :rules="rules1" label-width="100px" class="demo-ruleForm addownclass" v-if='show'>
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

        <el-form :model="ruleForm2" status-icon :rules="rules2" label-width="100px" class="demo-ruleForm addownclass" v-else>
            <div class="h3">
                <h3>二级分类列表</h3>
            </div>
            <el-form-item label="二级中文类名" prop="text2">
                <el-input placeholder="请输入内容" v-model.number="ruleForm2.text2"></el-input>
            </el-form-item>
            <el-form-item label="二级英文类名" prop="age2">
                <el-input placeholder="请输入内容" v-model.number="ruleForm2.age2"></el-input>
            </el-form-item>
        </el-form>

        <el-form :model="ruleForm2" status-icon :rules="rules2" label-width="100px" class="demo-ruleForm addownclass">
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
    data() {
        var checkAge1 = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('不能为空'));
            } else {
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
            } else {
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
                    { validator: checkAge1, trigger: 'blur' }
                ],
                text2: [
                    { validator: checkAge11, trigger: 'blur' }
                ],
            },
            rules1: {
                age1: [
                    { validator: checkAge1, trigger: 'blur' }
                ],
                text1: [
                    { validator: checkAge11, trigger: 'blur' }
                ],
            },
            show: false,
            id:0,
            ids:0
        }
    },
    mounted() {
        let state=this.$route.query.state;
        let obj=JSON.parse(localStorage.getItem('oneClass'))
        let objtwo=JSON.parse(localStorage.getItem('twoClass'))
        this.id=objtwo.id
        this.ids=obj.oneClass.id
        //console.log(objtwo,'ikik')
        if(state=='one'){
            this.show=true
            this.ruleForm1.text1=obj.oneClass.cnname;
            this.ruleForm1.age1=obj.oneClass.enname
        }else{
            this.show=false;
             this.ruleForm2.text2=objtwo.cnname;
             this.ruleForm2.age2=objtwo.enname
        }
    },
    methods: {
        submitForm() {
            // let {oldenname,enname,cnname}=req.body
            let state=this.$route.query.state
            let oldenname=this.ruleForm1.text1
            if(state=='one'){
                this.axios.post('/api/back/class/amendClassOne',{
                    oldenname,
                    enname:this.ruleForm1.age1,
                    cnname:this.ruleForm1.text1,
                    id:this.ids
                }).then(data=>{
                    if(data.data.code=='2061'){
                         this.$message({
                            message: data.data.msg,
                            type: 'success',
                            showClose: true
                        });
                    }else{
                        alert('no')
                    }
                })
            }else{
                this.axios.post('/api/back/class/amendClassTwo',{
                    enname:this.ruleForm2.age2,
                    cnname:this.ruleForm2.text2,
                    id:this.id
                }).then(data=>{
                    console.log(data)
                    if(data.data.code=='2071'){
                         this.$message({
                            message: data.data.msg,
                            type: 'success',
                            showClose: true
                        });
                    }
                })
            }
        },
        resetForm() {
            // 重置
            this.ruleForm1.text1 = '',
                this.ruleForm1.age1 = '',
                this.ruleForm2.text2 = '',
                this.ruleForm2.age2 = ''
        }
    },
    directives: {

    }
}
</script>

<style>
.addownclass {
    width: 300px;
}

.addownclass .h3 {
    width: 100%;
}

.addownclass .h3 h3 {
    height: 60px;
    line-height: 60px;
}

.addownclass>div {
    padding-left: 20px;
}
</style>

