

  

import { Link, Outlet, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('DashBoard', '/admin', <DesktopOutlined />),
  getItem('User', '/admin/user', <UserOutlined />),
  getItem('Products', 'sub1', <PieChartOutlined />, [
    getItem('Product Manager', '/admin/products',),
    getItem('Add Product', '/admin/products/add',),
  ]),
//   getItem('Category', 'sub2', <FileOutlined />, [
//     getItem('List Categories', '/admin/category'),
//     getItem('Add category', '/admin/category/add')
//   ]),
  getItem('Files', '9', ),
];


const AdminLayout = () => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu
          onClick={({key}) => {
            navigate(key)
          }}
          theme="dark"
          defaultSelectedKeys={['/admin']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer, textAlign: 'center', }}>
          <h1 style={{ margin: 'auto' }} >ADMIN</h1>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item></Breadcrumb.Item>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
