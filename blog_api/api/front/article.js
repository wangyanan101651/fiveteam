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


//个人简历留言提交接口 
router.post('/insertmsg',(req,res,next)=>{ 
    var Submission = `insert into client_msg ip='${req.body.ip}',country='${req.body.country}',province='${req.body.province}',city='${req.body.city}',name='${req.body.name}',emai='${req.body.emai}',content='${req.body.content}',tel='${req.body.tel}'where id = '${req.body.id}' `
    sqlHandle(Submission).then((data)=>{
      res.send({
        code:'7011',
        msg:'插入成功',
        data:null
      })
    }).catch((err)=>{
      res.send({
        code:'7012',
        msg:'插入失败'
      })
    })
})

//前台获取所有可显示的文章接口
router.get('/getArticleAll',(req,res,next)=>{
  //select 字段 into 新表 from 原表 (where 条件限制)
  let fontArticleAll = `select * into bawei1 from bawei where id='${req.body.id}',oneId='${req.body.oneId}',twoId='${req.body.twoId}',article_name='${req.body.article_name}',editer='${req.body.editer}',content='${req.body.content}',TIME='${req.body.TIME}',visitors='${req.body.visitors}',daodu='${req.body.daodu}',imgsrc='${req.body.imgsrc}',recommend='${req.body.recommend}',art_show='${req.body.art_show}',time='${req.body.time}',enname_one='${req.body.enname_one}',cnname_one='${req.body.cnname_one}',enname_two='${req.body.enname_two}',cnname_two='${req.body.cnname_two}'`

  readHandle(fontArticleAll).then((data)=>{
    res.send({
      code:'6022',
      msg:'获取数据失败'
    })
  }).catch({
    code:'6023',
    msg:'获取数据失败'
  })
  


})
  
 

//获取头部导航数据
router.get('/getNav',(req,res,next)=>{
  var sqlone = 'select * from one_class'
  var sqltwo = 'select * from two_class'
  const asyncGetClass = async function(){
    let oneClass = await readHandle(sqlone)
    let twoClass = await readHandle(sqltwo)
    return {oneClass,twoClass}
  }
  asyncGetClass().then((data)=>{
    let resdata = []
    const {oneClass,twoClass} = data
    oneClass.forEach(function(i){
      let everydata = {
        onedata:i,
        twodata:[]
      }
      twoClass.forEach(function(j){
        if(i.id == j.parent_id){
          everydata.twodata.push(j)
        }
      })
      resdata.push(everydata)
    })
    res.send({
      code:'6013',
      msg:'查询成功',
      data:resdata
    })
  }).catch((err)=>{
    res.send({
      code:'6014',
      msg:'查询失败'
    })
  })
  
})






module.exports = router
