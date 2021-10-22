import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import apiHooks from '@services/hooks';

import { Modal, Button, Row, Col } from 'antd';
import { ExclamationCircleOutlined, MailTwoTone } from '@ant-design/icons';

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
        width: 500,
        content:
        (
          <>
          <Row>
            <Col lg={6}>
            </Col>
            <Col lg={12}>
              <MailTwoTone style={{ fontSize: '150px'}}  />
            </Col>
            <Col lg={6}>
            </Col>
          </Row>
            
            <span style={{ fontWeight:"600", fontSize:"130%"}}>By starting negotiations you agree to receive emails from <span className="text-blue-800">{teacherEmail}</span></span>
            
            <br />
            
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
