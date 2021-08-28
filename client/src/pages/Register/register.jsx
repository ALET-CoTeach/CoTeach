import React from 'react';
import './register.css';
import 'antd/dist/antd.css';
import {
  Card, Image, Form, Input, Button, Checkbox, Radio,
} from 'antd';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

const Register = () => (
  <div className="LoginBody">
    <div className="cardPadding">
      <Card style={{ width: '40%', height: '70%', boxShadow: '5px 8px 24px 5px rgba(0, 0, 0, 0.2)' }}>
        <h1 className="centerText">CoTeach Register</h1>
        {/* <Image
                            width="30%"
                            src="https://image.flaticon.com/icons/png/512/481/481078.png"
                        /> */}

        <Form
          name="basic"
                            // labelCol={{
                            //     span: 8
                            // }}
                            // wrapperCol={{
                            //     span: 16
                            // }}
          validateMessages={validateMessages}
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item required label="User Type" name="usertype">
            <Radio.Group>
              <Radio.Button value="SLT">SLT</Radio.Button>
              <Radio.Button value="Teacher">Teacher</Radio.Button>
              <Radio.Button value="Employer">Employer</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            required
            name={['user', 'email']}
            label="Email"
            rules={[
              {
                type: 'email',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              // offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              // offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>

          </Form.Item>
        </Form>

      </Card>
    </div>
  </div>
);

export default Register;
