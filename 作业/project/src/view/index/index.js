import React, { Component } from "react";
import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
// import reqwest from 'reqwest';
import axios from 'axios';
import ArticleTag from './articletag';
import { connect } from "react-redux";
const fakeDataUrl = 'http://localhost:3000/article';

class Index extends Component {
    constructor(props) {
        super(props); 
        this.shouldUpdate = true;
    }
    shouldComponentUpdate(nextProps, nextState) {
        var nextTab = nextProps.match.params.tab;
        console.log("之前tab:"+this.props.match.params.tab);
        console.log("当前tab:"+nextProps.match.params.tab);
        if (nextTab !== this.props.match.params.tab) {
            this.getData(nextTab);
            console.log("需要更新");
            return false;
        }
        if (this.shouldUpdate) {
            console.log(this.shouldUpdate);
            console.log("Up");
            return true;
        }
        else {
            console.log(this.shouldUpdate);
            console.log("NoUp");
            return false
        }
    }
    getData = (tab) => {
        this.props.dispatch((dispatch) => {
            axios.get(fakeDataUrl + "/" + tab).then((data) => {
                this.shouldUpdate = true;
                console.log("dispatch中回调：");
                // 准备发送action到store
                dispatch({
                    type: "LIST_UPDATE_SUCCESS",
                    data: data.data
                })
            }).catch(function (err) {
                console.log(err)
            })
        })

    }
    componentDidMount(){
         this.getData(this.props.match.params.tab);
    }
    render() {
        this.shouldUpdate=false;
        let { data, loading } = this.props;
        console.log("render:" + this.props.match.params.tab);
        return (
            <List
                className="demo-loadmore-list"
                loading={loading}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item actions={[<span>回复 {item.reply_count}</span>, <span>访问 {item.visit_count}</span>]}>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<div><ArticleTag tab={item.tab} /><a href="/article/#">{item.title}</a></div>}
                            description={<p><Link
                                to={"/user/" + item.uid}>{item.loginname}</Link> 发布日期 {item.createdate}</p>}
                        />
                    </List.Item>
                )}
            />
        );
    }
}

export default connect(state => state.list)(Index);