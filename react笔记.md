
##1.1 react的虚拟DOM:
1.使用js对象模拟页面的DOM,实现DOM元素的高效更新。

2.页面的更新伴随着reflow,repaint。为了减少性能消耗,一个策略是生成新旧DOM树,比较选择更新。

3.浏览器没有获取DOM树的api,所以就用js对象来模拟一个DOM树。

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

4.使用cnpm安装webpack,运行`cnpm i webpack webpack-cli -D`(提供命令行交互功能)

5.注意：约定大于配置,可以减少配置文件的体积

* 入口js默认是src下index.js文件

* 输出是dist下的main.js； 

* 新增了`mode`必选项可选属性值为`development`,`production`

* mode选项写在webpack.config.js下

  ```javascript
  module.exports={
      mode:'development'
  }
  ```
 6.package.json里的scripts用来配置命令行,局部安装的插件不可以在命令行窗口直接使用命令,需要写在scripts配置里
 
 其他：使用exclude:[path.resolve(__dirname,"node_modules")],可以让webpack不解析这个文件夹里的内容,可以提高性能

## 1.4 安装webpack-dev-server：

1.webpack-dev-sever（相当于一个小型服务器）:`cnpm i webpack-dev-server -D`,可以实现js热部署

2.注意：

* webpack-dev-server 打包好的main.js是放在内存里的,项目根目录其实是没有这个文件的；
* 模版文件中的js路径应该选择根目录内存中的mian.js；
* package.json下配置script属性：`webpack-dev-server --open --port 3000 --hot --progress --compress --host 127.0.0.1`可以实现编译后直接打开在默认浏览器中。

## 1.5 安装html-webpack-plugins：

1.可以实现网页文件的热部署,将html加入到内存中：`npm i html-webpack-plugin -D`

2.使用：配置webpack.config.js

```javascript
// path模块提供了一些工具函数,用于处理文件与目录的路径。可以通过以下方式使用：
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
## 1.7 babel：
1.可以对js代码进行转码,可以直接安装`cnpm i -S babel-preset-es2015`,这样会一次性安装转到2015的所有预设插件,方便
2.使用.babelrc配置文件进行配置,具体配置可以参考:[babel官网](http://babeljs.io/docs/en/babel-cli)
## 1.8 在项目中使用react：

1.运行`npm i react react-dom -S`安装包
* `-S` 生产上线都需要用到的包/`-D` 工具等开发时依赖的包
* react：专门用于创建组件,同时组件的生命周期都在这个包中
* react-dom：专门进行DOM操作的,常用的方法之一：ReactDOM.render()

2.index.html中创建容器：

```html
   <!-- 使用React创建的虚拟DOM,都会被渲染到这个容器中 -->
   <div id="app_1"></div>
```

3.导入包：

```javascript
// 这两个包导入的时候,名称必须这么写
import React from 'react' //创建组件,虚拟DOM,生命周期
import ReactDOM from 'reactDOM' //将虚拟DOM放在页面上展示
```
4.创建虚拟DOM
```javascript
//创建虚拟DOM
//参数1：字符串类型的参数,表示要创建的元标签的名称
//参数2：对象类型的参数,表示要创建的属性节点
//参数3：子节点
const myH1=React.creatElement('h1',{title:'你好',id:"myh1"},'这是一个子节点');
```
5.渲染
```javascript
    
```
6.webpack对于ReactDom.render()中的jsx语法无法识别,需要安装plugins
  - `cnpm i -D babel-loader babel-core`
  - `cnpm i -D babel-preset-react`
##2.1 主要内容：
###2.1.1 jsx:
- 可以在js代码中直接书写html代码
- js中书写样式`<Menu style={{ width: 100 ='%' }} />`,父组件添加resize事件,可以根据父组件传入的prop判断然后声明一个对象,实现响应式更新样式
###2.1.2 组件:
####1.无状态函数式组件
创建纯展示组件,只负责根据传入的props来展示,不涉及到要state状态的操作,是一个只带有一个render方法的组件类
创建形式如下：
```jsx harmony
    function HelloComponent(props) {
        return <div>Hello {props.name}</div>
    }
    ReactDOM.render(<HelloComponent name="yourName" />, mountNode)
```
- 特点：
  - 组件不会被实例化,整体渲染性能得到提升
  - 组件不能访问this对象
  - 组件无法访问生命周期的方法
  - 无状态组件只能访问输入的props,同样的props会得到同样的渲染结果,不会有副作用
  - 无状态组件使得代码结构更加清晰,减少代码冗余,在开发过程中,尽量使用无状态组件
####2.React.Component
- 特点
  - 成员函数不会自动绑定this,需要开发者手动绑定,否则this不能获取当前组件实例对象。可以在constructor使用bind绑定this,回调函数中则需要在回调函数中绑定
  - 状态state是在constructor中像初始化。
  - props属性类型和组件默认属性作为组件类的属性,不是组件实例的属性,所以使用类的静态属性配置。
###shouldComponentUpdate方法
```jsx harmony
    // 这个可以选择是否更新组件,性能不错
    shouldComponentUpdate (nextProps, nextState){
        var nextTab = this.props.match.params.tab;
        console.log(this.props.match.params.tab);
        if (nextTab !== nextState.tab) {
            this.getData(nextTab);
            nextState.tab = nextTab;
            console.log("需要更新");
            return true;
        }
        console.log("不更新");
       return false;
    }
    // 如果有异步回调可能会出现执行两次这个方法的bug，而且第一次渲染时不会渲染数据，第二次则不会通过判断
```
[链接](https://www.jianshu.com/p/f5c9ec0917bb)

## React-Router使用:
- Route可以使用render方法
```jsx harmony
// 这样可以渲染组件，而且可以传参，就和普通render方法一样
 <Row>
   <Route path="/" exact render={()=>(<Redirect to="/index" />)}/>
   <Route path="/index" render={()=>(
       <Col xs={24} md={6}>
       <SiderBar mode={this.state.mode}/>
       </Col>)}
    />
 </Row>
```
- 相同path的Route可以配置多次，这样可以一个路径下选择性更新加载组件,但是通配的路径需要放在下面，不然会和express中的router一样会覆盖
- 可以通过在组件中可以使用`this.props.match.params.someValues`来获得Route中path匹配的变量,对于render方法加载的组件暂时没找到传递参数的方法
- 不使用exact可以使组件向后匹配,使这个组件在多个路径中通用
##参考：

- https://github.com/livoras/blog
- 黑马react视频

