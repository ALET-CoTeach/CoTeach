import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import apiHooks from '@services/hooks';

import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const StartNegotiatingModal = ({ teacherEmail, activityId }) => {
  const user = useSelector((state) => state.auth.user);

  const [
    startNegotiations,
    { data, isLoading },
  ] = apiHooks.useActivityRequestStartNegotiationMutation();

  const handleOk = () => startNegotiations({
    employerId: user._id,
    companyId: user.companyId,
    activityRequestId: activityId,
  });

  return (
    <Button
      style={{ width: 150, margin: 20 }}
      type="primary"
      onClick={() => Modal.confirm({
        title: 'Confirm',
        width: 500,
        icon: <ExclamationCircleOutlined />,
        content:
        (
          <>
            By starting negotiations you agree to receive emails from
            <br />
            <span className="text-red-800">{teacherEmail}</span>
          </>
        ),
        okText: 'I Agree',
        cancelText: 'Cancel',
        onOk: () => handleOk(),
      })}
    >
      Start Negotiations
    </Button>
  );
};

export default StartNegotiatingModal;
