import React, { Component } from "react";
import { Row, List, Avatar,Col } from "antd";
import {Link} from 'react-router-dom';
import ArticleTag from '../index/articletag';
import axios from 'axios';

class ArticleDetail extends Component {
    state = {
        article: null,
        reply: null
    }
    getData = (id) => {
        axios.get("http://localhost:3000/article/id/" + id,{withCredentials:true}).then(data => { console.log(data);var jsondata =data.data
        this.setState({ article: jsondata.article, reply: jsondata.reply }) }).catch(err => { console.log(err) })
    }
    componentDidMount() {
        this.getData(this.props.match.params.id);
    }
    render() {
        console.log(this.props.match.params.id);
        
        if (this.state.article !== null) {
            let {article,reply} = this.state;
            return (<Row>
                <Col className={'article'}>
                    <h1 className={'a_title'}>{article.title}</h1>
                    <div className={'a_detail'}><ArticleTag tab={article.tab} /><Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> <span><Link to={'/user/'+article.uid}>{article.loginname} </Link></span><span> 发表于{article.createdate.split('T')[0]}</span></div>
                    <div className={'a_content'}>{article.content}</div>
                </Col>
                <div className={'a_c'}>{article.reply_count}条回复</div>
                <List className={"u_article"}
                    itemLayout="horizontal"
                    dataSource={reply}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<p>{item.reply_content}</p>}
                                    description={<p><Link
                                        to={"/user/" + item.ruid}>{item.loginname}</Link> 发布日期 {item.replydate.split('T')[0]}</p>}
                            />
                            <div>有{item.zan}个人觉得回复很赞</div>
                        </List.Item>
                    )}
                />
            </Row>)
        }
        return <div>Loading.......</div>

    }
}

export default ArticleDetail;