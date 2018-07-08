import React, {Component} from "react";
import {Row, Col, Avatar, List} from "antd";
import axios from 'axios';

class User extends Component {
    state = {
        data: [
            {loginname:"",points:"",join_data:""}
        ],
    };
    getData = (id) => {
        axios.get("http://localhost:3000/users/" + id).then((data) => {
            console.log(data.data);
            this.setState({
                data:data.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    componentDidMount() {
        this.getData(this.props.match.params.id);
    }

    render() {
        let {loginname,points,join_date} = this.state.data[0];
        return (<Row>
            <Col className={'u_info'}>
                <Col className={"u_head"}><Avatar shape={'circle'} icon="user"/></Col>
                <Col xs={8}>用户名：<span>{loginname}</span></Col>
                <Col xs={8}>积分：<span>{points}</span></Col>
                <Col xs={8}>注册时间：<span>{join_date}</span></Col>
            </Col>
            <div className={'a_c'}>最近发表的话题</div>

                <List className={"u_article"}
                    itemLayout="horizontal"
                    dataSource={this.state.data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                title={<a href="https://ant.design">{item.title}</a>}

                            />
                            <div>最后回复时间：暂未提供此功能</div>
                        </List.Item>
                    )}
                />,

        </Row>)
    }
}

export default User;