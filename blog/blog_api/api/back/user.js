const express = require('express');
const router = express.Router();

const {
    sqlHandle,//基本操作
    readHandle,//读取操作
    searchHandle,//检测有无数据有为false
    searchHandleNormal,//检测有无数据有为true
    query //基本操作
} = require('../../config/db_connect')
//git请求检测
router.get('/', function (req, res, next) {
    const sql = 'select * from blogtest'//数据库中的数据表
    readHandle(sql).then((data) => {
        res.send(data)
    })
    //res.send()
})
//post请求
router.post('/home', function (req, res, next) {
    let  arg = req.body.id;
    const sql = `select * from blogtest where id='${arg}'`
    readHandle(sql).then((data) => {
        res.send(data)
    })
    //res.send()
})
module.exports = router;