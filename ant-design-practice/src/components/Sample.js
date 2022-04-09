import React from 'react'
import { Table } from 'antd';



const Sample = () => {

    const columns = [
        {
          title: '모집단 건수',
          dataIndex: 'origin',
          key: 'origin',
          width: 150,
        },
        {
          title: '샘플사이즈',
          dataIndex: 'total',
          key: 'total',
          width: 80,
        },
        {
          title: '1차 샘플사이즈',
          dataIndex: 'first',
          key: 'first',
          ellipsis: true,
        },
        {
          title: '2차 샘플사이즈',
          dataIndex: 'second',
          key: 'second',
          ellipsis: true,
        },
        {
          title: '3차 샘플사이즈',
          dataIndex: 'third',
          key: 'third',
          ellipsis: true,
        },
      ];
      
      const data = [
        {
          key: '1',
          origin: '100',
          total: '15',
          first: '5',
          second: '5',
          third : '5'
        },
      ];
  return (
    <Table columns={columns} dataSource={data} pagination={false}/>
  )
}

export default Sample