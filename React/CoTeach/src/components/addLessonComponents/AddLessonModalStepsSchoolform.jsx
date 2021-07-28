import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import {
  Form,
  Button,
  Radio,
  Select,
} from 'antd';


function AddLessonModalStepsSchoolform() {
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
        <Form.Item required label="School" name="School">
          <Select>
            <Select.Option value="BTS">Bicester Technology School</Select.Option>
            <Select.Option value="TBS">The Bicester School</Select.Option>
            <Select.Option value="TGS">Theale Green School</Select.Option>
            <Select.Option value="UTCH">UTC Heathrow</Select.Option>
            <Select.Option value="UTCO">UTC Oxfordshire</Select.Option>
            <Select.Option value="UTCR">UTC Reading</Select.Option>
            <Select.Option value="UTCS">UTC Swindon</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item required label="Year Group" name="yeargroup">
          <Radio.Group>
            <Radio.Button value="10">10</Radio.Button>
            <Radio.Button value="11">11</Radio.Button>
            <Radio.Button value="12">12</Radio.Button>
            <Radio.Button value="13">13</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddLessonModalStepsSchoolform;