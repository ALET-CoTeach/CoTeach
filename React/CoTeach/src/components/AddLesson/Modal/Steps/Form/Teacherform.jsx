import React from 'react';
import 'antd/dist/antd.css';
import '../../../../../index.css';
import { Form, Input, Button } from 'antd';

function Teacherform(){
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Teacher's First Name"
        name="teacher_firstname"
        rules={[
          {
            required: true,
            message: "Please input the teacher's first name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Teacher's Last Name"
        name="teacher_lastname"
        rules={[
          {
            required: true,
            message: "Please input the teacher's last name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Teacher's Email"
        name="teacher_email"
        rules={[
          {
            required: true,
            message: "Please input the teacher's email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Teacherform;