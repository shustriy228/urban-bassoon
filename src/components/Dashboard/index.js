import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content} = Layout;

function Dashboard(){
    return(
    <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                We are in dashboard now.
            </div>
        </Content>
    </Layout>
    );
}
export default Dashboard;
export {Dashboard};