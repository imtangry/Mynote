import React, { Component } from 'react';
import { Tag } from 'antd';
const tab = {
    "top": {
        "color": "magenta",
        txt: "置顶"
    },
    "good": {
        "color": "geekblue",
        txt: "精华"
    },
    "ask": {
        "color": "orange",
        txt: "提问"
    },
    "job": {
        "color": "cyan",
        txt: "招聘"
    },
    "share": {
        "color": "purple",
        "txt": "分享"
    },
    "dev": {
        "color": "red",
        txt: "测试"
    }
}
class ArticleTag extends Component {
    render() {
        let tab_now = tab[this.props.tab];
        let color = tab_now.color;
        let txt = tab_now.txt;
        return (
            <Tag color={color}>{txt}</Tag>
        );
    }
}
export default ArticleTag; 