//app.js
//1:加载模块 express pool.js
const express = require("express");
const mysql=require("mysql");
const pool = require("./pool");
//2:创建服务器端对象
var app = express();
//3:监听 3000
app.listen(3000);
//4:指定静态目录  public 
app.use(express.static("public"));
//5.加载跨域访问模块
const cors = require("cors");
//6.配置跨域访问模块 哪个域名跨域访问允许
//脚手架8080允许
//origin 允许跨域访问域名列表
//credentials 跨域访问保存session 
app.use(cors({
  origin: ["http://127.0.0.1:8080", "http://localhost:8080"],
  credentials: true
}));
//6.1 下载 express-session 并且配置
const session = require("express-session");
app.use(session({
  secret: "128位随机字符",//安全字符串
  resave: false,//每次请求是否都更新数据
  saveUninitialized: true,//初始化保存数据
  cookie: {
    maxAge: 1000 * 60 * 60 * 8
  }
}));


//7.加载第三方模块  body-parser
// body-parser 针对post请求处理参数
//如果配置成功req.body
const bodyParser = require("body-parser")
//8.配置对特殊  json是否自动转换 不转
app.use(bodyParser.urlencoded({ extended: false }))

//功能一  轮播图
//1.将轮播图保存public
//2.get /imageList
app.get("/imagelist",(req,res)=>{
  var rows=[
    {code:1,img_url:"http://127.0.0.1:3000/img/1.jpg"},
    {code:2,img_url:"http://127.0.0.1:3000/img/2.jpg"},
    {code:3,img_url:"http://127.0.0.1:3000/img/3.jpg"},
    {code:4,img_url:"http://127.0.0.1:3000/img/4.jpg"}
  ];
  res.send(rows);
})
//3.创建js对象 图片标号 图片地址
//4.返回

//功能二 返回九宫格图片
app.get("/icons",(req,res)=>{
  var rows=[
    {id:1,img_url:"http://127.0.0.1:3000/icons/1.png",title:"人物"},
    {id:2,img_url:"http://127.0.0.1:3000/icons/2.png",title:"动物"},
    {id:3,img_url:"http://127.0.0.1:3000/icons/3.png",title:"风景"},
    {id:4,img_url:"http://127.0.0.1:3000/icons/4.png",title:"植物"},
    {id:5,img_url:"http://127.0.0.1:3000/icons/5.png",title:"建筑"},
    {id:6,img_url:"http://127.0.0.1:3000/icons/6.png",title:"美食"}
  ];
  res.send(rows)
})

//返回 图片

app.get("/people",(req,res)=>{
  var rows=[
    {id:1,img_url:"http://127.0.0.1:3000/people/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/people/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/people/3.jpg"},
    {id:4,img_url:"http://127.0.0.1:3000/people/4.jpg"},
    {id:5,img_url:"http://127.0.0.1:3000/people/5.jpg"},
    {id:6,img_url:"http://127.0.0.1:3000/people/6.jpg"},
    {id:7,img_url:"http://127.0.0.1:3000/people/7.jpg"},
    {id:8,img_url:"http://127.0.0.1:3000/people/8.jpg"},
    {id:9,img_url:"http://127.0.0.1:3000/people/9.jpg"}
  ];
  res.send(rows)
})

app.get("/animal",(req,res)=>{
  var rows=[
    {id:1,img_url:"http://127.0.0.1:3000/animal/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/animal/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/animal/3.jpg"},
    {id:4,img_url:"http://127.0.0.1:3000/animal/4.jpg"},
    {id:5,img_url:"http://127.0.0.1:3000/animal/5.jpg"},
    {id:6,img_url:"http://127.0.0.1:3000/animal/6.jpg"},
    {id:7,img_url:"http://127.0.0.1:3000/animal/7.jpg"},
    {id:8,img_url:"http://127.0.0.1:3000/animal/8.jpg"},
    {id:9,img_url:"http://127.0.0.1:3000/animal/9.jpg"}
  ];
  res.send(rows)
})


app.get("/view",(req,res)=>{
  var rows=[
    {id:1,img_url:"http://127.0.0.1:3000/view/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/view/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/view/3.jpg"},
    {id:4,img_url:"http://127.0.0.1:3000/view/4.jpg"},
    {id:5,img_url:"http://127.0.0.1:3000/view/5.jpg"},
    {id:6,img_url:"http://127.0.0.1:3000/view/6.jpg"},
    {id:7,img_url:"http://127.0.0.1:3000/view/7.jpg"},
    {id:8,img_url:"http://127.0.0.1:3000/view/8.jpg"},
    {id:9,img_url:"http://127.0.0.1:3000/view/9.jpg"}
  ];
  res.send(rows)
})


app.get("/plant",(req,res)=>{
  var rows=[
    {id:1,img_url:"http://127.0.0.1:3000/plant/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/plant/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/plant/3.jpg"},
    {id:4,img_url:"http://127.0.0.1:3000/plant/4.jpg"},
    {id:5,img_url:"http://127.0.0.1:3000/plant/5.jpg"},
    {id:6,img_url:"http://127.0.0.1:3000/plant/6.jpg"},
    {id:7,img_url:"http://127.0.0.1:3000/plant/7.jpg"},
    {id:8,img_url:"http://127.0.0.1:3000/plant/8.jpg"},
    {id:9,img_url:"http://127.0.0.1:3000/plant/9.jpg"}
  ];
  res.send(rows)
})

app.get("/building",(req,res)=>{
  var rows=[
    {id:1,img_url:"http://127.0.0.1:3000/building/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/building/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/building/3.jpg"},
    {id:4,img_url:"http://127.0.0.1:3000/building/4.jpg"},
    {id:5,img_url:"http://127.0.0.1:3000/building/5.jpg"},
    {id:6,img_url:"http://127.0.0.1:3000/building/6.jpg"},
    {id:7,img_url:"http://127.0.0.1:3000/building/7.jpg"},
    {id:8,img_url:"http://127.0.0.1:3000/building/8.jpg"},
    {id:9,img_url:"http://127.0.0.1:3000/building/9.jpg"}
  ];
  res.send(rows)
})

app.get("/food",(req,res)=>{
  var rows=[
    {id:1,img_url:"http://127.0.0.1:3000/food/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/food/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/food/3.jpg"},
    {id:4,img_url:"http://127.0.0.1:3000/food/4.jpg"},
    {id:5,img_url:"http://127.0.0.1:3000/food/5.jpg"},
    {id:6,img_url:"http://127.0.0.1:3000/food/6.jpg"},
    {id:7,img_url:"http://127.0.0.1:3000/food/7.jpg"},
    {id:8,img_url:"http://127.0.0.1:3000/food/8.jpg"},
    {id:9,img_url:"http://127.0.0.1:3000/food/9.jpg"}
  ];
  res.send(rows)
})