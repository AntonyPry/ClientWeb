import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import axios from 'axios';

function App() {
  interface DataType {
    country: string;
    name: string;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Страна',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Название школы',
      dataIndex: 'name',
      key: 'name',
    },
  ]

  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>([]);

  const LIMIT_LIST_SCHOOL = 10;

  const getUniversity = async (page: number, limit: number) => {
    const response = await axios.get(`http://universities.hipolabs.com/search?offset=${(page - 1) * limit}&limit=${limit}`);
    setDataSource(response.data);
  };

  useEffect(() => {
    getUniversity(page, LIMIT_LIST_SCHOOL);
  }, [page]);

  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Назад
      </button>
      <button onClick={() => setPage(page + 1)}>Вперед</button>
      <p>{page}</p>
    </>
  );
}

export default App
