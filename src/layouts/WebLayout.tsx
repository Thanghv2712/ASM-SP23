import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const WebsiteLayout: React.FC = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate();

    return (
        <div>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        onClick={({key}) => {
                            navigate(key)
                        }}
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['/']}
                        items={[
                            {
                                label: "Home",
                                key: "/"
                            },
                            {
                                label: "Products Page",
                                key: "/products"
                            },
                            {
                                label: "Signup",
                                key: "/auth"
                            }
                        ]}
                    />
                </Header>
                <Content style={{ padding: '0 50px' }}>
                  
                    <div className="site-layout-content" style={{ background: colorBgContainer }}>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </div >
    )
}

export default WebsiteLayout