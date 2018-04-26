var express = require('express');
var router = express.Router();
var hasOwnProperty=require('has-own-property-x');  //支持hasOwnProperty
var Unique=require("../common/Unique")
var CreatTime=require("../common/creatTime")
var {
  sqlHandle,  //除查询外的其他操作
  readHandle,  //读取操作
  searchHandle,  //检测有无某条数据，有为false
  searchHandleNormal,  //检测有无某条数据，有为true
  query             // //基本操作
}=require("../../config/db_connect")



//根据文章id获取文章

router.post("/getOnlyArticle",(req,res,next)=>{
    var {id} = req.body
      let getOneClass = `select * from one_class`//读取一级分类
      var data = readHandle(getOneClass)
      console.log(data)
      data.forEach((item,index)=>{
        const IdTest = `select * from '${item.enname}' where id='${id}'`
        console.log(IdTest)
        readHandle(IdTest).then((data)=>{
          if(data.length>0){
            return {
              code:"4011",
              msg:"数据查询成功"
            }
          }else{
            return{
               code:"4012",
               msg:"数据查询失败"
            }
          }
        })
      });
})


//根据一级分类查询二级分类列表

router.post("/getList",(req,res,next)=>{
        var {oneId} = req.body
      let getTwoClass = `select * from two_class where parent_id='${oneId}`
     async function sqlAllHandle(){
       await sqlHandle(getTwoClass)
          return {
            code:"4021",
            msg:"数据查询成功"
          }
       }
       sqlAllHandle().then((data)=>{
          res.send(data)
       }).catch((err)=>{
          res.send({
            code:"4022",
            msg:"数据查询失败"
          })
       })   
})
