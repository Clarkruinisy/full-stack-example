var express = require('express');
var router = express.Router();
var mysql = require("../middleware/mysql");
var albumModel = require("../model/album");

/* GET home page. */
router.use("/", mysql()).get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.setHeader("Access-Control-Allow-Origin", "*")
  albumModel.fetchAllData(req.mysql, {}).then(rows => {
    // console.log(rows)
    res.send(JSON.stringify({
      success: true,
      data: rows
    }));
  })
  // res.send(JSON.stringify({
  //   success: true,
  //   data: [{
  //       title: "Card1",
  //       url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"      
  //     }, {
  //       title: "Card2",
  //       url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  //     }, {
  //       title: "Card3",
  //       url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  //     }, {
  //       title: "Card4",
  //       url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  //     }, {
  //       title: "Card5",
  //       url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  //     }, {
  //       title: "Card6",
  //       url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  //     }
  //   ]
  // }))
});

module.exports = router;
