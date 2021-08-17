import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Tabs } from 'antd';

import TeacherForm from './Forms/TeacherForm';
import SLTForm from "./Forms/SLTForm";
import EmployerForm from "./Forms/EmployerForm";

const { TabPane } = Tabs;

export class LoginTabs extends Component {

    constructor(props) {
        super(props)
    }

    handleChange = (key) => {
        if (key === "1") {
            this.props.changeAuthLevel("teacher")
        } else if (key === "2") {
            this.props.changeAuthLevel("slt")
        } else if (key === "3") {
            this.props.changeAuthLevel("employer")
        }
    }

    render() {
        return (
            <>
                <br />
                <Tabs
                    defaultActiveKey="1"
                    centered size="50%"
                    onChange={this.handleChange}
                >
                    <TabPane tab="Teacher" key="1">
                        <TeacherForm />
                    </TabPane>
                    <TabPane tab="Coordinator" key="2">
                        < SLTForm />
                    </TabPane>
                    <TabPane tab="Employer" key="3">
                        < EmployerForm />
                    </TabPane>
                </Tabs>
            </>
        );
    }
}

export default LoginTabs
