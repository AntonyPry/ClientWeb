import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

function App() {
  //интерфейс таблицы
  interface DataType {
    id: number;
    name: string;
    company: string;
    rate: number;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Id',
      dataIndex: 'id',
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

  const dataSource: DataType[] = [
    {
      id: 1,
      name: 'BTC',  
      company: 'BTC',
      rate: 43145.53,
    },
    {
      id: 2,
      name: 'USDT',
      company: 'Tether',
      rate: 1,
    },
    {
      id: 3,
      name: 'SOL',
      company: 'Solana',
      rate: 111.91,
    },
    {
      id: 4,
      name: 'ETH',
      company: 'Etherium',
      rate: 2275.90,
    },
  ];

  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default App
