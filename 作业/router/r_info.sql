/*
Navicat MySQL Data Transfer

Source Server         : s1
Source Server Version : 50022
Source Host           : localhost:3306
Source Database       : web07

Target Server Type    : MYSQL
Target Server Version : 50022
File Encoding         : 65001

Date: 2018-07-06 11:38:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for r_info
-- ----------------------------
DROP TABLE IF EXISTS `r_info`;
CREATE TABLE `r_info` (
  `id` int(11) NOT NULL auto_increment,
  `title` varchar(255) default NULL,
  `content` varchar(255) default NULL,
  `uid` int(255) default NULL,
  `createdate` date default NULL,
  `rid` int(11) default NULL,
  `tab` varchar(255) default NULL,
  `reply_count` int(11) default NULL,
  `visit_count` int(11) default NULL,
  `pimg` varchar(80) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of r_info
-- ----------------------------
INSERT INTO `r_info` VALUES ('1', '企业级 Node.js 框架 Egg 发布 2.0，性能提升 30%，拥抱 Async', 'aaaa', '1', '2018-06-03', '1', 'share', '34', '50', 'http://localhost:3000/imgs/ico1.jpg');
INSERT INTO `r_info` VALUES ('2', '玉伯《从前端技术到体验科技（附演讲视频）', 'bbbb', '2', '2018-07-02', '2', 'share', '45', '89', 'http://localhost:3000/imgs/ico2.jpg');
INSERT INTO `r_info` VALUES ('3', '测试请发到客户端测试专区，违规影响用户的，直接封号', 'cccc', '3', '2018-06-03', '1', 'good', '28', '40', 'http://localhost:3000/imgs/ico3.jpg');
INSERT INTO `r_info` VALUES ('4', '商城用哪些框架比较适合呢？点餐类的', 'ddd', '1', '2018-05-07', '2', 'ask', '40', '60', 'http://localhost:3000/imgs/ico4.jpg');
INSERT INTO `r_info` VALUES ('5', 'Mongoose快速入门', 'eee', '2', '2018-05-14', '2', 'ask', '34', '80', 'http://localhost:3000/imgs/ico1.jpg');
INSERT INTO `r_info` VALUES ('6', '求助大佬，使用tedious模块连接SQLserver数据库遇到的问题。', 'aaaaa111', '1', '2018-04-01', '1', 'good', '13', '40', 'http://localhost:3000/imgs/ico2.jpg');
INSERT INTO `r_info` VALUES ('7', 'Nodejs自带的模块,路径是相对于运行时,还是引入的时候?', 'bbb1111', '1', '2018-04-02', '1', 'ask', '67', '79', 'http://localhost:3000/imgs/ico3.jpg');
INSERT INTO `r_info` VALUES ('8', 'cnode搜索是google的站内搜索么？没翻墙。怎么搜索问题？', 'ccc134324', '1', '2017-11-20', '1', 'ask', '34', '80', 'http://localhost:3000/imgs/ico4.jpg');
INSERT INTO `r_info` VALUES ('9', '请问各位用过nedb的大神，这个数据库有什么坑吗？', 'dddd34343', '1', '2017-11-21', '1', 'ask', '23', '23', 'http://localhost:3000/imgs/ico3.jpg');
INSERT INTO `r_info` VALUES ('10', 'Node 怎么调用服务?', 'eeee12323', '3', '2017-09-06', '1', 'good', '16', '78', 'http://localhost:3000/imgs/ico2.jpg');
INSERT INTO `r_info` VALUES ('11', '《express进阶学习笔记》写了关于expree入门教程的书【持续更新...】', 'dddd1234', '2', '2018-04-10', '2', 'ask', '17', '40', 'http://localhost:3000/imgs/ico1.jpg');
INSERT INTO `r_info` VALUES ('12', '前后端分离(vue + egg) 如何使用egg-passport-github', 'ffff123', '1', '2018-06-04', '3', 'ask', '78', '90', 'http://localhost:3000/imgs/ico3.jpg');
INSERT INTO `r_info` VALUES ('13', '请问，有哪个包可以方便的“存取”一个大的json对象到一个文件里？', 'rrrr34324', '1', '2017-05-15', '1', 'good', '34', '70', 'http://localhost:3000/imgs/ico2.jpg');
INSERT INTO `r_info` VALUES ('14', 'setTimeout 报错导致整个进程退出, 是正常行为吗', '54354354', '2', '2018-03-11', '3', 'ask', '68', '467', 'http://localhost:3000/imgs/ico1.jpg');
INSERT INTO `r_info` VALUES ('15', 'DoraCMS v2.0.5 发布，Node.js CMS 内容管理框架', '75756765', '1', '2017-08-06', '1', 'good', '25', '36', 'http://localhost:3000/imgs/ico3.jpg');
INSERT INTO `r_info` VALUES ('16', '搭建P2P网络的原理', '53543', '2', '2016-12-20', '2', 'good', '14', '20', 'http://localhost:3000/imgs/ico1.jpg');
INSERT INTO `r_info` VALUES ('17', 'jwt在node中的应用', '53345435', '1', '2016-07-13', '3', 'share', '67', '70', 'http://localhost:3000/imgs/ico2.jpg');
INSERT INTO `r_info` VALUES ('18', '有没有大佬做一份Node.js在2017的发展总结和2018展望？', '456546', '3', '2017-11-21', '1', 'job', '34', '90', 'http://localhost:3000/imgs/ico1.jpg');
INSERT INTO `r_info` VALUES ('19', 'egg-socket.io里怎么监听connect event啊?', '46546456', '1', '2017-07-16', '3', 'top', '50', '120', 'http://localhost:3000/imgs/ico4.jpg');
INSERT INTO `r_info` VALUES ('20', 'JavaScript30秒， 从入门到放弃之Array-shi', '3t34435345', '2', '2017-04-12', '2', 'dev', '34', '78', 'http://localhost:3000/imgs/ico1.jpg');
INSERT INTO `r_info` VALUES ('21', '哎呀妈呀，这ES6语法，害我想了大半个钟头！', '35345435', '1', '2017-06-20', '1', 'top', '60', '80', 'http://localhost:3000/imgs/ico2.jpg');
INSERT INTO `r_info` VALUES ('22', 'Centos 从安装到部署 之 node/mongo/ngin', '5345345', '3', '2017-06-12', '2', 'dev', '23', '50', 'http://localhost:3000/imgs/ico1.jpg');
