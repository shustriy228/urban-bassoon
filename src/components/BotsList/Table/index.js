import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Layout, Table, Menu, Badge, Breadcrumb, Icon } from 'antd';

const API_URL = "http://1q2w.123214.xyz/api/bot/list/";
const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      sorter: true,
      width: '5%'
    },
    {
      title: 'IP',
      dataIndex: 'ip',
      key: 'ip',
      width: '12%'
    },
    {
      title: 'GEO',
      dataIndex: 'geo',
      key: 'geo',
      sorter: true,
      render: value => <ReactCountryFlag
                          code={value} svg
                        />,
      width: '10%' 
    },
    {
      title: <>OS <Icon type='windows' theme="filled"/></>,
      dataIndex: 'os',
      key: 'os',
      sorter: true,
      width: '20%'
    },
    {
      title: 'CPU',
      dataIndex: 'cpu',
      key: 'cpu',
      sorter: true,
      width: '25%'
    },
    {
      title: 'GPU',
      dataIndex: 'gpu',
      key: 'gpu',
      sorter: true,
      width: '25%'
    },
    {
      title: 'STATUS',
      dataIndex: 'is_online',
      key: 'is_online',
      width: '15%',
      render: value => (value === 1 ? <span><Badge status="success"/>Online</span> : <span><Badge status="error"/>Offline</span> )
    },
];

export default class BotsList extends React.Component {
    state = {
        data: [],
        pagination: {
          position: "top",
          showQuickJumper: true,
          showSizeChanger: true,
          pageSizeOptions: [5, 10,20,50,100]
        },
        loading: false,
    };
    async fetch(params = {}){
      console.log(params);
      this.setState({ loading: true });
      const response = await fetch(API_URL, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: '059f5a6b071086f27180031c0c1d4e7fdeba9806dfdb480e5d6223f182ba7df9',
          size: 10,
          order_by: 'last_seen',
          direction: 'ASC',
          ...params
        })
      });
      const data = await response.json();
      console.log(data);
      const pagination = { ...this.state.pagination };
      pagination.total = data.total;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    };
    async componentDidMount() {
      this.fetch({});
    }
    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
          pagination: pager,
        });
        this.fetch({
          size: pagination.pageSize,
          page: pagination.current,
          order_by: sorter.field,
          direction: (sorter.order === 'descend' ? 'DESC' : 'ASC' ),
        });
    };
    render(){
    return(
        <>
        <Table
         dataSource={this.state.data}
         pagination={this.state.pagination}
         loading={this.state.loading}
         columns={columns} 
         onChange={this.handleTableChange}
         scroll={{ y: 600 }}
        />
        </>
    );
    }
}