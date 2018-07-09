import React, { Component } from "react";
import {  Avatar, List } from "antd";

class UserArticleList extends Component {
   
    render() {
        
        return (
            <List className={"u_article"}
                itemLayout="horizontal"
                dataSource={this.props.list}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                        />
                        <div>最后回复时间：{item.date.split('T')[0]}</div>
                    </List.Item>
                )}
            />)
    }
}

export default UserArticleList;