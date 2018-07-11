import React,{ Component } from "react";
import { Row, Col } from 'antd';
import BookType from '../book/bookType';
class About extends Component {
    aboutData = `<p>wanho 社区为国内最大最具影响力的 Node.js 与react开源技术社区，致力于 Node.js与react 的技术研究。</p>
<p>wanho 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
<p>wanho 的 SLA 保证是，一个9，即 90.000000%。</p>
<p>社区目前由 <a href="http://wanhojs.org/user/shi" target="_blank">@shi</a> 在维护，有问题请联系：<a href="http://www.wanho.net" target="_blank">http://www.wanho.net</a></p>
<p>请关注我们的官方微博：<a href="http://weibo.com/wanhojs" target="_blank">http://weibo.com/wanhojs</a></p>`

    mobbleData = `<p>客户端由 <a href="https://wanhojs.org/user/shi" target="_blank">@ning</a> 开发维护。</p>
<p>源码地址： <a href="https://wanhojs.org/user/shi" target="_blank">http</p>
<p>另，安卓用户同时可选择：<a href="https://wanhojs.org/user/shi" target="_blank">https://wanhojs.org/user/shi</a> ，这是 Java 原生开发的安卓客户端。</p>`

    linkData = `<a href="http://www.wanho.net/" target="_blank">
            <img src="http://localhost:3000/imgs/ico1.jpg">
          </a>
          <a href="http://www.wanho.net/" target="_blank">
            <img src="http://localhost:3000/imgs/ico2.jpg">
          </a>
          <a href="http://www.wanho.net/" target="_blank">
             <img src="http://localhost:3000/imgs/ico3.jpg">
          </a>
          <a href="http://www.wanho.net/" target="_blank">
             <img src="http://localhost:3000/imgs/ico4.jpg">
          </a>
          <a href="http://www.wanho.net/" target="_blank">
             <img src="http://localhost:3000/imgs/ico1.jpg">
          </a>
          <a href="http://www.baidu.com/" target="_blank">
            <img src="//o4j806krb.qnssl.com/public/images/temp/sf.png">
          </a>
          <a href="http://www.taobao.com/" target="_blank">
            <img src="//o4j806krb.qnssl.com/public/images/temp/ionichina.png">
          </a>`

    data = [{
        title: "关于",
        content: this.aboutData,
        className: ""
    }, {
        title: "移动客户端",
        content: this.mobbleData,
        className: ""
    }, {
        title: "友情链接",
        content: this.linkData,
        className: "linkList"
    }
    ]
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
export default About;