import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import apiHooks from '@services/hooks';

import { Modal, Button, Row, Col } from 'antd';
import { ExclamationCircleOutlined, MailTwoTone } from '@ant-design/icons';

const StartNegotiatingModal = ({ teacherEmail, activityId }) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const [
    startNegotiations,
    { data, isLoading, isError },
  ] = apiHooks.useActivityRequestStartNegotiationMutation();

  const handleOk = () => {
    startNegotiations({
      employerId: user._id,
      companyId: user.companyId,
      activityRequestId: activityId,
    });
    navigate(-1);
  }

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

            <span style={{ fontWeight:"600", fontSize:"130%"}}>By starting negotiations you agree to receive emails from <span className="text-blue-800"><a href={`mailto:${teacherEmail}`}>{teacherEmail}</a></span></span>


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
