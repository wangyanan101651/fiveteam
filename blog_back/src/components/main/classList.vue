<template>
  <el-table
    :data="lists"
    style="width: 50%">
    <el-table-column type="expand">
      <template slot-scope="props">
            <el-table
              :data="props.row.twoClass"
              style="width: 100%">
                    <el-table-column
                    label="中文名称"
                    prop="cnname">
                  </el-table-column>
                  <el-table-column
                    label="英文名称"
                    prop="enname">
                  </el-table-column>
                  <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  </template>
                </el-table-column>
          </el-table>
      </template>
    </el-table-column>
    <el-table-column
      label="中文名称"
      prop="oneClass.cnname">
    </el-table-column>
    <el-table-column
      label="英文名称"
      prop="oneClass.enname">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        lists: []
      }
    },
    created(){
        this.axios.get("/api/back/class/Class").then((data) => {
            if (data.data.code == 2031) {
                this.lists =  data.data.data.oneData.map((i) => {
                  let obj = {
                    oneClass:i,
                    twoClass:[]
                  }
                  data.data.data.twoData.forEach((j)=>{
                    if(j.parent_id==i.id){
                      obj.twoClass.push(j)
                    }
                })
                  return obj
                })
            }
            console.log(this.lists,'pp')
        })
    }
  }
</script>



<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

