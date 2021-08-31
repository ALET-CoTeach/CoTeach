import React from 'react';

import {
  Input, Form, Button, Checkbox,
} from 'antd';

const TeacherForm = () => (
  <>
    <Form.Item
                //   required
      name="email"
                //   label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input placeholder="Email" size="large" />
    </Form.Item>

    <Form.Item
                // label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password placeholder="Password" size="large" />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        // offset: 8,
        // span: 16
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
  </>
);

export default TeacherForm;
