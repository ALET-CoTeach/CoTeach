import React from 'react';

import {
  Form, Input, Button, Select,
} from 'antd';
import apiHooks from '@services/hooks';

const Teacherform = ({ form }) => {
  const { data, isLoading } = apiHooks.useGetTeachersQuery();

  const teacherOptions = data?.map((teacher) => (
    <Select.Option value={`${teacher._id} ${teacher.firstname} ${teacher.lastname} ${teacher.email}`}>
      {teacher.firstname}
      {' '}
      {teacher.lastname}
      {' '}
      <small>{`<${teacher.email}>`}</small>
    </Select.Option>
  ));

  return (
    <>
      <Form.Item required label="Teacher" name="teacherId">
        <Select
          showSearch
          loading={isLoading}
        >
          {teacherOptions}
        </Select>
      </Form.Item>
    </>
  );
};

export default Teacherform;
