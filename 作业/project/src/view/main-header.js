import React, { Component } from 'react';
import { Layout, Row, Col, Divider, Menu, Dropdown, Button,Icon} from "antd";
import { Link } from "react-router-dom"
import "../css/common.css"
const { Header } = Layout;
const HeadNav = ({mode}) => (
    <Menu mode={mode} theme="dark" className="hn_list">
        <Menu.Item><Link to="/">首页</Link></Menu.Item>
        <Menu.Item><Link to="/book">教程</Link></Menu.Item>
        <Menu.Item><Link to="/about">关于</Link></Menu.Item>
    </Menu>);

class MainHeader extends Component {
    render() {
        return (<Header>
            <Row>
                <Col md={4} xs={24}>
                    <h1 className="logo">CNZT</h1>
                </Col>
                <Col md={18} xs={0} className="head_nav">
                    <Divider type="vertical" className="headDivider"></Divider>
                    <HeadNav mode={"horizontal"} />
                </Col>
                <Dropdown  overlay={<HeadNav mode={""} />} placement="topCenter">
                    <Button className="ant-col-md-0"><Icon type="menu-fold" /></Button>
                </Dropdown>
            </Row>
        </Header>
        )
    }
}

export default MainHeader;