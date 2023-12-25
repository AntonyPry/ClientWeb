import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Table } from 'antd'

function App() {
  const dataSource = [
    {
      key: '1',
      name: 'BTC',
      company: 'BTC',
      rate: 43145.53,
    },
    {
      key: '2',
      name: 'USDT',
      company: 'Tether',
      rate: 1,
    },
    {
      key: '3',
      name: 'SOL',
      company: 'Solana',
      rate: 111.91,
    },
    {
      key: '4',
      name: 'ETH',
      company: 'Etherium',
      rate: 2275.90,
    },
  ];
  
  const columns = [
    {
      title: 'Id',
      dataIndex: 'key',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Rate, $',
      dataIndex: 'rate',
      key: 'rate',
    },
  ];

  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default App
