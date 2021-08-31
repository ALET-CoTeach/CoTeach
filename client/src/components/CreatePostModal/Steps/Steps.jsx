import React, { useState } from 'react';

import { Steps, Button, message } from 'antd';

import UploadMedia from './Forms/UploadMedia';
import PostDescription from './Forms/PostDescription';
import YourExperience from './Forms/YourExperience';

const { Step } = Steps;

const steps = [
  {
    title: 'Upload Media',
    content: <UploadMedia />,
  },
  {
    title: 'Description',
    content: <PostDescription />,
  },
  {
    title: 'Your Experience',
    content: <YourExperience />,
  },
];

const CreatePostSteps = (props) => {
  const { handleOk } = props;

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div id="steps-container">
        <br></br>
        <Steps current={current}>
          {steps.map(item => (
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
            <Button type="primary" onClick={handleOk,  () => message.success('Processing complete!')}>
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
    </>
  );
};

export default CreatePostSteps;
