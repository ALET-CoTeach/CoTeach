import React, { Component } from 'react';
import { Layout, Collapse } from 'antd';
import PostCreationTable from './Tables/PostCreationTable';
import styles from './Tables/table-style.css';
import CreatePostModal from './Modals/CreatePostModal';

const { Content, Footer, Sider } = Layout;

const { Panel } = Collapse;

class TeacherPostCreationPage extends Component {
    render() {
        return (
            <div>
                <Layout style={{ paddingTop: 45 }}>
                    <Sider className="sidebar" style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}>

                    </Sider>
                    <Layout className="site-layout" style={{ marginLeft: 200 }}>
                        <Content className="addLesson-content">
                            <div className="site-layout-background">
                                <h1 className="HeadingPurple centerText"><b>Post Creation Page</b></h1>
                                <PostCreationTable />
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default TeacherPostCreationPage;
