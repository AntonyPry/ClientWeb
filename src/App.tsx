import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import axios from 'axios';

function App() {
  interface DataType {
    name: string;
    status: string;
    species: string;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Персонаж',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Род',
      dataIndex: 'species',
      key: 'species',
    },
  ]

  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>([]);

  const LIMIT_LIST_CHARACTERS = 10;
  const getCharacters = async (page: number, limit: number) => {
    const character_list = new Array();
    for (let i = 1; i <= 10; i++){
      character_list.push((page-1)*limit+i)
    }
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${character_list.join(',')}`);
    const json = response.data;
    console.log(json);
    setDataSource(response.data);
  };

  useEffect(() => {
    getCharacters(page, LIMIT_LIST_CHARACTERS);
  }, [page]);

  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Назад
      </button>
      <button onClick={() => setPage(page + 1)} disabled={page === 83}>Вперед</button>
      <p>{page}</p>
    </>
  );
}

export default App
