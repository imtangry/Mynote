import React, {Component} from "react";
import {Row, Col,Avatar} from "antd";

class User extends Component {
    render() {
        return (<Row>
            <Col>
                <Col><Avatar shape={'circle'} style={{width: 100,height:100,backgroundColor:"black",borderRadius:50+"%"}}/></Col>
            </Col>
        </Row>)
    }
}

export default User;