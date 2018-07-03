import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <ul className="nav nav-pills">
            <li role="presentation" className="active"><a href="#">Noods</a></li>
            <li role="presentation"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">List</a></li>
        </ul>
    }
}