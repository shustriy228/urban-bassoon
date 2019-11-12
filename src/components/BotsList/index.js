import React from 'react';
import { Layout, Menu, Breadcrumb, PageHeader, Divider, Icon, Typography  } from 'antd';
import BotsTable from './Table';
import RefreshButton from './RefreshButton';

const { Title } = Typography;
const { Header, Content} = Layout;

class BotsList extends React.Component{
    render(){
    return(
    <Layout>
        <Header style={{ background: '#fff', padding: 15 }}>
            <Title level={3}>
                <span>
                All bots
                <Divider type="vertical" style={{marginLeft: 15, marginRight: 15}}/>
                <RefreshButton/>
                </span>
            </Title>
        </Header>
        <Content style={{ margin: '0 16px' }}>
            <BotsTable/>
        </Content>
    </Layout>
    );
    }
}

export default BotsList;
export {BotsList};