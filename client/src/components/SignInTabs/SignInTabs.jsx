import React, { useState } from 'react';

import { Alert, Tabs, Form, Button } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { auth } from '@actions';
import hooks from '@services/hooks';
import TeacherForm from './Forms/TeacherForm';
import SLTForm from './Forms/SLTForm';
import EmployerForm from './Forms/EmployerForm';

const {
  useSignInEmployerMutation,
  useSignInSltMutation,
  useSignInTeacherMutation,
} = hooks;

const { TabPane } = Tabs;

const SignInTabs = () => {
  const [authLevel, setAuthLevel] = useState('teacher');
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: 'This is not a valid email!',
    },
  };

  const changeAuthLevel = (value) => {
    setAuthLevel(value);
  };

  const [
    signinEmployer,
    {
      isLoading: isEmployerSigningIn,
      data: employerData,
      isSuccess: isEmployerSuccess,
      isError: isEmployerError,
    },
  ] = useSignInEmployerMutation();

  const [
    signinSLT,
    {
      isLoading: isSLTSigningIn,
      data: sltData,
      isSuccess: isSLTSuccess,
      isError: isSLTError,
    },
  ] = useSignInSltMutation();

  const [
    signinTeacher,
    {
      isLoading: isTeacherSigningIn,
      data: teacherData,
      isSuccess: isTeacherSuccess,
      isError: isTeacherError,
    },
  ] = useSignInTeacherMutation();

  const setAuth = (data) => {
    dispatch(auth.signIn({
      token: data.token,
      authLevel,
      user: data[`${authLevel}`],
    }));
  };

  const handleSubmit = (values) => {
    switch (authLevel) {
      case 'teacher':
        signinTeacher(values);
        break;
      case 'slt':
        signinSLT(values);
        break;
      case 'employer':
        signinEmployer(values);
        break;
      default:
        break;
    }
  };

  if (isTeacherSuccess) setAuth(teacherData);
  if (isSLTSuccess) setAuth(sltData);
  if (isEmployerSuccess) setAuth(employerData);

  const isError = isTeacherError || isSLTError || isEmployerError;

  const handleChange = (key) => changeAuthLevel(key);

  return (
    <Form
      name="basic"
      type="flex"
      justify="center"
      align="middle"
      validateMessages={validateMessages}
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
    >
      <br />
      <Tabs
        defaultActiveKey="teacher"
        centered
        size="50%"
        onChange={handleChange}
      >
        <TabPane tab="Teacher" key="teacher">
          <TeacherForm />
          <Button block loading={isTeacherSigningIn} type="primary" htmlType="submit" size="large">
            Sign In
          </Button>
        </TabPane>
        <TabPane tab="Coordinator" key="slt">
          <SLTForm />
          <Button block loading={isSLTSigningIn} type="primary" htmlType="submit" size="large">
            Sign In
          </Button>
        </TabPane>
        <TabPane tab="Employer" key="employer">
          <EmployerForm />
          <Button block loading={isEmployerSigningIn} type="primary" htmlType="submit" size="large">
            Sign In
          </Button>
        </TabPane>
        {isError ? (<Alert
          message="Failed to Sign In"
          description="This account doesn't exist"
          type="error"
          showIcon
        />) : null}
      </Tabs>
      {authState.token ? <Redirect push to="/dashboard" /> : null}
    </Form>
  );
};

export default SignInTabs;
