import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Tabs } from 'antd';

import TeacherForm from './Forms/TeacherForm';
import SLTForm from "./Forms/SLTForm";
import EmployerForm from "./Forms/EmployerForm";

const { TabPane } = Tabs;

export class LoginTabs extends Component {
    render() {
        return (
            <>
                <br />
                <Tabs defaultActiveKey="1" centered size="50%">
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