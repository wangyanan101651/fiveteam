<template>
    <div>
        <div class='addOneClass'>
            <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
                <h3>一级分类列表</h3>
                <el-form-item label="一级中文类名">
                    <el-select v-model="formLabelAlign.region" placeholder="请选择">
                        <el-option :value='item.id' v-for="(item,index) in list" :key='index' :label='item.cnname'>
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>

            <el-form :model="ruleForm2" status-icon :rules="rules2" label-width="150px" class="demo-ruleForm addownclass">
                <div class="h3">
                    <h3>二级分类列表</h3>
                </div>
                <el-form-item label="二级中文类名" prop="text2" :rules="[{required:true,message:'不能为空'}]">
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
    </div>
</template>

<script>
export default {
    data() {
        var checkAge2 = (rule, value, callback) => {
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
        var checkAge22 = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('不能为空'));
            } else {
                callback();
            }
        };
        return {
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            },
            list: [],
            ruleForm2: {
                age2: '',
                text2: ''
            },
            rules2: {
                age2: [
                    { validator: checkAge2, trigger: 'blur' }
                ],
                text2: [
                    { validator: checkAge22, trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        submitForm() {
            if (this.ruleForm2.text2 && this.ruleForm2.age2) {
                this.axios.post('/api/back/class/insertTwoClass', {
                    oneId: this.formLabelAlign.region,
                    enname_two: this.ruleForm2.text2,
                    cnname_two: this.ruleForm2.age2
                }).then(data => {
                    if (data.data.code == '2011') {
                        this.$message({
                            message: data.data.msg,
                            type: 'success',
                            showClose: true
                        });
                    } else {
                        this.$message({
                            message: data.data.msg,
                            type: 'error',
                            showClose: true
                        });
                    }
                })
            }
        },
        resetForm() {
            this.ruleForm2.age2='',
            this.ruleForm2.text2=''
        }
    },
    created() {
        this.axios.get('/api/back/class/getOneClass').then(data => {
            if (data.data.code == 2021) {
                this.list = data.data.data;
                console.log(this.list)
            }
        })
    }
}
</script>

<style>
h3 {
    line-height: 45px;
}

.el-form-item--feedback {
    padding-left: 0;
}

.is-required {
    padding-left: -100px;
}

.el-form--label-right {
    padding-left: 40px;
}
</style>