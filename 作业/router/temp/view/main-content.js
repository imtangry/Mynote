import React, { Component } from 'react';
import { Layout } from 'antd';
import Index from '../router/index';
import SiderBar from "./sider";
const { Sider, Content } = Layout;

class MainContent extends Component {
    render() {
        return (
                <Layout>
                    <Sider><SiderBar/></Sider>
                    <Content><Index /></Content>
                </Layout>
        );
    }
}
export default MainContent;