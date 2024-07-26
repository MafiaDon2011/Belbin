import React from 'react';
import { Form, Input, Button } from 'antd';
import UserContext from '../contexts/user';

const formLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 8} },
  wrapperCol: { xs: { span: 24 }, sm: { span: 9 } }
};

const usernameValidate = [
  {required: true, message: 'Username is required.' }
];

const passwordValidate = [
  { required: true, message: 'Password is required.' }
];


class Login extends React.Component {
  static contextType = UserContext;
  constructor(props) { 
    super(props);
    //this.login = this.login.bind(this);
  }

  render() {
    return (
      <>
      <h1 style={{textAlign:'center', padding:30}}>Login with Existing Account</h1>
      <Form {...formLayout} name="register" /*onFinish={this.login}*/ scrollToFirstError>
        
        <Form.Item name="username" label="Username" rules={usernameValidate}>
            <Input />
        </Form.Item>

        <Form.Item name="password" label="Password" rules={passwordValidate} hasFeedback>
            <Input.Password />
        </Form.Item>

        <Form.Item>
            <Button style={{marginLeft: '128%', marginTop: '3%', backgroundColor: '#0FE87C'}} type="primary" htmlType="submit">
                Login
            </Button>
        </Form.Item>
      </Form>
      </>
    );
  };
};
  
export default Login;  


