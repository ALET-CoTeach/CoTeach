import React from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import { Form, Input, Button } from 'antd';

function AddLessonModalStepsTimeform(){
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
        label="Subject"
        name="subject"
        rules={[
          {
            required: true,
            message: 'Please input the subject!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Lesson Title"
        name="lesson_title"
        rules={[
          {
            required: true,
            message: 'Please input the lesson title!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Lesson Details"
        name="lesson_details"
        rules={[
          {
            required: true,
            message: 'Please input the lesson details!',
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddLessonModalStepsTimeform;