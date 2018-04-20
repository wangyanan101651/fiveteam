var express = require('express');
var router = express.Router();
var hasOwnProperty=require('has-own-property-x');  //支持hasOwnProperty
var Unique=require("../common/Unique")
var CreatTime=require("../common/creatTime")
var {
  sqlHandle,  //修改和增加操作
  readHandle,  //读取操作
  searchHandle,  //检测有无某条数据，有为false
  searchHandleNormal,  //检测有无某条数据，有为true
  query             // //基本操作
}=require("../../config/db_connect")


// 一级类名的添加
router.post("/insertOneClass",(req,res,next)=>{
  let {enname_one,cnname_one,enname_two,cnname_two}=req.body
    if(enname_one&&cnname_one&&enname_two&&cnname_two){
      let oneId=Unique()
      // 检测一级分类是否存在
      let testOneClass=`select * from one_class where enname='${enname_one}' OR cnname='${cnname_one}'`
      // 检测二级分类是否存在
      
      var insertOne=`insert into one_class(id,enname,cnname,time) values('${oneId}','${enname_one}','${cnname_one}','${CreatTime()}')`
      // 插入二级分类
      var insertTwo=`insert into two_class(id,parent_id,enname,cnname,article_num,time) values('${Unique()}','${oneId}','${enname_two}','${cnname_two}','0','${CreatTime()}')`
      // 创建文章表
      var createTable=`CREATE TABLE ${enname_one} (LIST INT(11) UNIQUE NOT NULL AUTO_INCREMENT, id VARCHAR(255) UNIQUE PRIMARY KEY, oneId VARCHAR(255), twoId VARCHAR(255), article_name VARCHAR(255), editer VARCHAR(255), content LONGTEXT, time DATETIME, visitors INT, daodu VARCHAR(255), imgsrc VARCHAR(255), recommend TINYINT, art_show TINYINT);`
      async function sqlAllHandle() { 
          await searchHandle(testOneClass)
        
          await sqlHandle(insertOne);
          await sqlHandle(insertTwo);
          await query(createTable);
          return {
            code:"2001",
            msg:"插入成功"
          }
       }
       sqlAllHandle().then((data)=>{
          res.send(data)
       }).catch((err)=>{
          res.send({
            code:"2002",
            msg:"插入失败"
          })
       })   
    }
})




// 二级类名的添加
router.post("/insertTwoClass",(req,res,next)=>{
  let {oneId,enname_two,cnname_two}=req.body
    if(oneId&&enname_two&&cnname_two){
      var insertTwo=`insert into two_class(id,parent_id,enname,cnname,article_num,time) values('${Unique()}','${oneId}','${enname_two}','${cnname_two}','0','${CreatTime()}')`
       // 检测二级分类是否存在
      let testTwoClass=`select * from two_class where enname='${enname_two}' OR cnname='${cnname_two}'`
      async function sqlAllHandle() {
        await searchHandle(testTwoClass) 
          await sqlHandle(insertTwo);
          return {
            code:"2011",
            msg:"插入成功"
          }
       }
       sqlAllHandle().then((data)=>{
          res.send(data)
       }).catch((err)=>{
          res.send({
            code:"2012",
            msg:"插入失败"
          })
       })   
    }
})



// 获取一级分类


router.get("/getOneClass",(req,res,next)=>{
 
      var getOneClass=`select * from one_class`
      async function sqlAllHandle() { 
          let data=await readHandle(getOneClass);
          return {
            code:"2021",
            msg:"获取数据成功",
            data
          }
       }
       sqlAllHandle().then((data)=>{
          res.send(data)
       }).catch((err)=>{
          res.send({
            code:"2022",
            msg:"获取数据失败"
          })
       })   
    
})


// 获取分类列表
router.get("/Class",(req,res,next)=>{
    
      var getOneClass=`select * from one_class`
      var getTwoClass=`select * from two_class`

      async function sqlAllHandle() { 
          let oneData=await readHandle(getOneClass);
          let twoData=await readHandle(getTwoClass);
          let data={oneData,twoData}
          return {
            code:"2031",
            msg:"获取数据成功",
            data
          }
       }
       sqlAllHandle().then((data)=>{
          res.send(data)
       }).catch((err)=>{
          res.send({
            code:"2032",
            msg:"获取数据失败"
          })
       })   
})



module.exports=router