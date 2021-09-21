import React, { useState } from 'react';

import {
  Form,
  Button,
  Radio,
  Select,
} from 'antd';

const Timeform = () => {
  return (
    <>
      <Form.Item required label="Preferred Term" name="term">
        <Radio.Group>
          <Radio.Button value="t1">T1</Radio.Button>
          <Radio.Button value="t2">T2</Radio.Button>
          <Radio.Button value="t3">T3</Radio.Button>
          <Radio.Button value="t4">T4</Radio.Button>
          <Radio.Button value="t5">T5</Radio.Button>
          <Radio.Button value="t6">T6</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item required label="Preferred Day" name="preferredDay">
        <Select>
          <Select.Option value="mon">Monday</Select.Option>
          <Select.Option value="tues">Tuesday</Select.Option>
          <Select.Option value="wed">Wednesday</Select.Option>
          <Select.Option value="thurs">Thursday</Select.Option>
          <Select.Option value="fri">Friday</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item required label="Preferred Time" name="preferredTime">
        <Radio.Group>
          <Radio.Button value="am">AM</Radio.Button>
          <Radio.Button value="pm">PM</Radio.Button>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default Timeform;
