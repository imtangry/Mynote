
##1.1 react的虚拟DOM:
1.使用js对象模拟页面的DOM,实现DOM元素的高效更新。

2.页面的更新伴随着reflow，repaint。为了减少性能消耗，一个策略是生成新旧DOM树，比较选择更新。

3.浏览器没有获取DOM树的api，所以就用js对象来模拟一个DOM树。

```javascript
//创建构造函数
function Element (tagName, props, children) {
  this.tagName = tagName;
  this.props = props;
  this.children = children;
}
```
##1.2 Diff算法:
1.为了实现两个树的高效对比。

##1.3 创建简单的webpack4.x:
1.运行`npm init -y`

2.目录结构：`src`源代码目录；`dist`产品目录；

3.在src下创建`index.html`

4.使用cnpm安装webpack，运行`cnpm i webpack webpack-cli -D`(提供命令行交互功能)

5.注意：约定大于配置，可以减少配置文件的体积

* 入口js默认是src下index.js文件

* 输出是dist下的main.js； 

* 新增了`mode`必选项可选属性值为`development`,`production`

* mode选项写在webpack.config.js下

  ```javascript
  module.exports={
      mode:'development'
  }
  ```

## 1.4 安装webpack-dev-server：

1.webpack-dev-sever（相当于一个小型服务器）:`cnpm i webpack-dev-server -D`，可以实现js热部署

2.注意：

* webpack-dev-server 打包好的main.js是放在内存里的，项目根目录其实是没有这个文件的；
* 模版文件中的js路径应该选择根目录内存中的mian.js；
* package.json下配置script属性：`webpack-dev-server --open --port 3000 --hot --progress --compress --host 127.0.0.1`可以实现编译后直接打开在默认浏览器中。

## 1.5 安装html-webpack-plugins：

1.可以实现网页文件的热部署，将html加入到内存中：`npm i html-webpack-plugin -D`

2.使用：配置webpack.config.js

```javascript
// path模块提供了一些工具函数，用于处理文件与目录的路径。可以通过以下方式使用：
const path = require('path');
const HtmlWebPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPlugin({
    template: path.join(__dirname, './src/index.html'),//源文件的地址
    filename: 'index.html'//生成在内存中页面的名字。
});
//向外暴露一个打包的配置对象
module.exports = {
    mode: "development",
    plugins: [htmlPlugin]
}
```

## 1.6 在项目中使用react：

1.运行`npm i react react-dom -S`安装包

* react：专门用于创建组件，同时组件的生命周期都在这个包中
* react-dom：专门进行DOM操作的，常用的方法之一：ReactDOM.render()

2.index.html中创建容器：

```html
   <!-- 使用React创建的虚拟DOM，都会被渲染到这个容器中 -->
   <div id="app_1"></div>
```

3.导入包：

```javascript
// 这两个包导入的时候,名称必须这么写
import React from 'react' //创建组件,虚拟DOM,生命周期
import ReactDOM from 'reactDOM' //将虚拟DOM放在页面上展示
```



##参考：

* https://github.com/livoras/blog 做的笔记
* 黑马react视频

