import React, {Component} from "react";
import {List, Avatar, Button, Spin} from 'antd';
import {Link} from 'react-router-dom';
// import reqwest from 'reqwest';
import axios from 'axios';
import ArticleTag from './articletag';
import {connect} from "react-redux";
const fakeDataUrl = 'http://localhost:3000/article';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: props.tab,
        }
        this.shouldUpdate = true;
        this.getData(props.tab);
    }
    // componentDidMount() {
    //     this.getData((res) => {
    //         this.setState({
    //             loading: false,
    //             data: res.results,
    //         });
    //     });
    // }
    getData = (tab) => {
        this.props.dispatch((dispatch)=>{
            axios.get(fakeDataUrl + "/" + tab).then((data) => {
                // 这个代码放在最上面试一试,可能先执行了shouldComponentUpdate
                this.shouldUpdate = true;
                // console.log("回调中state:" + this.state.data);
                console.log("回调中shouldUpdate:" + this.shouldUpdate);
                // 准备发送action到store
                dispatch({
                    type:"LIST_UPDATE_SECCESS",
                    data:data.data
                })
    
            }).catch(function (err) {
                console.log(err)
            })
        })
       
    }
    // 这个可以选择是否更新组件,性能不错
    // 这里会执行一次渲染，然后一步axios返回结果后又会执行一次render，但是此时传入的参数和state已经同步了，所以会出渲染执行两次这个方法和页面数据不渲染的bug
    shouldComponentUpdate(nextProps, nextState) {
        var nextTab = nextProps.match.params.tab;
        console.log("之前的state:" + nextState.tab);
        console.log("传入的prop:" + nextProps.match.params.tab);
        if (nextTab !== nextState.tab) {
            this.getData(nextTab);
            // 这个不需要放在回调中设置,
            nextState.tab = nextTab;
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
    render() {
        console.log("Redux:"+this.props);
        let {data,loading}=this.props;
        console.log("render设置前:" + this.shouldUpdate);
        this.shouldUpdate = false;
        console.log("render设置后:" + this.shouldUpdate);
        console.log("render:" + this.state.tab);
        console.log("data:" + this.state.data);
        return (
            <List
                className="demo-loadmore-list"
                loading={loading}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item actions={[<span>回复 {item.reply_count}</span>, <span>访问 {item.visit_count}</span>]}>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                            title={<div><ArticleTag tab={item.tab}/><a href="/article/#">{item.title}</a></div>}
                            description={<p><Link
                                to={"/user/" + item.uid}>{item.loginname}</Link> 发布日期 {item.createdate}</p>}
                        />
                    </List.Item>
                )}
            />
        );
    }
}

export default connect(state=>state.list)(List);