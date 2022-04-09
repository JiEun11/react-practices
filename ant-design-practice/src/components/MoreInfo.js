import React, {Fragment, useState} from 'react'
import { Table,Switch, Space  } from 'antd';

const MoreInfo = () => {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        ];
        
    const data = [];
        for (let i = 0; i < 46; i++) {
            data.push({
                key: i,
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
        });
    }

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
          console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
          console.log(selected, selectedRows, changeRows);
        },
      };

      
    return (
        <Fragment>
          <Space align="center" style={{ marginBottom: 16 }}>
          </Space>
          <Table
            columns={columns}
            rowSelection={{ ...rowSelection}}
            dataSource={data}
          />
        </Fragment>
      );
}

export default MoreInfo