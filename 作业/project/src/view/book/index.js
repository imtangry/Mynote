import React,{ Component } from "react";
import { Row, Col } from 'antd';
import BookType from './bookType';
class Book extends Component {
    data = [{
        title: "Node.js 入门",
        content: `<p>《<strong>快速搭建 Node.js 开发环境以及加速 npm</strong>》</p>
    <p><a href="https://www.wanho.net/" target="_blank">https://www.wanho.net/</a></p>
    <p>《<strong>Node.js 包教不包会</strong>》</p>
    <p><a href="https://www.wanho.net/" target="_blank">https://www.wanho.net/</a></p>
    <p>《<strong>ECMAScript 6入门</strong>》</p>
    <p><a href="https://www.wanho.net/" target="_blank">https://www.wanho.net/</a></p>
    <p>《<strong>七天学会NodeJS</strong>》</p>
    <p><a href="https://www.wanho.net/" target="_blank">https://www.wanho.net/</a></p>`
    }, {
        title: "Node.js 资源",
        content: `<p>《<strong>前端资源教程</strong>》</p>
    <p><a href="https://www.wanho.net/" target="_blank">https://www.wanho.net/</a></p>
    <p>《<strong>国内的 npm 镜像源</strong>》</p>
    <p><a href="https://www.wanho.net/" target="_blank">https://www.wanho.net/</a></p>
    <p>《<strong>node weekly</strong>》</p>
    <p><a href="https://www.wanho.net/" target="_blank">https://www.wanho.net/s</a></p>
    <p>《<strong>node123-<em>node.js中文资料导航</em></strong>》</p>
    <p><a href="https://www.wanho.net/" target="_blank">https://www.wanho.net/</a></p>
    <p>《<strong>A curated list of delightful Node.js packages and resources</strong>》</p>
    <p><a href="https://www.wanho.net/" target="_blank">https://www.wanho.net/</a></p>
    <p>《<strong>Node.js Books</strong>》</p>
    <p><a href="https://www.wanho.net/" target="_blank">https://www.wanho.net/</a></p>`
    }, {
        title: "Node.js 名人",
        content: `<p>《<strong>名人堂</strong>》</p>
    <p><a href="http://www.wanho.net" target="_blank">https://www.wanho.net/wanho</a></p>`
    }, {
        title: "Node.js 服务器",
        content: `<p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.wanho.net/" target="_blank">DigitalOcean(https://www.wanho.net/)</a></p>`
    }];
    render() {
        let list ="";
        list = this.data.map((e,i)=><BookType data={e} key={i}/>);
        return (
            <Row>
                <Col md={20} xs={20} push={2}>
                    {list}
                </Col>
            </Row>
        )
    }
}
export default Book;