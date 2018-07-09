import React, {Component} from "react";
import {List, Avatar, Button, Spin} from 'antd';
import {Link} from 'react-router-dom';
// import reqwest from 'reqwest';
import axios from 'axios';
import ArticleTag from './articletag'
const fakeDataUrl = 'http://localhost:3000/article';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            loadingMore: false,
            showLoadingMore: true,
            data: [],
            tab: "all",
        }
        this.shouldUpdate = true;
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
        console.log(fakeDataUrl + "/" + tab);
        axios.get(fakeDataUrl + "/" + tab).then((data) => {
            // 这个代码放在最上面试一试,可能先执行了shouldComponentUpdate
            this.shouldUpdate = true;
            // console.log("回调中state:" + this.state.data);
            console.log("回调中shouldUpdate:" + this.shouldUpdate);
            this.setState({
                loading: false,
                data: data.data,
            });

        }).catch(function (err) {
            console.log(err)
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

    onLoadMore = () => {
        this.setState({
            loadingMore: true,
        });
        this.getData("all", (res) => {
            const data = this.state.data.concat(res.results);
            this.setState({
                data,
                loadingMore: false,
            }, () => {
                // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                // In real scene, you can using public method of react-virtualized:
                // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                window.dispatchEvent(new Event('resize'));
            });
        });
    }
// 第一次加载完成请求文章数据
    componentDidMount(){
        this.getData("all");
    }
    render() {
        console.log("render设置前:" + this.shouldUpdate);
        this.shouldUpdate = false;
        console.log("render设置后:" + this.shouldUpdate);
        console.log("render:" + this.state.tab);
        console.log("data:" + this.state.data);
        const {loading, loadingMore, showLoadingMore, data} = this.state;
        const loadMore = showLoadingMore ? (
            <div style={{textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px'}}>
                {loadingMore && <Spin/>}
                {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
            </div>
        ) : null;
        return (
            <List
                className="demo-loadmore-list"
                loading={loading}
                itemLayout="horizontal"
                loadMore={loadMore}
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

export default Index;