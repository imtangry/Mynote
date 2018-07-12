import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Button, message } from 'antd';
import axios from 'axios'
const FormItem = Form.Item;


class RegistrationForm extends Component {
  state = {
    confirmDirty: true,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      var params = new URLSearchParams();
      params.append('username', values.username);
      params.append('password', values.password);
      params.append('nickname', values.nickname);
      if (!err) {
        console.log('Received values of form: ', values);
        axios({
          method: "post",
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          },
          url: "http://localhost:3000/users/register",
          data: params
        }).then((data) => {
          console.log(data);
          var flag = data.data.succ;
          if (flag === 1) {
            this.setState({
              confirmDirty: true,
            });
            values.password = "";
            // 本地存储
            localStorage.setItem('isLogin', JSON.stringify(values));
            message.success('注册成功!'); //成功信息
            // 防止指向window
            let that = this;
            setTimeout(function () {
              //延迟进入首页
              that.props.history.push({ pathname: '/index', state: values });
            }, 2000);
          } else {
            message.error('注册失败!'); //失败信息
          }
        }).catch(function (error) {
          console.log(error);
        });







      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    // 注册信息界面
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    // 注册按钮
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 6,
        },
      },
    };
    return (
      <Form className={'login-form'} onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="用户名"
        >
          {getFieldDecorator('username', {
            rules: [{
              required: true, message: '请输入用户名',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Password"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入密码',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Confirm Password"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请再次输入密码',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              昵称&nbsp;
              <Tooltip title="来，想一个好听的昵称吧">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: '请输入你的昵称!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">注册</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;