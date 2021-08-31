import React, { useState } from 'react';

import {
  Steps, Divider, Row, Col, Card,
} from 'antd';

const { Step } = Steps;

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const UpcomingActivitiesSteps = () => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <Row>

        <Col lg={24}>
          <Steps
            progressDot
            current={5}
            direction="vertical"
            size="large"
          >
            <Step title="Networking" description="This is a description. This is a description." />
            <Step title="Website Development" description="This is a description. This is a description." />
            <Step title="Working with API's" description="This is a description. This is a description." />
            <Step title="App Development" description="This is a description." />
            <Step title="Website Fundementals" description="This is a description." />
          </Steps>
        </Col>

        <Col lg={12}>
          {/* <Card>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </Card> */}
        </Col>

      </Row>

    </>
  );
};

export default UpcomingActivitiesSteps;
