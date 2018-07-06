import React, { Component } from "react";
import { List, Avatar, Button, Spin } from 'antd';
import { Link } from 'react-router-dom';
// import reqwest from 'reqwest';
import axios from 'axios';
import ArticleTag from './articletag'
const fakeDataUrl = 'http://localhost/blog';
class Index extends Component {
    state = {
        loading: true,
        loadingMore: false,
        showLoadingMore: true,
        data: [],
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
        // reqwest({
        //   url: fakeDataUrl,
        //   type: 'json',
        //   method: 'get',
        //   contentType: 'application/json',
        //   success: (res) => {
        //     callback(res);
        //   },
        // });
        console.log(fakeDataUrl+"/?tab="+tab);
        axios.get(fakeDataUrl+"/?tab="+tab).then((data) => {
            this.setState({
                loading: false,
                data: data.data,
            })
        }).catch(function (err) { console.log(err) })
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props.tab);
        if (this.props.tab !== nextState.tab) {
            this.getData(this.props.tab);
            nextState.tab = this.props.tab;
        }
        return true;
    }
    onLoadMore = () => {
        this.setState({
            loadingMore: true,
        });
        this.getData((res) => {
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
    render() {
        const { loading, loadingMore, showLoadingMore, data } = this.state;
        const loadMore = showLoadingMore ? (
            <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
                {loadingMore && <Spin />}
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
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<div><ArticleTag tab={item.tab} /><a href="#">{item.title}</a></div>}
                            description={<p><Link to={"/user/" + item.uid}>{item.loginnname}</Link> 发布日期 {item.createdate}</p>}
                        />
                    </List.Item>
                )}
            />
        );
    }
}
export default Index;