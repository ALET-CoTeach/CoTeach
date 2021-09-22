import React, { useState } from 'react';

import {
  Form,
  Button,
  Radio,
  Select,
} from 'antd';

const Timeform = () => (
  <>
    <Form.Item required label="Preferred Term" name="term">
      <Radio.Group>
        <Radio.Button value={1}>T1</Radio.Button>
        <Radio.Button value={2}>T2</Radio.Button>
        <Radio.Button value={3}>T3</Radio.Button>
        <Radio.Button value={4}>T4</Radio.Button>
        <Radio.Button value={5}>T5</Radio.Button>
        <Radio.Button value={6}>T6</Radio.Button>
      </Radio.Group>
    </Form.Item>
    <Form.Item required label="Preferred Day" name="preferredDay">
      <Select>
        <Select.Option value={1}>Monday</Select.Option>
        <Select.Option value={2}>Tuesday</Select.Option>
        <Select.Option value={3}>Wednesday</Select.Option>
        <Select.Option value={4}>Thursday</Select.Option>
        <Select.Option value={5}>Friday</Select.Option>
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

export default Timeform;
