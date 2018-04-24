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
  
  console.log(req.body)
  let {enname_one,cnname_one,enname_two,cnname_two}=req.body
    if(enname_one&&cnname_one&&enname_two&&cnname_two){
      let oneId=Unique()
      // 检测一级分类是否存在
      let testOneClass=`select * from one_class where enname='${enname_one}' OR cnname='${cnname_one}'`
      // 检测二级分类是否存在
      // let testTwoClass=`select * from two_class where enname='${enname_two}' OR cnname='${cnname_two}'`
      // 插入一级分类
      var insertOne=`insert into one_class(id,enname,cnname,time) values('${oneId}','${enname_one}','${cnname_one}','${CreatTime()}')`
      // 插入二级分类
      var insertTwo=`insert into two_class(id,parent_id,enname,cnname,article_num,time) values('${Unique()}','${oneId}','${enname_two}','${cnname_two}','0','${CreatTime()}')`
      // 创建文章表
      var createTable=`CREATE TABLE ${enname_one} (LIST INT(11) UNIQUE NOT NULL AUTO_INCREMENT, id VARCHAR(255) UNIQUE PRIMARY KEY, oneId VARCHAR(255), twoId VARCHAR(255), article_name VARCHAR(255), editer VARCHAR(255), content LONGTEXT, time DATETIME, visitors INT, daodu VARCHAR(255), imgsrc VARCHAR(255), recommend TINYINT, art_show TINYINT);`
      async function sqlAllHandle() { 
          await searchHandle(testOneClass)
          // await searchHandle(testTwoClass)
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

// 删除一级分类
router.post("/deleteClassOne",(req,res,next)=>{
    let {id,enname_one}=req.body
    if(id,enname_one){
      let sqlone=`delete from one_class where id='${id}'`
      let sqltwo=`delete from two_class where parent_id='${id}'`
    console.log(sqlone,sqltwo)
      let deleteTable=`drop table ${enname_one}`
          async function sqlAllHandle() { 
              await query(sqlone);
              await query(sqltwo);
              await query(deleteTable)
              return {
                code:"2041",
                msg:"删除数据成功",
              }
           }
           sqlAllHandle().then((data)=>{
              res.send(data)
           }).catch((err)=>{
              res.send({
                code:"2042",
                msg:"删除数据失败"
              })
           })   
    }
    
})

// 二级分类删除最后一条，连带删除当前一级分类，当前文件表

function deleteLastTwoClass(req,res,next){
  let {oneId,twoId,enname_one}=req.body
  let sqlone=`delete * from one_class where id='${oneId}'`
  let sqltwo=`delete * from two_class where parent_id='${oneId}'`
  let deleteTable=`drop table ${enname_one}`
      async function sqlAllHandle() { 
          await sqlHandle(sqlone);
          await sqlHandle(sqltwo);
          await query(deleteTable)
          return {
            code:"2051",
            msg:"获取数据成功",
          }
       }
       sqlAllHandle().then((data)=>{
          res.send(data)
       }).catch((err)=>{
          res.send({
            code:"2052",
            msg:"获取数据失败"
          })
       })   
}

// 二级分类删除不是最后一条，只删除二级分类和文章

function deleteTwoClass(req,res,next){
  let {oneId,twoId,enname_one}=req.body
  let deleteTwo=`delete * from two_class where id='${twoId}'`
  let deleteArticle=`delete * from ${enname_one} where twoId='${twoId}'`
      async function sqlAllHandle() { 
          await sqlHandle(deleteTwo);
          await sqlHandle(deleteArticle);
          return {
            code:"2051",
            msg:"获取数据成功",
          }
       }
       sqlAllHandle().then((data)=>{
          res.send(data)
       }).catch((err)=>{
          res.send({
            code:"2052",
            msg:"获取数据失败"
          })
       })   
}

// 删除二级分类
router.post("/deleteClassTwo",(req,res,next)=>{
  let {oneId,twoId,enname_one}=req.body
  if(oneId,twoId,enname_one){
      let selectOneClass=`select * from two_class where parent_id='${oneId}'`
      readHandle(selectOneClass).then((data)=>{
        if(data.length>1){
          deleteTwoClass(req,res,next)
        }else{
          deleteLastTwoClass(req,res,next)
        }
      })
  } 
})


  // 更改一级分类
router.post("/amendClassOne",(req,res,next)=>{
  let {oldenname_one,enname_one,cnname_one}=req.body
  
  if(oldenname_one,enname_one,cnname_one){
        let amendArticleTable=`alter table ${oldenname_one} rename ${enname_one}`
        let amendClassOne=`update one_class set enname='${enname_one}',cnname='${cnname_one}'`
        async function sqlAllHandle() { 
          await sqlHandle(amendClassOne);
          await sqlHandle(amendArticleTable);
          return {
            code:"2061",
            msg:"获取数据成功",
          }
       }
       sqlAllHandle().then((data)=>{
          res.send(data)
       }).catch((err)=>{
          res.send({
            code:"2062",
            msg:"获取数据失败"
          })
       })   

  } 
})


// 更改二级分类
router.post("/amendClassTwo",(req,res,next)=>{
  let {oldenname_two,enname_two,cnname_two}=req.body
  
  if(oldenname_two,enname_two,cnname_two){
       
        let amendClassTwo=`update two_class set enname='${enname_two}',cnname='${cnname_two}'`
        async function sqlAllHandle() { 
          await sqlHandle(amendClassTwo);
       
          return {
            code:"2071",
            msg:"获取数据成功",
          }
       }
       sqlAllHandle().then((data)=>{
          res.send(data)
       }).catch((err)=>{
          res.send({
            code:"2072",
            msg:"获取数据失败"
          })
       })   

  } 
})

//获取一二级文章
router.get("/getAllClass",(req,res,next)=>{
  let getAllOneClass = `select * from one_class`
  let getAllTwoClass = `select * from two_class`
 async function sqlAllHandle(){
  let getOne= await readHandle(getAllOneClass)
  let getTwo = await readHandle(getAllTwoClass)
      let data = {getOne,getTwo}
      return {
        code:"2081",
        msg:"获取文章成功",
        data
      }
   }
   sqlAllHandle().then((data)=>{
      res.send(data)
   }).catch((err)=>{
      res.send({
        code:"2082",
        msg:"获取文章失败"
      })
   })   
})

//提交文章
router.post('/upArticle',(req,res,next)=>{
    let {oneId,twoId,article_name,editer,content,daodu,recommend,art_show,enname_one}=req.body
    var insertArticel=`insert into ${enname_one}(id,oneId,twoId,article_name,editer,content,daodu,recommend,art_show,enname_one,time) values(${Unique()}','${oneId}','${twoId}','${article_name}','${editer}','${content}','${daodu}','${recommend}','${art_show}','${enname_one}','${CreatTime()}')`
    
    var updataArticalNum = `updata two_class set article_num=num+1 where id = '${twoId}'`
    const asyncInsertArticle = async function (){
          await sqlHandle(insertArticel)
          await sqlHandle(updataArticalNum)
          return
       }
      asyncInsertArticle().then((data)=>{
          res.send({
            code:"2091",
            msg:"插入文章成功"
          })
       }).catch((err)=>{
          res.send({
            code:"2092",
            msg:"提交文章失败"
          })
      })
})

//添加接口文档
router.post('/inserttext',(req,res,next)=>{ 
  const {title,url,type,sendparams,getparams,backfront}=req.body
  var inserttext=`insert into createtext(id,title,url,type,sendparams,getparams,backfront,time) values('${Unique()}','${title}','${url}','${type}','${sendparams}','${getparams}','${backfront}','${CreatTime()}')`
  console.log(sqlHandle(inserttext))
 async function sqlAllHandle(){
   await sqlHandle(inserttext)
      return {
        code:"1011",
        msg:"添加文档成功"
      }
   }
   sqlAllHandle().then((data)=>{
      res.send(data)
   }).catch((err)=>{
      res.send({
        code:"1012",
        msg:"添加文档失败"
      })
   })   
})


//查询接口文档
router.post('/searchtext',(req,res,next)=>{
  const {backfront}=req.body
  var searchtext = `select * from createtext where backfront='${backfront}'`
 async function sqlAllHandle(){
  var data = await readHandle(searchtext)
      return {
        code:"1021",
        msg:"查询文章文档成功",
        data
      }
   }
   sqlAllHandle().then((data)=>{
      res.send(data)
   }).catch((err)=>{
      res.send({
        code:"1022",
        msg:"查询文章文档失败"
      })
   })   
})

module.exports=router