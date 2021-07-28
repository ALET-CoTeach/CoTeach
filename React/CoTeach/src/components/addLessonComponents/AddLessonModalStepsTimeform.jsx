import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import {
  Form,
  Button,
  Radio,
  Select,
} from 'antd';

function AddLessonModalStepsTimeform(){
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        initialValues={{
          requiredMarkValue: requiredMark,
        }}
        requiredMark={requiredMark}
        layout="horizontal"
        onValuesChange={onRequiredTypeChange}
      >
        <Form.Item required label="Prefered Term" name="term">
          <Radio.Group>
            <Radio.Button value="10">T1</Radio.Button>
            <Radio.Button value="11">T2</Radio.Button>
            <Radio.Button value="12">T3</Radio.Button>
            <Radio.Button value="13">T4</Radio.Button>
            <Radio.Button value="13">T5</Radio.Button>
            <Radio.Button value="13">T6</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item required label="Prefered Day" name="day">
          <Select>
            <Select.Option value="mon">Monday</Select.Option>
            <Select.Option value="tues">Tuesday</Select.Option>
            <Select.Option value="wed">Wednesday</Select.Option>
            <Select.Option value="thurs">Thursday</Select.Option>
            <Select.Option value="fri">Friday</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item required label="Prefered Time" name="time">
          <Radio.Group>
            <Radio.Button value="am">AM</Radio.Button>
            <Radio.Button value="pm">PM</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddLessonModalStepsTimeform;