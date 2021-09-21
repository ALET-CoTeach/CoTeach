import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import apiHooks from '@services/hooks';

import {
  Steps, Button, message, Form,
} from 'antd';
import TeacherForm from './Form/TeacherForm';
import SchoolForm from './Form/SchoolForm';
import ActivityForm from './Form/ActivityForm';
import TimeForm from './Form/TimeForm';

const { Step } = Steps;

const StepsComponent = ({ handleOk }) => {
  const [form] = Form.useForm();

  const steps = [
    {
      step: 1,
      title: 'School',
      content: <SchoolForm />,
    },
    {
      step: 2,
      title: 'Activity',
      content: <ActivityForm />,
    },
    {
      step: 3,
      title: 'Time',
      content: <TimeForm />,
    },
  ];

  // Add TeacherForm step if not autenticated as a teacher
  const { authLevel, user: { _id: userId, schoolId } } = useSelector((state) => state.auth);
  if (authLevel !== 'teacher') {
    steps.push({
      title: 'Teacher',
      content: <TeacherForm />,
    });
  }

  const [current, setCurrent] = useState(0);
  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  const [
    createActivityRequest,
    { data, isLoading },
  ] = apiHooks.usePostActivityRequestMutation();

  const handleSubmit = () => {
    if (authLevel === 'teacher') {
      form.setFieldsValue({ teacherId: userId, schoolId });
    }
    const formData = form.getFieldsValue(true);
    createActivityRequest(formData);
  };

  if (!isLoading && !data) message.success('Successfuly created Activity Request');

  return (
    <Form
      onFinish={handleSubmit}
      form={form}
    >
      <div id="steps-container">
        <br />
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => {
                handleOk();
                form.submit();
              }}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    </Form>
  );
};

export default StepsComponent;
