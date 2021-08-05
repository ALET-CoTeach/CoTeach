import React, { Component } from 'react'
// import AllLessons from '../components/BookingLessonComponents/Table/AllLessons';
import 'antd/dist/antd.css';
import { Layout, Collapse } from 'antd';


//All Table Imports 
import AllLessons from './BookingLessonComponents/Table/AllLessons';

const { Content, Footer, Sider } = Layout;

const { Panel } = Collapse;


export class LessonBooking extends Component {
    render() {
        return (
            <Layout>
                <Sider className="sidebar">
                    
                </Sider>
                <Layout className="site-layout">
                    <Content className="bookingLesson-content">
                        <div className="site-layout-background">

                            <Collapse bordered={false} defaultActiveKey={['1', '2', '3']} ghost>
                                <Panel className="addLesson-table-title" header="Your Bookings" key="1">

                                </Panel>
                                <Panel className="addLesson-table-title" header="All Lessons" key="2">
                                    <AllLessons />
                                </Panel>
                                <Panel className="addLesson-table-title" header="All Booked Lessons" key="3">

                                </Panel>
                            </Collapse>

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default LessonBooking
