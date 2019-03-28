SET NAMES UTF8;
DROP DATABASE IF EXISTS wxApp;
CREATE DATABASE wxApp CHARSET=UTF8;
USE wxApp;

/****首页轮播广告商品****/
CREATE TABLE wxApp_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(128)
);

INSERT INTO wxApp_carousel VALUES
(NULL, 'img/index/1.jpg'),
(NULL, 'img/index/2.jpg'),
(NULL, 'img/index/3.jpg'),
(NULL, 'img/index/4.jpg');

/****九宫格图片****/
CREATE TABLE wxApp_img(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(128),
  title VARCHAR(32)
);
INSERT INTO wxApp_img VALUES
(NULL, 'img/index/1.png',"人物"),
(NULL, 'img/index/2.png',"动物"),
(NULL, 'img/index/3.png',"风景"),
(NULL, 'img/index/4.png',"植物"),
(NULL, 'img/index/5.png',"建筑"),
(NULL, 'img/index/6.png',"美食");