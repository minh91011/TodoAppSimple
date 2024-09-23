import React, { useState } from 'react';
import {
    FileOutlined,
    TeamOutlined,
    AppstoreOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import DashBoard from './DashBoard/DashBoard';
import {Link} from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem(<h1></h1>, '1'),
    getItem('Todo App', 'sub1', <AppstoreOutlined />, [
        getItem(
            <Link to="/Tasks">Manage Task</Link>,'3'
        ),
        getItem(
            <Link to="/Users">Manage User</Link>,'4'
        )
    ]),
    getItem('Exam System', '5', <AppstoreOutlined />),
];
const WebLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <h3>XIN CHÀO!, MÌNH LÀ NHẬT MINH, INTERN REACTJS TẠI
                        <a href="https://vieted.com/" class="text-primary"> VIETED</a>
                    </h3>

                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >

                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: '#f0f2f5', // Thay thế với colorBgContainer
                            borderRadius: '8px', // Thay thế với borderRadiusLG
                        }}
                    >
                        <DashBoard></DashBoard>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default WebLayout;