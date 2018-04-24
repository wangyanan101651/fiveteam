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
 
router.post("/updateArticle", (req, res, next) => {
     
  let sql = `update ${req.body.enname_one} set article_name='${req.body.article_name}', editer='${req.body.editer}', content='${req.body.content}', time='${req.body.time}', visitors='${req.body.visitors}', daodu='${req.body.daodu}', imgsrc='${req.body.imgsrc}', recommend='${req.body.recommend}', art_show='${req.body.art_show}' where id='${req.body.id}'` 
  sqlHandle(sql).then((data)=>{
    res.send({
      code:'3201',
      msg:'修改数据成功'
    })
  }).catch((err)=>{
    res.send({
      code:'3202',
      msg:'修改数据失败'
    })
  })  
    
})





//后台文章删除一级接口
router.post("/deleteArticle", (req, res, next) => {
  let deletesql = `delete from ${req.body.enname_one} where id='${req.body.id}'`
  var updateArticleNum = `update two_class set article_name=article_name-1 where id = '${req.body.twoId}'`

  const asyncdeleteArticle = async function (){
    await sqlHandle(deletesql)
    await sqlHandle(updateArticleNum)
    return 
  }
  asyncdeleteArticle().then((data)=>{
    res.send({
      code:'3301',
      msg:'删除数据成功'
    })
  }).catch((err)=>{
    res.send({
      code:'3302',
      msg:'删除数据失败'
    })
  })  

})


//获取文章接口
router.get('/getArticleList',(req,res,next)=>{
  var sqlone = `select * from one_class`
  // var sqltwo = `select * from two_class`

  //拼接查询文章sql
  const connectSql = (oneClass) =>{
    //根据一级类名拼接sql
    var selectArticle = `select * from`
    oneClass.forEach(function(i,index){
      if(index<(oneClass.length-1)){
        selectArticle+=`select * from ${i.enname} UNION ALL`
      }else{
        selectArticle+=`select * from ${i.enname}) talel_all order by time desc`
      }
    },this)
    return selectArticle
  }
  //将一二级类名的中英文标识添加到文章列表
  const connectArticle = (data) =>{
    const {articleData,oneClass,twoClass} = data
    return articleData.map(function(i){
      oneClass.forEach(function(j){
        if(j.id == i.oneId){
          i.enname_one = j.enname
          i.cnname_one = j.cnname
        }
      })
      twoClass.forEach(function(i){
        if(j.id == i.twoId){
          i.enname_two = j.enname
          i.cnname_two = j.cnname
        }
      })
      return i
    })
  }
  const asyncGetArticle = async function(){
    let oneClass = await readHandle(sqlone)
    let twoClass = await readHandle(sqltwo)

    let articleDataList = await readHandle(connectArticle(oneClass))
    return connectArticle({articleDataList,oneClass,twoClass})
  }
  asyncGetArticle().then((data)=>{
    res.send({
      code:'1221',
      msg:'读取文章成功',
      data
    })
  }).catch((err)=>{
    res.send({
      code:'1222',
      msg:'读取文章失败'
    })
  })

})

 
//接口文档修改

router.post('/amend',(req,res,next)=>{
  let anendsql = `update apilist set title='${req.body.title}', url='${req.body.url}',type='${req.body.type}',sendparams='${req.body.sendparams}',getparams='${req.body.getparams}',backorfont='${req.body.backorfont}' where id='${req.body.id}', ` 
  sqlHandle(anendsql).then((data)=>{
    res.send({
      code:'3401',
      msg:'修改接口成功'
    })
  }).catch((err)=>{
    res.send({
      code:'3402',
      msg:'修改接口失败'
    })
  })  
  
})



//删除后台接口
router.post('/delete',(req,res,next)=>{
  let deleteId = `delete from apilist where id='${req.body.id}'`
  sqlHandle(deleteId).then((data)=>{
    res.send({
      code:'3501',
      msg:'删除接口成功'
    })
  }).catch((err)=>{
    res.send({
      code:'3502',
      msg:'删除接口失败'
    })
  }) 
})

module.exports = router
