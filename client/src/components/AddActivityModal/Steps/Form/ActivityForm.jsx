import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Form, Input, Select } from 'antd';

const ActivityForm = () => (
  <>
    <Form.Item
      label="Activity Type"
      name="type"
      rules={[
        {
          required: true,
          message: 'Please select an activity type',
        },
      ]}
    >
      <Select defaultValue="lesson">
        <Select.Option value="lesson">Lesson</Select.Option>
        <Select.Option value="lecture">Lecture</Select.Option>
        <Select.Option value="talk">Talk</Select.Option>
      </Select>
    </Form.Item>
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
      label="Activity Title"
      name="title"
      rules={[
        {
          required: true,
          message: "Please input the activity's title!",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Activity Details"
      name="details"
      rules={[
        {
          required: true,
          message: "Please input the activity's details!",
        },
      ]}
      style={{ height: '300px' }}
    >
      <ReactQuill style={{ height: '275px' }} theme="snow" />
    </Form.Item>
  </>
);

export default ActivityForm;
