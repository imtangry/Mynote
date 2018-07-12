import React, { Component } from 'react';
import '../../css/login.less';
import { Form, Icon, Input, Button, Checkbox, message, Spin } from 'antd';
import axios from 'axios';
const FormItem = Form.Item;
// 模拟后台数据
const login = [{
    username: 'admin',
    password: 'admin'
}, {
    username: 'zysoft',
    password: 'zysoft'
}];
// 模拟校验用户？
function PatchUser(values) {  //匹配用户
    const results = login.map(function (item) {
        if (values.username === item.username && values.password === item.password) {
            return 1;
        } else {
            return 0;
        }
    });
    return results.includes(1);
};

class NormalLoginForm extends Component {
    // 是否登录
    state = {
        isLoding: false,
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            var params = new URLSearchParams();
            params.append('username', values.username);
            params.append('password', values.password);
            if (!err) {
                console.log('Received values of form: ', values);
                axios({
                    method: "post",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                    },
                    url: "http://localhost:3000/users/login",
                    data:params,
                    withCredentials:true
                }).then((data) => {
                    console.log(data);
                    var flag = data.data.succ;
                    if (flag === 1) {
                        this.setState({
                            isLoding: true,
                        });
                        values.password = "";
                        // 本地存储
                        localStorage.setItem('isLogin', JSON.stringify(values));
                        message.success('登录成功!'); //成功信息
                        // 防止指向window
                        let that = this;
                        setTimeout(function () {
                            //延迟进入首页
                            that.props.history.push({ pathname: '/index', state: values });
                        }, 2000);
                    } else {
                        message.error('用户名或密码错误!'); //失败信息
                    }
                }).catch(function (error) {
                    console.log(error);
                });

                // axios.post("http://localhost:3000/users/login", {
                //     headers:{
                //         'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                //     },
                //     username: values.username,
                //     password: values.password,
                // })
                //     .then(function (data) {
                //         console.log(data);
                //         var flag = data.data;
                //         if(flag==="1"){
                //             this.setState({
                //                 isLoding: true,
                //             });
                //             values.password = "";
                //             // 本地存储
                //             localStorage.setItem('isLogin', JSON.stringify(values));
                //             message.success('登录成功!'); //成功信息
                //             // 防止指向window
                //             let that = this;
                //             setTimeout(function () {
                //                 //延迟进入首页
                //                 that.props.history.push({ pathname: '/index', state: values });
                //             }, 2000);
                //         }else{
                //             message.error('用户名或密码错误!'); //失败信息
                //         }

                //     })
                //     .catch(function (error) {
                //         console.log(error);
                //     });
                // if (PatchUser(values)) {


                // } else {
                //     message.error('用户名或密码错误!'); //失败信息
                // }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            this.state.isLoding ? <Spin size="large" className="loading" /> :
                <div className="login">
                    <div className="login-form">
                        <div className="login-logo">
                            <div className="login-name">嘿嘿嘿...</div>
                        </div>
                        <Form onSubmit={this.handleSubmit} style={{ maxWidth: '300px' }}>
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                                )}
                            </FormItem>
                            <FormItem style={{ marginBottom: '0' }}>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住我</Checkbox>
                                )}
                                <a className="login-form-forgot" href="" style={{ float: 'right' }}>忘记密码?</a>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                                    登录
                            </Button>
                                Or <a href="">现在就去注册!</a>
                            </FormItem>
                        </Form>
                        <a className="githubUrl" href="https://github.com"></a>
                    </div>
                </div>
        );
    }
}

const Login = Form.create()(NormalLoginForm);
export default Login;