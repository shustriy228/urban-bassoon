import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../Dashboard';
import BotsList from '../BotsList';

const { Sider } = Layout;
const { SubMenu } = Menu;

class Layout1 extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo"/>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="dashboard" />
              <span>Dashboard</span>
              <Link to = "/"/>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Clients</span>
              <Link to = "/clients" />
            </Menu.Item>
            <Menu.Item key="9">
              <Icon type="setting" />
              <span>Settings</span>
              <Link to = "/settings" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/clients' component={BotsList}/>
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Switch>
      </Layout>
    );
  }
}

function Clients(){
  return(
    <h1>Clients!</h1>
  );
}

export default Layout1;