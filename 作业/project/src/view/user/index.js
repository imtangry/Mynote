import React, { Component } from "react";
import { Row,Col,Avatar } from "antd";
import axios from 'axios';
import UserArticleList from './userArticleList';
import { connect } from "react-redux";

class User extends Component {
    getData = (id) => {
        this.props.dispatch((dispatch) => {
            axios.get("http://localhost:3000/users/info/" + id).then((data) => {
                console.log("dispatch中回调：");
                // 准备发送action到store
                dispatch({
                    type: "USER_INFO",
                    data: data.data
                })
            }).catch(function (err) {
                console.log(err)
            })
        })

    }
    componentDidMount() {
        this.getData(this.props.match.params.id);
    }

    render() {
        let { loginname, points, join_date, topic_with, reply } = this.props.data;
        console.log(reply);
        return (<Row>
            <Col className={'u_info'}>
                <Col className={"u_head"}><Avatar shape={'circle'} icon="user" /></Col>
                <Col xs={8}>用户名：<span>{loginname}</span></Col>
                <Col xs={8}>积分：<span>{points}</span></Col>
                <Col xs={8}>注册时间：<span>{(join_date+"").split('T')[0]}</span></Col>
            </Col>
            <div className={'a_c'}>最近发表的话题</div>
            <UserArticleList list={topic_with} ></UserArticleList>
            <div className={'a_c'}>最近回复的话题</div>
            <UserArticleList list={reply} ></UserArticleList>
        </Row>)
    }
}
export default connect(state=>(state.user))(User);