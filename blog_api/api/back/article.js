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

module.exports = router
