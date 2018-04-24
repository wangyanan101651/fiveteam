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

 












module.exports = router
