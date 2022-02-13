import React, { useState } from 'react';

import {
  Form,
  Button,
  Radio,
  Select,
} from 'antd';

import { useSelector } from 'react-redux';
import apiHooks from '@services/hooks';

const Schoolform = () => {
  const { data, isLoading } = apiHooks.useGetSchoolsQuery();
  const { authLevel, user: { schoolId } } = useSelector((state) => state.auth);

  const schoolOptions =
    data?.map((school) => (<Select.Option value={school._id}>{school.name}</Select.Option>));

  return (
    <>
      {authLevel !== 'teacher'
        ? (
          <Form.Item required label="School" name="schoolId">
            <Select
              loading={isLoading}
            >
              {schoolOptions}
            </Select>
          </Form.Item>
        )
        : <Form.Item required name="schoolId" defaultValue={schoolId} hidden /> }
      <Form.Item required label="Year Group" name="year">
        <Radio.Group>
          <Radio.Button value="7">7</Radio.Button>
          <Radio.Button value="8">8</Radio.Button>
          <Radio.Button value="9">9</Radio.Button>
          <Radio.Button value="10">10</Radio.Button>
          <Radio.Button value="11">11</Radio.Button>
          <Radio.Button value="12">12</Radio.Button>
          <Radio.Button value="13">13</Radio.Button>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default Schoolform;
