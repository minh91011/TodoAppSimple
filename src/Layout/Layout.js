import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import DashBoard from './DashBoard/DashBoard';
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
    //   getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
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
                    <DashBoard></DashBoard>
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
            <h1 style={{ textAlign: 'center' }}>Giới Thiệu Về Bản Thân</h1>
            <div className="row">
                <div className="col-md-6">
                    <h2>
                        <UserOutlined /> Nhật Minh
                    </h2>
                    <p>
                        Xin chào! Tôi là Nhật Minh, một thực tập sinh ReactJS tại VietED. Tôi yêu thích lập trình và luôn tìm cách học hỏi để phát triển kỹ năng của mình.
                    </p>
                </div>
                <div className="col-md-6">
                    <h2>Thông Tin Liên Hệ</h2>
                    <p>
                        <MailOutlined /> Email: nhatminh@example.com
                    </p>
                    <p>
                        <PhoneOutlined /> Điện thoại: +84 123 456 789
                    </p>
                </div>
            </div>
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