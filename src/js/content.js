import React from 'react';
import '../css/index.css'

export default class Content extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div className="c">
            {
                this.props.users.map((e, i) =>
                    <div className="item" key={i}>
                        <img src={e.src} alt="用户头像"/>
                        <span>{e.name}</span>
                        <span><a href="#">{e.link}</a></span>
                        <span>{e.descp}</span>
                        <div className=""></div>
                    </div>)
            }
        </div>
    }