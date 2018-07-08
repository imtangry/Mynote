import React, {Component} from 'react';
import {Layout, Row, Col} from 'antd';
import {Route, Redirect} from "react-router-dom";
import Index from '../router/index';
import SiderBar from "./sider";

const {Content} = Layout;

// 这里需要监听窗口大小,自动改变组件状态
class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            mode: ""
        }

    }

    // noinspection JSAnnotator
    sizeChange() {
        var winWidth;
        if (window.innerWidth)
            winWidth = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth))
            winWidth = document.body.clientWidth;
        // console.log("winWidth:" + winWidth);
        if (winWidth <= 768 && this.state.mode !== "mobile") {
            this.setState({mode: "mobile"})
        } else if (winWidth > 768 && this.state.mode !== "pc") {
            this.setState({mode: "pc"})
        }
    }

    componentWillMount() {
        window.addEventListener("resize", this.sizeChange.bind(this));
        this.sizeChange();
    }

    render() {
        return (
            <Content>
                <Row>
                    <Route path="/" exact render={() => (<Redirect to="/index"/>)}/>
                    <Route path="/index"
                           render={() => (<Col xs={24} md={6}><SiderBar mode={this.state.mode}/></Col>)}/>
                    <Route path="/user" render={() => (<Col xs={24} md={24}><Index/></Col>)}/>
                    <Route path="/index" render={() => (<Col xs={24} md={18}><Index/></Col>)}/>
                    {/*<Col xs={24} md={18}><Index/></Col>*/}
                </Row>
            </Content>
        )
    }
}

export default MainContent;