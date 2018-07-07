/*
Navicat MySQL Data Transfer

Source Server         : s1
Source Server Version : 50022
Source Host           : localhost:3306
Source Database       : web07

Target Server Type    : MYSQL
Target Server Version : 50022
File Encoding         : 65001

Date: 2018-07-06 11:38:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for r_user
-- ----------------------------
DROP TABLE IF EXISTS `r_user`;
CREATE TABLE `r_user` (
  `id` int(11) default NULL,
  `avatar_url` varchar(100) default NULL,
  `loginname` varchar(50) default NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of r_user
-- ----------------------------
INSERT INTO `r_user` VALUES ('1', 'abc', 'shi');
INSERT INTO `r_user` VALUES ('2', '234324', 'sss');
INSERT INTO `r_user` VALUES ('3', 'saffdsafsd', 'admin');
