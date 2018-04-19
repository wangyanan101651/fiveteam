var express = require('express');
var router = express.Router();
var hasOwnProperty=require('has-own-property-x');  //支持hasOwnProperty
var {
  sqlHandle,  //除查询外的其他操作
  readHandle,  //读取操作
  searchHandle,  //检测有无某条数据，有为false
  searchHandleNormal,  //检测有无某条数据，有为true
  query             // //基本操作
}=require("../../config/db_connect")

router.get('/getOnes',(req,res)=>{
    let sql='select * from one_class';
    query(sql).then(data=>{
        res.send(data)
    })
})
module.exports = router;
