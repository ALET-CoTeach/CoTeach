import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Steps, Divider, Row, Col, Card } from 'antd';

const { Step } = Steps;

class UpcomingActivitiesSteps extends React.Component {
    state = {
        current: 0,
    };

    onChange = current => {
        console.log('onChange:', current);
        this.setState({ current });
    };

    render() {
        const { current } = this.state;

        return (
            <>
                <Row>

                    <Col lg={12}>
                        <Steps progressDot current={1} direction="vertical"  current={current} onChange={this.onChange}>
                            <Step title="Finished" description="This is a description. This is a description." />
                            <Step title="Finished" description="This is a description. This is a description." />
                            <Step title="In Progress" description="This is a description. This is a description." />
                            <Step title="Waiting" description="This is a description." />
                            <Step title="Waiting" description="This is a description." />
                        </Steps>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </Card>
                    </Col>

                </Row>

            </>
        );
    }
}

export default UpcomingActivitiesSteps;