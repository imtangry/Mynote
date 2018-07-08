import React, {Component} from 'react';
import {Menu} from 'antd';
import {Link} from "react-router-dom"
class Sider extends Component {
    // handleClick = (e) => {
    //     console.log('click ', e);
    // }

    render() {
        var style = {};
        if (this.props.mode === "mobile") {
            style = {width: 100 + "%", textAlign: 'center'}
        } else if (this.props.mode === "pc") {
            style = {width: 200}
        }
        return (
            <Menu
                onClick={this.handleClick}
                defaultSelectedKeys={['1']}
                style={style}
                defaultOpenKeys={['sub1']}
                mode={'inline'}
            >
                <Menu.Item key="1"><Link to="/index/article/all">全部</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/index/article/top">精华</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/index/article/ask">问题</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/index/article/share">分享</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/index/article/job">招聘</Link></Menu.Item>
                <Menu.Item key="6"><Link to="/index/article/dev">测试</Link></Menu.Item>
            </Menu>
        );
    }
}

export default Sider;
