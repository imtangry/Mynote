import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {Link} from "react-router-dom"

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends Component {
  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
      var style = {};
      if(this.props.mode==="mobile"){
          style={ width:100 + "%",textAlign:'center' }
      }else if(this.props.mode==="pc"){
          style={ width:200 }
          console.log("OKK");
      }
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['1']}
        style={style}
        defaultOpenKeys={['sub1']}
        mode={'inline'}
      >
        {/* <SubMenu key="sub1" title={<span><Icon type="mail" /><span>更多</span></span>}> */}
            <Menu.Item key="1"><Link to="/blog/all">全部</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/blog/top">精华</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/blog/ask">问题</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/blog/share">分享</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/blog/job">招聘</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/blog/dev">测试</Link></Menu.Item>
        {/* </SubMenu> */}
      </Menu>
    );
  }
}
export default Sider;
// ReactDOM.render(<Sider />, mountNode);