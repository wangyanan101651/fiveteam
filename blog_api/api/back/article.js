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
  let { article_name, visitors, editer,content,time,daodu,recommend,art_show,enname_one } = req.body

  if (article_name, visitors, editer,content,time,daodu,recommend,art_show,enname_one) {
    let amendArticleTable = `alter table ${article_name} rename ${visitors}`
    let amendClassOne = `update bawei set enname='${visitors}',cnname='${editer}'`
    async function sqlAllHandle() {
      await sqlHandle(amendClassOne);
      await sqlHandle(amendArticleTable);
      return {
        code: "2061",
        msg: "修改数据成功",
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "2062",
        msg: "修改数据失败"
      })
    })

  }
})





//后台文章删除一级接口
router.post("/deleteArticle", (req, res, next) => {
  let { id, enname_one } = req.body
  if (id, enname_one) {
    let sqlback = `delete from bawei where id='${id}'`
    console.log(sqlback)
    let deleteTable = `drop table ${enname_one}`
    async function sqlAllHandle() {
      await query(sqlone);
      await query(deleteTable)
      return {
        code: "1225",
        msg: "删除数据成功",
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "1224",
        msg: "删除数据失败"
      })
    })
  }

})
module.exports = router
