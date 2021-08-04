import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Collapse } from 'antd';

const { Content, Footer, Sider } = Layout;

const { Panel } = Collapse;

class UTCProfiles extends React.Component {
    render() {
        return (
            <Layout>
                <Sider className="sidebar">
                    <AddLessonModal />
                </Sider>
                <Layout className="site-layout">
                    <Content className="addLesson-content">
                        <div className="site-layout-background">
                            
                            <div>CONTENT HERE</div>

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default UTCProfiles;